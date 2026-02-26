'use client';

import ClientWrapper from "@/components/ClientWrapper";
import { useDictionary } from '@/i18n/DictionaryProvider';

export default function AboutPage() {
  const { dictionary } = useDictionary();
  const team = [
    { name: "Eleanor Vance", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400" },
    { name: "Marcus Chen", role: "Head of AI Engineering", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" },
    { name: "Sophia Martinez", role: "Lead Data Scientist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <ClientWrapper>
        <div className="max-w-5xl mx-auto">
          {/* Story Section */}
          <section className="mb-32">
            <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-8 tracking-tight">
              {dictionary.about.title1}<span className="text-primary italic">{dictionary.about.titleHighlight}</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-12 font-light text-foreground/70 text-lg leading-relaxed">
              <p>
                Founded in 2024, ORFEO AI emerged from a simple realization: the gap between cutting-edge AI research and practical business application was too wide. We exist to bridge that gap. 
              </p>
              <p>
                Our mission is to democratize access to enterprise-grade artificial intelligence. We believe that AI shouldn&apos;t be a black box, but a transparent, powerful lever for growth, efficiency, and human potential.
              </p>
            </div>
          </section>

          {/* Core Values Section */}
          <div className="mt-32">
          <h2 className="text-sm font-semibold tracking-[0.3em] text-foreground/50 uppercase mb-12 text-center">{dictionary.about.values}</h2>
          <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Precision", desc: "We build systems that are accurate, reliable, and rigorously tested." },
                { title: "Transparency", desc: "Clear explanations over jargon. We explain how our models arrive at their conclusions." },
                { title: "Impact", desc: "We measure success not by lines of code, but by the tangible ROI delivered to our partners." }
              ].map((val, i) => (
                <div key={i} className="glass p-8 rounded-2xl hover:bg-white/70 transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-foreground mb-4">{val.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-32">
            <h2 className="text-sm font-semibold tracking-[0.3em] text-foreground/50 uppercase mb-8 border-b border-gray-200 pb-4">{dictionary.about.mission}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative w-full aspect-square overflow-hidden rounded-2xl mb-6 bg-deep-navy">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-gray-200 rounded-2xl z-10 pointer-events-none" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground tracking-wide">{member.name}</h3>
                  <p className="text-sm text-primary mt-1 uppercase tracking-widest">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </ClientWrapper>
    </main>
  );
}
