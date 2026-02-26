import ClientWrapper from "@/components/ClientWrapper";
import { BrainCircuit, LineChart, Network, ShieldCheck, Zap, Database } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Enterprise LLM Integration",
      description: "Secure, private deployment of large language models fine-tuned on your proprietary data. Turn fragmented knowledge into actionable intelligence.",
      icon: <BrainCircuit className="w-8 h-8 text-cyan-400 mb-6" />
    },
    {
      title: "Predictive Analytics Engine",
      description: "Machine learning models that forecast demand, identify market anomalies, and optimize resource allocation before the need arises.",
      icon: <LineChart className="w-8 h-8 text-cyan-400 mb-6" />
    },
    {
      title: "Autonomous Agents",
      description: "Custom AI agents capable of handling complex, multi-step workflows. From customer support triage to automated data entry.",
      icon: <Network className="w-8 h-8 text-cyan-400 mb-6" />
    },
    {
      title: "Computer Vision Systems",
      description: "Real-time visual data processing for quality control, security monitoring, and automated spatial analysis.",
      icon: <Zap className="w-8 h-8 text-cyan-400 mb-6" />
    },
    {
      title: "Data Architecture & Pipeline",
      description: "Building the scalable, clean data infrastructure required for high-performance AI integration. Garbage in, garbage out stops here.",
      icon: <Database className="w-8 h-8 text-cyan-400 mb-6" />
    },
    {
      title: "AI Security & Governance",
      description: "Auditing, red-teaming, and securing AI deployments against prompt injection, data leakage, and adversarial attacks.",
      icon: <ShieldCheck className="w-8 h-8 text-cyan-400 mb-6" />
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <ClientWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tight">
              Our <span className="text-cyan-400 italic">Services</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              We don't just build models; we engineer solutions that solve complex business problems. Explore our core capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                {service.icon}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ClientWrapper>
    </main>
  );
}
