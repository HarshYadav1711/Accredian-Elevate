"use client";

import { FormEvent, useState } from "react";
import type { LeadRequest } from "@/types/lead";

const initialForm: LeadRequest = {
  fullName: "",
  workEmail: "",
  company: "",
  teamSize: "",
  message: "",
};

export function LeadCaptureForm() {
  const [form, setForm] = useState<LeadRequest>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const updateField = (key: keyof LeadRequest, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { message: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.message || "Unable to submit your request right now.");
        return;
      }

      setStatus("success");
      setMessage(data.message || "Thanks. Our team will contact you shortly.");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setMessage("Network issue. Please try again in a moment.");
    }
  };

  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      <label className="grid gap-2">
        <span className="text-sm font-medium text-slate-700">Full name</span>
        <input
          required
          type="text"
          value={form.fullName}
          onChange={(event) => updateField("fullName", event.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-slate-700">Work email</span>
        <input
          required
          type="email"
          value={form.workEmail}
          onChange={(event) => updateField("workEmail", event.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-slate-700">Company</span>
        <input
          required
          type="text"
          value={form.company}
          onChange={(event) => updateField("company", event.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-slate-700">Team size</span>
        <select
          required
          value={form.teamSize}
          onChange={(event) => updateField("teamSize", event.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        >
          <option value="">Select a range</option>
          <option value="1-50">1-50</option>
          <option value="51-200">51-200</option>
          <option value="201-1000">201-1000</option>
          <option value="1000+">1000+</option>
        </select>
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-slate-700">Goals (optional)</span>
        <textarea
          rows={4}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Request consultation"}
      </button>

      {message ? (
        <p className={`text-sm ${status === "error" ? "text-rose-600" : "text-emerald-700"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
