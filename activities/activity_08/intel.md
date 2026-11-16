# Intel
> Build your prompts, find breaking news and Morris' exact board mandate. (~8 min)

## context

This is a live-deal scenario with a CFO meeting in 48 hours. Web search is looking for things that happened in the **LAST 30 DAYS** — Q3 earnings, Capgemini's insurance case study, any leadership signals. The transcript gives you Morris' exact words about the board mandate and the 18-month timeline. Morris will know in 60 seconds whether you read the transcript.

Both happen in the **same Claude conversation**. Context compounds. Web search and document analysis are built in — no setup needed.

## do_this

**Step 1 — Open Claude.** Start a new conversation with the Sales Plugin active.

**Step 2 — Build Prompt 1** using the skeleton below. Fill in fields A, B, C — then copy and send. Claude will search for Legal & General's latest developments and Catherine Morris' decision-making style.

**Step 3 — Upload the file.** Add **earnings_transcript.docx** (from the files panel on this page) to the same conversation — do NOT start a new chat.

**Step 4 — Build Prompt 2** using the second skeleton below. Fill in field A — then copy and send to extract Morris' exact commitments.

## prompt_skeleton
{
  "fixed": {
    "company": "Legal & General Group · £1.1T AUM · UK leading insurer and investment manager",
    "goal": "CFO meeting in 48 hours · Catherine Morris (ex-Goldman Sachs) · £5M finance operations transformation"
  },
  "inputs": [
    { "key": "signal_1", "label": "A. What changed at Legal & General in the last 30 days — Q3 results, Capgemini case study, competitor moves?" },
    { "key": "signal_2", "label": "B. How does Morris' Goldman background shape her approach to a £5M proposal?" },
    { "key": "signal_3", "label": "C. What is the one-sentence 'why now' answer using Q3 numbers — not benchmarks?" }
  ],
  "template": "Research {company}. I'm preparing: {goal}. Find:\n1. {signal_1}\n2. {signal_2}\n3. {signal_3}\nFocus on the last 30 days only. 400 words max."
}

## prompt_2_skeleton
{
  "fixed": {
    "file": "earnings_transcript.docx (uploaded above)",
    "extract": "Morris' exact expense ratio figure (Q3 shows 8.2%, not 7.8%), her exact language about operational efficiency, and her board mandate — the 18-month timeline and 150bps target in her own words"
  },
  "inputs": [
    { "key": "focus", "label": "A. What is the single most important Morris quote for your opening 60 seconds?" }
  ],
  "template": "Analyze {file}. Extract: {extract}. {focus} Cross-reference with web research. Where does the transcript confirm or update what we found in the news? 400 words max."
}

## gate
Have Morris' exact expense ratio number from Q3 — 8.2%, not 7.8%. If you're using the CRM number, go back.
Know the board mandate in Morris' exact words — the 18-month timeline and 150bps target.
Can explain why Capgemini's case study makes this meeting MORE urgent, not less.

## tip

The 60-second opening test: Catherine Morris will know in 60 seconds whether you read the Q3 transcript. If your opening references her expense ratio deterioration (8.2%, not 7.8%), her board mandate (150bps, 18 months), and Capgemini's move — she'll lean in. If it references "industry benchmarks" instead of her own numbers, she'll lean back.
