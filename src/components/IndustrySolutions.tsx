import Container from "./Container";

const industries = [
  {
    title: "E-commerce",
    description: "Accept payments globally with fast checkout experiences.",
  },
  {
    title: "Fintech",
    description: "Build scalable financial products with secure APIs.",
  },
  {
    title: "Banking",
    description: "Modernize legacy systems with enterprise-grade solutions.",
  },
  {
    title: "SaaS",
    description: "Monetize subscriptions and recurring billing effortlessly.",
  },
];

export default function IndustrySolutions() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <Container>
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-400">
            Industries
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Financial Solutions for Every Industry
          </h2>
          <p className="mt-4 text-slate-300">
            Tailored infrastructure designed to meet the needs of modern
            businesses across industries.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-xl bg-slate-800 p-6 transition hover:bg-slate-700"
            >
              <h3 className="text-lg font-semibold">{industry.title}</h3>
              <p className="mt-2 text-sm text-slate-300">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
