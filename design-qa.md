# Resume Hero First Viewport — Design QA

- Source visual truth: `/var/folders/k1/q7t2q5hn0398p33_ryrh16080000gp/T/codex-clipboard-07bd055a-79f3-45d6-ad89-01cf3e80a56a.png`
- Earlier implementation reference: `/var/folders/k1/q7t2q5hn0398p33_ryrh16080000gp/T/codex-clipboard-4c552391-4d77-4c5f-b2d3-a6f0f3a013cc.png`
- Browser implementation screenshot: `/Users/tvbs/Documents/myWeb/tmp/pdfs/resume-hero-first-viewport.png`
- Route: `http://localhost:5174/resume`
- Browser viewport: 1280 × 720 CSS px; implementation screenshot: 1265 × 712 px at device scale 1
- Source reference: 2048 × 1152 px; earlier implementation reference: 2048 × 920 px
- State: desktop, English resume

**Full-view comparison evidence**

The target’s first viewport includes the full Hero divider plus the opening of Selected Impact. The revised browser view now reproduces that same composition: Hero content remains above the divider while the section number, title, and first impact item enter the bottom of the first viewport.

**Focused region comparison evidence**

The Hero now runs from y=64 to y=524 at the test viewport, for a 460 px height. Selected Impact begins at y=524 and its visible header content starts at y=631, within the 720 px viewport. The earlier implementation pushed this content below the fold.

**Required fidelity surfaces**

- Fonts and typography: unchanged from the approved lighter name treatment; passed.
- Spacing and layout rhythm: desktop Hero minimum height reduced from 560 px to 460 px and bottom padding from 112 px to 72 px; the next section now enters the first viewport; passed.
- Colors and visual tokens: unchanged; passed.
- Image quality and asset fidelity: portrait remains the original extracted asset; passed.
- Copy and content: unchanged; passed.

**Findings**

- No actionable P0, P1, or P2 issues remain for the requested first-viewport composition.

**Comparison history**

- Earlier P2: excessive Hero blank space kept Selected Impact outside the first viewport.
- Fix: added a desktop-only 460 px minimum Hero height and 72 px bottom padding; mobile behavior was left unchanged.
- Post-fix evidence: divider ends at y=524 and Selected Impact is visibly introduced by y=631 in a 720 px viewport.

**Primary checks**

- Production build passed.
- No horizontal overflow.
- Browser logs contain no errors.

**Follow-up Polish**

- None required for this adjustment.

final result: passed
