import * as React from "react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: September 14, 2023</p>
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-a:text-primary max-w-none">
          <p>
            Welcome to STUDIO. By accessing our website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>

          <h2>1. Booking & Retainer</h2>
          <p>
            To secure a date, a non-refundable retainer fee and a signed contract are required. The remaining balance is due prior to the event date, as specified in your individual contract.
          </p>

          <h2>2. Deliverables</h2>
          <p>
            STUDIO will provide a curated collection of edited images. We do not provide unedited RAW files under any circumstances, as they do not represent our finished, professional standard of work.
          </p>

          <h2>3. Liability</h2>
          <p>
            If STUDIO cannot perform this Agreement due to fire or other casualty, strike, act of God, or other cause beyond the control of the parties, or due to Photographer's illness or emergency, then the Photographer shall return the retainer fee to the Client but shall have no further liability with respect to the Agreement.
          </p>

          <h2>4. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials on STUDIO's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h2>5. Revisions and Errata</h2>
          <p>
            The materials appearing on STUDIO's website could include technical, typographical, or photographic errors. STUDIO does not warrant that any of the materials on its website are accurate, complete, or current.
          </p>
          
          <p>
            For any detailed contract inquiries, please reach out via our <Link href="/contact">Contact Page</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
