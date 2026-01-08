import Container from "./Container";

const protections = [
  "End-to-end encryption for all transactions",
  "PCI-DSS and regulatory compliance",
  "Real-time fraud detection and monitoring",
  "Role-based access control and audit logs",
];

export default function EnterpriseSecurity() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
              Security
            </p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Enterprise-Grade Protection for Your Business
            </h2>
            <p className="mt-4 max-w-xl text-slate-600">
              Protect your financial operations with advanced security features
              designed to meet the highest industry standards.
            </p>

            <ul className="mt-6 space-y-3">
              {protections.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual Placeholder */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="h-48 rounded-lg bg-slate-100" />
          </div>

        </div>
      </Container>
    </section>
  );
}
