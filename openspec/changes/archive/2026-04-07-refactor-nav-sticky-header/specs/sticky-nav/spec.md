## ADDED Requirements

### Requirement: Single sticky header

The site SHALL use a single `<header>` element per page that remains fixed at the top of the viewport using CSS `position: sticky; top: 0`. The header SHALL NOT be duplicated into a separate fixed overlay element.

#### Scenario: Header visible at page top

- **WHEN** the user loads a page and has not scrolled
- **THEN** the header is visible at the top of the page

#### Scenario: Header remains fixed while scrolling

- **WHEN** the user scrolls down past the header's natural position
- **THEN** the header remains anchored at the top of the viewport

#### Scenario: No duplicate header HTML

- **WHEN** the page DOM is inspected
- **THEN** there is exactly one `<header>` element and no element with `id="sticky-menu"`

### Requirement: Mobile hamburger menu opens and closes

The mobile hamburger button SHALL toggle the visibility of the mobile navigation menu. Clicking the button once SHALL show the menu; clicking again SHALL hide it.

#### Scenario: Menu opens on first tap

- **WHEN** the user taps the hamburger icon on a mobile viewport
- **THEN** the mobile navigation menu becomes visible

#### Scenario: Menu closes on second tap

- **WHEN** the mobile navigation menu is open and the user taps the close icon
- **THEN** the mobile navigation menu is hidden

#### Scenario: Page scroll is locked while menu is open

- **WHEN** the mobile navigation menu is open
- **THEN** the page body SHALL NOT scroll (`overflow: hidden` is applied)

#### Scenario: Page scroll is restored when menu closes

- **WHEN** the mobile navigation menu is closed
- **THEN** the page body SHALL scroll normally (`overflow` is restored)

### Requirement: Sticky header background is opaque

The header's background SHALL be fully opaque so that page content scrolling beneath it is not visible through the header.

#### Scenario: Content scrolls behind header without bleed-through

- **WHEN** the user scrolls and page content passes behind the sticky header
- **THEN** the header background fully covers the content behind it
