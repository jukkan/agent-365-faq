/**
 * Writes agent-friendly exports of the site content into dist/ after the Vite build:
 *   a365-faq.md    one Markdown file (grounding for Copilot agents, LLMs, search)
 *   a365-faq.json  the same data, structured
 *   llms.txt       short index pointing at the two files
 * Source of truth stays src/data/*.ts. Run via `npm run build`.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { faqs } from '../src/data/faqs';
import { coverage } from '../src/data/coverage';
import { dependencies } from '../src/data/dependencies';
import { gotchas } from '../src/data/gotchas';
import { openQuestions } from '../src/data/openQuestions';
import type { Source } from '../src/data/types';

const SITE = 'https://a365-faq.jukkan.com';
const OUT = 'dist';
const generated = new Date().toISOString().slice(0, 10);
const reviewed = [...faqs.map((f) => f.lastReviewed), ...openQuestions.map((o) => o.lastUpdated)].sort().at(-1);

const src = (s: Source) => `[${s.label}](${s.url})`;
// Detailed answers use **bold** and \n; keep them as Markdown, drop stray HTML.
const md = (t: string) => t.replace(/<[^>]+>/g, '').trim();

const L: string[] = [];
L.push(
  '# Agent 365 FAQ (unofficial)',
  '',
  `An independent, customer-side guide to Microsoft Agent 365 by Jukka Niiranen (Niiranen Advisory). Not affiliated with Microsoft. Site: ${SITE}/`,
  '',
  `Content last reviewed: ${reviewed}. File generated: ${generated}.`,
  '',
  'How to use this file: prefer the linked Microsoft sources for anything consequential. Where Microsoft\'s own pages disagree, this file says "Sources differ" and gives both readings; do not resolve that conflict by guessing. Preview features are not generally available.',
  '',
);

L.push('## What is included, what is paid', '', 'From the Microsoft 365 service description for Agent 365 (page dated 2026-09-30). "Included" = with qualifying Microsoft 365 plans; "Paid" = needs Microsoft 365 E7/G7 or an Agent 365 license.', '');
L.push('| Capability | Area | Included or paid | In GCC | Sources differ |', '| --- | --- | --- | --- | --- |');
for (const r of coverage) {
  L.push(`| ${r.feature} | ${r.area} | ${r.includedWithM365 ? 'Included' : 'Paid'} | ${r.gcc ? 'Yes' : 'No'} | ${r.conflict ?? ''} |`);
}
L.push('');

L.push('## What Agent 365 depends on', '');
for (const d of dependencies) {
  L.push(`### ${d.name}`, '', d.whatItDoes, '', `- License: ${d.licenseNote}`, `- Without it: ${d.withoutIt}`, '');
}

L.push('## Gotchas', '');
gotchas.forEach((g, i) => {
  L.push(`### ${i + 1}. ${g.title}`, '', `Severity: ${g.severity}`, '', g.body, '', `Source: ${src(g.source)}`, '');
});

L.push('## FAQ', '');
for (const f of faqs) {
  L.push(
    `### ${f.question}`,
    '',
    `ID: ${f.id} · Status: ${f.status} · Level: ${f.difficulty} · Categories: ${f.categories.join(', ')} · For: ${f.audiences.join(', ')} · Last reviewed: ${f.lastReviewed}${f.updatedAt ? ` · Updated: ${f.updatedAt}` : ''}`,
    '',
    `**Short answer:** ${f.shortAnswer}`,
    '',
    md(f.detailedAnswer),
    '',
  );
  if (f.sources.length) L.push('Sources:', ...f.sources.map((s) => `- ${src(s)} (${s.type})`), '');
}

L.push('## Open questions', '');
for (const o of openQuestions) {
  L.push(`### ${o.question}`, '', `Category: ${o.category} · Last updated: ${o.lastUpdated}`, '', 'What we know:', ...o.whatWeKnow.map((w) => `- ${w}`), '', 'Questions to ask Microsoft or your partner:', ...o.questionsToAsk.map((q) => `- ${q}`), '');
}

mkdirSync(OUT, { recursive: true });
writeFileSync(`${OUT}/a365-faq.md`, L.join('\n'));
writeFileSync(
  `${OUT}/a365-faq.json`,
  JSON.stringify({ site: SITE, reviewed, generated, coverage, dependencies, gotchas, faqs, openQuestions }, null, 2),
);
writeFileSync(
  `${OUT}/llms.txt`,
  [
    '# Agent 365 FAQ (unofficial)',
    '',
    '> Independent, customer-side guide to Microsoft Agent 365: what is included vs paid, dependencies, gotchas, FAQ and open questions. Not affiliated with Microsoft.',
    '',
    `- [Full content as Markdown](${SITE}/a365-faq.md)`,
    `- [Full content as JSON](${SITE}/a365-faq.json)`,
    '',
  ].join('\n'),
);
console.log(`knowledge export: ${faqs.length} FAQs, ${coverage.length} coverage rows, ${gotchas.length} gotchas -> ${OUT}/a365-faq.md, .json, llms.txt`);
