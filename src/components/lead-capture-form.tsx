"use client";

import { FormEvent, useRef, useState } from "react";
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
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof LeadRequest, string>>>({});
  const inputRefs = useRef<Partial<Record<keyof LeadRequest, HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null>>>({});

  const updateField = (key: keyof LeadRequest, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    // Mirror server checks locally so users get instant, field-specific feedback.
    const errors: Partial<Record<keyof LeadRequest, string>> = {};

    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name.";
    }

    if (!form.workEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail)) {
      errors.workEmail = "Please enter a valid work email.";
    }

    if (!form.company.trim() || form.company.trim().length < 2) {
      errors.company = "Please enter your company name.";
    }

    if (!form.teamSize) {
      errors.teamSize = "Please select your team size.";
    }

    setFieldErrors(errors);
    const firstInvalidField = (Object.keys(errors)[0] || "") as keyof LeadRequest;
    if (firstInvalidField) {
      inputRefs.current[firstInvalidField]?.focus();
    }
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedbackMessage("");

    if (!validate()) {
      setStatus("error");
      setFeedbackMessage("Please review the highlighted fields.");
      return;
    }

    // Keep a single async submit path for clean loading/success/error transitions.
    setStatus("loading");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { message: string };

      if (!response.ok) {
        setStatus("error");
        setFeedbackMessage(data.message || "Unable to submit your request right now.");
        return;
      }

      setStatus("success");
      setFeedbackMessage(data.message || "Thanks. Our team will contact you shortly.");
      setForm(initialForm);
      setFieldErrors({});
    } catch {
      setStatus("error");
      setFeedbackMessage("Network issue. Please try again in a moment.");
    }
  };

  return (
    <form className="grid gap-4" onSubmit={onSubmit} noValidate>
      <label className="grid gap-2" htmlFor="lead-full-name">
        <span className="text-sm font-medium text-slate-700">Full name</span>
        <input
          id="lead-full-name"
          ref={(node) => {
            inputRefs.current.fullName = node;
          }}
          required
          type="text"
          autoComplete="name"
          value={form.fullName}
          onChange={(event) => updateField("fullName", event.target.value)}
          {...(fieldErrors.fullName
            ? {
                "aria-invalid": "true",
                "aria-describedby": "lead-full-name-error",
              }
            : {})}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
        {fieldErrors.fullName ? (
          <p id="lead-full-name-error" className="text-xs text-rose-600">
            {fieldErrors.fullName}
          </p>
        ) : null}
      </label>

      <label className="grid gap-2" htmlFor="lead-work-email">
        <span className="text-sm font-medium text-slate-700">Work email</span>
        <input
          id="lead-work-email"
          ref={(node) => {
            inputRefs.current.workEmail = node;
          }}
          required
          type="email"
          autoComplete="email"
          value={form.workEmail}
          onChange={(event) => updateField("workEmail", event.target.value)}
          {...(fieldErrors.workEmail
            ? {
                "aria-invalid": "true",
                "aria-describedby": "lead-work-email-error",
              }
            : {})}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
        {fieldErrors.workEmail ? (
          <p id="lead-work-email-error" className="text-xs text-rose-600">
            {fieldErrors.workEmail}
          </p>
        ) : null}
      </label>

      <label className="grid gap-2" htmlFor="lead-company">
        <span className="text-sm font-medium text-slate-700">Company</span>
        <input
          id="lead-company"
          ref={(node) => {
            inputRefs.current.company = node;
          }}
          required
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={(event) => updateField("company", event.target.value)}
          {...(fieldErrors.company
            ? {
                "aria-invalid": "true",
                "aria-describedby": "lead-company-error",
              }
            : {})}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
        {fieldErrors.company ? (
          <p id="lead-company-error" className="text-xs text-rose-600">
            {fieldErrors.company}
          </p>
        ) : null}
      </label>

      <label className="grid gap-2" htmlFor="lead-team-size">
        <span className="text-sm font-medium text-slate-700">Team size</span>
        <select
          id="lead-team-size"
          ref={(node) => {
            inputRefs.current.teamSize = node;
          }}
          required
          value={form.teamSize}
          onChange={(event) => updateField("teamSize", event.target.value)}
          {...(fieldErrors.teamSize
            ? {
                "aria-invalid": "true",
                "aria-describedby": "lead-team-size-error",
              }
            : {})}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        >
          <option value="">Select a range</option>
          <option value="1-50">1-50</option>
          <option value="51-200">51-200</option>
          <option value="201-1000">201-1000</option>
          <option value="1000+">1000+</option>
        </select>
        {fieldErrors.teamSize ? (
          <p id="lead-team-size-error" className="text-xs text-rose-600">
            {fieldErrors.teamSize}
          </p>
        ) : null}
      </label>

      <label className="grid gap-2" htmlFor="lead-goals">
        <span className="text-sm font-medium text-slate-700">Goals (optional)</span>
        <textarea
          id="lead-goals"
          ref={(node) => {
            inputRefs.current.message = node;
          }}
          rows={4}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="resize-none rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Request consultation"}
      </button>

      {feedbackMessage ? (
        status === "error" ? (
          <p role="status" aria-live="assertive" className="text-sm text-rose-600">
            {feedbackMessage}
          </p>
        ) : (
          <p role="status" aria-live="polite" className="text-sm text-emerald-700">
            {feedbackMessage}
          </p>
        )
      ) : null}
    </form>
  );
}
