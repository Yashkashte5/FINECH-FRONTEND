import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-black text-white">
      <Container>
        <div className="grid min-h-[95vh] grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-400">
              Financial APIs
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Empowering the Next Generation of Financial Infrastructure,
              <span className="block text-blue-400">Designed for You.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Build, scale, and manage modern financial products with secure,
              developer-friendly APIs built for performance and reliability.
            </p>

            {/* Email CTA */}
            <div className="mt-8 flex max-w-md items-center gap-3 rounded-xl bg-white/10 p-2 backdrop-blur">
              {/* Email Input */}
              <div className="flex flex-1 items-center gap-2 rounded-lg bg-white px-3">
                <svg
                  className="h-5 w-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12H8m8 0l-4-4m4 4l-4 4"
                  />
                </svg>
                <input
                  type="email"
                  placeholder="Send your email"
                  className="w-full bg-transparent py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
                />
              </div>

              {/* Talk to Sales Button */}
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500">
                Talk to Sales
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="rounded-xl bg-slate-800 p-6 shadow-xl">
              <pre className="text-sm text-green-400">
{`POST /v1/payments
{
  "amount": 5000,
  "currency": "USD",
  "source": "card"
}`}
              </pre>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
