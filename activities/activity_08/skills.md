# Skills Chain
> Run the 3-skill chain in the same conversation. (~7 min)

## skill_chain
/account-research → /earnings-agent → /cfo-deck-builder → /human

## context

The sequence: /account-research first (pulls Genpact's institutional knowledge), /earnings-agent second (builds the financial case from Q3 numbers), /cfo-deck-builder third (structures it as a CFO presentation). Run all three in the **same conversation** in order.

## prompt
/account-research QuantumEdge Technologies — 18-month relationship, $6M O2C proposal stalled at CFO level. Meeting with CFO Sarah Chen in 48 hours. This conversation contains: Q3 earnings, Chen's transcript statements, and our 18-month deal history and contact map. Add Genpact-specific intelligence: existing engagement history, fit for enterprise software O2C, internal references from similar SaaS/cloud deals, and counter-positioning vs. Infosys' O2C case study. 600 words.

## prompt_optional
Add this line before pasting to strengthen counter-positioning — skip if pressed:

"Breaking signal from my Intel: [paste the most significant thing you found about QuantumEdge in the last 30 days — news, Q3 result, leadership, competitor move]"

The skill works without this. With it, the account intelligence includes real-time context that Chen will likely raise in the meeting.

## prompt_2
/earnings-agent QuantumEdge Technologies — build a financial case for a $6M O2C transformation using Q3 numbers from this conversation: DSO 48 days, operating margin 16.8% (down 200bps), invoice error rate 12.5%, $32M locked in receivables. Analyse: cost of current state vs. transformed state, working capital release at 48→30 DSO, margin recovery path to board's 12-month mandate, SaaS peer benchmarks, cost of waiting 6 more months. I need numbers that make Sarah Chen say 'we cannot afford NOT to act.' 600 words.

## prompt_2_optional
Add this line before pasting if you extracted Chen's exact words in Intel — skip if pressed:

"Chen said: [paste the specific board mandate quote or DSO reference from the Q3 transcript]"

The skill works without this. With it, the financial case opens with Chen's own words — harder to dismiss in the room.

## tip

After /account-research and /earnings-agent, run this third skill in the same conversation:

**Skill 3:** `/cfo-deck-builder Business case for Sarah Chen, CFO, QuantumEdge. $6M O2C engagement. She said: 'Show me ROI, payback period, why invest now vs. next fiscal year.' Board mandate: 200bps margin recovery in 12 months. Use HER Q3 numbers. ROI model, payback, 'why now,' downside case, 3 opening statements. 800 words.`

## checkpoint

After all 3 skills: does the financial case use Q3 numbers (48-day DSO, 16.8% margin) rather than the old CRM data (45-day DSO)? If it still references old data, the skills did not have access to the latest information — go back and ensure the Q3 earnings data is in the conversation before running the skills.
