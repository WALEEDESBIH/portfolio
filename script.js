document.addEventListener("DOMContentLoaded", () => {
  const $ = (sel) => document.querySelector(sel);

  // Your WhatsApp base link (confirmed)
  const WA_BASE = "https://wa.me/962792261615";

  const WA_TEXT_EN = "Hi Waleed, I saw your portfolio and I need data analysis or AI development.";
  const WA_TEXT_AR = "مرحبا وليد، شفت البورتفوليو وبدي خدمة تحليل بيانات أو برمجة ذكاء اصطناعي.";

  const i18n = {
    en: {
      nav_about: "About",
      nav_skills: "Skills",
      nav_services: "Services",
      nav_projects: "Projects",
      nav_contact: "Contact",

      hero_badge: "Open to opportunities • Data / AI",
      hero_hi: "Hi, I’m",
      hero_role: "Data Analyst & AI Developer — I help businesses turn data into dashboards and build AI features that improve decisions.",
      hero_cta_projects: "View Projects",
      hero_cta_email: "Email Me",
      hero_cta_whatsapp: "WhatsApp",
      hero_email_label: "Email",
      hero_github_label: "GitHub",
      hero_note: "Dashboards, SQL, data cleaning, and ML-powered systems (recommenders / chatbots / predictive models).",
      stat_1: "Analysis & Dashboards",
      stat_2: "ML & Recommendations",
      stat_3: "Full-Stack Delivery",

      about_title: "About",
      about_sub: "Short summary + what I focus on.",
      about_h: "Who I am",
      about_p: "I’m a Data Analyst & AI Developer. I enjoy cleaning data, building dashboards, writing SQL, and creating ML-powered features that users can actually benefit from.",
      about_li1: "Python / Pandas / NumPy / scikit-learn",
      about_li2: "SQL (MySQL / SQL Server / SQLite) + BI (Power BI / Metabase)",
      about_li3: "Django / FastAPI + clean APIs",
      about_li4: "Docker basics + deployment-ready structure",
      about_focus: "Focus",
      focus_1: "Data Cleaning",
      focus_2: "EDA",
      focus_3: "Dashboards",
      focus_4: "ML Models",
      focus_5: "Recommenders",
      focus_6: "APIs",
      focus_7: "Automation",
      focus_8: "System Design",
      callout_t: "Portfolio note",
      callout_p: "This site is bilingual (EN/AR). Use the button at the top to switch language.",

      skills_title: "Skills",
      skills_sub: "Tools & technologies I use.",
      skills_data: "Data",
      skills_sql: "SQL & BI",
      skills_ml: "ML & AI",
      skills_web: "Web",

      services_title: "Services",
      services_sub: "What I can deliver for clients.",
      service1_t: "Data Analysis & Dashboards",
      service1_p: "Data cleaning, EDA, KPI reporting, SQL queries, and dashboards that are easy to read and decision-ready.",
      service1_tag1: "Cleaning",
      service1_tag2: "EDA",
      service1_tag3: "Power BI",
      service1_tag4: "Metabase",
      service1_tag5: "SQL",
      service2_t: "AI Development",
      service2_p: "ML models, recommendation systems, chatbots, and AI features integrated into web apps (Django/FastAPI).",
      service2_tag1: "ML",
      service2_tag2: "Recommenders",
      service2_tag3: "Chatbots",
      service2_tag4: "APIs",
      service2_tag5: "Deployment",

      projects_title: "Projects",
      projects_sub: "Selected work — with screenshots and repo links.",

      contact_title: "Contact",
      contact_sub: "Let’s talk about roles, freelance work, or collaborations.",
      contact_h: "Get in touch",
      contact_p: "Fastest way: WhatsApp or email. You can also check my GitHub and LinkedIn.",
      contact_cta_whatsapp: "WhatsApp Me",
      contact_cta_email: "Send Email",

      whatsapp_qr_t: "WhatsApp QR",
      whatsapp_qr_p: "Scan to open WhatsApp chat.",
      whatsapp_hint: "If the QR doesn’t work, update the WhatsApp link in script.js.",

      contact_form_title: "Quick message",
      contact_form_sub: "This opens your email app with a prepared message.",
      form_subject: "Subject",
      form_message: "Message",
      form_send: "Open Email",
      form_note: "No data is stored — it just creates a mailto link.",
      back_top: "Back to top ↑",
    },

    ar: {
      nav_about: "عنّي",
      nav_skills: "المهارات",
      nav_services: "الخدمات",
      nav_projects: "المشاريع",
      nav_contact: "تواصل",

      hero_badge: "متاح لفرص عمل • بيانات / ذكاء اصطناعي",
      hero_hi: "مرحباً، أنا",
      hero_role: "محلل بيانات ومطور ذكاء اصطناعي — أجهز داشبورد وتقارير، وأبني ميزات AI تساعد على اتخاذ قرارات أفضل.",
      hero_cta_projects: "عرض المشاريع",
      hero_cta_email: "راسلني",
      hero_cta_whatsapp: "واتساب",
      hero_email_label: "البريد",
      hero_github_label: "GitHub",
      hero_note: "Dashboards و SQL وتنظيف بيانات + أنظمة ML (توصيات / شات بوت / نماذج تنبؤ).",
      stat_1: "تحليل ولوحات بيانات",
      stat_2: "ML وتوصيات",
      stat_3: "تطوير Full-Stack",

      about_title: "عنّي",
      about_sub: "ملخص سريع وما الذي أركز عليه.",
      about_h: "من أنا",
      about_p: "أنا محلل بيانات ومطور ذكاء اصطناعي. أستمتع بتنظيف البيانات، وبناء الداشبورد، وكتابة SQL، وتطوير ميزات ML مفيدة فعلاً للمستخدم.",
      about_li1: "Python / Pandas / NumPy / scikit-learn",
      about_li2: "SQL (MySQL / SQL Server / SQLite) + BI (Power BI / Metabase)",
      about_li3: "Django / FastAPI + APIs مرتبة",
      about_li4: "Docker (أساسيات) + تجهيز للنشر",
      about_focus: "التركيز",
      focus_1: "تنظيف البيانات",
      focus_2: "EDA",
      focus_3: "Dashboards",
      focus_4: "نماذج ML",
      focus_5: "أنظمة توصية",
      focus_6: "APIs",
      focus_7: "أتمتة",
      focus_8: "تصميم أنظمة",
      callout_t: "ملاحظة",
      callout_p: "الموقع ثنائي اللغة (EN/AR). استخدم زر الأعلى لتغيير اللغة.",

      skills_title: "المهارات",
      skills_sub: "الأدوات والتقنيات التي أستخدمها.",
      skills_data: "البيانات",
      skills_sql: "SQL و BI",
      skills_ml: "ML و AI",
      skills_web: "الويب",

      services_title: "الخدمات",
      services_sub: "الخدمات التي أقدمها للعملاء.",
      service1_t: "تحليل البيانات ولوحات التحكم",
      service1_p: "تنظيف بيانات، EDA، تقارير KPI، استعلامات SQL، ولوحات بيانات واضحة وجاهزة لاتخاذ القرار.",
      service1_tag1: "تنظيف",
      service1_tag2: "EDA",
      service1_tag3: "Power BI",
      service1_tag4: "Metabase",
      service1_tag5: "SQL",
      service2_t: "برمجة الذكاء الاصطناعي",
      service2_p: "نماذج ML، أنظمة توصية، شات بوت، وميزات AI داخل تطبيقات ويب (Django/FastAPI).",
      service2_tag1: "ML",
      service2_tag2: "توصيات",
      service2_tag3: "Chatbots",
      service2_tag4: "APIs",
      service2_tag5: "نشر",

      projects_title: "المشاريع",
      projects_sub: "أعمال مختارة — مع صور وروابط الريبو.",

      contact_title: "تواصل",
      contact_sub: "جاهز لفرص عمل، فريلانس، أو تعاون.",
      contact_h: "تواصل معي",
      contact_p: "أسرع طريقة: واتساب أو بريد. تقدر تشوف GitHub و LinkedIn.",
      contact_cta_whatsapp: "راسلني واتساب",
      contact_cta_email: "إرسال بريد",

      whatsapp_qr_t: "QR واتساب",
      whatsapp_qr_p: "امسح الكود لفتح محادثة واتساب.",
      whatsapp_hint: "إذا QR ما اشتغل، عدّل رابط الواتساب في script.js.",

      contact_form_title: "رسالة سريعة",
      contact_form_sub: "سيفتح برنامج البريد مع رسالة جاهزة.",
      form_subject: "العنوان",
      form_message: "الرسالة",
      form_send: "فتح البريد",
      form_note: "لا يتم حفظ أي بيانات — فقط إنشاء رابط mailto.",
      back_top: "للأعلى ↑",
    }
  };

  const projects = [
    {
      title: "Inventory Management Dashboard",
      image: "assets/inventory.png",
      desc_en: "Inventory system dashboard with alerts, counters, and charts overview.",
      desc_ar: "لوحة تحكم لإدارة المخزون مع تنبيهات ومؤشرات وعدّادات ورسوم بيانية.",
      tags: ["Inventory", "Dashboard", "Charts"],
      links: [{ label: "Repo", url: "https://github.com/WALEEDESBIH/last" }]
    },
    {
      title: "Smartphone Recommender (Django) — Chatbot + 3D",
      image: "assets/recommender.png",
      desc_en: "Django recommender system with chatbot preferences + 3D preview (GLB).",
      desc_ar: "نظام توصية في Django مع شات بوت لتفضيلات المستخدم + عرض 3D (GLB).",
      tags: ["Django", "Recommender", "Chatbot", "3D (GLB)"],
      links: [{ label: "Repo", url: "https://github.com/WALEEDESBIH/Smartphone-Recommender" }]
    }
  ];

  let currentLang = localStorage.getItem("lang") || "en";

  function buildWhatsAppLink(lang) {
    const txt = (lang === "ar") ? WA_TEXT_AR : WA_TEXT_EN;
    return `${WA_BASE}?text=${encodeURIComponent(txt)}`;
  }

  function applyWhatsAppLink(lang) {
    const link = buildWhatsAppLink(lang);
    const waBtnTop = $("#waBtnTop");
    const waBtnContact = $("#waBtnContact");
    const waLinkContact = $("#waLinkContact");

    [waBtnTop, waBtnContact, waLinkContact].forEach(el => {
      if (el) el.href = link;
    });
  }

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = i18n[lang]?.[key];
      if (val) el.textContent = val;
    });

    applyWhatsAppLink(lang);
    renderProjects();
  }

  function renderProjects() {
    const grid = $("#projectsGrid");
    if (!grid) return;
    grid.innerHTML = "";

    projects.forEach(p => {
      const card = document.createElement("article");
      card.className = "card";

      const img = document.createElement("img");
      img.className = "projectImg";
      img.src = p.image;
      img.alt = p.title;
      img.onerror = () => img.remove();

      const title = document.createElement("h3");
      title.className = "projectTitle";
      title.textContent = p.title;

      const desc = document.createElement("p");
      desc.className = "muted";
      desc.textContent = (currentLang === "ar") ? p.desc_ar : p.desc_en;

      const meta = document.createElement("div");
      meta.className = "projectMeta";
      (p.tags || []).forEach(t => {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = t;
        meta.appendChild(tag);
      });

      const links = document.createElement("div");
      links.className = "projectLinks";
      (p.links || []).forEach(l => {
        const a = document.createElement("a");
        a.href = l.url;
        a.target = "_blank";
        a.rel = "noreferrer";
        a.textContent = l.label;
        links.appendChild(a);
      });

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(meta);
      card.appendChild(links);

      grid.appendChild(card);
    });
  }

  // Year
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Language toggle
  const langBtn = $("#langBtn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      applyLang(currentLang === "en" ? "ar" : "en");
    });
  }

  // Contact form -> mailto
  const contactForm = $("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const subject = ($("#subject")?.value || "").trim() || "Portfolio message";
      const message = ($("#message")?.value || "").trim() || "Hi Waleed,";
      const mailto = `mailto:waleedesbih212@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailto;
    });
  }

  // Init
  applyLang(currentLang);
});
