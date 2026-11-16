# Plugin Chain
> Run the 4-plugin sequence in the same conversation. (~7 min)

## skill_chain
/earnings-agent → /account-research → /cxo-strategic-brief → /solution-assistant → /human

## context

This is the longest chain in the programme. Run all 4 plugins in the **same conversation**, in order. Each plugin builds on the previous one. If you start a new conversation, you lose the compound effect.

Watch the time — with 4 plugins to run before /human, pace yourself.

## prompt
/earnings-agent Lloyds Banking Group — UK's largest retail bank, £450B total assets. Analyse financial trajectory to frame 3 expansion opportunities: mortgage operations, customer complaints management, and financial crime compliance. Focus on: revenue and margin trends, operational cost structure, regulatory compliance costs, peer comparison on efficiency, and what the latest results reveal about where operations is under pressure. Build financial framing that CEO Hartley and the CFO will respect. 500 words.

## prompt_optional
Add this line before pasting if you found specific Lloyds metrics in Intel — skip if pressed:

"Lloyds metric from my research: [paste one specific number from the earnings transcript or web search related to mortgage ops, complaints, or financial crime costs]"

The plugin works without this. With it, the financial framing references Lloyds' own numbers rather than peer averages.

## prompt_2
/account-research Lloyds Banking Group — managing an existing £6M/year F&A engagement (3 years, 99.3% accuracy, £3.8M savings). Pitching expansion into mortgage operations, customer complaints management, and financial crime compliance at the QBR. CEO attending for the first time. Pull full account intelligence: engagement history, cross-sell potential, fit for UK retail banking operations, references from similar UK banking expansions, and competitive intelligence. 600 words.

## prompt_2_optional
Add this line before pasting if Hartley's priorities are clear from your Intel work — skip if pressed:

"Hartley's stated priority: [paste the one quote or commitment from the earnings transcript most relevant to your first expansion area]"

The plugin works without this. With it, the account intelligence positions the expansion against Hartley's own priorities, not generic CEO concerns.

## tip

After running /earnings-agent and /account-research, run these two in the same conversation:

**Plugin 3:** `/cxo-strategic-brief Frame the 3 expansion areas as strategic responses to Hartley's stated priorities — not a vendor pitch. Use all research in this conversation. 500 words.`

**Plugin 4:** `/solution-assistant Map specific Genpact capabilities to each of the 3 expansion areas. For each area, include: proof points from similar UK banking engagements, competitive differentiation, and a one-sentence CEO-ready opening statement. 400 words.`

This sequential build is what produces CEO-grade output.

## checkpoint

After all 4 plugins: does the output open with Lloyds' priorities (from earnings transcript and web research) BEFORE mentioning any Genpact capability? David Hartley will decide in the first 3 minutes whether this is a strategic conversation or a vendor pitch. The order is the test.
