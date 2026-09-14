import * as React from "react"
import { MapPin, Mail, Phone, Instagram, ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <section className="py-20 md:py-24 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">
          Inquiries
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          Let's <span className="italic">Connect</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We take on a limited number of commissions each year to ensure every client receives our full creative dedication.
        </p>
      </section>

      <section className="px-6 lg:px-8 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Form (UI only) */}
          <div className="glass rounded-3xl p-8 md:p-12 gradient-border relative">
            <h2 className="font-heading text-3xl font-bold mb-8">Tell us about your day</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <input type="email" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="jane@example.com" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Event Date</label>
                  <input type="date" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Lake Como, Italy" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Your Story & Details</label>
                <textarea rows={5} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell us about yourselves, your vision for the day, and what drew you to our work..." />
              </div>

              <button type="button" className="w-full py-4 bg-foreground text-background rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all group">
                Send Inquiry
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6">Studio Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                While we are based in Mumbai, our passports are always ready. We regularly travel worldwide for destination weddings and commercial editorials.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Studio Address</p>
                    <p className="text-muted-foreground text-sm mt-1">123 Creative Studio Lane<br />Bandra West, Mumbai 400050<br />(By Appointment Only)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:hello@studio.com" className="text-muted-foreground text-sm mt-1 hover:text-primary transition-colors">hello@studio.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a href="tel:+919876543210" className="text-muted-foreground text-sm mt-1 hover:text-primary transition-colors">+91 98765 43210</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="font-heading text-xl font-bold mb-6">Follow Our Journey</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
                  <Instagram className="h-5 w-5" />
                </a>
                {/* Add other social icons if needed */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
