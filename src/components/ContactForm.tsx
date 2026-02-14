"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="card-glow p-8 text-center">
        <div className="text-accent text-4xl mb-4">&#10003;</div>
        <h3 className="text-lg font-light tracking-wide mb-2">Message Sent</h3>
        <p className="text-sm text-text-secondary">Thank you for reaching out. We will get back to you.</p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="card-glow p-8 flex flex-col gap-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="hidden">
        <input name="bot-field" />
      </div>

      <div>
        <label htmlFor="name" className="block text-xs font-mono tracking-widest text-text-secondary mb-2">
          NAME
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 bg-ink border border-border rounded-lg text-text-primary text-sm focus:outline-none focus:border-accent/50 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-mono tracking-widest text-text-secondary mb-2">
          EMAIL
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-ink border border-border rounded-lg text-text-primary text-sm focus:outline-none focus:border-accent/50 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono tracking-widest text-text-secondary mb-2">
          MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 bg-ink border border-border rounded-lg text-text-primary text-sm focus:outline-none focus:border-accent/50 transition-colors resize-y"
        />
      </div>

      <button
        type="submit"
        className="px-6 py-3 bg-gradient-to-r from-accent to-accent-warm text-white text-sm font-medium tracking-wider rounded-lg hover:opacity-90 transition-opacity"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}
