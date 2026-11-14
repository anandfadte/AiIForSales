# Skills Chain
> Run the 3-skill chain in the same conversation. (~7 min)

## skill_chain
/account-research → /earnings-agent → /cfo-deck-builder → /human

## context

The sequence: /account-research first (pulls Genpact's institutional knowledge), /earnings-agent second (builds the financial case from Q3 numbers), /cfo-deck-builder third (structures it as a CFO presentation). Run all three in the **same conversation** in order.

## prompt
/account-research QuantumEdge Technologies — 18-month relationship, $6M O2C proposal stalled at CFO level. Meeting with CFO Sarah Chen in 48 hours. This conversation contains: web research including Q3 earnings, Chen's earnings transcript statements, and our 18-month deal history and contact map. Add Genpact-specific intelligence — existing engagement history if any, solution fit for enterprise software O2C, internal references from similar SaaS/cloud company deals, and counter-positioning vs. Infosys' O2C case study. 600 words.

## prompt_2
/earnings-agent QuantumEdge Technologies — build financial case for $6M O2C transformation using Q3 numbers: DSO 48 days, operating margin 16.8% (down 200bps), invoice error rate 12.5%, $32M locked in receivables. Analyze: cost of current state vs. transformed state, working capital release at 48→30 DSO, margin recovery path to board's 12-month mandate, benchmark vs. SaaS peer group, quantified cost of waiting 6 more months. I need numbers that make Sarah Chen say 'we can't afford NOT to act.' 600 words.

## tip

After /account-research and /earnings-agent, run: "/cfo-deck-builder Business case for Sarah Chen, CFO, QuantumEdge. $6M O2C engagement. She said: 'Show me ROI, payback period, why invest now vs. next fiscal year.' Board mandate: 200bps margin recovery in 12 months. Use HER Q3 numbers. ROI model, payback, 'why now,' downside case, 3 opening statements. 800 words."

## checkpoint

After all 3 skills: does the financial case use Q3 numbers (48-day DSO, 16.8% margin) rather than the old CRM data (45-day DSO)? If it still references old data, the skills didn't have access to the latest information — go back and ensure the Q3 earnings data is in the conversation before running the skills.
