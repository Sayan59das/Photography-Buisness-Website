"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact"

const fieldClasses =
  "w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
const errorClasses = "border-destructive focus:ring-destructive/40"

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle")
  const [serverError, setServerError] = React.useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  async function onSubmit(values: ContactFormValues) {
    setStatus("submitting")
    setServerError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error ?? "Something went wrong. Please try again.")
      }

      setStatus("success")
      reset()
    } catch (err) {
      setStatus("error")
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center text-center py-16"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-heading text-2xl font-bold mb-3">Inquiry Sent</h3>
        <p className="text-muted-foreground max-w-sm">
          Thank you for reaching out. We&rsquo;ll review your story and get back to you within
          2&ndash;3 business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Send another inquiry
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">First Name</label>
          <input
            type="text"
            className={`${fieldClasses} ${errors.firstName ? errorClasses : ""}`}
            placeholder="Jane"
            {...register("firstName")}
          />
          {errors.firstName && <p className="text-xs text-destructive">{errors.firstName.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Last Name</label>
          <input
            type="text"
            className={`${fieldClasses} ${errors.lastName ? errorClasses : ""}`}
            placeholder="Doe"
            {...register("lastName")}
          />
          {errors.lastName && <p className="text-xs text-destructive">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Email Address</label>
          <input
            type="email"
            className={`${fieldClasses} ${errors.email ? errorClasses : ""}`}
            placeholder="jane@example.com"
            {...register("email")}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            className={fieldClasses}
            placeholder="+91 98765 43210"
            {...register("phone")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Event Date</label>
          <input type="date" className={fieldClasses} {...register("eventDate")} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Location</label>
          <input
            type="text"
            className={fieldClasses}
            placeholder="Lake Como, Italy"
            {...register("location")}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Your Story &amp; Details</label>
        <textarea
          rows={5}
          className={`${fieldClasses} resize-none ${errors.message ? errorClasses : ""}`}
          placeholder="Tell us about yourselves, your vision for the day, and what drew you to our work..."
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>

      <AnimatePresence>
        {status === "error" && serverError && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
          >
            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
            <span>{serverError}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 bg-foreground text-background rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all group disabled:opacity-60 disabled:pointer-events-none"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Inquiry
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  )
}
