# Bit-Check Website SEO Implementation Plan

## 1. Objective

Restructure and improve the existing Bit-Check static website so that it has a strong SEO foundation for local B2B search, while preserving the existing visual/template style and brand identity.

The primary SEO focus is:

> Bit-Check as an IT service provider for small and medium-sized businesses in Landshut and the surrounding region.

The website should become easier for:

* Search engines to understand
* Business customers to navigate
* Potential customers to convert

Do not rebuild the visual identity from scratch.

---

# 2. Source Documents

Use these project files as the authoritative planning sources:

```text
seo/profile.md
seo/competitor-research.md
seo/keyword-research.md
seo/keyword-map.md
seo/current-site-audit.md
```

Read all of them before making changes.

The actual existing website/codebase is the source of truth for current implementation.

Do not invent business information, services, certifications, customer numbers, partnerships, reviews, case studies, pricing, or other claims.

---

# 3. Preserve Existing Design

The existing Bit-Check template/style must remain recognizable.

Preserve wherever practical:

* Existing color palette
* Typography
* Logo
* General visual identity
* Header/footer style
* Existing component design
* Existing spacing system
* Existing button style
* Existing cards/components
* Existing responsive behavior
* Existing overall design language

SEO improvements must primarily come from:

* Better information architecture
* Better page hierarchy
* Better copy structure
* Better headings
* Better metadata
* Better internal linking
* Better navigation
* Better local relevance
* Better technical SEO

Do not perform a complete visual redesign.

---

# 4. Target Website Architecture

Maintain the existing pages:

```text
/
├── services.html
├── about.html
├── contact.html
├── insights.html
├── impressum.html
├── datenschutz.html
│
└── services/
    ├── managed-it-support.html
    ├── microsoft-365-cloud.html
    ├── network-infrastructure.html
    ├── backup-business-continuity.html
    └── it-health-checks.html
```

Create:

```text
/it-dienstleister-landshut/
```

Do NOT create an IT Security service page at this stage.

Do NOT create city pages for Munich or other secondary cities at this stage.

Do NOT create dedicated pages for:

* IT Support Landshut
* Microsoft 365 Landshut
* PC Repair
* Laptop Repair

unless specifically instructed later.

---

# 5. URL Policy

Preserve the current `.html` URLs.

Do not migrate URLs merely for SEO.

Do not rename existing URLs unless a later explicit decision is made.

If a URL must be changed in the future, implement proper 301 redirects.

---

# 6. Homepage

## Current role

Broad Bit-Check / IT service provider positioning.

## SEO role

Primary local authority page for the overall business.

## Primary keyword

IT Dienstleister Landshut

## Secondary keywords

* IT Systemhaus Landshut
* IT Service Landshut
* IT Dienstleistungen Landshut

## Requirements

Update:

* Title
* Meta description
* H1
* H2 structure
* Introductory copy
* Relevant body copy

The homepage should clearly communicate:

* Bit-Check
* IT services
* Small and medium-sized businesses
* Landshut and surrounding region
* Core services
* Main value proposition
* Clear contact/consultation CTA

Do not keyword-stuff "Landshut".

The page should remain natural and conversion-oriented.

The homepage should link prominently to all core service pages.

---

# 7. Services Overview

## URL

`/services.html`

## Role

Service hub.

## Requirements

Keep this page as an overview rather than trying to make it rank for every individual service keyword.

Clearly introduce and link to:

* Managed IT Support
* Microsoft 365 & Cloud
* Network & Infrastructure
* Backup & Business Continuity
* IT Health Check & Consulting

Make the relationship between the service overview and individual service pages clear.

---

# 8. Managed IT Support

## URL

`/services/managed-it-support.html`

## Primary keyword

Managed IT Landshut

## Secondary keywords

* IT Betreuung Unternehmen
* IT Support Unternehmen
* proaktive IT-Betreuung
* externer IT-Dienstleister

## Page objective

Position Bit-Check as a proactive external IT partner for small and medium-sized businesses.

Explain clearly:

* What managed IT means
* What is included
* Proactive monitoring
* Maintenance
* Updates
* User support
* Infrastructure support
* Microsoft 365 support where applicable
* How Bit-Check works
* Who the service is for
* Benefits for businesses
* Onboarding/process
* CTA

Use information already supported by the existing Bit-Check website.

Do not invent SLA numbers or response times.

---

# 9. Microsoft 365 & Cloud

## URL

`/services/microsoft-365-cloud.html`

## Primary keyword

Microsoft 365 Betreuung Unternehmen

## Secondary keywords

* Microsoft 365 Migration
* Microsoft 365 Support
* Cloud Lösungen Unternehmen
* Microsoft 365 Sicherheit

## Page objective

Position Bit-Check as a business-focused Microsoft 365 and cloud support provider.

Potential subject areas, only where actually offered:

* Microsoft 365 administration
* Migration
* User management
* Microsoft 365 security
* Teams
* Exchange Online
* OneDrive
* SharePoint
* Licensing

Do not claim Microsoft certifications/partnerships unless verified in the existing business data.

---

# 10. Network & Infrastructure

## URL

`/services/network-infrastructure.html`

## Primary keyword

IT Infrastruktur Landshut

## Secondary keywords

* Netzwerkbetreuung Landshut
* WLAN Unternehmen
* IT Infrastruktur Unternehmen
* Firmennetzwerk

## Page objective

Position Bit-Check for business network and infrastructure requirements.

Cover relevant existing services such as:

* Network planning
* Infrastructure
* WLAN
* Network maintenance
* Firewall/network security where actually offered
* Server/infrastructure management where applicable
* Documentation where actually provided

Focus on business problems and outcomes, not a generic list of hardware.

---

# 11. Backup & Business Continuity

## URL

`/services/backup-business-continuity.html`

## Primary keyword

Backup Landshut

## Secondary keywords

* Datensicherung Unternehmen
* Backup Unternehmen
* Datenwiederherstellung Unternehmen
* Business Continuity

## Page objective

Position Bit-Check as a reliable provider of business backup and recovery solutions.

Explain concepts such as:

* Backup
* Monitoring
* Recovery
* Restore verification
* Business continuity
* Protection against data loss

Only mention specific backup technologies/vendors where the existing Bit-Check service actually uses them.

Avoid exaggerated security guarantees.

---

# 12. IT Health Check & Consulting

## URL

`/services/it-health-checks.html`

## Primary keyword

IT Beratung Landshut

## Secondary keywords

* IT Check Unternehmen
* IT Audit
* IT Health Check
* IT Sicherheitscheck Unternehmen

## Page objective

Make the IT Health Check a clear commercial entry point for businesses that need an assessment of their IT environment.

Explain:

* What is checked
* Why businesses use an IT Health Check
* Typical risks/problems identified
* What the customer receives
* Recommended next steps
* CTA

Use a clear business-oriented presentation.

Do not promise certifications, compliance outcomes, or security guarantees that Bit-Check cannot substantiate.

---

# 13. Landshut Local Landing Page

Create:

`/it-dienstleister-landshut/`

## Primary keyword

IT Dienstleister Landshut

## Secondary keywords

* IT Service Landshut
* IT Dienstleistungen Landshut
* IT Betreuung Landshut
* IT Systemhaus Landshut

## Purpose

Create a dedicated local landing page establishing Bit-Check's relevance to businesses in Landshut.

This page must be genuinely different from the homepage.

Include:

* Bit-Check's Landshut location
* Businesses served
* Relevant local context
* Core services
* Why businesses choose Bit-Check
* Service area
* Contact information
* Clear CTA
* Links to service pages
* Trust elements that can be verified

Use the actual business address and service-area information from `seo/profile.md`.

Do not create artificial local content.

Do not add dozens of city names simply for keyword purposes.

Do not duplicate the homepage.

---

# 14. Secondary Locations

Current service area includes:

* Landshut
* Plattling
* Dingolfing
* Passau
* Straubing
* Ingolstadt
* München
* Regensburg
* Rosenheim
* Freising
* Deggendorf

For the current implementation:

* Mention the service area naturally where relevant.
* Do not create individual location pages yet.
* Do not create a Munich landing page yet.

Additional local landing pages may be considered later based on actual business presence, customers, search demand and SEO performance.

---

# 15. About Page

## URL

`/about.html`

Improve this page primarily for trust and credibility.

Clearly communicate:

* Who Bit-Check is
* Where Bit-Check is located
* Who Bit-Check serves
* Company's approach
* Relevant expertise

Do not invent team credentials or company history.

Add links toward:

* Services
* Landshut page
* Contact

---

# 16. Contact Page

## URL

`/contact.html`

Ensure the page clearly contains the verified business information:

Company:
Bit-Check

Address:
Niedermayer-Straße 28,
84032 Landshut, Deutschland

Phone:
+49 155 63670570

Email:
[info@bit-check.de](mailto:info@bit-check.de)

Opening hours:
Monday–Friday, 09:00–18:00

Ensure contact information is consistent with `seo/profile.md`.

Use clear conversion CTAs.

---

# 17. Insights

## URL

`/insights.html`

Keep the existing Insights concept.

Do not create a large number of articles yet.

Prepare the structure so future content can be organized into these topic areas:

* Microsoft 365
* IT Security
* Backup
* Managed IT / IT Support
* Network & Infrastructure

Security can be discussed as a supporting topic.

Do NOT create a dedicated cybersecurity service offering at this stage.

Articles should eventually link naturally to relevant commercial service pages.

---

# 18. SEO Metadata

Every indexable commercial page should have:

* Unique `<title>`
* Unique meta description
* One clear H1
* Logical H2/H3 hierarchy
* Canonical URL
* Index/follow behavior
* Meaningful Open Graph metadata where supported

Metadata should accurately describe the actual page.

Do not stuff keywords into titles or descriptions.

---

# 19. Heading Structure

Each page should have one clear primary H1.

H1 should reflect the page's actual search intent.

Example:

Homepage:

`IT-Dienstleister für kleine Unternehmen in Landshut`

Managed IT:

`Managed IT für Unternehmen in Landshut`

Microsoft 365:

`Microsoft 365 Betreuung für Unternehmen`

Network:

`IT-Infrastruktur & Netzwerk für Unternehmen in Landshut`

Backup:

`Backup & Datensicherung für Unternehmen in Landshut`

IT Health Check:

`IT-Beratung & IT-Check für Unternehmen in Landshut`

These are structural examples; refine the final wording naturally.

---

# 20. Internal Linking

Create deliberate contextual links between relevant pages.

At minimum:

Homepage → all core services

Services → each service page

Managed IT → Microsoft 365, Network, Backup, IT Health Check

Microsoft 365 → Managed IT, Backup, IT Health Check

Network → Managed IT, IT Security-related content where relevant, Backup, IT Health Check

Backup → Managed IT, Microsoft 365, IT Health Check

IT Health Check → all relevant service pages

Landshut page → all core services + Contact

Use descriptive, natural anchor text.

Avoid excessive exact-match anchor repetition.

---

# 21. Structured Data

Implement structured data where appropriate.

Consider:

* Organization
* LocalBusiness
* Service
* BreadcrumbList
* Article

Only use properties supported by actual business information.

Do not invent reviews, ratings, certifications, awards or other structured-data properties.

Review/AggregateRating markup must only be used if the business genuinely qualifies.

---

# 22. Technical SEO

Verify:

* HTTPS
* robots.txt
* XML sitemap
* Canonicals
* Indexability
* 404 handling
* Redirect handling
* Mobile responsiveness
* Core Web Vitals
* Image optimization
* Image alt text
* Internal links
* Crawlability
* Semantic HTML
* Heading hierarchy

Do not unnecessarily introduce JavaScript dependency for important SEO content.

Where possible, important headings and content should exist directly in the HTML rather than requiring client-side rendering.

---

# 23. Existing i18n / JavaScript Content

The current audit indicates some headings use `data-i18n` attributes and are populated client-side.

Inspect the implementation carefully.

Important SEO text should be reliably available to crawlers in the rendered/document HTML.

Do not remove the site's language functionality.

Improve the implementation only where necessary to ensure important SEO content is reliably indexable.

---

# 24. Legal Pages

Keep:

* `/impressum.html`
* `/datenschutz.html`

Do not optimize these pages for commercial keywords.

Preserve appropriate legal-page indexing directives.

---

# 25. Navigation

Update the global navigation so users can easily reach:

* Services
* Managed IT
* Microsoft 365
* Network & Infrastructure
* Backup
* IT Health Check
* Landshut
* About
* Contact

Do not overcrowd the navigation.

The Landshut page should be accessible through an appropriate navigation or local/service context without making the navigation look unnatural.

---

# 26. Conversion Strategy

Every commercial service page should have a clear next step.

Examples:

* Contact Bit-Check
* Request consultation
* Discuss your IT situation
* Request an IT Health Check

Do not invent claims such as:

* 24/7 support
* Guaranteed response times
* Specific uptime
* Number of customers
* Years of experience
* Certifications

unless those claims are verified in the project/business data.

---

# 27. Content Principles

Write for business owners and decision makers, not search engines.

Content should:

* Explain technical topics simply
* Focus on business problems
* Show practical expertise
* Explain benefits and processes
* Avoid generic filler
* Avoid keyword stuffing
* Avoid repetitive sections
* Avoid AI-sounding generic language
* Use real Bit-Check capabilities and experience

Do not add content merely to increase word count.

---

# 28. Do Not Implement Yet

Do not implement:

* Dedicated cybersecurity service page
* Munich SEO page
* Multiple city landing pages
* Large blog/content expansion
* Bulk backlink strategy
* URL migration away from `.html`
* Fake testimonials/reviews
* Fake case studies
* Unsupported certifications or partnerships
* Unsupported pricing
* Unsupported service guarantees

These are future-stage considerations.

---

# 29. Implementation Order

Execute in this order:

### Step 1

Inspect the existing codebase and understand reusable components.

### Step 2

Improve global SEO foundation:

* metadata patterns
* canonical handling
* robots handling
* sitemap
* semantic structure

### Step 3

Optimize homepage.

### Step 4

Optimize Services overview.

### Step 5

Optimize the five existing commercial service pages.

### Step 6

Create the Landshut local landing page.

### Step 7

Improve About and Contact pages.

### Step 8

Improve global navigation and internal linking.

### Step 9

Implement appropriate structured data.

### Step 10

Validate responsive behavior and technical SEO.

---

# 30. Acceptance Criteria

The implementation is complete only when:

* Existing visual identity remains recognizable.
* Existing core URLs remain unchanged.
* All five core service pages are clearly differentiated.
* Homepage has a clear local B2B focus.
* Landshut has its own genuinely useful landing page.
* No standalone cybersecurity service page has been added.
* Important SEO content is available in crawlable HTML.
* Every commercial page has unique title/meta description/H1.
* Internal linking follows the intended architecture.
* Contact/business information is consistent.
* Sitemap and canonical implementation are correct.
* No unsupported claims have been introduced.
* No unnecessary location pages have been created.
* Mobile/responsive behavior remains intact.
* No major broken links or missing assets are introduced.

---

# 31. Final Rule

The goal is not to make the website "look SEO optimized."

The goal is to make the existing Bit-Check website into a clear, trustworthy and technically sound website for:

> Small and medium-sized businesses looking for an IT service provider in Landshut and the surrounding region.

Preserve the template style.

Improve the structure.

Strengthen the content.

Make the SEO intent of each page clear.

Do not overbuild the website at this stage.



# Additional Implementation Rules

## Page Expansion & New Components

The implementation should not be limited to changing existing text, headings, and metadata.

Where useful for SEO, UX, trust, and conversion, you should **expand existing pages and introduce new content sections or reusable components** while keeping the existing Bit-Check visual/template style.

Examples of appropriate additions include:

* Improved hero sections
* Service overview sections
* Benefits/outcomes sections
* "Who is this for?" sections
* Process/how-it-works sections
* FAQ sections
* CTA sections
* Related-services sections
* Internal-linking blocks
* Local/service-area sections
* Trust/USP sections
* Other components that genuinely improve the page

Use the existing design system, CSS classes, spacing, typography, cards, buttons, and visual language wherever possible.

## Content Rules

You may substantially expand and improve the content of existing pages when needed to satisfy the intended search intent and provide a genuinely useful page.

However, **never invent business facts or proof**.

Do NOT fabricate or assume:

* Testimonials
* Customer reviews
* Customer logos
* Case studies
* Certifications
* Vendor partnerships
* Awards
* Customer numbers
* Years of experience
* Pricing
* SLA/response times
* Guarantees
* Technical capabilities that are not confirmed
* Results or statistics
* Team qualifications

Use existing verified information from the website and the project files.

Where an important trust/content section would be valuable but real information is unavailable, leave the section out rather than creating fictional content.

## General Principle

The final website should be **richer and more complete than the current version**, but every addition must have a clear purpose:

**better user experience + clearer search intent + stronger trust + better conversion**

Do not add content simply to increase word count.
