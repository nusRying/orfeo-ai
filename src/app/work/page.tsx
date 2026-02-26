import ClientWrapper from "@/components/ClientWrapper";

export default function WorkPage() {
  const projects = [
    {
      title: "Global Logistics Optimization",
      client: "TransCorp International",
      metric: "+34%",
      metricLabel: "Efficiency Increase",
      description: "Deployed a predictive routing neural network that reduced idle times and fuel consumption across a fleet of 5,000 vehicles.",
      tags: ["Predictive Analytics", "Computer Vision"]
    },
    {
      title: "Automated Financial Auditing",
      client: "Apex Financial Partners",
      metric: "99.9%",
      metricLabel: "Anomaly Detection Rate",
      description: "Replaced manual ledger reviews with a custom LLM pipeline capable of parsing millions of transactions in real-time to flag fraud.",
      tags: ["LLM Integration", "Data Architecture"]
    },
    {
      title: "Intelligent Customer Triage",
      client: "Nova Retail Group",
      metric: "-60%",
      metricLabel: "Support Resolution Time",
      description: "Implemented an autonomous agent system that handles 80% of tier-1 support queries without human intervention.",
      tags: ["Autonomous Agents", "NLU"]
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <ClientWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tight">
              Selected <span className="text-cyan-400 italic">Work</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              We measure our success by the impact we create. Here are a few examples of how we've transformed operations for our partners.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, i) => (
              <div 
                key={i}
                className="group relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-16 p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500"
              >
                {/* Metric Highlight */}
                <div className="flex-shrink-0 w-full md:w-64 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-12">
                  <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2 truncate">
                    {project.metric}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-widest font-semibold">
                    {project.metricLabel}
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex-grow">
                  <div className="text-sm text-cyan-400 mb-2 uppercase tracking-widest">{project.client}</div>
                  <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                  <p className="text-gray-300 leading-relaxed font-light mb-6 text-lg">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-xs font-mono text-gray-400 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ClientWrapper>
    </main>
  );
}
