# Intel
> Enable both plugins, build your prompts, find TrueNorth's language and the differentiating questions. (~8 min)

## plugin
Web Search, File Analysis

## context

TrueNorth's RFI says "generic responses will be scored lower." The intel phase is what prevents generic. Web search gives you TrueNorth's specific language and competitive context — what Accenture and EXL are already saying. The RFI analysis tells you which of the 15 questions actually determines the shortlist.

Both happen in the **same Claude conversation**. Context compounds.

## do_this

**Step 1 — Open Claude.** Click the puzzle-piece icon and enable both **Web Search** and **File Analysis** plugins.

**Step 2 — Build Prompt 1** using the skeleton below. Fill in fields A, B, C — then copy and send. Claude will research TrueNorth and map what competitors are claiming.

**Step 3 — Upload the file.** Add **sample_rfi.docx** (from the files panel on this page) to the same conversation — do NOT start a new chat.

**Step 4 — Build Prompt 2** using the second skeleton below. Fill in field A — then copy and send to rank the 15 questions by shortlist impact.

## prompt_skeleton
{
  "fixed": {
    "company": "TrueNorth Insurance Group · $8.4B · property & casualty insurer",
    "goal": "RFI response · claims processing transformation · competing vs Accenture, Cognizant, EXL"
  },
  "inputs": [
    { "key": "signal_1", "label": "A. What is TrueNorth specifically known for in P&C claims — different from a generic insurer?" },
    { "key": "signal_2", "label": "B. What claim are Accenture, Cognizant, AND EXL all making? (find the common denominator)" },
    { "key": "signal_3", "label": "C. What language in TrueNorth's RFI tells you what they're REALLY buying — beyond the stated requirements?" }
  ],
  "template": "Research {company}. I'm preparing: {goal}. Find:\n1. {signal_1}\n2. {signal_2}\n3. {signal_3}\n400 words max."
}

## prompt_2_skeleton
{
  "fixed": {
    "file": "sample_rfi.docx (uploaded above)",
    "extract": "which of the 15 questions are differentiating vs table stakes, which 3-4 most likely determine the shortlist, and which questions if answered poorly could eliminate Genpact"
  },
  "inputs": [
    { "key": "focus", "label": "A. Which single question in this RFI, if answered poorly, eliminates Genpact? Start there." }
  ],
  "template": "Analyze the RFI in {file}. Extract: {extract}. {focus} Output a prioritized list. 400 words max."
}

## gate
Can name two things specific to TrueNorth's business — not generic P&C insurer facts — that must appear in the RFI responses.
Know the one claim Accenture, Cognizant, and EXL will all make — and have a differentiated response ready.
Have ranked the 15 questions: know which 3-4 determine the shortlist, which are table stakes.

## tip

The competitive search is as important as the client search. Knowing what Accenture claims lets you write responses that differentiate without naming them. If Accenture leads with their SynOps platform, lead with specific insurance outcomes (94% fraud detection accuracy, specific processing benchmarks) rather than platform names.
