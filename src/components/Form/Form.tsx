"use client";

import { useState } from "react";
import Turnstile from "react-turnstile";
import content from "@/data/content.json";
import "./Form.scss";

interface FormProps {
  id?: string;
}

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!;

export default function Form({ id }: FormProps) {
  const { heading, description, fields, submitLabel, successMessage } =
    content.contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  function validate(): Record<string, string> {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!turnstileToken) {
      setSubmitError("Please complete the security check.");
      return;
    }

    setLoading(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="form" id={id}>
      <div className="form__container">
        <h2 className="form__heading">{heading}</h2>
        <p className="form__description">{description}</p>

        {submitted ? (
          <div className="form__success">{successMessage}</div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="form__form">
            <div className="form__field">
              <label className="form__label" htmlFor="form-name">
                {fields.name.label}
              </label>
              <input
                className="form__input"
                type="text"
                id="form-name"
                name="name"
                placeholder={fields.name.placeholder}
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
              {errors.name && (
                <span className="form__error">{errors.name}</span>
              )}
            </div>

            <div className="form__field">
              <label className="form__label" htmlFor="form-email">
                {fields.email.label}
              </label>
              <input
                className="form__input"
                type="email"
                id="form-email"
                name="email"
                placeholder={fields.email.placeholder}
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
              {errors.email && (
                <span className="form__error">{errors.email}</span>
              )}
            </div>

            <div className="form__field">
              <label className="form__label" htmlFor="form-phone">
                {fields.phone.label}
              </label>
              <input
                className="form__input"
                type="tel"
                id="form-phone"
                name="phone"
                placeholder={fields.phone.placeholder}
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>

            <div className="form__field">
              <label className="form__label" htmlFor="form-message">
                {fields.message.label}
              </label>
              <textarea
                className="form__textarea"
                id="form-message"
                name="message"
                placeholder={fields.message.placeholder}
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && (
                <span className="form__error">{errors.message}</span>
              )}
            </div>

            {submitError && (
              <p className="form__error form__error--submit">{submitError}</p>
            )}

            <div className="form__turnstile">
              <Turnstile
                sitekey={turnstileSiteKey}
                onVerify={setTurnstileToken}
                onExpire={() => setTurnstileToken("")}
                onError={() => setTurnstileToken("")}
              />
            </div>

            <div className="form__button">
              <button
                className="button button--accent"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : submitLabel}
              </button>
            </div>

            <p className="form__privacy">
              <a href="/privacy-policy">View our privacy policy</a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
