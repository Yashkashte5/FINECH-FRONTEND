import Container from "./Container";

const features = [
  {
    title: "Fast Payments",
    description:
      "Process transactions instantly with our high-performance payment APIs.",
  },
  {
    title: "Secure Infrastructure",
    description:
      "Enterprise-grade security built into every transaction by default.",
  },
  {
    title: "Developer Friendly",
    description:
      "Clean APIs, clear docs, and SDKs to help you ship faster.",
  },
  {
    title: "Global Scale",
    description:
      "Expand globally with multi-currency and international support.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20">
      <Container>
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Why Finech
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Powering the Future of Finance
          </h2>
          <p className="mt-4 text-slate-600">
            Everything you need to build modern financial products, from payments
            to compliance.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-200 p-6 transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
