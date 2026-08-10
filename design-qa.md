# Work / Experience Design QA

- Source visual truth: `/var/folders/k1/q7t2q5hn0398p33_ryrh16080000gp/T/codex-clipboard-3f188de8-d046-42ee-b36f-f94550fa669f.png`
- Implementation screenshot: `/Users/tvbs/Documents/myWeb/work-desktop-qa.png`
- Comparison image: `/Users/tvbs/Documents/myWeb/work-qa-comparison.jpg`
- Source pixels: 1104 × 1186
- Comparison viewport: 1104 × 1186 CSS px, device scale factor 1
- State: homepage scrolled to `#work-experience`, desktop, ZH selected
- Responsive evidence: 390 × 844 CSS px, stored at `/Users/tvbs/Documents/myWeb/work-mobile-qa.png`

## Full-view comparison evidence

The supplied reference and browser-rendered implementation were normalized to the same 1104 × 1186 frame and placed side by side. The implementation reproduces the centered blue heading, APP/WEB grouping, three-column desktop grid, image order, typography hierarchy, and white background. A focused region comparison was not needed because the complete work section and all repeated card structures were legible in the normalized full-view comparison.

## Required fidelity surfaces

- Fonts and typography: Google Sans Flex is retained from the portfolio. Heading weight, blue color, compact card-title hierarchy, and small metadata labels match the reference closely.
- Spacing and layout rhythm: three equal desktop columns, consistent image ratios, broad section breathing room, and compact row spacing are implemented. Tablet and mobile collapse to two and one columns respectively.
- Colors and visual tokens: existing portfolio blue `#165dfb`, black text, and white background match the source.
- Image quality and asset fidelity: all nine supplied raster assets are used directly with consistent cover crops; there are no placeholders or code-drawn substitutes.
- Copy and content: APP and WEB labels, project titles, and design-discipline labels match the supplied reference.

## Comparison history

1. Initial pass found a P2 vertical-density mismatch: the second WEB row sat too low and card typography was heavier/larger than the source.
2. Fixes: reduced section and heading spacing, tightened category-to-grid spacing and grid row gap, and reduced card title/metadata sizes.
3. Post-fix evidence: the updated browser render preserves all nine cards, aligns the section rhythm more closely to the reference, has no desktop or mobile horizontal overflow, and reports no browser console warnings or errors.

## Findings

No actionable P0, P1, or P2 differences remain.

## Interaction and responsive checks

- Verified all three linked APP cards expose keyboard-focusable anchors and retain hover feedback.
- Verified 9 cards render.
- Verified desktop three-column layout.
- Verified mobile single-column layout at 390 px with `scrollWidth === clientWidth`.
- Checked browser console warnings and errors: none.
- Production build and `git diff --check`: passed.

## Follow-up polish

- P3: exact line wrapping may vary slightly when the remote font is unavailable and the browser falls back to Helvetica/Arial.

final result: passed
