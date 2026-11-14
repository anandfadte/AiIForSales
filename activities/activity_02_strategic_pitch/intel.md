# Intel
> Enable both plugins, build your prompts, find Cascade's real financial position. (~8 min)

## plugin
Web Search, File Analysis

## context

Torres said "numbers from OUR business, not industry averages." Your intel phase delivers exactly that — live web signals about Cascade's competitive pressure, plus exact CFO quotes from their own investor presentation. When you can reference Rebecca Torres' own words back to her, the meeting changes.

Both happen in the **same Claude conversation**. Context compounds between prompts.

## do_this

**Step 1 — Open Claude.** Click the puzzle-piece icon and enable both **Web Search** and **File Analysis** plugins.

**Step 2 — Build Prompt 1** using the skeleton below. Fill in fields A, B, C — then copy the assembled prompt and send it. Claude will search for Cascade's financial position and what makes inaction costly.

**Step 3 — Upload the file.** Add **investor_presentation_excerpt.docx** (from the files panel on this page) to the same conversation — do NOT start a new chat.

**Step 4 — Build Prompt 2** using the second skeleton below. Fill in field A — then copy and send it to extract Torres' exact words.

## prompt_skeleton
{
  "fixed": {
    "company": "Cascade Retail Holdings · $3.9B · Seattle · omnichannel retailer",
    "goal": "CFO business case meeting · Rebecca Torres (ex-Nordstrom VP Finance) · ROI + payback period + why now"
  },
  "inputs": [
    { "key": "signal_1", "label": "A. What financial pressure is a $4B retail CFO under RIGHT NOW — earnings, margins, working capital?" },
    { "key": "signal_2", "label": "B. What makes Cascade's situation urgent TODAY — not 6 months from now?" },
    { "key": "signal_3", "label": "C. What would Torres say is 'different from every other pitch I've heard'?" }
  ],
  "template": "Research {company}. I'm preparing: {goal}. Find:\n1. {signal_1}\n2. {signal_2}\n3. {signal_3}\nFocus on the last 6 months. 400 words max."
}

## prompt_2_skeleton
{
  "fixed": {
    "file": "investor_presentation_excerpt.docx (uploaded above)",
    "extract": "CFO exact quotes about margin compression, working capital targets, and the 150bps timeline — verbatim, not paraphrase",
    "cross_ref": "Cross-reference with the web research already in this conversation. Where do the investor slides confirm or strengthen the case?"
  },
  "inputs": [
    { "key": "focus", "label": "A. What number or exact Torres quote would hit hardest as an OPENING LINE in this meeting?" }
  ],
  "template": "Analyze {file}. Extract: {extract}. {focus} {cross_ref} 400 words max."
}

## gate
Have Torres' exact words from the investor presentation — not a paraphrase, the actual quote — ready to open the meeting.
Know what a 20% improvement in Cascade's 44-day DSO delivers in dollar terms — using their own working capital figures.
Can say "why now" in one sentence using Cascade's own numbers — not industry benchmarks.

## tip

The CFO's exact words are your most powerful tool. If Torres said "entirely operational" about margin compression, use that phrase back to her — it shows you listened, not just researched. The best opening line in the meeting starts with "In your Q3 investor presentation, you said..."
