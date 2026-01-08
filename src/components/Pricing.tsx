import Container from "./Container";
import Button from "./ui/Button";

const plans = [
  {
    name: "Starter Plan",
    price: "$0",
    description: "Best for small projects and testing.",
    features: [
      "Basic API access",
      "Community support",
      "Limited transactions",
    ],
    highlighted: false,
  },
  {
    name: "Growth Plan",
    price: "$99",
    description: "For growing businesses scaling fast.",
    features: [
      "Full API access",
      "Priority support",
      "Higher transaction limits",
      "Advanced analytics",
    ],
    highlighted: true,
  },
  {
    name: "Scale Plan",
    price: "Custom",
    description: "Tailored solutions for enterprises.",
    features: [
      "Custom integrations",
      "Dedicated support",
      "Unlimited transactions",
      "Enterprise SLAs",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Pricing
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Find the Right Plan for Your Business
          </h2>
          <p className="mt-4 text-slate-600">
            Simple, transparent pricing designed to grow with you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-8 ${
                plan.highlighted
                  ? "border-blue-600 bg-white shadow-lg"
                  : "border-slate-200 bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {plan.name}
              </h3>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {plan.price}
                {plan.price !== "Custom" && (
                  <span className="text-base font-medium text-slate-500">
                    /mo
                  </span>
                )}
              </p>
              <p className="mt-2 text-slate-600">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-sm text-slate-700">
                    • {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  variant={plan.highlighted ? "primary" : "secondary"}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
