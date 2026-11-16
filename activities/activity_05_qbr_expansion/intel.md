# Intel
> Build your prompts, find Lloyds' latest position and Hartley's exact words. (~8 min)

## context

The expansion pitch fails if it looks like it was prepared before this QBR. Web search gives you what happened at Lloyds in the last quarter — market trends that make NOW the right moment for each of the 3 expansion areas. The earnings transcript gives you Hartley's exact words, which become your opening argument for each expansion.

Both happen in the **same Claude conversation**. Context compounds. Web search and document analysis are built in — no setup needed.

## do_this

**Step 1 — Open Claude.** Start a new conversation with the Sales Plugin active.

**Step 2 — Build Prompt 1** using the skeleton below. Fill in fields A, B, C — then copy and send. Claude will search for Lloyds' latest performance and what creates urgency across the 3 expansion areas.

**Step 3 — Upload the file.** Add **earnings_transcript_excerpt.docx** (from the files panel on this page) to the same conversation — do NOT start a new chat.

**Step 4 — Build Prompt 2** using the second skeleton below. Fill in field A — then copy and send to extract Hartley's exact words for each expansion area.

## prompt_skeleton
{
  "fixed": {
    "company": "Lloyds Banking Group · £450B total assets · UK largest retail bank · 26M customers",
    "goal": "QBR expansion pitch · CEO David Hartley · mortgage ops + customer complaints management + financial crime compliance"
  },
  "inputs": [
    { "key": "signal_1", "label": "A. What is a large UK retail bank CEO pressured to solve right now — in 2024/2025?" },
    { "key": "signal_2", "label": "B. Which peer UK bank has already moved on one of these 3 areas?" },
    { "key": "signal_3", "label": "C. What would Hartley call 'different from every vendor who calls us'?" }
  ],
  "template": "Research {company}. I'm preparing: {goal}. Find:\n1. {signal_1}\n2. {signal_2}\n3. {signal_3}\nFocus on the last 6 months. 400 words max."
}

## prompt_2_skeleton
{
  "fixed": {
    "file": "earnings_transcript_excerpt.docx (uploaded above)",
    "extract": "CEO Hartley's exact words for each expansion area: mortgage ops, customer complaints, financial crime compliance — the specific quotes that open each conversation, not summaries"
  },
  "inputs": [
    { "key": "focus", "label": "A. Which Hartley quote opens the first expansion area your pod will pitch?" }
  ],
  "template": "Analyze {file}. Extract: {extract}. {focus} Cross-reference with web research already in this conversation. 400 words max."
}

## gate
Have Hartley's exact words from the earnings transcript for at least two of the three expansion areas — not summary, the actual quote.
Know a peer UK bank already moving on one of these areas — Lloyds has seen the same news.
Can open each expansion area with Hartley's own language, not Genpact's service catalogue.

## tip

If Hartley said something specific about mortgage processing times, complaint resolution rates, or financial crime costs on the earnings call, that's your gift. Use his exact words: "You mentioned complaint resolution is taking too long in Q3. Here's what a modern complaints operation looks like at a bank your size."
