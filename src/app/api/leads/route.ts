import { NextResponse } from "next/server";
import type { LeadRecord, LeadRequest } from "@/types/lead";

const leads: LeadRecord[] = [];

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  let body: Partial<LeadRequest>;
  try {
    body = (await request.json()) as Partial<LeadRequest>;
  } catch {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }

  if (!body.fullName || body.fullName.trim().length < 2) {
    return NextResponse.json(
      { message: "Please provide a valid full name." },
      { status: 400 },
    );
  }

  if (!body.workEmail || !isValidEmail(body.workEmail)) {
    return NextResponse.json(
      { message: "Please provide a valid work email." },
      { status: 400 },
    );
  }

  if (!body.company || body.company.trim().length < 2) {
    return NextResponse.json(
      { message: "Please provide your company name." },
      { status: 400 },
    );
  }

  if (!body.teamSize) {
    return NextResponse.json({ message: "Please select your team size." }, { status: 400 });
  }

  leads.unshift({
    id: crypto.randomUUID(),
    fullName: body.fullName.trim(),
    workEmail: body.workEmail.toLowerCase(),
    company: body.company.trim(),
    teamSize: body.teamSize,
    message: body.message?.trim() || "",
    createdAt: new Date().toISOString(),
  });

  // Keep a small in-memory history to avoid unbounded growth.
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
