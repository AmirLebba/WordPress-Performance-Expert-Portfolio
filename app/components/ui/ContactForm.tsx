"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContactFormData } from "@/app/lib/types";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    website: yup
      .string()
      .url("Invalid URL")
      .required("Website URL is required"),
    currentScore: yup.string().optional(),
    challenge: yup.string().optional(),
  })
  .defined() as yup.ObjectSchema<ContactFormData>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 1500)); // fake POST
    setSubmitted(true);
    reset();
  };

  if (submitted)
    return (
      <div className="text-center text-white">
        <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
        <p>We&rsquo;ll be in touch within 24 hours with your detailed audit.</p>
      </div>
    );

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className={`form-input ${errors.name ? "border-red-500" : ""}`}
              placeholder="John Smith"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className={`form-input ${errors.email ? "border-red-500" : ""}`}
              placeholder="john@example.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Website URL</label>
          <input
            type="url"
            className={`form-input ${errors.website ? "border-red-500" : ""}`}
            placeholder="https://yoursite.com"
            {...register("website")}
          />
          {errors.website && (
            <p className="text-red-400 text-sm mt-1">
              {errors.website.message}
            </p>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">
            Current PageSpeed Score (if known)
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="e.g., 45/100"
            {...register("currentScore")}
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            What&rsquo;s your biggest performance challenge?
          </label>
          <textarea
            className="form-textarea"
            placeholder="Describe the issues you're experiencing with your site's speed and performance..."
            {...register("challenge")}
          />
        </div>

        <button
          type="submit"
          className="cta-button w-full !text-lg !py-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending Request…" : "Get My Free Performance Audit"}
        </button>
      </form>
    </div>
  );
}
