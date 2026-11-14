# Intel
> Enable both plugins, build your prompts, gather live intelligence. (~8 min)

## plugin
Web Search, File Analysis

## context

This is where your Brief-phase hypothesis becomes live deal intelligence. Web search gives you signals from the last 6 months. The annual report gives you the CFO's own numbers — exact figures that beat any industry benchmark in a meeting.

Both happen in the **same Claude conversation**. Context compounds between prompts.

**The prompt structure below — Role, Context, Task, Control, Output — is the standard professional format for directing any AI tool.** Each section tells Claude something different: who to be, what it already knows, what to find, how to behave, and what to give back. You will use this pattern outside this workshop.

## do_this

**Step 1 — Open Claude.** Click the puzzle-piece icon and enable both **Web Search** and **File Analysis** plugins.

**Step 2 — Build Prompt 1** using the skeleton below. The prompt is 80% pre-written. Add one piece of insider context in field A if you have it — or skip it. Copy the assembled prompt and send it.

**Step 3 — Upload the file.** Add **annual_report_excerpt.docx** (from the files panel on this page) to the same conversation — do NOT start a new chat.

**Step 4 — Build Prompt 2** using the second skeleton below. Add what specific number or quote you're looking for in field A — or skip it. Copy and send.

## prompt_skeleton
{
  "fixed": {
    "role": "Senior account researcher supporting a B2B sales team",
    "context": "Senior AE at Genpact — first meeting with VP Operations James Morrison, Meridian Health Systems ($3.2B, Minneapolis). Meeting window: 30 minutes, 5 days away.",
    "task": "Web search, last 6 months. Find: (1) top operational pressure a VP Ops at a $3B US health network is solving right now, (2) what Meridian specifically is under pressure about this quarter, (3) what would make Morrison say 'you understand our business' — specific, not generic healthcare facts.",
    "control": "Last 6 months only. Specific facts, numbers, quotes over general industry context.",
    "output": "400 words max. Tag web findings with [WEB].",
    "insider": "None — use web research only."
  },
  "inputs": [
    { "key": "insider", "label": "Your inside edge — anything you know that Claude won't find online (from your CRM, manager, or the scenario brief). Skip if none." }
  ],
  "template": "Role: {role}\n\nContext: {context}\nInsider context: {insider}\n\nTask: {task}\n\nControl: {control}\n\nOutput: {output}"
}

## prompt_2_skeleton
{
  "fixed": {
    "role": "Financial analyst expert in healthcare revenue cycle operations",
    "context": "Uploaded: annual_report_excerpt.docx — Meridian Health Systems FY2024. Web research is already in this conversation.",
    "task": "Extract exact figures: AR days, denial rate, cost per claim, operating margin. Also extract CFO and VP quotes about operational challenges and vendor expectations.",
    "control": "Cross-reference with the web research already in this conversation. Where does the filing confirm or contradict what we found online?",
    "output": "400 words max. Tag document findings with [DOC].",
    "focus": "Any metric that shows operational underperformance vs. peers."
  },
  "inputs": [
    { "key": "focus", "label": "What specific number or quote are you most looking for? (Based on what you found in Prompt 1 — skip to use the default.)" }
  ],
  "template": "Role: {role}\n\nContext: {context}\n\nTask: {task}\nFocus especially on: {focus}\n\nControl: {control}\n\nOutput: {output}"
}

## gate
Have a live fact about Meridian Health specifically — not generic US health system statistics — from the last 6 months.
Know one thing about James Morrison: career history, public statement, or what a VP of Ops at a $3.2B network is under pressure to deliver.
Can say why Morrison would take this meeting seriously — using his title and Meridian's situation, not Genpact's capabilities.

## tip

Tag web findings with [WEB] and document findings with [DOC] — it makes the skills chain sharper because you can see which intelligence came from where. A specific number from THEIR annual report beats any industry benchmark: "52-day AR vs 42-day benchmark" lands harder than "above average AR days."
