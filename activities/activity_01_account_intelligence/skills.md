# Skills Chain
> Run /account-research then /earnings-agent in the same conversation. (~7 min)

## skill_chain
/account-research → /earnings-agent → /human

## context

Skills run AFTER web research and file analysis — richer context produces better outputs. Run each skill below in the **same conversation** you've been building. Do NOT start a new chat.

## prompt
/account-research Meridian Health Systems — I'm a Senior Account Executive at Genpact preparing for a first meeting with VP Operations James Morrison (formerly Mayo Clinic). My conversation already contains: web research on Meridian and James Morrison, analysis of their FY2024 annual report (AR 52 days, denial rate 9.2%, margin 2.8%), and our CRM notes. Add Genpact-specific intelligence — existing engagement history, solution fit for regional hospital systems, internal references from similar healthcare deals, and anything from GKnowledge that strengthens our position. Limit to 600 words.

## prompt_2
/earnings-agent Meridian Health Systems — Analyze their financial position to build a business case for operations transformation. Focus on:
1. Revenue cycle metrics: 52-day AR vs 42-day benchmark, 9.2% denial rate vs 5-7% benchmark
2. Cost structure: $12.80 per claim vs $8.50 target, operating margin 2.8% vs 3.4% last year
3. Working capital impact: quantify the cost of excess AR days
4. Acquisition integration costs: what's the financial drag from integrating 2 hospitals?
5. Peer comparison: how does Meridian compare to similar regional systems?

I need numbers that make the CFO and VP Ops say 'we can't afford NOT to act.' Cross-reference with their annual report data already in this conversation. 500 words.

## tip

Notice how /earnings-agent produces sharper output because it already has the annual report numbers from Phase 3? That's compound intelligence — each layer makes the next layer better. Run /human in Phase 6 to polish everything into CXO language.

## checkpoint

Before moving to Humanize: do you have a specific dollar figure the CFO would react to? ("Each additional day of AR beyond benchmark costs Meridian approximately $X in working capital.") If the number is a benchmark, not Meridian's own data, go back and extract the actual figure.
