# Skills Chain
> Run /rfi-response then /solution-assistant in the same conversation. (~7 min)

## skill_chain
/rfi-response → /solution-assistant → /human

## context

/rfi-response drafts all 15 answers. /solution-assistant then enhances the differentiating questions with competitive proof points. Run them in order in the **same conversation** — the enhancement layer in /solution-assistant only works because /rfi-response already established the base answers.

## prompt
/rfi-response Respond to all 15 questions in the TrueNorth Insurance Group RFI for claims processing transformation. Use the client intelligence, competitive analysis, and RFI analysis in this conversation, plus our internal insurance capabilities data. For each question: lead with a specific, confident answer (not 'we believe' or 'our approach is'), include quantified evidence where possible, reference TrueNorth's specific situation when relevant. 200-300 words per question.

## prompt_2
/solution-assistant Map Genpact's insurance solutions to each of the 15 RFI requirements. For the differentiating questions (3, 5, 7, 10, 13, 15), add: competitive differentiators vs. Accenture/Cognizant/EXL, specific proof points from our case studies, and technology evidence (InsureStream, Genpact Cora AI). For the standard questions, ensure answers are complete but efficient. Flag any questions where our response might be weaker than competitors and suggest strengthening language. 500 words total for the enhancement layer.

## tip

The /solution-assistant output tells you WHERE your answers are weakest. Pay special attention to questions it flags — those are the ones most likely to eliminate you from the shortlist. Fix those before running /human.

## checkpoint

Compare one differentiating question before and after /solution-assistant. Did the specificity increase? Can you trace every claim to either [WEB], [DOC], [FOLDER], or [SKILL]? An untagged claim is an unsupported claim — it's a risk in a scored RFI.
