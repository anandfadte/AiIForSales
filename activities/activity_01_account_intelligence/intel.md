# Intel
> Enable both plugins, build your prompts, gather live intelligence. (~8 min)

## plugin
Web Search, File Analysis

## context

This is where your Brief-phase hypothesis becomes live deal intelligence. Web search gives you signals from the last 6 months. The annual report gives you the CFO's own numbers — exact figures that beat any industry benchmark in a meeting.

Both happen in the **same Claude conversation**. Context compounds between prompts.

## do_this

**Step 1 — Open Claude.** Click the puzzle-piece icon and enable both **Web Search** and **File Analysis** plugins.

**Step 2 — Build Prompt 1** using the skeleton below. Fill in fields A, B, C — then copy the assembled prompt and send it. Claude will search for live Meridian signals and James Morrison's profile.

**Step 3 — Upload the file.** Add **annual_report_excerpt.docx** (from the files panel on this page) to the same conversation — do NOT start a new chat.

**Step 4 — Build Prompt 2** using the second skeleton below. Fill in field A — then copy and send it to extract numbers from the report.

## prompt_skeleton
{
  "fixed": {
    "company": "Meridian Health Systems · $3.2B · Minneapolis · regional hospital network",
    "goal": "First meeting with VP Operations James Morrison — 30-minute window, 5 days away"
  },
  "inputs": [
    { "key": "signal_1", "label": "A. What is the top operational priority for a VP Ops at a $3B US health network right now?" },
    { "key": "signal_2", "label": "B. What is Meridian specifically under pressure about this quarter — not a generic industry trend?" },
    { "key": "signal_3", "label": "C. What would make Morrison say 'you get our business' — one specific, non-generic fact?" }
  ],
  "template": "Research {company}. I'm preparing: {goal}. Find:\n1. {signal_1}\n2. {signal_2}\n3. {signal_3}\nFocus on the last 6 months. 400 words max."
}

## prompt_2_skeleton
{
  "fixed": {
    "file": "annual_report_excerpt.docx (uploaded above)",
    "extract": "AR days, denial rate, cost per claim, operating margin — exact figures from the filing",
    "cross_ref": "Cross-reference with the web research already in this conversation. Where do the filings confirm or contradict the news?"
  },
  "inputs": [
    { "key": "focus", "label": "A. What one number or CFO quote from this report would land hardest with a VP of Operations?" }
  ],
  "template": "Analyze {file}. Extract: {extract}. Also find CFO and VP quotes about operational challenges and vendor expectations. {focus} {cross_ref} 400 words max."
}

## gate
Have a live fact about Meridian Health specifically — not generic US health system statistics — from the last 6 months.
Know one thing about James Morrison: career history, public statement, or what a VP of Ops at a $3.2B network is under pressure to deliver.
Can say why Morrison would take this meeting seriously — using his title and Meridian's situation, not Genpact's capabilities.

## tip

Tag web findings with [WEB] and document findings with [DOC] — it makes the skills chain sharper because you can see which intelligence came from where. A specific number from THEIR annual report beats any industry benchmark: "52-day AR vs 42-day benchmark" lands harder than "above average AR days."
