# Intel
> Enable both plugins, then gather live web intelligence and extract numbers from their annual report. (~8 min)

## plugin
Web Search, File Analysis

## context

This is where generic account knowledge becomes specific deal intelligence. Web search gives you live signals from the last 90 days. The annual report extract gives you the CFO's own words and their actual financial metrics — numbers that beat any industry benchmark in a meeting.

Both happen in the **same Claude conversation**. Context compounds.

## do_this

1. Open Claude. Click the puzzle-piece icon and enable both **Web Search** and **File Analysis** plugins.
2. Paste Prompt 1 — Claude will search for live Meridian signals and James Morrison's profile.
3. Upload **annual_report_excerpt.docx** (from the files panel on this page), then paste Prompt 2 to extract the numbers that matter.

Do NOT start a new chat between steps.

## prompt
Search the web for two things:

**Part 1 — Meridian Health Systems intelligence:**
Meridian Health Systems, $3.2B regional hospital network in Minneapolis MN with 12 hospitals. I have a first meeting with their VP of Operations in 5 days. Find: (1) news from the last 90 days — acquisitions, partnerships, executive hires, strategic announcements; (2) current industry pressures on regional hospital systems — margin compression, labor costs, AR challenges; (3) their competitive positioning and any vendor changes. Focus on intelligence a VP of Operations would react to, not marketing copy. 400 words max.

**Part 2 — James Morrison executive profile:**
James Morrison, VP of Operations at Meridian Health Systems, formerly at Mayo Clinic. He said "Impress me in the first 5 minutes." Find: (1) his professional background and previous roles; (2) any public statements — conference talks, interviews, articles about operations or healthcare efficiency; (3) 3 specific things I can reference in the first 5 minutes that show I researched HIM, not just his company. 300 words max.

## prompt_2
I'm uploading Meridian Health Systems' FY2024 Annual Report excerpt. Analyze it and extract:
1. TOP PRIORITIES — what did management say matters most for FY2025?
2. EXACT NUMBERS — AR days, denial rate, cost per claim, operating margin (get the precise figures, not approximations)
3. CFO AND VP QUOTES — their exact words about operational challenges and vendor expectations
4. ACQUISITION INTEGRATION — financial drag from integrating 2 new hospitals
5. VENDOR SIGNALS — any mentions of evaluating external partners or seeking domain expertise

Cross-reference with the web research already in this conversation. Where do the filings confirm or contradict the news? 400 words max.

## tip

Tag web findings with [WEB] and document findings with [DOC] — it makes the skills chain sharper because you can see which intelligence came from where. Specific numbers from THEIR annual report beat any industry benchmark: "52-day AR vs 42-day benchmark" lands harder than "above average AR days."

## checkpoint

Before moving to Skills: do you have (1) one live fact about Meridian from the last 90 days, (2) one specific thing about James Morrison you can reference in the first 5 minutes, and (3) at least 3 exact numbers from the annual report? If you're missing any of these, go back — the skills chain produces sharper output with richer context.
