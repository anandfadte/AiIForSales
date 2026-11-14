# Intel
> Enable both plugins, build your prompts, find Horizon's latest position and Santos' exact words. (~8 min)

## plugin
Web Search, File Analysis

## context

The expansion pitch fails if it looks like it was prepared before this QBR. Web search gives you what happened at Horizon in the last quarter — market trends that make NOW the right moment for each of the 3 expansion areas. The earnings transcript gives you Santos' exact words, which become your opening argument for each expansion.

Both happen in the **same Claude conversation**. Context compounds.

## do_this

**Step 1 — Open Claude.** Click the puzzle-piece icon and enable both **Web Search** and **File Analysis** plugins.

**Step 2 — Build Prompt 1** using the skeleton below. Fill in fields A, B, C — then copy and send. Claude will search for Horizon's latest performance and what creates urgency across the 3 expansion areas.

**Step 3 — Upload the file.** Add **earnings_transcript_excerpt.docx** (from the files panel on this page) to the same conversation — do NOT start a new chat.

**Step 4 — Build Prompt 2** using the second skeleton below. Fill in field A — then copy and send to extract Santos' exact words for each expansion area.

## prompt_skeleton
{
  "fixed": {
    "company": "Horizon Energy Solutions · $7.3B utility · 6 US states",
    "goal": "QBR expansion pitch · CEO Maria Santos · IT ops + customer service transformation + supply chain optimization"
  },
  "inputs": [
    { "key": "signal_1", "label": "A. What is a $7B utility CEO pressured to solve right now — in 2024/2025?" },
    { "key": "signal_2", "label": "B. Which peer utility has already moved on one of these 3 areas?" },
    { "key": "signal_3", "label": "C. What would Santos call 'different from every vendor who calls us'?" }
  ],
  "template": "Research {company}. I'm preparing: {goal}. Find:\n1. {signal_1}\n2. {signal_2}\n3. {signal_3}\nFocus on the last 6 months. 400 words max."
}

## prompt_2_skeleton
{
  "fixed": {
    "file": "earnings_transcript_excerpt.docx (uploaded above)",
    "extract": "CEO Santos' exact words for each expansion area: IT ops, customer service, supply chain — the specific quotes that open each conversation, not summaries"
  },
  "inputs": [
    { "key": "focus", "label": "A. Which Santos quote opens the first expansion area your pod will pitch?" }
  ],
  "template": "Analyze {file}. Extract: {extract}. {focus} Cross-reference with web research already in this conversation. 400 words max."
}

## gate
Have Santos' exact words from the earnings transcript for at least two of the three expansion areas — not summary, the actual quote.
Know a peer utility already moving on one of these areas — Horizon has seen the same news.
Can open each expansion area with Santos' own language, not Genpact's service catalog.

## tip

"Embarrassingly manual" is a gift. If Santos said it about supply chain on the earnings call, she's already sold on the problem — your job is to show the solution. Use her exact words: "You described supply chain as embarrassingly manual in Q3. Here's what a modern supply chain looks like at a utility your size."
