# Intel
> Enable both plugins, then build client context and analyze the RFI before writing a single answer. (~8 min)

## plugin
Web Search, File Analysis

## context

TrueNorth's RFI says "generic responses will be scored lower." The intel phase is what prevents generic. Web search gives you TrueNorth's specific language and competitive context (what Accenture and EXL are already saying). The RFI analysis tells you which of the 15 questions actually determines the shortlist — where to spend your time.

Both happen in the **same Claude conversation**. Context compounds.

## do_this

1. Open Claude. Click the puzzle-piece icon and enable both **Web Search** and **File Analysis** plugins.
2. Paste Prompt 1 — Claude will research TrueNorth and map the competitive landscape.
3. Upload **sample_rfi.docx** (from the files panel on this page), then paste Prompt 2 to find out which questions determine the shortlist.

Do NOT start a new chat between steps.

## prompt
Search the web for two things:

**Part 1 — TrueNorth Insurance Group:**
TrueNorth Insurance Group, $8.4B property & casualty insurer. I'm responding to their RFI for claims processing transformation. Find: (1) their business overview — lines of business, geographic footprint, recent performance; (2) CEO/COO statements about claims modernization; (3) their claims technology stack — Guidewire, Duck Creek, or other; (4) recent news — leadership changes, M&A, regulatory issues, catastrophe impact; (5) any existing outsourcing partners being replaced. I need to speak THEIR language in the RFI responses. 400 words max.

**Part 2 — Competitive landscape:**
How do Accenture, Cognizant, and EXL position their insurance claims processing capabilities? What is each one saying to TrueNorth right now? Specifically: Accenture's SynOps platform claims, Cognizant's TriZetto/claims offerings, EXL's analytics-led approach. Where can Genpact differentiate without naming competitors directly? 300 words max.

## prompt_2
I'm uploading TrueNorth Insurance Group's RFI for claims processing transformation (15 questions). Analyze it:
1. KEY THEMES — what do the 15 questions collectively tell us about TrueNorth's priorities?
2. DIFFERENTIATING vs STANDARD — which questions are table stakes (every vendor answers similarly) vs. which determine the shortlist?
3. AI/ML DEPTH questions — identify and flag them (expect questions 3, 5, 12, 13)
4. DOMAIN EXPERTISE questions — identify and flag them (expect questions 1, 2, 7, 8, 10)
5. CULTURAL FIT test — which question tests fit vs. capability?
6. ELIMINATION RISK — which questions, if answered poorly, could eliminate us?

Prioritize where I spend the most time crafting responses. Output a ranked list. 400 words max.

## tip

The competitive search is as important as the client search. Knowing what Accenture claims lets you write responses that differentiate without naming them. If Accenture leads with SynOps platform, lead with specific insurance outcomes (94% fraud detection accuracy, specific processing benchmarks) rather than platform names.

## checkpoint

Before moving to Skills: can you name (1) one thing specific about TrueNorth's business that must appear in your RFI answers, (2) one claim from a competitor you can implicitly differentiate against, and (3) the 3-4 questions most likely to determine whether Genpact makes the shortlist? All three are needed.
