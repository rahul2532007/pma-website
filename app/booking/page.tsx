"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-display tracking-tight">PMA</span>
              <span className="text-xs text-muted-foreground font-mono mt-1">Pride Marketing</span>
            </Link>
            <Button variant="ghost" asChild className="gap-2">
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Schedule a Call
          </span>
          <h1 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Book Your Free
            <br />
            <span className="text-muted-foreground">Consultation</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choose a time that works for you and let&apos;s discuss how we can help grow your business.
          </p>
        </div>

        {/* Google Calendar Embed */}
        <div className="border border-foreground/10 overflow-hidden">
          <iframe 
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2pUmSIqpQAl3uxLr6FIyzijtVbhivcRDdRzRLKZLSgr_Yc_RxlpwF8lY2Fuh9QwtBEhGuArvi4?gv=true" 
            style={{ border: 0 }} 
            width="100%" 
            height="600" 
            frameBorder="0"
            title="Book an appointment"
          />
        </div>
      </div>
    </main>
  );
}
