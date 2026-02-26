import ClientWrapper from "@/components/ClientWrapper";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <ClientWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tight">
              Get in <span className="text-cyan-400 italic">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              Ready to integrate enterprise-grade AI into your workflow? Drop us a line and let's discuss how we can accelerate your growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold tracking-widest text-gray-400 uppercase">First Name</label>
                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Last Name</label>
                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company Email</label>
                  <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 transition-colors" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold tracking-widest text-gray-400 uppercase">How can we help?</label>
                  <textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 transition-colors resize-none" placeholder="Tell us about your project or challenges..."></textarea>
                </div>

                <button type="button" className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold tracking-widest py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02]">
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-12">
              <div>
                <h3 className="text-2xl font-serif text-white mb-8 border-b border-white/10 pb-4">Direct Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-light">hello@orfeo-ai.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-light">+1 (800) 555-0199</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-white mb-8 border-b border-white/10 pb-4">Headquarters</h3>
                <div className="flex items-start gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
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
