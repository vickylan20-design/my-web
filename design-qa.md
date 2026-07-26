# AI Chatbot Detail — Design QA

Source visual truth: `/Users/tvbs/Downloads/0724_Selected Work_2.png`

Implementation: `http://localhost:4173/?project=health-chatbot`

State: default detail-page state, no hover or menu interaction.

## Evidence

- Source is a desktop portfolio-detail reference image.
- The local implementation was opened in the in-app browser and checked for routing, hero content, project-goal panel, research chart, responsive layout, and footer rendering.
- Browser capture is currently constrained to a narrow in-app viewport, so it cannot be normalized to the supplied desktop reference frame. The observed narrow layout is responsive and does not overflow.

## Fidelity surfaces

- Typography: the large blue display heading, blue section headings, small metadata labels, Chinese body copy, and achievement hierarchy are implemented.
- Spacing and layout rhythm: desktop uses the requested wide hero/goal split, content grid, chart/table grouping, research imagery, numbered decisions, and achievement section; narrow screens stack these blocks.
- Colors and tokens: implemented with the existing portfolio blue and the soft blue-to-white case-study background.
- Image quality and assets: the provided Health 2.0 product image is used for the hero. The source includes three separate interview photographs that were not supplied as individual assets; the implementation temporarily reuses the project image with different crops for that strip.
- Copy/content: project-specific overview, research, design-decision, and achievement copy are present.

## Findings

- [P1] Research-photo strip is not asset-identical.
  Location: `HealthChatbotDetail.jsx`, `chatbot-case__research-photos`.
  Evidence: the source has three distinct user-interview photos; the implementation reuses the available Health 2.0 image.
  Impact: this materially changes the visual storytelling in the synthesis section.
  Fix: replace the three images with the interview photos when supplied.

- [P1] Desktop visual comparison is unverified.
  Location: full page.
  Evidence: source is desktop; browser capture available to this run is narrow and not the same viewport.
  Impact: precise desktop spacing and typography cannot be certified against the reference.
  Fix: capture the route in a desktop-size browser viewport, compare full page and focused hero/research regions, then iterate.

## Primary interactions tested

- Direct route `?project=health-chatbot` loads the AI Chatbot detail page.
- Homepage capability 03 opens the same route.

## Final result

blocked
