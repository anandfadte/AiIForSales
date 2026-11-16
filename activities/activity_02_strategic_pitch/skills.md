# Plugin Chain
> Run /cxo-strategic-brief then /cfo-deck-builder in the same conversation. (~7 min)

## skill_chain
/cxo-strategic-brief → /cfo-deck-builder → /human

## context

The sequence matters. /cxo-strategic-brief frames the narrative first. /cfo-deck-builder builds the financial model on top of that strategic frame. Run them in order in the **same conversation**.

## prompt
/cxo-strategic-brief C-level strategic framing for Finance Director Richard Wallis at Aviva plc, £8M finance operations transformation. Wallis is ex-BlackRock CFO UK — data-driven, hates fluff. Use all research in this conversation: web financials, investor presentation analysis, and deal context. Frame Genpact as the partner who delivers operational expense ratio improvement — measurable financial return, not process improvement. 600 words.

## prompt_optional
Add this line before pasting to sharpen the output — skip if pressed for time:

"Wallis' exact words: [paste the specific quote or financial figure you extracted from the investor presentation]"

The plugin works without this. With it, the framing reflects Wallis' own language rather than a generic CFO narrative.

## prompt_2
/cfo-deck-builder CFO business case for Richard Wallis, Aviva plc. £8M finance operations engagement over 3 years.

Use these numbers from the investor presentation (already in this conversation):
- Expense ratio: 8.6% → target 7.0% (board mandate: 150bps improvement in 18 months)
- Combined ratio: 97.4% (every 10bps improvement = ~£26M at Aviva's GWP scale)
- Finance operations cost: £340M annually, 2.3M transactions/year
- GWP: £26B (UK's largest insurer — scale makes efficiency gains significant)
- Wallis' mandate: 150bps expense ratio improvement in 18 months

Build: ROI model (NPV, IRR), payback period, cost of waiting, downside case, 3 opening statements. 800 words.

## prompt_2_optional
Add this line before pasting if you found Wallis' exact words in Intel — skip otherwise:

"Wallis said: [paste his direct quote about expense ratio or ROI expectations]"

The plugin works with the numbers above. With his direct quote, the opening statements use his own language — harder to dismiss.

## tip

Notice how /cfo-deck-builder produces a sharper ROI model because /cxo-strategic-brief already established the strategic frame? Each plugin compounds the previous. The financial argument is stronger when it sits inside a strategic narrative.

## checkpoint

Do you have a year-one ROI figure that uses Aviva's own numbers? And a "cost of waiting" calculation — what does each month of delay cost Wallis in expense ratio basis points? If either uses a benchmark rather than Aviva's specific data, go back and extract the actual number.
