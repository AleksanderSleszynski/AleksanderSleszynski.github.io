// --- INTERNATIONALIZATION (i18n) LABELS ---
export const ui = {
    // Top Bar / Prompt
    visitor: "visitor",
    host: "cv-system",
    path: "~",
    command: "./show-resume.sh --verbose",
    
    lang_toggle: { en: "EN", pl: "PL" },
    
    // Headers
    skills_header: { en: "01_SKILLS", pl: "01_UMIEJĘTNOŚCI" },
    experience_header: { en: "02_EXPERIENCE_LOG", pl: "02_HISTORIA_ZATRUDNIENIA" },
    education_header: { en: "03_EDUCATION", pl: "03_EDUKACJA" },
    achievements_header: { en: "04_ACHIEVEMENTS_&_AWARDS", pl: "04_OSIĄGNIĘCIA_I_NAGRODY" },
    // NOWOŚĆ: Nagłówek Projektów
    projects_header: { en: "05_PROJECT_ARCHIVES", pl: "05_ARCHIWUM_PROJEKTÓW" },
    
    services_header: { en: "06_AVAILABLE_SERVICES", pl: "06_DOSTĘPNE_USŁUGI" },
    contact_header: { en: "07_COMMUNICATION_UPLINK", pl: "07_KANAŁ_KOMUNIKACJI" },
    
    // Labels
    backend_scan: { en: "Backend.scan()", pl: "Backend.skanuj()" },
    devops_scan: { en: "DevOps.scan()", pl: "DevOps.skanuj()" },
    lbl_award: { en: "[ AWARD ]", pl: "[ NAGRODA ]" },
    lbl_cert: { en: "[ CERT ]", pl: "[ CERTYFIKAT ]" },
    lbl_field: { en: "[ FIELD ]", pl: "[ KIERUNEK ]" },
    
    // Project Section Labels
    lbl_read_more: { en: "[ READ_LOG ]", pl: "[ CZYTAJ_LOG ]" },
    lbl_close_file: { en: "[ CLOSE_FILE ]", pl: "[ ZAMKNIJ_PLIK ]" },
    
    // Contact Section
    protocol_linkedin: { en: "Protocol: SECURE_LINKEDIN_HANDSHAKE", pl: "Protokół: BEZPIECZNE_POŁĄCZENIE_LI" },
    contact_desc: { 
        en: "Open for B2B cooperation and consulting opportunities alongside full-time commitment. Connection encrypted via LinkedIn.", 
        pl: "Otwarty na współpracę B2B i konsultacje obok etatu. Połączenie szyfrowane przez LinkedIn." 
    },
    btn_linkedin: { en: "[ INITIATE_CONNECTION ]", pl: "[ NAWIĄŻ_POŁĄCZENIE ]" },
    
    // Utilities
    print_btn: { en: "Print PDF", pl: "Drukuj PDF" },
    footer_eof: "EOF"
};

// --- SERVICES DATA ---
export const services = [
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
        title: { en: "CI/CD Automation", pl: "Automatyzacja CI/CD" },
        desc: { 
            en: "Building reliable pipelines (Azure DevOps/GitLab). Automating repetitive tasks to save time.", 
            pl: "Budowa niezawodnych potoków (Azure DevOps). Automatyzacja powtarzalnych zadań." 
        }
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        title: { en: "Security & Compliance", pl: "Bezpieczeństwo & Compliance" },
        desc: { 
            en: "Basic security audits, code review, and implementing SecureFlag standards.", 
            pl: "Podstawowe audyty bezpieczeństwa, code review i wdrażanie standardów SecureFlag." 
        }
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/><line x1="2" x2="2" y1="20" y2="20"/></svg>`,
        title: { en: "Backend Consulting", pl: "Konsultacje Backend" },
        desc: { 
            en: "Java/Kotlin architecture support, Spring Boot optimization, and mentoring.", 
            pl: "Wsparcie architektury Java/Kotlin, optymalizacja Spring Boot i mentoring." 
        }
    }
];

// --- SVG ICONS ---
export const icons = {
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0 3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    email: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    print: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>`,
    lang: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    cert: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>`,
    trophy: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2h-6c-2.76 0-5 .78-5 4v4a10 10 0 0 0 10 10 4 4 0 0 0 10-10V6c0-3.22-2.24-4-5-4z"/></svg>`,
    university: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    // Nowe ikony do projektów
    file: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>`
};