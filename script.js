document.addEventListener("DOMContentLoaded", () => {
  const $ = (s) => document.querySelector(s);

  const GITHUB_USER = "WALEEDESBIH";
  const WA_BASE = "https://wa.me/962792261615";
  const WA_TEXT_EN = "Hi Waleed, I saw your portfolio and I need data analysis or AI development.";
  const WA_TEXT_AR = "مرحبا وليد، شفت البورتفوليو وبدي خدمة تحليل بيانات أو برمجة ذكاء اصطناعي.";

  const PROJECTS = [
    {
      title: "Inventory Management System",
      desc_en: "Inventory dashboard with charts, alerts, and management features.",
      desc_ar: "نظام إدارة مخزون مع لوحة تحكم ورسوم وتنبيهات وميزات إدارة.",
      tags: ["Dashboard", "Inventory", "Charts"],
      img: "assets/inventory.png",
      links: [{ label: "GitHub", url: "https://github.com/WALEEDESBIH/last" }]
    },
    {
      title: "Smartphone Recommender (Django)",
      desc_en: "Recommendation system with chatbot preferences and smart filtering.",
      desc_ar: "نظام توصية مع شات بوت للتفضيلات وترشيح ذكي.",
      tags: ["Django", "Recommender", "Chatbot"],
      img: "assets/recommender.png",
      links: [{ label: "GitHub", url: "https://github.com/WALEEDESBIH/Smartphone-Recommender" }]
    }
  ];

  const TIMELINE = [
    {
      date_en: "2024",
      date_ar: "2024",
      title_en: "Data Analyst — ZeeDimension",
      title_ar: "محلل بيانات — ZeeDimension",
      desc_en: "Data analysis, reporting, dashboards, and SQL work on real datasets.",
      desc_ar: "تحليل بيانات وتقارير وداشبورد وSQL على بيانات واقعية."
    },
    {
      date_en: "2022 – 2023",
      date_ar: "2022 – 2023",
      title_en: "Customer Service — Crystal Call Center",
      title_ar: "خدمة عملاء — Crystal Call Center",
      desc_en: "Handled customer inquiries and problem solving with high responsibility.",
      desc_ar: "التعامل مع استفسارات العملاء وحل المشاكل بمسؤولية عالية."
    }
  ];

  const I18N = {
    en: {
      nav_about: "About",
      nav_journey: "Journey",
      nav_skills: "Skills",
      nav_github: "GitHub",
      nav_projects: "Projects",
      nav_contact: "Contact",

      hero_badge: "Available for freelance & opportunities",
      hero_hi: "Hi, I’m",
      hero_sub: "Data Analyst & AI Developer — I build dashboards, analyze data, and develop AI features that improve decisions.",
      hero_view_projects: "View Projects",
      hero_whatsapp: "WhatsApp",
      hero_email: "Email",

      stat_data: "Dashboards & Insights",
      stat_ai: "ML & Recommenders",
      stat_web: "APIs & Delivery",

      about_title: "About",
      about_sub: "A short introduction about what I do.",
      about_h1: "What I deliver",
      about_li1: "Clean data + EDA + clear insights",
      about_li2: "Dashboards (Power BI / Metabase) & KPI reports",
      about_li3: "AI features (recommendation systems, chatbots, ML models)",
      about_li4: "Full delivery: API + UI + deployment-ready structure",
      about_h2: "Focus",
      note_title: "Portfolio note",
      note_sub: "This site is bilingual (EN/AR). Use the top button to switch language.",

      journey_title: "My Journey",
      journey_sub: "A quick timeline of experience & growth.",

      skills_title: "Tech Stack",
      skills_sub: "Tools & technologies I use.",
      sk_cat1: "Data",
      sk_cat2: "SQL & BI",
      sk_cat3: "AI",
      sk_cat4: "Web & Tools",

      gh_title: "GitHub Activity",
      gh_sub: "Live stats fetched from GitHub.",
      gh_repos: "Public Repos",
      gh_stars: "Total Stars",
      gh_followers: "Followers",
      gh_recent: "Recently Updated",
      gh_langs: "Top Languages",
      gh_note: "These are estimated from your public repositories.",
      gh_view_profile: "View Profile",

      projects_title: "Projects",
      projects_sub: "Selected projects with screenshots & links.",

      contact_title: "Get in touch",
      contact_sub: "Let’s discuss work, freelance, or collaborations.",
      contact_whatsapp: "WhatsApp Me",
      contact_email: "Send Email",
      contact_form: "Quick Message",
      contact_form_sub: "Opens your email app with a prepared message.",
      form_subject: "Subject",
      form_message: "Message",
      form_send: "Open Email",
      form_note: "No data stored — it only creates a mailto link.",
      back_top: "Back to top ↑"
    },

    ar: {
      nav_about: "عنّي",
      nav_journey: "المسار",
      nav_skills: "المهارات",
      nav_github: "GitHub",
      nav_projects: "المشاريع",
      nav_contact: "تواصل",

      hero_badge: "متاح للفريلانس وفرص العمل",
      hero_hi: "مرحباً، أنا",
      hero_sub: "محلل بيانات ومطور ذكاء اصطناعي — أبني داشبورد، أحلل البيانات، وأطوّر ميزات AI تساعد على اتخاذ قرارات أفضل.",
      hero_view_projects: "عرض المشاريع",
      hero_whatsapp: "واتساب",
      hero_email: "بريد",

      stat_data: "داشبورد ونتائج",
      stat_ai: "ML وتوصيات",
      stat_web: "APIs وتسليم",

      about_title: "عنّي",
      about_sub: "ملخص سريع عمّا أقدمه.",
      about_h1: "ماذا أقدّم",
      about_li1: "تنظيف بيانات + EDA + Insights واضحة",
      about_li2: "Dashboards (Power BI / Metabase) وتقارير KPI",
      about_li3: "ميزات AI (توصيات، شات بوت، نماذج ML)",
      about_li4: "تسليم كامل: API + UI + تجهيز للنشر",
      about_h2: "التركيز",
      note_title: "ملاحظة",
      note_sub: "الموقع ثنائي اللغة (EN/AR). استخدم زر الأعلى لتغيير اللغة.",

      journey_title: "مساري",
      journey_sub: "Timeline سريع للخبرة والتطور.",

      skills_title: "المهارات التقنية",
      skills_sub: "الأدوات والتقنيات التي أستخدمها.",
      sk_cat1: "البيانات",
      sk_cat2: "SQL و BI",
      sk_cat3: "الذكاء الاصطناعي",
      sk_cat4: "الويب والأدوات",

      gh_title: "نشاط GitHub",
      gh_sub: "إحصائيات مباشرة من GitHub.",
      gh_repos: "Repos عامة",
      gh_stars: "عدد النجوم",
      gh_followers: "المتابعين",
      gh_recent: "آخر تحديثات",
      gh_langs: "أكثر اللغات",
      gh_note: "تقدير مبني على الريبو العامة.",
      gh_view_profile: "عرض الحساب",

      projects_title: "المشاريع",
      projects_sub: "مشاريع مختارة مع صور وروابط.",

      contact_title: "تواصل",
      contact_sub: "جاهز لعمل، فريلانس، أو تعاون.",
      contact_whatsapp: "راسلني واتساب",
      contact_email: "إرسال بريد",
      contact_form: "رسالة سريعة",
      contact_form_sub: "سيفتح برنامج البريد برسالة جاهزة.",
      form_subject: "العنوان",
      form_message: "الرسالة",
      form_send: "فتح البريد",
      form_note: "لا يتم حفظ بيانات — فقط إنشاء mailto.",
      back_top: "للأعلى ↑"
    }
  };

  let lang = localStorage.getItem("lang") || "en";

  function waLinkForLang(l) {
    const txt = (l === "ar") ? WA_TEXT_AR : WA_TEXT_EN;
    return `${WA_BASE}?text=${encodeURIComponent(txt)}`;
  }

  function setWhatsAppLinks() {
    const link = waLinkForLang(lang);
    ["waBtnTop","waBtnContact","waLinkContact","waMini"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.href = link;
    });
  }

  function applyI18n() {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const v = I18N[lang]?.[key];
      if (v) el.textContent = v;
    });
  }

  function renderTimeline() {
    const root = $("#timeline");
    if (!root) return;
    root.innerHTML = "";

    TIMELINE.forEach(item => {
      const wrap = document.createElement("div");
      wrap.className = "tItem";

      const date = document.createElement("div");
      date.className = "tDate";
      date.textContent = (lang === "ar") ? item.date_ar : item.date_en;

      const body = document.createElement("div");

      const title = document.createElement("h3");
      title.className = "tTitle";
      title.textContent = (lang === "ar") ? item.title_ar : item.title_en;

      const desc = document.createElement("p");
      desc.className = "tDesc";
      desc.textContent = (lang === "ar") ? item.desc_ar : item.desc_en;

      body.appendChild(title);
      body.appendChild(desc);

      wrap.appendChild(date);
      wrap.appendChild(body);

      root.appendChild(wrap);
    });
  }

  function renderProjects() {
    const grid = $("#projectsGrid");
    if (!grid) return;
    grid.innerHTML = "";

    PROJECTS.forEach((p) => {
      const card = document.createElement("article");
      card.className = "card pCard reveal";

      const img = document.createElement("img");
      img.className = "pImg";
      img.src = p.img;
      img.alt = p.title;
      img.loading = "lazy";
      img.onerror = () => img.remove();

      const title = document.createElement("h3");
      title.className = "pTitle";
      title.textContent = p.title;

      const desc = document.createElement("p");
      desc.className = "pDesc";
      desc.textContent = (lang === "ar") ? p.desc_ar : p.desc_en;

      const tags = document.createElement("div");
      tags.className = "pTags";
      (p.tags || []).forEach(t => {
        const s = document.createElement("span");
        s.className = "tag";
        s.textContent = t;
        tags.appendChild(s);
      });

      const links = document.createElement("div");
      links.className = "pLinks";
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
      card.appendChild(tags);
      card.appendChild(links);

      grid.appendChild(card);
    });
  }

  function initReveal() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll(".reveal"));

    if (reduce) {
      nodes.forEach(el => el.classList.add("show"));
      return;
    }

    // Stagger delay for nice "one-by-one" entrance
    nodes.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i * 60, 360)}ms`;
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("show");
      });
    }, { threshold: 0.12 });

    nodes.forEach(el => io.observe(el));
  }

  function initContactForm() {
    const form = $("#contactForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const subject = ($("#subject")?.value || "").trim() || "Portfolio message";
      const message = ($("#message")?.value || "").trim() || "Hi Waleed,";
      const mailto = `mailto:waleedesbih212@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailto;
    });
  }

  function initYear() {
    const y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
  }

  async function loadGitHubStats() {
    const userUrl = `https://api.github.com/users/${GITHUB_USER}`;
    const reposUrl = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`;

    const [userRes, reposRes] = await Promise.all([fetch(userUrl), fetch(reposUrl)]);
    if (!userRes.ok || !reposRes.ok) return;

    const user = await userRes.json();
    const repos = await reposRes.json();

    const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);

    const kpiRepos = $("#kpiRepos");
    const kpiStars = $("#kpiStars");
    const kpiFollowers = $("#kpiFollowers");
    if (kpiRepos) kpiRepos.textContent = user.public_repos ?? "—";
    if (kpiStars) kpiStars.textContent = totalStars;
    if (kpiFollowers) kpiFollowers.textContent = user.followers ?? "—";

    const list = $("#repoList");
    if (list) {
      list.innerHTML = "";
      repos.slice(0, 6).forEach(r => {
        const row = document.createElement("div");
        row.className = "repo";

        const a = document.createElement("a");
        a.href = r.html_url;
        a.target = "_blank";
        a.rel = "noreferrer";
        a.textContent = r.name;

        const meta = document.createElement("span");
        const d = r.updated_at ? new Date(r.updated_at) : null;
        meta.textContent = d ? d.toLocaleDateString() : "";

        row.appendChild(a);
        row.appendChild(meta);
        list.appendChild(row);
      });
    }

    // Rough language estimation
    const langCounts = {};
    repos.forEach(r => {
      const l = r.language;
      if (!l) return;
      langCounts[l] = (langCounts[l] || 0) + 1;
    });

    const sorted = Object.entries(langCounts).sort((a,b) => b[1]-a[1]).slice(0, 6);
    const total = sorted.reduce((s, [,c]) => s + c, 0) || 1;

    const bars = $("#langBars");
    if (bars) {
      bars.innerHTML = "";
      sorted.forEach(([name, count]) => {
        const pct = Math.round((count / total) * 100);

        const box = document.createElement("div");
        box.className = "bar";

        const top = document.createElement("div");
        top.className = "barTop";
        top.innerHTML = `<span>${name}</span><span>${pct}%</span>`;

        const meter = document.createElement("div");
        meter.className = "meter";

        const fill = document.createElement("div");
        fill.style.width = "0%";
        meter.appendChild(fill);

        box.appendChild(top);
        box.appendChild(meter);
        bars.appendChild(box);

        // animate fill after mount
        requestAnimationFrame(() => {
          fill.style.width = `${pct}%`;
        });
      });
    }
  }

  function applyAll() {
    applyI18n();
    setWhatsAppLinks();
    renderTimeline();
    renderProjects();
  }

  const langBtn = $("#langBtn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      lang = (lang === "en") ? "ar" : "en";
      localStorage.setItem("lang", lang);
      applyAll();
    });
  }

  // Init
  initYear();
  applyAll();
  initContactForm();
  initReveal();
  loadGitHubStats().catch(() => {});
});
