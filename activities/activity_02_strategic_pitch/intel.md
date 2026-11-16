# Intel
> Build your prompts, find Aviva's real financial position. (~8 min)

## context

Wallis said "numbers from OUR business, not industry averages." Your intel phase delivers exactly that — live web signals about Aviva's competitive pressure, plus exact CFO quotes from their own investor presentation. When you can reference Richard Wallis' own words back to him, the meeting changes.

Both happen in the **same Claude conversation**. Context compounds between prompts. Web search and document analysis are built in — no setup needed.

## do_this

**Step 1 — Open Claude.** Start a new conversation with the Sales Plugin active.

**Step 2 — Build Prompt 1** using the skeleton below. Fill in fields A, B, C — then copy the assembled prompt and send it. Claude will search for Aviva's financial position and what makes inaction costly.

**Step 3 — Upload the file.** Add **investor_presentation_excerpt.docx** (from the files panel on this page) to the same conversation — do NOT start a new chat.

**Step 4 — Build Prompt 2** using the second skeleton below. Fill in field A — then copy and send it to extract Wallis' exact words.

## prompt_skeleton
{
  "fixed": {
    "company": "Aviva plc · £26B GWP · UK largest insurer · life, general, and health insurance",
    "goal": "CFO business case meeting · Richard Wallis (ex-BlackRock CFO UK) · ROI + payback period + why now"
  },
  "inputs": [
    { "key": "signal_1", "label": "A. What financial pressure is a large UK insurer CFO under right now?" },
    { "key": "signal_2", "label": "B. What makes Aviva's situation urgent today — not 6 months from now?" },
    { "key": "signal_3", "label": "C. What would Wallis call 'different from every pitch I've heard'?" }
  ],
  "template": "Research {company}. I'm preparing: {goal}. Find:\n1. {signal_1}\n2. {signal_2}\n3. {signal_3}\nFocus on the last 6 months. 400 words max."
}

## prompt_2_skeleton
{
  "fixed": {
    "file": "investor_presentation_excerpt.docx (uploaded above)",
    "extract": "CFO exact quotes about expense ratio targets, finance operations efficiency, and the 150bps timeline — verbatim, not paraphrase",
    "cross_ref": "Cross-reference with the web research already in this conversation. Where do the investor slides confirm or strengthen the case?"
  },
  "inputs": [
    { "key": "focus", "label": "A. What Wallis quote or number from these slides is your strongest opening line?" }
  ],
  "template": "Analyze {file}. Extract: {extract}. {focus} {cross_ref} 400 words max."
}

## gate
Have Wallis' exact words from the investor presentation — not a paraphrase, the actual quote — ready to open the meeting.
Know what closing the 1.6% gap in Aviva's expense ratio delivers in £M terms — using their own GWP figures.
Can say "why now" in one sentence using Aviva's own numbers — not industry benchmarks.

## tip

The CFO's exact words are your most powerful tool. If Wallis said something specific about "operational efficiency" or the 150bps mandate, use that phrase back to him — it shows you listened, not just researched. The best opening line in the meeting starts with "In your investor presentation, you said..."
