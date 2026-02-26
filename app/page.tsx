import Link from "next/link";

const GITHUB_URL = "https://github.com/miguel-merlin/crm-infrastructure";

function GitHubIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-indigo-600 mt-0.5 shrink-0"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const features = [
  {
    number: "01",
    title: "Unified CRM ingestion",
    description:
      "Quotes, emails, and customer interactions are automatically structured into a single, consistent CRM dataset — no manual entry.",
  },
  {
    number: "02",
    title: "AI-powered ICP building",
    description:
      "The system continuously learns from historical sales patterns to build and refine Ideal Customer Profiles tailored to your top segments.",
  },
  {
    number: "03",
    title: "External signal detection",
    description:
      "Scans public data sources for business triggers — new registrations, funding events, hiring signals — and enriches accounts automatically.",
  },
  {
    number: "04",
    title: "Smart product recommendations",
    description:
      "Based on account similarity to high-value segments, Neoma surfaces relevant products and upsell opportunities directly in the sales workflow.",
  },
];

const problems = [
  "Hours lost every week to manual CRM updates and data entry",
  "Insights buried in spreadsheets, docs, and disconnected tools",
  "Upsell opportunities missed because rep context doesn't transfer",
  "No systematic way to know which leads look like your best customers",
];

const steps = [
  {
    step: "1",
    title: "Ingest",
    description:
      "Connect your quotes, emails, and customer data sources. Neoma includes a native HubSpot connection and structures everything into a unified CRM dataset automatically.",
  },
  {
    step: "2",
    title: "Enrich",
    description:
      "AI builds Ideal Customer Profiles from your historical data and continuously monitors external signals to keep accounts fresh.",
  },
  {
    step: "3",
    title: "Act",
    description:
      "Recommendations and alerts surface directly in your sales workflow — so your team closes more with the same effort.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">Neoma</span>
          <div className="flex items-center gap-4">
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
              <GitHubIcon />
              <span className="hidden sm:inline">GitHub</span>
            </Link>
            <Link
              href="mailto:hello@neoma.dev"
              className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Request access
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
          In production with first customer
        </div>

        <h1 className="mx-auto max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl">
          Your CRM, enriched.
          <br />
          <span className="text-indigo-600">Your pipeline, on autopilot.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-500">
          Neoma automatically captures, enriches, and acts on your sales
          data — turning customer signals into product recommendations and
          closed deals.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="mailto:hello@neoma.dev"
            className="flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Request early access
            <ArrowRight />
          </Link>
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <GitHubIcon />
            View on GitHub
          </Link>
        </div>
      </section>

      {/* Stat bar */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            <div>
              <div className="text-4xl font-bold text-indigo-600">+18%</div>
              <div className="mt-1 text-sm text-gray-500">
                increase in sales within 3 months of deployment
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">Live</div>
              <div className="mt-1 text-sm text-gray-500">
                actively used in production sales workflows
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">End-to-end</div>
              <div className="mt-1 text-sm text-gray-500">
                from raw data ingestion to actionable recommendations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
              The problem
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-gray-900">
              Small sales teams are drowning in manual work
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              Most small and mid-size sales orgs rely on manual CRM updates
              and fragmented notes across documents and spreadsheets. Reps
              spend more time managing data than selling — and key customer
              signals fall through the cracks.
            </p>
          </div>
          <ul className="flex flex-col justify-center gap-4">
            {problems.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-gray-700">
                <CheckIcon />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
              Three steps from raw data to revenue
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-600">
                  {s.step}
                </div>
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
            Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
            Everything your team needs to close more
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.number}
              className="group rounded-2xl border border-gray-100 p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 text-xs font-bold text-gray-300">
                {f.number}
              </div>
              <h3 className="mb-2 text-base font-semibold text-gray-900">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Result callout */}
      <section className="bg-indigo-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-indigo-200">
            Proven results
          </p>
          <p className="mt-4 text-5xl font-bold">+18% in sales</p>
          <p className="mt-4 text-lg text-indigo-100">
            In the first three months of deployment, Neoma drove an 18%
            increase in sales for our first customer through improved lead
            qualification, outreach timing, and product matching.
          </p>
          <p className="mt-6 text-sm text-indigo-300">
            Currently in active production use — not a pilot.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ready to automate your
          <br />
          sales intelligence?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-gray-500">
          We're working with a small number of sales teams to deploy
          Neoma. Reach out to learn if it's a fit for your workflow.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="mailto:hello@neoma.dev"
            className="flex items-center gap-2 rounded-full bg-indigo-600 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Get in touch
            <ArrowRight />
          </Link>
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-gray-200 px-7 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            <GitHubIcon />
            Explore the codebase
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <span className="text-sm font-semibold text-gray-900">Neoma</span>
          <div className="flex items-center gap-5 text-xs text-gray-400">
            <Link href="https://neoma.dev" className="hover:text-gray-700">
              neoma.dev
            </Link>
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
