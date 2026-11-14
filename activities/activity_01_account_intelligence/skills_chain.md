# Skills Chain

> Run /account-research then /earnings-agent in the same conversation. Context compounds. (~8 minutes)

## research_mode
Claude Skills | Building layered account intelligence where each skill deepens what the previous one found

## context

Skills work because they chain. /account-research builds the account picture: who they are, how they operate, where they are under pressure. /earnings-agent adds the financial layer: how the numbers connect to the operational priorities you have already identified. Running both in the same conversation means the second skill has the first skill's context — it does not start from scratch. This compounding is the difference between a research dump and an intelligence brief.

## tools_this_phase
/account-research
/earnings-agent
Run both in the SAME Claude conversation, in this order.

## do_this

1. In Claude, run /account-research. Paste in the Meridian Health scenario and your findings from Phases 2 and 3. Let it build the account profile.
2. Without starting a new conversation, run /earnings-agent on Meridian Health. Tell it what you learned from /account-research first: "Based on the account profile we just built, now run /earnings-agent to show me how their financial position connects to the operational priorities we identified."
3. Extract the three most important signals that change how you would open the meeting. These go into your brief in Phase 5.

## prompting_guideline

When you transition between skills, tell Claude what you learned from the previous skill. The handoff prompt matters: "Based on the account profile we just built, now use /earnings-agent to surface how Meridian's financial reporting connects to the operational challenges we identified — specifically anything that the VP of Operations would be measured on." Keep everything in one conversation. The context compounds.

## checkpoint

Does your skills chain output add anything beyond what you found in Phases 2 and 3? If the skills just restated the same information, you need to build forward rather than restart. The /earnings-agent should be adding a financial dimension that the web search did not give you.
