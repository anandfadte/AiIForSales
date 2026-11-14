# Skills Chain
> Run /account-research then /earnings-agent in the same conversation. (~7 min)

## skill_chain
/account-research → /earnings-agent → /human

## context

Skills run AFTER web research and file analysis — richer context produces better outputs. Run each skill below in the **same conversation** you have been building. Do NOT start a new chat.

## prompt
/account-research Meridian Health Systems — Genpact Senior Account Executive, first meeting with VP Operations James Morrison in 5 days. This conversation already has: web research on Meridian, annual report analysis (AR 52 days, denial rate 9.2%, margin 2.8%), and CRM notes on Morrison. Add Genpact-specific intelligence: existing engagement history, fit for regional hospital systems, and references from similar healthcare deals. 600 words.

## prompt_optional
Add this line before pasting to sharpen the output — skip if you are pressed for time:

"Key signal from my research: [paste the most specific Meridian fact or Morrison detail you found in Intel]"

The skill works without this line. With it, the output references your specific research rather than generic account intelligence.

## prompt_2
/earnings-agent Meridian Health Systems — Build a business case for operations transformation using the financial data already in this conversation. Focus on: AR days gap (52 vs 42-day benchmark), denial rate gap (9.2% vs 5–7%), cost per claim ($12.80 vs $8.50 target), and operating margin compression (2.8% vs 3.4% prior year). Quantify the working capital cost of excess AR days. What number would make a CFO say they cannot afford to wait? 500 words.

## prompt_2_optional
Add this line before pasting to sharpen the output — skip if you are pressed for time:

"Prioritise this metric from the annual report: [paste the one number or CFO quote that stood out most]"

The skill works without this. With it, the business case is built around Meridian's own language, not benchmarks.

## tip

Notice how /earnings-agent produces sharper output because it already has the annual report numbers from Phase 2? That is compound intelligence — each layer makes the next layer better. Run /human in Phase 4 to polish everything into CXO language.

## checkpoint

Before moving to Humanize: do you have a specific dollar figure the CFO would react to? ("Each additional day of AR beyond benchmark costs Meridian approximately $X in working capital.") If the number is a benchmark, not Meridian's own data, go back and extract the actual figure.
