/* ============================================================
   BitCheck — Internationalization (i18n) System
   Bilingual EN/DE with configurable default language.
   ============================================================ */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CHANGE THIS TO SET THE DEFAULT LANGUAGE: 'de' or 'en'
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const DEFAULT_LANGUAGE = 'de';
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const translations = {

  // ── NAVIGATION ──
  'nav.home': { en: 'Home', de: 'Startseite' },
  'nav.services': { en: 'Services', de: 'Leistungen' },
  'nav.about': { en: 'About', de: 'Über uns' },
  'nav.insights': { en: 'Insights', de: 'Insights' },
  'nav.contact': { en: 'Contact', de: 'Kontakt' },
  'nav.cta': { en: 'Book an IT Health Check', de: 'IT-Check buchen' },

  // ── HERO ──
  'hero.eyebrow': { en: 'IT SERVICES FOR SMALL BUSINESSES', de: 'IT-DIENSTLEISTUNGEN FÜR KLEINE UNTERNEHMEN IN LANDSHUT' },
  'hero.title.1': { en: 'Reliable IT.', de: 'IT-Dienstleister für kleine' },
  'hero.title.2': { en: 'Secure Business.', de: 'Unternehmen in Landshut.' },
  'hero.subtitle': { en: 'BitCheck helps small and growing businesses build, manage and improve the technology infrastructure they depend on every day.', de: 'BitCheck unterstützt kleine und wachsende Unternehmen beim Aufbau, der Verwaltung und der Verbesserung der Technologie-Infrastruktur, auf die sie täglich angewiesen sind.' },
  'hero.subtitle2': { en: 'From networks and Microsoft 365 to backups, monitoring and ongoing IT support — we keep your technology reliable, secure and manageable.', de: 'Von Netzwerken über Microsoft 365 bis hin zu Backups, Monitoring und laufendem IT-Support — wir halten Ihre Technologie zuverlässig, sicher und verwaltbar.' },
  'hero.cta.primary': { en: 'Book an IT Health Check', de: 'IT-Check buchen' },
  'hero.cta.secondary': { en: 'Explore Our Services', de: 'Unsere Leistungen entdecken' },
  'hero.scroll': { en: 'Scroll', de: 'Scrollen' },

  // ── TRUST SECTION ──
  'trust.title': { en: 'IT that works quietly in the background.', de: 'IT, die leise im Hintergrund funktioniert.' },
  'trust.subtitle': { en: 'Your technology should help your business work — not become another problem to manage.', de: 'Ihre Technologie soll Ihrem Unternehmen helfen — nicht zum nächsten Problem werden.' },
  'trust.reliable.title': { en: 'Reliable', de: 'Zuverlässig' },
  'trust.reliable.desc': { en: 'Keep critical systems available and working.', de: 'Kritische Systeme verfügbar und funktionsfähig halten.' },
  'trust.secure.title': { en: 'Secure', de: 'Sicher' },
  'trust.secure.desc': { en: 'Build security fundamentals into everyday IT operations.', de: 'Sicherheitsgrundlagen in den täglichen IT-Betrieb integrieren.' },
  'trust.documented.title': { en: 'Documented', de: 'Dokumentiert' },
  'trust.documented.desc': { en: 'Know what you have, how it works and what needs attention.', de: 'Wissen, was Sie haben, wie es funktioniert und was Aufmerksamkeit braucht.' },
  'trust.proactive.title': { en: 'Proactive', de: 'Proaktiv' },
  'trust.proactive.desc': { en: 'Identify problems before they become expensive disruptions.', de: 'Probleme erkennen, bevor sie zu teuren Ausfällen werden.' },

  // ── SERVICES SECTION ──
  'services.title': { en: 'Technology support without the complexity.', de: 'IT-Unterstützung ohne Komplexität.' },
  'services.subtitle': { en: 'Practical IT services designed for small and growing businesses.', de: 'Praxisnahe IT-Dienstleistungen für kleine und wachsende Unternehmen.' },

  'services.s1.title': { en: 'Managed IT Support', de: 'Managed IT-Support' },
  'services.s1.desc': { en: 'Proactive and responsive IT support for your users, computers, Microsoft 365 and everyday technology issues.', de: 'Proaktiver und reaktionsschneller IT-Support für Ihre Benutzer, Computer, Microsoft 365 und alltägliche IT-Probleme.' },

  'services.s2.title': { en: 'Network & Infrastructure', de: 'Netzwerk & Infrastruktur' },
  'services.s2.desc': { en: 'Design, configuration and management of business networks, firewalls, Wi-Fi, servers and infrastructure.', de: 'Planung, Konfiguration und Verwaltung von Firmennetzwerken, Firewalls, WLAN, Servern und Infrastruktur.' },

  'services.s3.title': { en: 'Microsoft 365 & Cloud', de: 'Microsoft 365 & Cloud' },
  'services.s3.desc': { en: 'Configure, secure and manage Microsoft 365 environments so your employees can work efficiently from anywhere.', de: 'Microsoft-365-Umgebungen konfigurieren, absichern und verwalten, damit Ihre Mitarbeiter von überall effizient arbeiten können.' },

  'services.s4.title': { en: 'Backup & Business Continuity', de: 'Backup & Business Continuity' },
  'services.s4.desc': { en: 'Reliable backup, monitoring and recovery to protect your business from IT failures.', de: 'Zuverlässiges Backup, Monitoring und Wiederherstellung zum Schutz Ihres Unternehmens vor IT-Ausfällen.' },

  'services.s5.title': { en: 'IT Health Checks & Consulting', de: 'IT-Checks & Beratung' },
  'services.s5.desc': { en: 'A practical review of your IT environment to identify gaps, risks and improvement opportunities.', de: 'Eine praxisnahe Überprüfung Ihrer IT-Umgebung, um Lücken, Risiken und Verbesserungspotenziale zu erkennen.' },

  'services.learn': { en: 'Learn More', de: 'Mehr erfahren' },

  // ── PROBLEM / SOLUTION ──
  'problems.title': { en: 'Your business is growing. Is your IT keeping up?', de: 'Ihr Unternehmen wächst. Hält Ihre IT Schritt?' },
  'problems.q1': { en: '"Our network is unreliable."', de: '„Unser Netzwerk ist unzuverlässig."' },
  'problems.q2': { en: '"Nobody knows how our IT is configured."', de: '„Niemand weiß, wie unsere IT konfiguriert ist."' },
  'problems.q3': { en: '"We\'re worried about backups."', de: '„Wir machen uns Sorgen um unsere Backups."' },
  'problems.q4': { en: '"Microsoft 365 has become difficult to manage."', de: '„Microsoft 365 ist schwer zu verwalten geworden."' },
  'problems.q5': { en: '"We don\'t have an internal IT person."', de: '„Wir haben keine interne IT-Fachkraft."' },
  'problems.q6': { en: '"We know our systems are outdated, but don\'t know where to start."', de: '„Wir wissen, dass unsere Systeme veraltet sind, aber nicht, wo wir anfangen sollen."' },
  'problems.solution': { en: 'BitCheck turns technology problems into a clear plan.', de: 'BitCheck verwandelt IT-Probleme in einen klaren Plan.' },

  'problems.step1': { en: 'Assess', de: 'Analysieren' },
  'problems.step2': { en: 'Improve', de: 'Verbessern' },
  'problems.step3': { en: 'Manage', de: 'Verwalten' },
  'problems.step4': { en: 'Optimize', de: 'Optimieren' },

  // ── PROCESS SECTION ──
  'process.title': { en: 'How we work with you.', de: 'Wie wir mit Ihnen arbeiten.' },
  'process.s1.title': { en: 'Understand', de: 'Verstehen' },
  'process.s1.desc': { en: 'We learn about your business, current infrastructure and priorities.', de: 'Wir lernen Ihr Unternehmen, Ihre aktuelle Infrastruktur und Ihre Prioritäten kennen.' },
  'process.s2.title': { en: 'Assess', de: 'Analysieren' },
  'process.s2.desc': { en: 'We identify technical, security and reliability risks.', de: 'Wir identifizieren technische, sicherheits- und zuverlässigkeitsrelevante Risiken.' },
  'process.s3.title': { en: 'Improve', de: 'Verbessern' },
  'process.s3.desc': { en: 'We implement practical improvements in a controlled and documented way.', de: 'Wir setzen praxisnahe Verbesserungen kontrolliert und dokumentiert um.' },
  'process.s4.title': { en: 'Support', de: 'Betreuen' },
  'process.s4.desc': { en: 'We continue monitoring, maintaining and supporting your environment.', de: 'Wir überwachen, warten und betreuen Ihre Umgebung fortlaufend.' },

  // ── SECURITY SECTION ──
  'security.title': { en: 'Security should be built in — not added later.', de: 'Sicherheit sollte eingebaut sein — nicht nachträglich ergänzt.' },
  'security.desc': { en: 'Good security starts with the fundamentals. We help small businesses improve account security, access controls, patching, backups, remote access and infrastructure hygiene without unnecessary complexity.', de: 'Gute Sicherheit beginnt mit den Grundlagen. Wir helfen kleinen Unternehmen, Kontosicherheit, Zugriffskontrollen, Patching, Backups, Fernzugriff und Infrastrukturhygiene ohne unnötige Komplexität zu verbessern.' },
  'security.mfa': { en: 'Multi-Factor Authentication', de: 'Multi-Faktor-Authentifizierung' },
  'security.privilege': { en: 'Least Privilege Access', de: 'Minimale Berechtigungen' },
  'security.backup': { en: 'Verified Backups', de: 'Geprüfte Backups' },
  'security.patching': { en: 'Patch Management', de: 'Patch-Management' },
  'security.remote': { en: 'Secure Remote Access', de: 'Sicherer Fernzugriff' },
  'security.monitoring': { en: 'Infrastructure Monitoring', de: 'Infrastruktur-Monitoring' },
  'security.docs': { en: 'Security Documentation', de: 'Sicherheitsdokumentation' },

  // ── WHY ITWURZEL ──
  'why.title': { en: 'A different kind of IT partner.', de: 'Ein anderer IT-Partner.' },
  'why.w1.title': { en: 'Small Business Focus', de: 'Fokus auf kleine Unternehmen' },
  'why.w1.desc': { en: 'Solutions sized appropriately for your organization.', de: 'Lösungen, die auf Ihre Unternehmensgröße zugeschnitten sind.' },
  'why.w2.title': { en: 'Technical Depth', de: 'Technische Tiefe' },
  'why.w2.desc': { en: 'Networking, systems, cloud, automation and infrastructure knowledge.', de: 'Netzwerk-, System-, Cloud-, Automatisierungs- und Infrastrukturwissen.' },
  'why.w3.title': { en: 'Security-Minded', de: 'Sicherheitsbewusst' },
  'why.w3.desc': { en: 'Security considerations built into everyday technology decisions.', de: 'Sicherheitsüberlegungen in jede alltägliche Technologieentscheidung integriert.' },
  'why.w4.title': { en: 'Clear & Transparent', de: 'Klar & Transparent' },
  'why.w4.desc': { en: 'No unnecessary jargon. No mystery about what we are doing.', de: 'Kein unnötiges Fachchinesisch. Keine Unklarheit darüber, was wir tun.' },
  'why.w5.title': { en: 'Long-Term Partnership', de: 'Langfristige Partnerschaft' },
  'why.w5.desc': { en: 'Move from one-off fixes toward proactive, ongoing IT management.', de: 'Von Einzellösungen zu proaktivem, laufendem IT-Management.' },

  // ── CREDIBILITY ──
  'credibility.title': { en: 'What we\'re building around.', de: 'Worauf wir aufbauen.' },
  'credibility.p1': { en: 'Security-first practices', de: 'Security-First-Praktiken' },
  'credibility.p2': { en: 'Documented infrastructure', de: 'Dokumentierte Infrastruktur' },
  'credibility.p3': { en: 'Modern tooling', de: 'Moderne Werkzeuge' },
  'credibility.p4': { en: 'Automation', de: 'Automatisierung' },
  'credibility.p5': { en: 'Transparent communication', de: 'Transparente Kommunikation' },
  'credibility.p6': { en: 'Professional operational processes', de: 'Professionelle Betriebsprozesse' },

  // ── FINAL CTA ──
  'cta.title': { en: 'Not sure where to start?', de: 'Nicht sicher, wo Sie anfangen sollen?' },
  'cta.desc': { en: 'Let\'s take a look at your current IT environment and identify the improvements that matter most.', de: 'Lassen Sie uns einen Blick auf Ihre aktuelle IT-Umgebung werfen und die wichtigsten Verbesserungen identifizieren.' },
  'cta.primary': { en: 'Book an IT Health Check', de: 'IT-Check buchen' },
  'cta.secondary': { en: 'Talk to Us', de: 'Sprechen Sie mit uns' },

  // ── FOOTER ──
  'footer.desc': { en: 'Professional IT services for small and growing businesses in Landshut. We help you build, manage and secure the technology your business depends on.', de: 'Professionelle IT-Dienstleistungen für kleine und wachsende Unternehmen in Landshut und Umgebung. Wir helfen Ihnen, die Technologie aufzubauen, zu verwalten und abzusichern, auf die Ihr Unternehmen angewiesen ist.' },
  'footer.services': { en: 'Services', de: 'Leistungen' },
  'footer.company': { en: 'Company', de: 'Unternehmen' },
  'footer.contact': { en: 'Contact', de: 'Kontakt' },
  'footer.impressum': { en: 'Impressum', de: 'Impressum' },
  'footer.datenschutz': { en: 'Privacy Policy', de: 'Datenschutz' },
  'footer.rights': { en: 'All rights reserved.', de: 'Alle Rechte vorbehalten.' },
  'footer.area': { en: 'Service Area: Landshut & surroundings', de: 'Servicegebiet: Landshut & Umgebung' },

  // ── SERVICES PAGE ──
  'sp.title': { en: 'Our Services', de: 'Unsere Leistungen' },
  'sp.subtitle': { en: 'Practical IT services designed for small and growing businesses.', de: 'Praxisnahe IT-Dienstleistungen für kleine und wachsende Unternehmen.' },

  // ── ABOUT PAGE ──
  'about.title': { en: 'About BitCheck', de: 'Über BitCheck' },
  'about.subtitle': { en: 'A modern IT services company built on technical depth, security awareness and transparent communication.', de: 'Ein modernes IT-Dienstleistungsunternehmen, aufgebaut auf technischer Tiefe, Sicherheitsbewusstsein und transparenter Kommunikation.' },
  'about.story.title': { en: 'Our Story', de: 'Unsere Geschichte' },
  'about.story.p1': { en: 'BitCheck was founded by Computer Science professionals with a focus on infrastructure, networking, systems administration, cybersecurity and automation.', de: 'BitCheck wurde von Informatik-Fachleuten mit Schwerpunkt Infrastruktur, Netzwerke, Systemadministration, Cybersicherheit und Automatisierung gegründet.' },
  'about.story.p2': { en: 'We believe small businesses deserve the same level of technical discipline and security awareness as larger organizations — without the complexity or cost of maintaining a large internal IT department.', de: 'Wir glauben, dass kleine Unternehmen dasselbe Maß an technischer Disziplin und Sicherheitsbewusstsein verdienen wie größere Organisationen — ohne die Komplexität oder die Kosten einer großen internen IT-Abteilung.' },
  'about.why.title': { en: 'Why BitCheck?', de: 'Warum BitCheck?' },
  'about.h1.title': { en: 'Infrastructure Knowledge', de: 'Infrastruktur-Know-how' },
  'about.h1.desc': { en: 'Deep understanding of networks, servers, cloud and security.', de: 'Tiefes Verständnis von Netzwerken, Servern, Cloud und Sicherheit.' },
  'about.h2.title': { en: 'Documentation Culture', de: 'Dokumentationskultur' },
  'about.h2.desc': { en: 'Everything we do is documented and transparent.', de: 'Alles, was wir tun, ist dokumentiert und transparent.' },
  'about.h3.title': { en: 'Security-First Thinking', de: 'Security-First-Denken' },
  'about.h3.desc': { en: 'Security considerations in every decision, not as an afterthought.', de: 'Sicherheitsüberlegungen bei jeder Entscheidung, nicht erst im Nachhinein.' },
  'about.h4.title': { en: 'Modern Automation', de: 'Moderne Automatisierung' },
  'about.h4.desc': { en: 'Reducing repetitive work through intelligent automation.', de: 'Reduzierung wiederkehrender Arbeit durch intelligente Automatisierung.' },
  'about.team.title': { en: 'Our Team', de: 'Unser Team' },
  'about.team.name1': { en: 'Founder', de: 'Gründer' },
  'about.team.role1': { en: 'Infrastructure & Security', de: 'Infrastruktur & Sicherheit' },
  'about.team.bio1': { en: 'Computer Science background with focus on networking, systems administration, cybersecurity and automation.', de: 'Informatik-Hintergrund mit Fokus auf Netzwerke, Systemadministration, Cybersicherheit und Automatisierung.' },

  // ── INSIGHTS PAGE ──
  'insights.title': { en: 'Insights', de: 'Insights' },
  'insights.subtitle': { en: 'Practical knowledge and guidance for small business IT.', de: 'Praxiswissen und Orientierungshilfen für die IT kleiner Unternehmen.' },
  'insights.read': { en: 'Read Article', de: 'Artikel lesen' },

  'insights.a1.title': { en: '7 IT Problems Small Businesses Should Fix Before They Become Expensive', de: '7 IT-Probleme, die kleine Unternehmen lösen sollten, bevor sie teuer werden' },
  'insights.a1.excerpt': { en: 'Common technology issues that cost more the longer you wait. Here\'s what to prioritize.', de: 'Häufige Technologieprobleme, die umso mehr kosten, je länger man wartet. Das sollten Sie priorisieren.' },
  'insights.a2.title': { en: 'How to Know Whether Your Business Backups Actually Work', de: 'Wie Sie wissen, ob Ihre Backups tatsächlich funktionieren' },
  'insights.a2.excerpt': { en: 'A backup is only useful if you can recover from it. Here\'s how to verify.', de: 'Ein Backup ist nur nützlich, wenn man daraus wiederherstellen kann. So überprüfen Sie es.' },
  'insights.a3.title': { en: 'Microsoft 365 Security Basics for Small Businesses', de: 'Microsoft 365 Sicherheitsgrundlagen für kleine Unternehmen' },
  'insights.a3.excerpt': { en: 'Essential security settings every small business should configure in Microsoft 365.', de: 'Wesentliche Sicherheitseinstellungen, die jedes kleine Unternehmen in Microsoft 365 konfigurieren sollte.' },
  'insights.a4.title': { en: 'When Should a Small Business Replace Its Server?', de: 'Wann sollte ein kleines Unternehmen seinen Server ersetzen?' },
  'insights.a4.excerpt': { en: 'Signs that your server hardware is becoming a business risk.', de: 'Anzeichen dafür, dass Ihre Server-Hardware zum Geschäftsrisiko wird.' },
  'insights.a5.title': { en: 'Why Business Wi-Fi Problems Are Often Network Problems', de: 'Warum WLAN-Probleme oft Netzwerkprobleme sind' },
  'insights.a5.excerpt': { en: 'Poor Wi-Fi is usually a symptom. Here\'s how to diagnose the real issue.', de: 'Schlechtes WLAN ist meist ein Symptom. So diagnostizieren Sie das eigentliche Problem.' },
  'insights.a6.title': { en: 'What Should Happen When an Employee Leaves?', de: 'Was passieren sollte, wenn ein Mitarbeiter das Unternehmen verlässt' },
  'insights.a6.excerpt': { en: 'An IT offboarding checklist to protect your business.', de: 'Eine IT-Offboarding-Checkliste zum Schutz Ihres Unternehmens.' },

  // ── CONTACT PAGE ──
  'contact.title': { en: 'Contact Us', de: 'Kontakt' },
  'contact.subtitle': { en: 'Let\'s discuss how we can help your business IT.', de: 'Lassen Sie uns besprechen, wie wir Ihrer Unternehmens-IT helfen können.' },
  'contact.form.name': { en: 'Full Name', de: 'Vollständiger Name' },
  'contact.form.company': { en: 'Company', de: 'Unternehmen' },
  'contact.form.email': { en: 'Work Email', de: 'Geschäftliche E-Mail' },
  'contact.form.phone': { en: 'Phone', de: 'Telefon' },
  'contact.form.employees': { en: 'Number of Employees', de: 'Anzahl Mitarbeiter' },
  'contact.form.employees.select': { en: 'Select range', de: 'Bitte wählen' },
  'contact.form.employees.1': { en: '1–10 employees', de: '1–10 Mitarbeiter' },
  'contact.form.employees.2': { en: '11–25 employees', de: '11–25 Mitarbeiter' },
  'contact.form.employees.3': { en: '26–50 employees', de: '26–50 Mitarbeiter' },
  'contact.form.employees.4': { en: '50+ employees', de: '50+ Mitarbeiter' },
  'contact.form.help': { en: 'What do you need help with?', de: 'Wobei benötigen Sie Hilfe?' },
  'contact.form.help.select': { en: 'Select a topic', de: 'Thema wählen' },
  'contact.form.help.1': { en: 'IT Support & Management', de: 'IT-Support & Verwaltung' },
  'contact.form.help.2': { en: 'Network & Infrastructure', de: 'Netzwerk & Infrastruktur' },
  'contact.form.help.3': { en: 'Microsoft 365 & Cloud', de: 'Microsoft 365 & Cloud' },
  'contact.form.help.4': { en: 'Backup & Business Continuity', de: 'Backup & Business Continuity' },
  'contact.form.help.5': { en: 'IT Health Check', de: 'IT-Check' },
  'contact.form.help.6': { en: 'Other', de: 'Sonstiges' },
  'contact.form.message': { en: 'Message (optional)', de: 'Nachricht (optional)' },
  'contact.form.submit': { en: 'Request a Consultation', de: 'Beratung anfragen' },
  'contact.form.required': { en: 'This field is required.', de: 'Dieses Feld ist erforderlich.' },
  'contact.form.email.invalid': { en: 'Please enter a valid email address.', de: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
  'contact.form.success.title': { en: 'Thank you!', de: 'Vielen Dank!' },
  'contact.form.success.desc': { en: 'Your inquiry has been received. We\'ll get back to you shortly.', de: 'Ihre Anfrage ist eingegangen. Wir melden uns in Kürze bei Ihnen.' },
  'contact.sidebar.title': { en: 'Other ways to reach us', de: 'Weitere Kontaktmöglichkeiten' },
  'contact.sidebar.email': { en: 'Email', de: 'E-Mail' },
  'contact.sidebar.phone': { en: 'Phone', de: 'Telefon' },
  'contact.sidebar.area': { en: 'Service Area', de: 'Servicegebiet' },
  'contact.sidebar.area.val': { en: 'Landshut & surroundings', de: 'Landshut & Umgebung' },
  'contact.sidebar.response': { en: 'Response Time', de: 'Antwortzeit' },
  'contact.sidebar.response.val': { en: 'Typically within 1 business day', de: 'In der Regel innerhalb von 1 Werktag' },

  // ── LEGAL PAGES ──
  'impressum.title': { en: 'Impressum', de: 'Impressum' },
  'datenschutz.title': { en: 'Privacy Policy', de: 'Datenschutzerklärung' },
};


// ── i18n Engine ──

let currentLang = localStorage.getItem('itwurzel-lang') || DEFAULT_LANGUAGE;

function t(key) {
  const entry = translations[key];
  if (!entry) return key;
  return entry[currentLang] || entry['en'] || key;
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('itwurzel-lang', lang);
  document.documentElement.lang = lang;

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translated = t(key);
    if (translated !== key) {
      el.textContent = translated;
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translated = t(key);
    if (translated !== key) {
      el.placeholder = translated;
    }
  });

  // Update aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const translated = t(key);
    if (translated !== key) {
      el.setAttribute('aria-label', translated);
    }
  });

  // Update lang toggle buttons
  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  // Update select options
  document.querySelectorAll('option[data-i18n]').forEach(option => {
    const key = option.getAttribute('data-i18n');
    const translated = t(key);
    if (translated !== key) {
      option.textContent = translated;
    }
  });
}

function initI18n() {
  // Set initial language
  applyLanguage(currentLang);

  // Bind toggle buttons
  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.dataset.lang);
    });
  });
}

// Auto-init when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
