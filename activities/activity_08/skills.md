# Plugin Chain
> Run the 3-plugin chain in the same conversation. (~7 min)

## skill_chain
/account-research → /earnings-agent → /cfo-deck-builder → /human

## context

The sequence: /account-research first (pulls Genpact's institutional knowledge), /earnings-agent second (builds the financial case from Q3 numbers), /cfo-deck-builder third (structures it as a CFO presentation). Run all three in the **same conversation** in order.

## prompt
/account-research Legal & General Group — 18-month relationship, £5M finance operations proposal stalled at CFO level. Meeting with CFO Catherine Morris in 48 hours. This conversation contains: Q3 earnings, Morris' transcript statements, and our 18-month deal history and contact map. Add Genpact-specific intelligence: existing engagement history, fit for insurance finance operations, internal references from similar UK insurer deals, and counter-positioning vs. Capgemini's insurance operations case study. 600 words.

## prompt_optional
Add this line before pasting to strengthen counter-positioning — skip if pressed:

"Breaking signal from my Intel: [paste the most significant thing you found about Legal & General in the last 30 days — Q3 result, Capgemini case study, any leadership signal]"

The plugin works without this. With it, the account intelligence includes real-time context that Morris will likely raise in the meeting.

## prompt_2
/earnings-agent Legal & General Group — build a financial case for a £5M finance operations transformation using Q3 numbers from this conversation: expense ratio 8.2% (CRM showed 7.8% — the 40bps deterioration is the pivot), board mandate 150bps improvement in 18 months. Analyse: cost of current expense ratio vs. target state, what 150bps improvement means in £M at L&G's scale, margin recovery path to board mandate, UK insurer peer benchmarks, cost of waiting 6 more months. I need numbers that make Catherine Morris say 'we cannot afford NOT to act.' 600 words.

## prompt_2_optional
Add this line before pasting if you extracted Morris' exact words in Intel — skip if pressed:

"Morris said: [paste the specific board mandate quote or expense ratio reference from the Q3 transcript]"

The plugin works without this. With it, the financial case opens with Morris' own words — harder to dismiss in the room.

## tip

After /account-research and /earnings-agent, run this third plugin in the same conversation:

**Plugin 3:** `/cfo-deck-builder Business case for Catherine Morris, CFO, Legal & General. £5M finance operations engagement. She said: 'Show me ROI, payback period, why invest now vs. next fiscal year.' Board mandate: 150bps expense ratio improvement in 18 months. Use HER Q3 numbers. ROI model, payback, 'why now,' downside case, 3 opening statements. 800 words.`

## checkpoint

After all 3 plugins: does the financial case use Q3 numbers (8.2% expense ratio, 150bps mandate) rather than the old CRM data (7.8%)? If it still references old data, the plugins did not have access to the latest information — go back and ensure the Q3 earnings data is in the conversation before running the plugins.
