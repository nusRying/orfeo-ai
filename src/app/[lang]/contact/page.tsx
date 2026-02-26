import ClientWrapper from "@/components/ClientWrapper";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <ClientWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-8 tracking-tight">
              Get in <span className="text-primary italic">Touch</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed font-light">
              Ready to integrate enterprise-grade AI into your workflow? Drop us a line and let&apos;s discuss how we can accelerate your growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <div className="glass p-8 md:p-12 rounded-3xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">First Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">Last Name</label>
                    <input type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">Company Email</label>
                  <input type="email" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">How can we help?</label>
                  <textarea rows={4} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder="Tell us about your project or challenges..."></textarea>
                </div>

                <button type="button" className="w-full bg-primary hover:bg-primary/90 text-white font-bold tracking-widest py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02]">
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-12">
              <div>
                <h3 className="text-2xl font-serif text-foreground mb-8 border-b border-gray-200 pb-4">Direct Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-foreground/70 hover:text-primary transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur border border-white/60 shadow-sm flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-light">hello@orfeo-ai.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-foreground/70 hover:text-primary transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur border border-white/60 shadow-sm flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-light">+1 (800) 555-0199</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-foreground mb-8 border-b border-gray-200 pb-4">Headquarters</h3>
                <div className="flex items-start gap-4 text-foreground/70">
                  <div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur border border-white/60 shadow-sm flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-lg font-light leading-relaxed">
                    100 Tech Nexus Blvd<br />
                    Suite 4400<br />
                    San Francisco, CA 94105
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClientWrapper>
    </main>
  );
}
