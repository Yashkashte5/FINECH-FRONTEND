import Container from "./Container";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, PayFlow",
    quote:
      "Finech helped us scale our payment infrastructure globally with minimal effort.",
  },
  {
    name: "Arjun Mehta",
    role: "Founder, NeoBank",
    quote:
      "The developer experience is outstanding. Integration was smooth and fast.",
  },
  {
    name: "Emily Chen",
    role: "Product Lead, FinStack",
    quote:
      "Security, reliability, and great documentation — Finech delivers on all fronts.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <Container>
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            How Businesses Thrive with Finech
          </h2>
          <p className="mt-4 text-slate-600">
            Trusted by startups and enterprises building the future of finance.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-slate-200 p-6 shadow-sm"
            >
              <p className="text-slate-700">“{item.quote}”</p>
              <div className="mt-4">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
