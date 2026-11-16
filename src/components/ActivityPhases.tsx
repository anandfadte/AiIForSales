"use client";
import { useState, useEffect, useRef } from "react";
import {
  Check, ChevronDown, ChevronRight, Lock, Eye, Lightbulb,
  Timer, Play, Pause, RotateCcw, Copy, CheckCheck,
  Globe, FileText, Zap, Sparkles,
} from "lucide-react";

interface SkeletonField {
  key: string;
  label: string;
}

interface SkeletonSpec {
  fixed: Record<string, string>;
  inputs: SkeletonField[];
  template: string;
}

interface PhaseContent {
  scenario?: string;
  context?: string;
  plugin?: string;
  doThis?: string;
  prompt?: string;
  prompt2?: string;
  promptSkeleton?: SkeletonSpec;
  prompt2Skeleton?: SkeletonSpec;
  promptOptional?: string;
  prompt2Optional?: string;
  transition?: string;
  gate?: string[];
  skillChain?: string;
  checkpoint?: string;
  tip?: string;
  revealGood?: string;
  revealTakeaway?: string;
}

interface PhaseInfo {
  number: number;
  key: string;
  title: string;
  subtitle: string;
  content: PhaseContent;
}

interface DataFile {
  filename: string;
  display_name: string;
  type: string;
  role: string;
  use_in?: string;
}

interface Props {
  slug: string;
  phases: PhaseInfo[];
  dataFiles?: DataFile[];
  durationMinutes: number;
  folderName?: string;
}

type PhaseStatus = "locked" | "active" | "complete";

export function ActivityPhases({ slug, phases, dataFiles = [], durationMinutes, folderName }: Props) {
  const [phaseStates, setPhaseStates] = useState<PhaseStatus[]>(() =>
    phases.map((_, i) => (i === 0 ? "active" : "locked"))
  );
  const [revealOpen, setRevealOpen] = useState(false);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [timerSeconds, setTimerSeconds] = useState(durationMinutes * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`sales-progress-${slug}`);
      if (saved) {
        const parsed = JSON.parse(saved) as PhaseStatus[];
        if (Array.isArray(parsed) && parsed.length === phases.length) setPhaseStates(parsed);
      }
      const savedTimer = localStorage.getItem(`sales-timer-${slug}`);
      if (savedTimer) {
        const t = JSON.parse(savedTimer);
        if (t.seconds != null) setTimerSeconds(t.seconds);
        if (t.started) setTimerStarted(true);
      }
    } catch {}
  }, [slug, phases.length]);

  useEffect(() => {
    try { localStorage.setItem(`sales-progress-${slug}`, JSON.stringify(phaseStates)); } catch {}
  }, [phaseStates, slug]);

  useEffect(() => {
    if (!timerRunning) return;
    const interval = setInterval(() => {
      setTimerSeconds((prev) => {
        const next = prev - 1;
        try { localStorage.setItem(`sales-timer-${slug}`, JSON.stringify({ seconds: next, started: true })); } catch {}
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerRunning, slug]);

  function startTimer() { setTimerRunning(true); setTimerStarted(true); }
  function pauseTimer() { setTimerRunning(false); }
  function resetTimer() {
    setTimerRunning(false);
    setTimerStarted(false);
    setTimerSeconds(durationMinutes * 60);
    try { localStorage.removeItem(`sales-timer-${slug}`); } catch {}
  }

  function unlockNext(currentIndex: number) {
    setPhaseStates((prev) => {
      const next = [...prev];
      next[currentIndex] = "complete";
      if (currentIndex + 1 < next.length) next[currentIndex + 1] = "active";
      return next;
    });
    if (currentIndex + 1 < phases.length) {
      setTimeout(() => {
        phaseRefs.current[currentIndex + 1]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }

  function resetProgress() {
    setPhaseStates(phases.map((_, i) => (i === 0 ? "active" : "locked")));
    setRevealOpen(false);
    resetTimer();
    try { localStorage.removeItem(`sales-progress-${slug}`); } catch {}
    phaseRefs.current[0]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const mins = Math.floor(Math.abs(timerSeconds) / 60);
  const secs = Math.abs(timerSeconds) % 60;
  const isOvertime = timerSeconds < 0;

  return (
    <div className="space-y-4">
      {/* Timer bar */}
      <div className={`sticky top-14 z-40 flex items-center justify-between rounded-xl border px-5 py-3 backdrop-blur-sm ${
        isOvertime ? "border-red-500/40 bg-red-900/20"
        : timerSeconds < 300 ? "border-amber-500/40 bg-amber-900/10"
        : "border-border bg-surface/90"
      }`}>
        <div className="flex items-center gap-3">
          <Timer size={18} className={isOvertime ? "text-red-400" : "text-accent"} />
          <span className={`font-mono text-xl font-bold tabular-nums ${
            isOvertime ? "text-red-400" : timerSeconds < 300 ? "text-amber-400" : "text-text-primary"
          }`}>
            {isOvertime && "−"}{String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
          </span>
          {isOvertime && <span className="text-xs font-medium text-red-400">OVERTIME</span>}
          {!isOvertime && timerSeconds < 300 && timerStarted && (
            <span className="text-xs font-medium text-amber-400">WRAPPING UP</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {!timerStarted ? (
            <button onClick={startTimer} className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent/90 transition-colors">
              <Play size={14} /> Start Timer
            </button>
          ) : (
            <>
              <button onClick={timerRunning ? pauseTimer : startTimer} className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm text-text-primary hover:bg-surface-alt transition-colors">
                {timerRunning ? <Pause size={14} /> : <Play size={14} />}
                {timerRunning ? "Pause" : "Resume"}
              </button>
              <button onClick={resetTimer} className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm text-text-muted hover:text-text-primary hover:bg-surface-alt transition-colors">
                <RotateCcw size={14} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* 4-Layer progress bar */}
      <LayerProgressBar phaseStates={phaseStates} phases={phases} />

      {phases.map((phase, idx) => {
        const status = phaseStates[idx];
        const isLast = idx === phases.length - 1;
        const isHumanize = phase.key === "humanize";

        return (
          <div
            key={phase.key}
            ref={(el) => { phaseRefs.current[idx] = el; }}
            style={status !== "locked" ? { boxShadow: "var(--shadow-md)" } : {}}
            className={`rounded-xl border transition-all duration-200 ${
              status === "locked" ? "border-border/50 bg-surface/50 opacity-50"
              : isHumanize && status === "active" ? "border-amber-400/50 bg-surface"
              : status === "active" ? "border-accent/50 bg-surface"
              : "border-green-500/25 bg-surface"
            }`}
          >
            {/* Phase header */}
            <div className={`flex items-center gap-4 p-5 ${status !== "locked" ? "pb-3" : ""}`}>
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ring-4 ${
                status === "complete" ? "bg-green-500 ring-green-500/15"
                : isHumanize && status === "active" ? "bg-amber-500 ring-amber-500/15"
                : status === "active" ? "bg-accent ring-accent/15"
                : "bg-text-muted/20 ring-transparent"
              }`}>
                {status === "complete" ? <Check size={18} /> : isHumanize ? <Sparkles size={16} /> : phase.number}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className={`text-lg font-semibold ${status === "locked" ? "text-text-muted" : "text-text-primary"}`}>
                    {phase.title}
                  </h3>
                  {phase.content.plugin && status !== "locked" && (
                    <PluginBadge name={phase.content.plugin} />
                  )}
                </div>
                {phase.subtitle && <p className="text-sm text-text-muted mt-0.5">{phase.subtitle}</p>}
              </div>
              <StatusBadge status={status} isHumanize={isHumanize} />
            </div>

            {/* Phase content */}
            {status !== "locked" && (
              <div className="px-5 pb-5 space-y-5">

                {phase.content.scenario && (
                  <div className="rounded-xl bg-surface-alt border border-border border-l-4 border-l-accent p-5" style={{ boxShadow: "var(--shadow-sm)" }}>
                    <div className="prose text-text-secondary text-[15px] leading-relaxed" dangerouslySetInnerHTML={{ __html: phase.content.scenario }} />
                  </div>
                )}

                {phase.content.context && (
                  <div className="prose text-text-secondary" dangerouslySetInnerHTML={{ __html: phase.content.context }} />
                )}

                {phase.content.doThis && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">Do this</h4>
                    <div className="prose text-text-secondary" dangerouslySetInnerHTML={{ __html: phase.content.doThis }} />
                  </div>
                )}

                {/* Inline downloads in Brief phase — right after the steps, before anything else */}
                {phase.key === "brief" && dataFiles.length > 0 && (
                  <div className="rounded-xl border-2 border-dashed border-accent/30 bg-accent/5 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText size={15} className="text-accent shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-widest text-accent">Download your activity files</span>
                    </div>
                    <ul className="space-y-2.5">
                      {dataFiles.map((f) => {
                        const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
                        const downloadHref = folderName
                          ? `${basePath}/activity-files/${folderName}/${f.filename}`
                          : null;
                        return (
                          <li key={f.filename} className="flex items-center gap-3">
                            <span className="inline-block h-7 w-9 shrink-0 rounded bg-accent/10 text-center text-[10px] font-bold leading-7 text-accent uppercase tracking-wide">
                              {f.type.slice(0, 4)}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-text-primary">{f.display_name}</p>
                              {f.use_in ? (
                                <p className={`text-[11px] font-semibold mt-0.5 ${
                                  f.use_in.toLowerCase().includes("upload")
                                    ? "text-accent"
                                    : "text-text-muted"
                                }`}>
                                  {f.use_in.toLowerCase().includes("upload") ? "↑ " : ""}{f.use_in}
                                </p>
                              ) : (
                                <p className="text-xs text-text-muted truncate">{f.role}</p>
                              )}
                            </div>
                            {downloadHref && (
                              <a
                                href={downloadHref}
                                download={f.filename}
                                className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-surface px-3 py-1.5 text-xs font-semibold text-accent hover:bg-accent/10 transition-colors"
                              >
                                ↓ Download
                              </a>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {phase.content.skillChain && (
                  <SkillChainDisplay raw={phase.content.skillChain} />
                )}

                {phase.content.promptSkeleton ? (
                  <PromptSkeleton spec={phase.content.promptSkeleton} label={phase.content.prompt2Skeleton ? "Build Prompt 1 — Web Search" : "Build your prompt"} />
                ) : phase.content.prompt ? (
                  <PromptBox text={phase.content.prompt} label={phase.content.prompt2 ? "Prompt 1" : "Copy this prompt"} />
                ) : null}

                {phase.content.transition && (phase.content.prompt2Skeleton || phase.content.prompt2) && (
                  <PromptTransition html={phase.content.transition} />
                )}

                {phase.content.prompt2Skeleton ? (
                  <PromptSkeleton spec={phase.content.prompt2Skeleton} label="Build Prompt 2 — Document Analysis" />
                ) : phase.content.prompt2 ? (
                  <PromptBox text={phase.content.prompt2} label="Prompt 2" />
                ) : null}

                {phase.content.gate && phase.content.gate.length > 0 && (
                  <GateChecklist items={phase.content.gate} />
                )}

                {phase.content.tip && (
                  <div className="rounded-lg border-2 border-emerald-300 bg-emerald-50 dark:border-emerald-500/30 dark:bg-emerald-950/40 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
                      <Lightbulb size={14} /> Tip
                    </div>
                    <div className="prose text-emerald-900 dark:text-emerald-100 text-sm" dangerouslySetInnerHTML={{ __html: phase.content.tip }} />
                  </div>
                )}

                {phase.content.checkpoint && (
                  <div className="rounded-lg border-2 border-blue-300 bg-blue-50 dark:border-blue-500/30 dark:bg-blue-950/40 p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">Before You Move On</div>
                    <div className="prose text-blue-900 dark:text-blue-100 text-sm" dangerouslySetInnerHTML={{ __html: phase.content.checkpoint }} />
                  </div>
                )}

                {isLast && (phase.content.revealGood || phase.content.revealTakeaway) && (
                  <div className="space-y-4">
                    <button
                      onClick={() => setRevealOpen(!revealOpen)}
                      className="inline-flex items-center gap-2 rounded-lg border-2 border-accent/50 px-5 py-3 text-sm font-semibold text-accent hover:bg-accent/5 transition-colors"
                    >
                      <Eye size={16} />
                      {revealOpen ? "Hide the standard" : "Reveal: What Good Looks Like — only after you are done"}
                      {revealOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    </button>

                    {revealOpen && (
                      <div className="space-y-5 rounded-lg border border-accent/20 bg-accent/5 p-5">
                        {phase.content.revealGood && (
                          <div>
                            <h4 className="text-base font-semibold text-text-primary mb-3">Strong output indicators</h4>
                            <div className="prose text-text-secondary text-sm" dangerouslySetInnerHTML={{ __html: phase.content.revealGood }} />
                          </div>
                        )}
                        {phase.content.revealTakeaway && (
                          <div className="rounded-lg bg-accent/10 border border-accent/20 p-4">
                            <h4 className="text-sm font-semibold text-accent mb-2">The compound intelligence test</h4>
                            <div className="prose text-text-secondary text-sm" dangerouslySetInnerHTML={{ __html: phase.content.revealTakeaway }} />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {status === "active" && (
                  <div className="pt-2">
                    {isLast ? (
                      <button onClick={() => unlockNext(idx)} className={`rounded-lg px-6 py-3 text-sm font-semibold text-white transition-colors ${isHumanize ? "bg-amber-500 hover:bg-amber-500/90" : "bg-accent hover:bg-accent/90"}`}>
                        Close the sprint
                      </button>
                    ) : (
                      <button onClick={() => unlockNext(idx)} className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors">
                        Done — unlock phase {phase.number + 1}
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      {phaseStates.some((s) => s === "complete") && (
        <div className="pt-4 text-center">
          <button onClick={resetProgress} className="text-sm text-text-muted hover:text-text-primary transition-colors underline underline-offset-2">
            Reset progress
          </button>
        </div>
      )}

    </div>
  );
}

function LayerProgressBar({ phaseStates, phases }: { phaseStates: PhaseStatus[]; phases: PhaseInfo[] }) {
  const layers = [
    { key: "brief", label: "Brief", sub: "Read the deal", icon: Globe, color: "text-blue-500" },
    { key: "intel", label: "Phase 1", sub: "Build intelligence", icon: FileText, color: "text-purple-500" },
    { key: "skills", label: "Phase 2", sub: "Build content", icon: Zap, color: "text-orange-500" },
    { key: "humanize", label: "Phase 3", sub: "Humanize", icon: Sparkles, color: "text-amber-500" },
  ];

  return (
    <div className="rounded-xl border border-border bg-surface-alt px-5 py-3">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-2.5">Your sequence</p>
      <div className="flex items-center gap-2">
        {layers.map((layer, i) => {
          const phaseIdx = phases.findIndex((p) => p.key === layer.key);
          const done = phaseIdx !== -1 && phaseStates[phaseIdx] === "complete";
          const active = phaseIdx !== -1 && phaseStates[phaseIdx] === "active";
          const Icon = layer.icon;
          return (
            <div key={layer.key} className="flex items-center gap-2 flex-1 min-w-0">
              <div className={`${done || active ? "opacity-100" : "opacity-30"}`}>
                <div className="flex items-center gap-1.5">
                  <Icon size={13} className={done ? "text-green-500" : layer.color} />
                  <span className={`text-xs font-semibold hidden sm:inline truncate ${done ? "text-green-600 dark:text-green-400" : active ? "text-text-primary" : "text-text-muted"}`}>
                    {layer.label}
                  </span>
                </div>
                <p className="text-[10px] text-text-muted hidden sm:block mt-0.5 leading-tight pl-5">{layer.sub}</p>
              </div>
              {i < layers.length - 1 && <ChevronRight size={12} className="text-border shrink-0" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PluginBadge({ name }: { name: string }) {
  const plugins = name.split(",").map((p) => p.trim()).filter(Boolean);
  return (
    <span className="inline-flex items-center gap-1.5 flex-wrap">
      {plugins.map((plugin) => {
        const isFile = plugin.toLowerCase().includes("file");
        return (
          <span key={plugin} className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
            isFile
              ? "bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300"
              : "bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
          }`}>
            {isFile ? <FileText size={11} /> : <Globe size={11} />}
            {plugin}
          </span>
        );
      })}
    </span>
  );
}

function SkillChainDisplay({ raw }: { raw: string }) {
  const skills = raw.split("→").map((s) => s.trim()).filter(Boolean);
  return (
    <div className="rounded-lg border border-purple-200 dark:border-purple-800/50 bg-purple-50/50 dark:bg-purple-950/20 p-4">
      <div className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 mb-3">Plugin chain — run in order</div>
      <div className="flex flex-wrap items-center gap-2">
        {skills.map((skill, i) => (
          <span key={`${skill}-${i}`} className="flex items-center gap-2">
            <span className={`inline-flex items-center rounded-md px-3 py-1.5 text-sm font-mono font-bold ${
              skill === "/human"
                ? "bg-amber-100 dark:bg-amber-900/40 border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-200"
                : "bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-700 text-purple-800 dark:text-purple-200"
            }`}>
              {skill === "/human" && <Sparkles size={13} className="mr-1.5" />}
              {skill}
            </span>
            {i < skills.length - 1 && <ChevronRight size={16} className="text-text-muted" />}
          </span>
        ))}
      </div>
      <p className="mt-2 text-xs text-text-muted">Run each skill in the <strong className="text-text-secondary">same Claude conversation</strong> — context compounds across each step.</p>
    </div>
  );
}

function PromptBox({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  }

  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <div className="flex items-center justify-between bg-[#1a1d2e] px-4 py-2.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{label}</span>
        <button
          onClick={copyToClipboard}
          className="inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-semibold transition-colors bg-white/10 hover:bg-white/20 text-gray-200"
        >
          {copied ? <CheckCheck size={13} className="text-green-400" /> : <Copy size={13} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="bg-[#111827] px-4 py-4 text-sm text-gray-200 font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto">{text}</pre>
    </div>
  );
}

const FIELD_COLORS = [
  { bg: "bg-blue-500", light: "bg-blue-50 dark:bg-blue-950/40", border: "border-blue-200 dark:border-blue-800/50", text: "text-blue-700 dark:text-blue-300", ring: "focus:ring-blue-300/40 focus:border-blue-400" },
  { bg: "bg-violet-500", light: "bg-violet-50 dark:bg-violet-950/40", border: "border-violet-200 dark:border-violet-800/50", text: "text-violet-700 dark:text-violet-300", ring: "focus:ring-violet-300/40 focus:border-violet-400" },
  { bg: "bg-amber-500", light: "bg-amber-50 dark:bg-amber-950/40", border: "border-amber-200 dark:border-amber-800/50", text: "text-amber-700 dark:text-amber-300", ring: "focus:ring-amber-300/40 focus:border-amber-400" },
];

function PromptSkeleton({ spec, label }: { spec: SkeletonSpec; label: string }) {
  const [userInput, setUserInput] = useState("");
  const [copied, setCopied] = useState(false);

  const inputField = spec.inputs[0];

  // Fill all fixed values; use a unique marker byte for the one editable slot
  const MARKER = "\x01";
  const templateFilled = spec.template.replace(/\{(\w+)\}/g, (_, k) => {
    if (k === inputField.key) return MARKER;
    return spec.fixed[k] ?? `[${k.replace(/_/g, " ")}]`;
  });
  const markerIdx = templateFilled.indexOf(MARKER);
  const before = templateFilled.slice(0, markerIdx);
  const after = templateFilled.slice(markerIdx + 1);

  const assembled = before + (userInput.trim() || spec.fixed[inputField.key] || "") + after;

  function copy() {
    navigator.clipboard.writeText(assembled).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  }

  return (
    <div className="rounded-xl border border-border overflow-hidden" style={{ boxShadow: "var(--shadow-sm)" }}>
      {/* Header */}
      <div className="px-4 py-3" style={{ background: "var(--prompt-bg)" }}>
        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{label}</span>
      </div>

      {/* Prompt with one inline editable blank */}
      <div style={{ background: "var(--prompt-bg)" }} className="px-4 pt-4 pb-3">
        <div className="font-[family-name:var(--font-mono)] text-sm leading-relaxed whitespace-pre-wrap">
          <span className="text-slate-300">{before}</span>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="add context — or skip"
            className="whitespace-normal font-[family-name:var(--font-mono)] text-sm text-accent border-b border-dashed border-accent/70 bg-transparent focus:outline-none focus:border-accent inline-block min-w-[220px] placeholder:text-slate-500 placeholder:italic"
          />
          <span className="text-slate-300">{after}</span>
        </div>
      </div>

      {/* Hint + copy */}
      <div className="px-4 py-3 border-t border-border/50 flex items-center justify-between gap-4" style={{ background: "var(--prompt-bg)" }}>
        <p className="text-[11px] text-slate-500 leading-snug flex-1 italic">{inputField.label}</p>
        <button
          onClick={copy}
          className="shrink-0 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold bg-accent text-white hover:bg-accent/90 shadow-sm transition-all"
        >
          {copied ? <CheckCheck size={13} className="text-green-300" /> : <Copy size={13} />}
          {copied ? "Copied!" : "Copy Prompt"}
        </button>
      </div>
    </div>
  );
}

function PromptOptional({ text }: { text: string }) {
  return (
    <div className="rounded-lg border border-amber-300 dark:border-amber-700/50 bg-amber-50 dark:bg-amber-950/20 px-4 py-3">
      <div className="text-[10px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-2">
        ✦ Optional upgrade — skip if pressed for time
      </div>
      <div className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed whitespace-pre-wrap">{text}</div>
    </div>
  );
}

function PromptTransition({ html }: { html: string }) {
  return (
    <div className="flex flex-col items-center gap-0">
      <div className="w-px h-3 bg-border" />
      <div className="w-full rounded-lg border-2 border-dashed border-indigo-400/50 dark:border-indigo-500/40 bg-indigo-50/40 dark:bg-indigo-950/20 px-4 py-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
          ↓ After Prompt 1 responds
        </p>
        <div className="text-sm text-indigo-900 dark:text-indigo-200 leading-relaxed prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <div className="w-px h-3 bg-border" />
    </div>
  );
}

function GateChecklist({ items }: { items: string[] }) {
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));
  const allChecked = checked.every(Boolean);

  function toggle(i: number) {
    setChecked((prev) => { const next = [...prev]; next[i] = !next[i]; return next; });
  }

  return (
    <div className={`rounded-xl border-2 p-4 transition-all ${
      allChecked
        ? "border-green-400 bg-green-50 dark:border-green-500/50 dark:bg-green-950/30"
        : "border-border bg-surface-alt"
    }`}>
      <div className="flex items-center justify-between mb-3">
        <span className={`text-[11px] font-bold uppercase tracking-widest ${allChecked ? "text-green-700 dark:text-green-400" : "text-text-muted"}`}>
          Ready to move on?
        </span>
        {allChecked && (
          <span className="inline-flex items-center gap-1 rounded-full bg-green-500 px-2.5 py-0.5 text-[11px] font-bold text-white">
            <Check size={11} /> All clear
          </span>
        )}
      </div>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 cursor-pointer" onClick={() => toggle(i)}>
            <div className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded border-2 transition-all ${
              checked[i]
                ? "border-green-500 bg-green-500"
                : "border-border-strong bg-surface hover:border-green-400"
            }`} style={{ width: 18, height: 18 }}>
              {checked[i] && <Check size={11} className="text-white" strokeWidth={3} />}
            </div>
            <span className={`text-sm leading-snug transition-colors ${
              checked[i] ? "text-text-muted line-through" : "text-text-secondary"
            }`}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatusBadge({ status, isHumanize }: { status: PhaseStatus; isHumanize: boolean }) {
  if (status === "locked") return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-text-muted/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
      <Lock size={12} /> Locked
    </span>
  );
  if (status === "active") return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
      isHumanize ? "bg-amber-500/10 text-amber-600 dark:text-amber-400" : "bg-accent/10 text-accent"
    }`}>
      In Progress
    </span>
  );
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
      <Check size={12} /> Complete
    </span>
  );
}
