# Intel
> Build your prompts, find Direct Line's language and the differentiating questions. (~8 min)

## context

Direct Line's RFI says "generic responses will be scored lower." The intel phase is what prevents generic. Web search gives you Direct Line's specific language and competitive context — what Accenture and EXL are already saying. The RFI analysis tells you which of the 15 questions actually determines the shortlist.

Both happen in the **same Claude conversation**. Context compounds. Web search and document analysis are built in — no setup needed.

## do_this

**Step 1 — Open Claude.** Start a new conversation with the Sales Plugin active.

**Step 2 — Build Prompt 1** using the skeleton below. Fill in fields A, B, C — then copy and send. Claude will research Direct Line and map what competitors are claiming.

**Step 3 — Upload the file.** Add **sample_rfi.docx** (from the files panel on this page) to the same conversation — do NOT start a new chat.

**Step 4 — Build Prompt 2** using the second skeleton below. Fill in field A — then copy and send to rank the 15 questions by shortlist impact.

## prompt_skeleton
{
  "fixed": {
    "company": "Direct Line Group · £3.1B GWP · UK's largest direct motor and home insurer · 10M policies",
    "goal": "RFI response · claims processing transformation · competing vs Accenture, Cognizant, EXL"
  },
  "inputs": [
    { "key": "signal_1", "label": "A. What makes Direct Line different from a generic UK insurer?" },
    { "key": "signal_2", "label": "B. What claim are Accenture, Cognizant, AND EXL all making right now?" },
    { "key": "signal_3", "label": "C. What in Direct Line's RFI language reveals what they're really buying?" }
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
    { "key": "focus", "label": "A. Which RFI question, answered poorly, would eliminate Genpact?" }
  ],
  "template": "Analyze the RFI in {file}. Extract: {extract}. {focus} Output a prioritized list. 400 words max."
}

## gate
Can name two things specific to Direct Line's business — not generic UK insurer facts — that must appear in the RFI responses.
Know the one claim Accenture, Cognizant, and EXL will all make — and have a differentiated response ready.
Have ranked the 15 questions: know which 3-4 determine the shortlist, which are table stakes.

## tip

The competitive search is as important as the client search. Knowing what Accenture claims lets you write responses that differentiate without naming them. If Accenture leads with their SynOps platform, lead with specific insurance outcomes (94% fraud detection accuracy, specific processing benchmarks) rather than platform names.
