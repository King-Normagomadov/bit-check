# Current Website SEO Audit

## 1. Current Site Structure

- `/index.html` (Homepage)
- `/about.html`
- `/contact.html`
- `/services.html`
- `/insights.html`
- `/impressum.html`
- `/datenschutz.html`
- `/services/`
  - `backup-business-continuity.html`
  - `it-health-checks.html`
  - `managed-it-support.html`
  - `microsoft-365-cloud.html`
  - `network-infrastructure.html`

## 2. Page Inventory

| Page | Current URL | Title | H1 | Main purpose | Existing SEO target | Status |
| ---- | ----------- | ----- | -- | ------------ | ------------------- | ------ |
| Homepage | `/` | BitCheck — Zuverlässige IT. Sicheres Unternehmen. \| IT-Services für kleine Unternehmen in Bayern | Zuverlässige IT. Sicheres Unternehmen. | Establish Bit-Check as IT provider | IT-Services für kleine Unternehmen in Bayern | Needs work |
| About | `/about.html` | Über BitCheck — Ihr IT-Partner in Bayern | Über BitCheck | About us | IT-Partner in Bayern | Good |
| Contact | `/contact.html` | Kontakt — BitCheck \| IT-Services für Unternehmen in Bayern | Kontakt | Contact info/form | IT-Services in Bayern | Good |
| Services | `/services.html` | IT-Leistungen für kleine Unternehmen \| BitCheck | Unsere Leistungen | Service overview | IT-Leistungen kleine Unternehmen | Needs work |
| Managed IT | `/services/managed-it-support.html` | Managed IT-Support für kleine Unternehmen \| BitCheck | Managed IT-Support | Service page | Managed IT-Support in Bayern | Needs work |
| Network | `/services/network-infrastructure.html` | Netzwerk & Infrastruktur für Unternehmen \| BitCheck | Netzwerk & Infrastruktur | Service page | Netzwerk & Infrastruktur in Bayern | Needs work |
| M365 & Cloud | `/services/microsoft-365-cloud.html` | Microsoft 365 & Cloud Management \| BitCheck | Microsoft 365 & Cloud | Service page | Microsoft 365 & Cloud in Bayern | Needs work |
| Backup | `/services/backup-business-continuity.html` | Backup & Business Continuity \| BitCheck | Backup & Business Continuity | Service page | Backup in Bayern | Needs work |
| IT-Health-Check | `/services/it-health-checks.html` | IT-Health-Check & Beratung für Unternehmen \| BitCheck | IT-Checks & Beratung | Service page | IT-Health-Check & Beratung in Bayern | Needs work |
| Insights | `/insights.html` | IT-Insights — Praxiswissen für Unternehmen \| BitCheck | Praxiswissen für Ihr Unternehmen | Blog/Resources | Praxiswissen | Needs work |
| Impressum | `/impressum.html` | Impressum — BitCheck | Impressum | Legal | None | Good |
| Datenschutz | `/datenschutz.html` | Datenschutzerklärung — BitCheck | Datenschutzerklärung | Legal | None | Good |

## 3. Current SEO Elements

- **Titles & Meta Descriptions:** Present across all pages but predominantly target the broader region of "Bayern" instead of the localized strategy focused on "Landshut".
- **H1 / H2 Structure:** Implemented well visually and structurally; however, H1s focus on general service names rather than primary target keywords (e.g., "Managed IT-Support" instead of "Managed IT Landshut").
- **Canonical Tags:** Present and explicitly hardcoded with `.html` extensions (e.g., `https://www.bitcheck.de/services.html`). 
- **Robots Directives:** Correctly configured on legal pages (`noindex, follow`) and homepage (`index, follow`). Explicit tags are missing on some service pages, defaulting to standard indexing.
- **Internal Links:** Present within the navigation and footer but will need adjustments once new pages are added.
- **Images/Alt Text:** Standard structural implementation.

## 4. Comparison With Keyword Map

| Planned Page | Existing Page | Match | Action Needed |
| ------------ | ------------- | ----- | ------------- |
| Homepage | `/index.html` | Partial | Update title, description, and H1/H2 to target "IT Dienstleister Landshut" |
| Managed IT Support | `/services/managed-it-support.html` | Partial | Update metadata and content to target "Managed IT Landshut" |
| Network & Infrastructure | `/services/network-infrastructure.html` | Partial | Update metadata and content to target "IT Infrastruktur Landshut" |
| Microsoft 365 & Cloud | `/services/microsoft-365-cloud.html` | Partial | Update metadata to target "Microsoft 365 Betreuung Unternehmen" |
| Backup & Business Continuity | `/services/backup-business-continuity.html` | Partial | Update metadata to target "Backup Landshut" |
| IT Security | (None) | None | Create new service page mapped to "IT Sicherheit Landshut" |
| IT Health Check / Consulting | `/services/it-health-checks.html` | Partial | Update metadata to target "IT Beratung Landshut" |
| Landshut Local Landing Page | (None) | None | Create new dedicated landing page for "IT Dienstleister Landshut" |
| Insights / Blog | `/insights.html` | Partial | Optimize existing structure to serve as a hub for topic clusters |

## 5. URL Assessment

- **Preserved:** `/`, `/about.html`, `/contact.html`, `/insights.html`, `/services.html`, `/impressum.html`, `/datenschutz.html`, `/services/managed-it-support.html`, `/services/network-infrastructure.html`, `/services/microsoft-365-cloud.html`, `/services/backup-business-continuity.html`, `/services/it-health-checks.html`
- **Potentially changed later:** The `.html` extensions on service and main pages.
- **Investigated:** Dropping `.html` extensions globally if server/hosting configuration permits.



## 6. Technical SEO Issues

- **Geographic Targeting Mismatch:** Existing meta tags and content target "Bayern", which conflicts with the hyper-local "Landshut" keyword strategy.
- **Dynamic Content Injection:** Many heading tags (like in `index.html`) use `data-i18n` attributes for client-side population. If JavaScript execution fails or is slow, search engines might not properly index the H1 tags.
- **Missing Explicit Robots Tags:** Several service pages lack an explicit `<meta name="robots" content="index, follow">` directive (though they are indexed by default).

## 7. Template / Design Structure

The current template is highly structured, relying on defined CSS classes (`page-hero`, `section`, `container`, etc.) and a clear semantic layout for headings. The design structure fully supports the planned SEO architecture. No visual or template modifications are needed; we can easily duplicate existing service pages (e.g., `managed-it-support.html`) to create the missing "IT Security" page, and update the text/metadata within the existing HTML tags across the site without changing the visual identity.

## 8. Recommended Next Steps

1. Update the **Homepage** metadata and headings to focus on "Landshut" rather than "Bayern".
2. Create the missing **IT Security** page by duplicating an existing service page template.
3. Create the **Landshut Local Landing Page** (`/it-dienstleister-landshut/`).
4. Update all existing **Service Pages**' titles, meta descriptions, and headings to reflect their specific primary keywords from the Keyword Map.
5. Review and update global **Internal Linking** (navigation, footer, contextual links) to include the newly created pages.
