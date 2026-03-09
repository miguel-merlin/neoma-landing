import Link from "next/link";

const WAITLIST_URL = "mailto:hello@signaliq.ai";

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
    title: "ICP Clustering Engine",
    description:
      "Connects to your CRM and runs ML clustering on firmographic and behavioral data — surfacing 3–6 named ICP archetypes with win rate, ACV, and churn overlays. You finally know which customers make you the most money, and why.",
  },
  {
    number: "02",
    title: "Signal Discovery Agent",
    description:
      "Given your ICP archetypes, the agent generates ranked signal hypotheses and converts them into plug-and-play automation recipes exportable to Clay, n8n, and Zapier — no quant background required.",
  },
  {
    number: "03",
    title: "Macro Intelligence Bridge",
    description:
      "Correlates macro-level economic shifts (funding cycles, hiring freezes, sector indices) to your pipeline outcomes per ICP. Delivers weekly plain-language briefs and triggers proactive playbook recommendations automatically.",
  },
  {
    number: "04",
    title: "Proprietary Signal Database",
    description:
      "As the platform accumulates signal performance data across customers, it builds a cross-customer intelligence layer no single company could construct alone — making your ICP models and signal scores more accurate over time.",
  },
];

const problems = [
  "Every signal hypothesis and ICP assumption has to originate with the operator",
  "Sales automation is only as good as the ideas going in — and most teams run the same generic signals",
  "No systematic way to identify statistically meaningful clusters within your own customer base",
  "Macro shifts in funding, hiring, and interest rates affect pipeline velocity — and nobody is watching",
];

const steps = [
  {
    step: "1",
    title: "Cluster",
    description:
      "Connect your CRM via HubSpot, Salesforce, or CSV upload. SignalIQ enriches your records and runs unsupervised ML clustering to surface the ICP archetypes that actually drive revenue — delivered as a shareable branded report.",
  },
  {
    step: "2",
    title: "Discover",
    description:
      "The Signal Discovery Agent generates ranked signal hypotheses for each ICP archetype and scores them by predicted conversion lift. Export ready-made automation recipes directly into Clay, n8n, or Zapier.",
  },
  {
    step: "3",
    title: "Adapt",
    description:
      "The Macro Intelligence Bridge monitors economic data feeds and correlates macro events to your pipeline. When conditions shift, SignalIQ surfaces a plain-language brief and recommends the right playbook — before you feel it in quota.",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$149",
    description: "Solopreneurs and early-stage teams",
    features: [
      "1 CRM connection",
      "Up to 500 contacts clustered",
      "5 signal recipes per month",
      "2,000 enrichment credits",
    ],
    cta: "Start free audit",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$399",
    description: "Growth-stage B2B SaaS",
    features: [
      "3 CRM connections",
      "Unlimited contact clustering",
      "25 signal recipes per month",
      "10,000 enrichment credits",
      "Weekly Macro Intelligence briefs",
      "Clay / n8n / Zapier export",
    ],
    cta: "Start free audit",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$999",
    description: "RevOps teams and agencies",
    features: [
      "Unlimited CRM connections",
      "Unlimited clustering + custom models",
      "Unlimited signal recipes",
      "Unlimited enrichment credits",
      "Real-time Macro Intelligence",
      "API access + dedicated CSM",
    ],
    cta: "Talk to us",
    highlighted: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">SignalIQ</span>
          <div className="flex items-center gap-4">
            <Link
              href={WAITLIST_URL}
              className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Get free ICP audit
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
          Free ICP audit — no credit card required
        </div>

        <h1 className="mx-auto max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl">
          Clay tells you how.
          <br />
          <span className="text-indigo-600">SignalIQ tells you what — and why.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-500">
          SignalIQ is an AI-native GTM intelligence platform that autonomously
          discovers growth opportunities for B2B companies. It clusters your
          customers into ICPs, generates ranked signal hypotheses, and bridges
          macroeconomic trends to your pipeline — no data science team required.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={WAITLIST_URL}
            className="flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Get your free ICP audit
            <ArrowRight />
          </Link>
          <Link
            href="#how-it-works"
            className="flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            See how it works
          </Link>
        </div>
      </section>

      {/* Stat bar */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            <div>
              <div className="text-4xl font-bold text-indigo-600">$8.4B</div>
              <div className="mt-1 text-sm text-gray-500">
                sales intelligence TAM growing ~12% per year
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">50K+</div>
              <div className="mt-1 text-sm text-gray-500">
                Clay users who are automation-literate but strategy-starved
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">180K</div>
              <div className="mt-1 text-sm text-gray-500">
                US B2B companies in our serviceable addressable market
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
              Rich in automation. Poor in strategy.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              The modern B2B sales stack gives you powerful automation
              infrastructure — but every signal, every ICP hypothesis, and every
              automation idea must originate with the operator. Most teams lack
              the quantitative background to extract strategic insight from the
              tools they're already paying for.
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

      {/* Analogy callout */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl font-medium leading-relaxed text-gray-700">
            "If Clay is the race car, SignalIQ is the co-driver and race
            strategist — telling you where to go, when to push, and what the
            road conditions ahead look like."
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
              Three layers that compound over time
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-gray-500">
              Better ICP definitions produce better signals. Better signals produce
              more accurate macro correlations. The platform gets more valuable the
              longer you use it.
            </p>
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
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
              Platform layers
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
              The full autonomous discovery loop
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.number}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
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
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
            Start free. Upgrade when you see the value.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-gray-500">
            Every plan starts with a free ICP audit. No credit card required.
            20% discount on annual billing.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-6 ${
                tier.highlighted
                  ? "border-indigo-600 bg-indigo-600 text-white"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="mb-1 text-sm font-semibold">{tier.name}</div>
              <div
                className={`text-3xl font-bold ${
                  tier.highlighted ? "text-white" : "text-gray-900"
                }`}
              >
                {tier.price}
                <span className="text-sm font-normal opacity-70">/mo</span>
              </div>
              <p
                className={`mt-1 text-xs ${
                  tier.highlighted ? "text-indigo-200" : "text-gray-400"
                }`}
              >
                {tier.description}
              </p>
              <ul className="mt-5 space-y-2">
                {tier.features.map((feat) => (
                  <li
                    key={feat}
                    className={`flex items-start gap-2 text-sm ${
                      tier.highlighted ? "text-indigo-100" : "text-gray-600"
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <Link
                href={WAITLIST_URL}
                className={`mt-6 flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                  tier.highlighted
                    ? "bg-white text-indigo-600 hover:bg-indigo-50"
                    : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-indigo-200">
            Free ICP audit — takes 5 minutes
          </p>
          <h2 className="mt-4 text-4xl font-bold">
            Find out which customers make you the most money.
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Connect your CRM or upload a CSV. SignalIQ clusters your customer
            base and delivers a branded ICP report — free, no credit card,
            shareable with your team.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href={WAITLIST_URL}
              className="flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-50"
            >
              Get your free ICP audit
              <ArrowRight />
            </Link>
          </div>
          <p className="mt-6 text-sm text-indigo-300">
            Targeting B2B SaaS companies with 20+ customers and an active CRM.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <span className="text-sm font-semibold text-gray-900">SignalIQ</span>
          <div className="flex items-center gap-5 text-xs text-gray-400">
            <Link href={WAITLIST_URL} className="hover:text-gray-700">
              hello@signaliq.ai
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
