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
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-[0.32em] uppercase text-foreground/50">Work</div>
          <h1 className="mt-4 text-5xl md:text-7xl font-serif text-foreground tracking-tight">
            Selected <span className="text-primary">Work</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed">
            We measure success by outcomes. Here are examples of how AI can improve efficiency, quality, and speed.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="surface rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8"
            >
              <div className="flex-shrink-0 w-full md:w-72">
                <div className="text-5xl md:text-6xl font-extrabold text-primary leading-none">{project.metric}</div>
                <div className="mt-2 text-xs font-bold tracking-[0.22em] uppercase text-foreground/60">
                  {project.metricLabel}
                </div>
              </div>

              <div className="flex-grow">
                <div className="text-xs font-bold tracking-[0.22em] uppercase text-primary">{project.client}</div>
                <h2 className="mt-3 text-2xl md:text-3xl font-serif text-foreground">{project.title}</h2>
                <p className="mt-4 text-sm md:text-base text-foreground/70 leading-relaxed">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-bold tracking-[0.18em] uppercase text-foreground/60 bg-deep-navy px-3 py-2 rounded-full border border-black/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
