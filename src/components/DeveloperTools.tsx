import Container from "./Container";
import Button from "./ui/Button";

export default function DeveloperTools() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
              Developers
            </p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Seamless Integration with Powerful Developer Tools
            </h2>
            <p className="mt-4 max-w-xl text-slate-600">
              Integrate quickly with our APIs, SDKs, and comprehensive
              documentation designed for modern development teams.
            </p>

            <div className="mt-6">
              <Button>Explore Documentation</Button>
            </div>
          </div>

          {/* Right Code Block */}
          <div className="rounded-xl bg-slate-900 p-6 text-sm text-slate-100 shadow-lg">
            <pre className="text-green-400">
{`import { createPayment } from "@finech/sdk";

const payment = await createPayment({
  amount: 5000,
  currency: "USD",
  source: "card",
});

console.log(payment);`}
            </pre>
          </div>

        </div>
      </Container>
    </section>
  );
}
