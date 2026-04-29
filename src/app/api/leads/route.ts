import { NextRequest, NextResponse } from "next/server";
import type { LeadRecord, LeadRequest } from "@/types/lead";

const leads: LeadRecord[] = [];
const requestLog = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 15_000;
const RATE_LIMIT_MAX_ENTRIES = 5_000;

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const sanitizeText = (value: string) =>
  value
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const getClientIp = (request: NextRequest) => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
};

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const lastRequestTime = requestLog.get(ip);

  if (lastRequestTime && now - lastRequestTime < RATE_LIMIT_WINDOW_MS) {
    return true;
  }

  requestLog.set(ip, now);

  // Lightweight cleanup for long-running processes.
  if (requestLog.size > RATE_LIMIT_MAX_ENTRIES) {
    for (const [entryIp, timestamp] of requestLog) {
      if (now - timestamp > RATE_LIMIT_WINDOW_MS) {
        requestLog.delete(entryIp);
      }
    }
  }

  return false;
};

export async function POST(request: NextRequest) {
  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { message: "Too many submissions. Please wait and try again." },
      { status: 429 },
    );
  }

  let body: Partial<LeadRequest>;
  try {
    body = (await request.json()) as Partial<LeadRequest>;
  } catch {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }

  const fullName = typeof body.fullName === "string" ? sanitizeText(body.fullName) : "";
  const workEmail = typeof body.workEmail === "string" ? sanitizeText(body.workEmail) : "";
  const company = typeof body.company === "string" ? sanitizeText(body.company) : "";
  const teamSize = typeof body.teamSize === "string" ? sanitizeText(body.teamSize) : "";
  const message = typeof body.message === "string" ? sanitizeText(body.message) : "";

  if (!fullName || fullName.length < 2) {
    return NextResponse.json(
      { message: "Please provide a valid full name." },
      { status: 400 },
    );
  }

  if (!workEmail || !isValidEmail(workEmail)) {
    return NextResponse.json(
      { message: "Please provide a valid work email." },
      { status: 400 },
    );
  }

  if (!company || company.length < 2) {
    return NextResponse.json(
      { message: "Please provide your company name." },
      { status: 400 },
    );
  }

  if (!teamSize) {
    return NextResponse.json({ message: "Please select your team size." }, { status: 400 });
  }

  leads.unshift({
    id: crypto.randomUUID(),
    fullName,
    workEmail: workEmail.toLowerCase(),
    company,
    teamSize,
    message,
    createdAt: new Date().toISOString(),
  });

  // In-memory storage keeps this assignment free and self-contained while still showing real API flow.
  if (leads.length > 200) {
    leads.pop();
  }

  return NextResponse.json(
    {
      message: "Your request has been received. We will reach out soon.",
    },
    { status: 201 },
  );
}

export async function GET() {
  return NextResponse.json({ count: leads.length, leads }, { status: 200 });
}
