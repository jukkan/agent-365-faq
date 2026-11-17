# November 2026 Content Redesign — Ignite 2026

**Refresh date:** 2026-11-17
**Branch:** `ignite-2026-redesign` (not pushed)

## Why
Agent 365 has been GA since May 1, 2026. The site moves from product explainer to customer guide: what is included, what is paid, what it depends on, and the gotchas.

## Sources read (2026-11-17)
- Ignite 2026 post: https://techcommunity.microsoft.com/blog/agent-365-blog/whats-new-in-microsoft-agent-365-ignite-2026/4571753
- Service description (page dated 2026-09-30): https://learn.microsoft.com/en-us/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365
- Learn overview (2026-11-11): https://learn.microsoft.com/en-us/microsoft-agent-365/overview
- Licensing FAQ: https://www.microsoft.com/licensing/faqs/122
- GA post (2026-05-01)

## Structure changes
- New sections: Included vs paid (matrix from the service description), Dependencies, Gotchas.
- Removed sections: Scenarios, Governance, Architecture diagram, Ecosystem (still in git history).
- Categories replaced (8 → 7). FAQs rewritten: 46 → 22 new + 6 carried over.
- Carried over, NOT re-verified: `dev-001` to `dev-006` (category "Building Agents").
- Open Questions rewritten to 4 current items.

## Known source conflicts (flagged on site)
Service description vs Licensing FAQ differ on audit/eDiscovery, endpoint agent sync, blocking unsanctioned local agents, lifecycle automation, registry sync. Prerequisite license has three descriptions (Product Terms, Licensing FAQ, Learn overview). "ME7" (Ignite post) vs "E7/G7" (service description).

## To verify before publishing
- Product Terms page not re-read this pass; prerequisite text relies on the earlier June 2026 entry.
- Conditional Access (E3) / Identity Protection (E5) dependency wording is carried from the earlier Product Terms entry.
- Windows 365 for Agents pricing/availability not re-checked (removed from FAQs).
- `mermaid` is now unused in `package.json`; left in place.
