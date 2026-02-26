import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">Contact</div>
          <h1 className="mt-4 text-5xl md:text-7xl font-serif text-foreground tracking-tight">
            Let&apos;s talk <span className="text-primary">AI</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed">
            Share what you&apos;re trying to improve. We&apos;ll propose a concrete pilot with timeline, risks, and success metrics.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Contact Form */}
          <div className="surface rounded-[2rem] p-8 md:p-10">
            <div className="text-sm font-bold text-foreground">Send a message</div>
            <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
              We usually reply within 1–2 business days.
            </p>

            <form className="mt-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">First name</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-black/10 rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">Last name</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-black/10 rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">Company email</label>
                <input
                  type="email"
                  className="w-full bg-white border border-black/10 rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">What are you building?</label>
                <textarea
                  rows={5}
                  className="w-full bg-white border border-black/10 rounded-2xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
                  placeholder="Tell us about your use-case, timeline, and what success looks like..."
                />
              </div>

              <button type="button" className="btn btn-primary w-full justify-center">
                Send message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="surface rounded-[2rem] p-8 md:p-10">
              <div className="text-sm font-bold text-foreground">Direct contact</div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-deep-navy border border-black/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/50">Email</div>
                    <div className="text-base text-foreground">hello@orfeo-ai.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-deep-navy border border-black/5 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-[0.22em] uppercase text-foreground/50">Phone</div>
                    <div className="text-base text-foreground">+1 (800) 555-0199</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="surface rounded-[2rem] p-8 md:p-10">
              <div className="text-sm font-bold text-foreground">Headquarters</div>
              <div className="mt-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-deep-navy border border-black/5 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="text-base text-foreground leading-relaxed">
                  100 Tech Nexus Blvd<br />
                  Suite 4400<br />
                  San Francisco, CA 94105
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
