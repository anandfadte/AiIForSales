import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  Clock,
  Layers,
} from "lucide-react";
import { getActivities, getActivityBySlug } from "@/lib/activities";
import { ActivityPhases } from "@/components/ActivityPhases";

export async function generateStaticParams() {
  const activities = await getActivities();
  return activities.map((a) => ({ slug: a.config.slug }));
}

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = await getActivityBySlug(slug);
  if (!activity) notFound();

  const allActivities = await getActivities();
  const currentIndex = allActivities.findIndex((a) => a.config.slug === slug);
  const prev = currentIndex > 0 ? allActivities[currentIndex - 1] : null;
  const next = currentIndex < allActivities.length - 1 ? allActivities[currentIndex + 1] : null;

  const { config } = activity;
  const activityNum = currentIndex + 1;

  return (
    <div className="mx-auto max-w-[900px] px-4 py-10">
      {/* Breadcrumb */}
      <Link
        href="/activities"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors"
      >
        <ChevronLeft size={16} />
        Back to activities
      </Link>

      {/* Header */}
      <section className="mb-10">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          <span className="text-accent">
            {String(activityNum).padStart(2, "0")}.
          </span>{" "}
          {config.title}
        </h1>

        <p className="mb-6 text-lg text-text-secondary">{config.subtitle}</p>

        {/* Metadata strip */}
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-surface-alt px-3 py-1 font-medium text-text-secondary">
            <Layers size={14} />
            {config.domain}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-surface-alt px-3 py-1 text-text-secondary">
            <Clock size={14} />
            {config.duration_minutes} min
          </span>
          <span className="rounded-md bg-surface-alt px-3 py-1 text-text-muted">
            {config.difficulty}
          </span>
        </div>

        {/* Plugin + Skill sequence strip */}
        {config.skill_chain && config.skill_chain.length > 0 && (() => {
          const chain = config.skill_chain;
          const humanIdx = chain.lastIndexOf("/human");
          const actionChain = humanIdx >= 0 ? chain.slice(0, humanIdx) : chain;
          const hasHuman = humanIdx >= 0;
          const p1Count = config.phase1_count ?? 1;
          const phase1 = actionChain.slice(0, p1Count);
          const phase2 = actionChain.slice(p1Count);

          const renderChip = (skill: string, idx: number, arr: string[]) => (
            <span key={idx} className="flex items-center gap-1.5">
              <span className="rounded-md px-2.5 py-1 font-mono text-xs font-bold bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300">
                {skill}
              </span>
              {idx < arr.length - 1 && <span className="text-text-muted text-xs">→</span>}
            </span>
          );

          return (
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="px-4 pt-3 pb-2.5 bg-surface-alt border-b border-border">
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Your sequence — run in this order</span>
              </div>

              {/* Phase 1 */}
              {phase1.length > 0 && (
                <div className="px-4 py-3 flex items-center gap-4 border-b border-border/50 bg-surface">
                  <div className="shrink-0 w-24">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-purple-500">Phase 1</span>
                    <p className="text-[10px] text-text-muted mt-0.5">Build intelligence</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {phase1.map((s, i) => renderChip(s, i, phase1))}
                  </div>
                </div>
              )}

              {/* Phase 2 */}
              {phase2.length > 0 && (
                <div className="px-4 py-3 flex items-center gap-4 border-b border-border/50 bg-surface">
                  <div className="shrink-0 w-24">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500">Phase 2</span>
                    <p className="text-[10px] text-text-muted mt-0.5">Build content</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {phase2.map((s, i) => renderChip(s, i, phase2))}
                  </div>
                </div>
              )}

              {/* Phase 3 — Humanize */}
              {hasHuman && (
                <div className="px-4 py-3 flex items-center gap-4 bg-surface">
                  <div className="shrink-0 w-24">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">Phase 3</span>
                    <p className="text-[10px] text-text-muted mt-0.5">Humanize</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md px-2.5 py-1 font-mono text-xs font-bold bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-200">
                      /human
                    </span>
                  </div>
                </div>
              )}

              <div className="px-4 py-2.5 border-t border-border/50 bg-surface-alt/60">
                <p className="text-[11px] text-text-muted">Run all plugins in the <strong className="text-text-secondary">same Claude conversation</strong> — each phase builds on the previous.</p>
              </div>
            </div>
          );
        })()}
      </section>

      {/* Phases */}
      <section className="mb-10">
        <ActivityPhases
          slug={config.slug}
          phases={activity.phases}
          durationMinutes={config.duration_minutes}
          dataFiles={config.data_files}
          folderName={activity.folderName}
        />
      </section>

      {/* Previous / Next navigation */}
      <nav className="mt-16 flex items-center justify-between border-t border-border pt-6">
        {prev ? (
          <Link
            href={`/activities/${prev.config.slug}`}
            className="group flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
            <div>
              <div className="text-xs text-text-muted">Previous</div>
              <div className="font-medium text-text-secondary group-hover:text-accent">
                {String(currentIndex).padStart(2, "0")}. {prev.config.title}
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/activities/${next.config.slug}`}
            className="group flex items-center gap-2 text-right text-sm text-text-muted hover:text-accent transition-colors"
          >
            <div>
              <div className="text-xs text-text-muted">Next</div>
              <div className="font-medium text-text-secondary group-hover:text-accent">
                {String(currentIndex + 2).padStart(2, "0")}. {next.config.title}
              </div>
            </div>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
