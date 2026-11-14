import { getActivities } from "@/lib/activities";
import { ActivityGrid } from "@/components/ActivityGrid";

const PHASES = [
  { name: "Brief", time: "~5 min", label: "Frame the deal" },
  { name: "Intel", time: "~8 min", label: "Web search + document upload" },
  { name: "Skills", time: "~7 min", label: "Run the skills chain" },
  { name: "Humanize", time: "~5 min", label: "/human always last" },
];

export default async function ActivitiesPage() {
  const activities = await getActivities();

  const cards = activities.map((a, index) => ({
    id: a.config.id,
    slug: a.config.slug,
    title: a.config.title,
    subtitle: a.config.subtitle,
    domain: a.config.domain,
    duration_minutes: a.config.duration_minutes,
    difficulty: a.config.difficulty,
    sort_order: index + 1,
    deliverable: a.config.deliverable,
    skill_chain: a.config.skill_chain ?? [],
    plugins: a.config.plugins ?? [],
  }));

  const domains = [...new Set(cards.map((c) => c.domain))].sort();

  return (
    <div className="mx-auto max-w-[1100px] px-4 py-10">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Activities
        </h1>
        <p className="mt-3 max-w-[680px] text-text-secondary">
          Each activity drops your team into a live deal scenario.
          Work through four phases — using Claude plugins and skills in one session — to produce a client-ready output in 25 minutes.
        </p>
      </div>

      {/* Skills stack diagram */}
      <div className="mb-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-text-muted">
          The skills stack you will practise
        </p>

        {/* Stepper */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-[18px] right-[18px] top-[18px] h-px bg-border"
            aria-hidden="true"
          />

          {/* Steps */}
          <div className="relative flex justify-between gap-2">
            {PHASES.map((phase, i) => (
              <div key={i} className="flex flex-1 flex-col items-center text-center min-w-0 px-1">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white ring-4 ring-surface">
                  {i + 1}
                </div>
                <p className="mt-3 text-[13px] font-semibold leading-tight text-text-primary sm:text-sm">
                  {phase.name}
                </p>
                <p className="mt-1 hidden text-[11px] leading-snug text-text-muted sm:block">
                  {phase.label}
                </p>
                <span className="mt-1.5 inline-block rounded bg-surface-alt px-1.5 py-0.5 text-[11px] font-medium text-text-muted">
                  {phase.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Plugin & skill legend */}
        <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-4">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-700 dark:text-sky-400">
            Phase 2 — Web Search + File Analysis plugins
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-700 dark:text-orange-400">
            Phase 3 — Claude skills chain
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-400">
            Phase 4 — /human always last
          </span>
        </div>

        <p className="mt-4 text-xs text-text-muted">
          Phases unlock one at a time. Run all skills in the same Claude conversation — context compounds across each skill.
        </p>
      </div>

      <ActivityGrid activities={cards} domains={domains} />
    </div>
  );
}
