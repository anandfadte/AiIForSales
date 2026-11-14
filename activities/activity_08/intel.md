# Intel
> Enable both plugins, build your prompts, find breaking news and Chen's exact board mandate. (~8 min)

## plugin
Web Search, File Analysis

## context

This is a live-deal scenario with a CFO meeting in 48 hours. Web search is looking for things that happened in the **LAST 30 DAYS** — Q3 earnings, leadership changes, competitor moves. The transcript gives you Chen's exact words about the board mandate and the 12-month timeline. Chen will know in 60 seconds whether you read the transcript.

Both happen in the **same Claude conversation**. Context compounds.

## do_this

**Step 1 — Open Claude.** Click the puzzle-piece icon and enable both **Web Search** and **File Analysis** plugins.

**Step 2 — Build Prompt 1** using the skeleton below. Fill in fields A, B, C — then copy and send. Claude will search for QuantumEdge's latest developments and Sarah Chen's decision-making style.

**Step 3 — Upload the file.** Add **earnings_transcript.docx** (from the files panel on this page) to the same conversation — do NOT start a new chat.

**Step 4 — Build Prompt 2** using the second skeleton below. Fill in field A — then copy and send to extract Chen's exact commitments.

## prompt_skeleton
{
  "fixed": {
    "company": "QuantumEdge Technologies · $4.8B · Austin TX · enterprise software (cloud ERP, supply chain)",
    "goal": "CFO meeting in 48 hours · Sarah Chen (ex-Goldman Sachs) · $6M O2C transformation"
  },
  "inputs": [
    { "key": "signal_1", "label": "A. What changed at QuantumEdge in the last 30 days — Q3 results, leadership, competitors?" },
    { "key": "signal_2", "label": "B. How does Chen's Goldman background shape her approach to a $6M proposal?" },
    { "key": "signal_3", "label": "C. What is the one-sentence 'why now' answer using Q3 numbers — not benchmarks?" }
  ],
  "template": "Research {company}. I'm preparing: {goal}. Find:\n1. {signal_1}\n2. {signal_2}\n3. {signal_3}\nFocus on the last 30 days only. 400 words max."
}

## prompt_2_skeleton
{
  "fixed": {
    "file": "earnings_transcript.docx (uploaded above)",
    "extract": "Chen's exact DSO figure (expect 48 days, not 45), her exact margin compression language, and her board mandate — the 12-month timeline and 200bps target in her own words"
  },
  "inputs": [
    { "key": "focus", "label": "A. What is the single most important Chen quote for your opening 60 seconds?" }
  ],
  "template": "Analyze {file}. Extract: {extract}. {focus} Cross-reference with web research. Where does the transcript confirm or update what we found in the news? 400 words max."
}

## gate
Have Chen's exact DSO number from Q3 — 48 days, not 45. If you're using the CRM number, go back.
Know the board mandate in Chen's exact words — the 12-month timeline and 200bps target.
Can explain why this meeting matters MORE because of Q3, not despite it.

## tip

The 60-second opening test: Sarah Chen will know in 60 seconds whether you read the Q3 transcript. If your opening references her DSO number (48 days, not 45), her margin comment (200bps compression), and her board mandate (12-month timeline) — she'll lean in. If it references "industry benchmarks" instead of her own numbers, she'll lean back.
