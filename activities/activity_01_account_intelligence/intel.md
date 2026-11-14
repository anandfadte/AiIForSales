# Intel
> Enable both plugins, build your prompts, gather live intelligence. (~8 min)

## plugin
Web Search, File Analysis

## context

Web search + document analysis in the same conversation — context from Prompt 1 feeds into Prompt 2.

The prompts are 80% pre-written. The template format you see (**Role → Context → Task → Control → Output**) is the professional standard for directing any AI tool — you will use it beyond this workshop.

## do_this

**Step 1 —** Enable both **Web Search** and **File Analysis** plugins (puzzle-piece icon in Claude).

**Step 2 —** Build Prompt 1 below. Add one line of insider context — or skip it. Copy and send.

**Step 3 —** Upload **annual_report_excerpt.docx** to the same conversation (do NOT start a new chat). Build Prompt 2 below — add one line or skip. Copy and send.

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

## tip

Tag web findings with [WEB] and document findings with [DOC] — it makes the skills chain sharper because you can see which intelligence came from where. A specific number from THEIR annual report beats any industry benchmark: "52-day AR vs 42-day benchmark" lands harder than "above average AR days."
