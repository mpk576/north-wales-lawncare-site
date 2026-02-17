"use client";

import { useState, useEffect } from "react";
import content from "@/data/content.json";
import "./Form.scss";

interface FormProps {
  id?: string;
}

const formEmailSubmit = process.env.FORM_SUBMIT_EMAIL ?? "";
const siteDomain = process.env.SITE_DOMAIN ?? "";

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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("form-submitted") === "true") {
      setSubmitted(true);
    }
  }, []);

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

  return (
    <section className="form" id={id}>
      <div className="form__container">
        <h2 className="form__heading">{heading}</h2>
        <p className="form__description">{description}</p>

        {submitted ? (
          <div className="form__success">{successMessage}</div>
        ) : (
          <form
            onSubmit={(e) => {
              const validationErrors = validate();
              if (Object.keys(validationErrors).length > 0) {
                e.preventDefault();
                setErrors(validationErrors);
              }
            }}
            noValidate
            className="form__form"
            action={`https://formsubmit.co/${formEmailSubmit}`}
            method="POST"
          >
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
            <input
              type="hidden"
              name="_subject"
              value="Message from website contact form"
            />
            <input
              type="hidden"
              name="_next"
              value={`https://${siteDomain}/thank-you}`}
            />

            <div className="form__button">
              <button className="button button--accent" type="submit">
                {submitLabel}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
