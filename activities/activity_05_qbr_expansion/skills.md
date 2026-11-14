# Skills Chain
> Run the 4-skill sequence in the same conversation. (~7 min)

## skill_chain
/earnings-agent → /account-research → /cxo-strategic-brief → /solution-assistant → /human

## context

This is the longest chain in the program. Run all 4 skills in the **same conversation**, in order. Each skill builds on the previous one. If you start a new conversation, you lose the compound effect.

Watch the time — with 4 skills to run before /human, pace yourself.

## prompt
/earnings-agent Horizon Energy Solutions — $7.3B utility. Analyze financial trajectory to frame 3 expansion opportunities: IT ops, customer service, and supply chain. Focus on: revenue and margin trends, CapEx allocation in IT and CX, operational cost structure, peer comparison on efficiency, and working capital implications. Build financial framing that CEO Santos and CFO Kim will respect. 500 words.

## prompt_optional
Add this line before pasting if you found specific Horizon metrics in Intel — skip if pressed:

"Horizon metric from my research: [paste one specific number from the earnings transcript or web search related to IT ops, customer service, or supply chain costs]"

The skill works without this. With it, the financial framing references Horizon's own numbers rather than peer averages.

## prompt_2
/account-research Horizon Energy Solutions — managing an existing $8M/year F&A engagement (3 years, 99.5% accuracy, $4.1M savings). Pitching expansion into IT ops, customer service, and supply chain at the QBR. CEO attending for the first time. Pull full account intelligence: engagement history, cross-sell potential, fit for energy IT operations, references from similar utility expansions, and competitive intelligence (Infosys has IT ops with contract expiring in 8 months). 600 words.

## prompt_2_optional
Add this line before pasting if Santos' priorities are clear from your Intel work — skip if pressed:

"Santos' stated priority: [paste the one quote or commitment from the earnings transcript most relevant to your first expansion area]"

The skill works without this. With it, the account intelligence positions the expansion against Santos' own priorities, not generic CEO concerns.

## tip

After running /earnings-agent and /account-research, run these two in the same conversation:

**Skill 3:** `/cxo-strategic-brief Frame the 3 expansion areas as strategic responses to Santos' stated priorities — not a vendor pitch. Use all research in this conversation. 500 words.`

**Skill 4:** `/solution-assistant Map specific Genpact capabilities to each of the 3 expansion areas. For each area, include: proof points from similar utility engagements, competitive differentiation, and a one-sentence CEO-ready opening statement. 400 words.`

This sequential build is what produces CEO-grade output.

## checkpoint

After all 4 skills: does the output open with Horizon's priorities (from earnings transcript and web research) BEFORE mentioning any Genpact capability? Maria Santos will decide in the first 3 minutes whether this is a strategic conversation or a vendor pitch. The order is the test.
