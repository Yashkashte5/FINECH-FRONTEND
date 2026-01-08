import Container from "./Container";
import Button from "./ui/Button";

export default function FinalCTA() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-400">
            Get Started
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Scale Your Payments?
          </h2>
          <p className="mt-4 text-slate-300">
            Join thousands of businesses building secure and scalable financial
            products with Finech.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button>Get Started</Button>
            <Button variant="secondary">Contact Sales</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
