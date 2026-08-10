# Capabilities Case Summary Design QA

- Source visual truth: `/var/folders/k1/q7t2q5hn0398p33_ryrh16080000gp/T/codex-clipboard-11c78c59-cbde-424d-b4cd-a856f39ba892.png`
- Browser implementation screenshot: `/Users/tvbs/Documents/myWeb/selected-work-title-qa.png`
- Side-by-side comparison: `/Users/tvbs/Documents/myWeb/capabilities-summary-comparison.jpg`
- Browser viewport: 1265 × 712 CSS px, device scale factor 1
- State: homepage at `#selected-work`, desktop, ZH selected

## Comparison evidence

The reference and browser implementation were placed together in one comparison image. The implementation intentionally translates the reference's information structure—not its dark visual theme—into the portfolio's existing design language. Each case uses a prominent outcome-led headline, supporting paragraph, and capability tags. A separate browser capture verifies the new large, left-aligned Selected Work section heading above the cards.

## Required fidelity surfaces

- Fonts and typography: outcome-led project headings use the existing Google Sans Flex family, 500 weight, tight tracking, and a responsive 30–48 px range. Supporting copy uses full black with a responsive 14–18 px range.
- Spacing and layout rhythm: the left-aligned Selected Work heading shares the exact 40 px desktop gutter with the case cards and uses the same 64 px size as Work / Experience. Desktop uses a wider 1.15fr image column and .85fr text column, a 100 px column gap, 100 px top and bottom padding for each of the first four projects, and vertically centered content.
- Colors and tokens: Hero and capability sections use a pure white base with blue accents and black text; only the blue glow image and its blur remain in the Hero. Capability tags use the portfolio blue as simple underlined text without pill backgrounds.
- Image quality and fidelity: all four original project images are retained as real raster assets with consistent 1.65:1 crops.
- Copy and content: the previous number/method labels, Key Actions list, and separate Outcome bar were replaced by four concise outcome headlines, descriptions, and capability tags in both ZH and EN. The Moodii headline uses the specific 11% room-activation result and accurately attributes the improvement to real user research.

## Comparison history

1. Earlier layout used number/method labels on the left and split project information across separate top and bottom grids.
2. Structural redesign removed the 01–04 labels and replaced the component with a single two-column image/story card.
3. Added localized outcome headlines, supporting summaries, and capability tags for all four projects.
4. Added a large, left-aligned Selected Work section title and moved the navigation anchor to the section heading.
5. Browser verification confirms four headlines, zero legacy `.capability__name` labels, no horizontal overflow, and no console warnings or errors.

## Findings

No actionable P0, P1, or P2 differences remain for the requested structural redesign.

## Validation

- Production build: passed.
- `git diff --check`: passed.
- Hero introduction uses a concise, full-width, left-aligned editorial statement with normal capitalization, responsive 26–34 px desktop typography, 20 px mobile typography, and increased letter spacing. The original glow position and scale are preserved; a transparent-to-white transition at the Hero/Selected Work boundary removes the hard cut. Hero height follows its content with 100 px bottom spacing, preventing overlap with Selected Work.
- Desktop two-column structure: passed.
- Horizontal overflow: none.
- Browser console warnings/errors: none.
- Existing case-study click destinations: preserved.
- Selected Work navigation anchor and left alignment: passed.
- Contact remains in normal document flow without reveal translation, preventing position movement when the final Work row enters view.

## Follow-up polish

- P3: wording can be refined further if the user wants a more metric-heavy or more narrative portfolio voice.

final result: passed
