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
      date_en: "2025/9 - 2025/12",
      date_ar: "2025/9 - 2025/12",
      title_en: "Data Analyst — ZeeDimension",
      title_ar: "محلل بيانات — ZeeDimension",
      desc_en: "Data analysis, reporting, dashboards, and SQL work on real datasets.",
      desc_ar: "تحليل بيانات وتقارير وداشبورد وSQL على بيانات واقعية."
    },
    {
      date_en: "2022/8 - 2022/12",
      date_ar: "2022/8 - 2022/12",
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
    TIMELINE.forEach(() => {}); // keep lint calm

    TIMELINE.forEach((item) => {
      const wrap = document.createElement("div");
      wrap.className = "tItem reveal";
      wrap.dataset.anim = "up";

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
      card.className = "card pCard reveal tilt";
      card.dataset.anim = "up";

      const img = document.createElement("img");
      img.className = "pImg";
      img.src = p.img;
      img.alt = p.title;
      img.loading = "lazy";
      img.onerror = () => {
        // If image missing, remove it and keep clean layout
        img.remove();
      };

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

      const shine = document.createElement("div");
      shine.className = "cardShine";
      shine.setAttribute("aria-hidden","true");

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(tags);
      card.appendChild(links);
      card.appendChild(shine);

      grid.appendChild(card);
    });
  }

  // Smooth scroll with sticky header offset
  function initSmoothAnchors() {
    const header = $("#topbar");
    const offset = () => (header ? header.getBoundingClientRect().height + 10 : 70);

    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;

        e.preventDefault();
        const top = window.scrollY + target.getBoundingClientRect().top - offset();
        window.scrollTo({ top, behavior: "smooth" });
      });
    });
  }

  // Reveal + stagger (strong)
  function initReveal() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll(".reveal"));

    if (reduce) {
      nodes.forEach(el => el.classList.add("show"));
      return;
    }

    // Stagger timing
    nodes.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i * 55, 420)}ms`;
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("show");
      });
    }, { threshold: 0.14 });

    nodes.forEach(el => io.observe(el));
  }

  // Scroll progress bar
  function initScrollProgress() {
    const bar = $("#scrollBar");
    if (!bar) return;

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? (doc.scrollTop / max) : 0;
      bar.style.width = `${Math.min(100, Math.max(0, p * 100))}%`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Active nav indicator
  function initActiveNav() {
    const nav = document.querySelector(".navLinks");
    const indicator = $("#navIndicator");
    if (!nav || !indicator) return;

    const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
    const sections = links
      .map(a => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    function setIndicatorTo(link) {
      const r = link.getBoundingClientRect();
      const nr = nav.getBoundingClientRect();
      indicator.style.opacity = "1";
      indicator.style.width = `${Math.max(16, r.width - 10)}px`;
      indicator.style.transform = `translateX(${r.left - nr.left + 5}px)`;
    }

    // hover indicator
    links.forEach(a => {
      a.addEventListener("mouseenter", () => setIndicatorTo(a));
    });
    nav.addEventListener("mouseleave", () => {
      // keep last active
    });

    const io = new IntersectionObserver((entries) => {
      // choose most visible
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      const id = `#${visible.target.id}`;
      const activeLink = links.find(a => a.getAttribute("href") === id);
      if (activeLink) setIndicatorTo(activeLink);
    }, { threshold: [0.2,0.35,0.5,0.65] });

    sections.forEach(s => io.observe(s));

    // initial
    const first = links[0];
    if (first) setIndicatorTo(first);
  }

  // Parallax glow (light)
  function initHeroParallax() {
    const glow = $("#heroGlow");
    if (!glow) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      glow.style.transform = `translateY(${y * -10}px) translateX(${x * 12}px)`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
  }

  // 3D tilt for cards with class .tilt (hover)
  function initTiltCards() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const cards = Array.from(document.querySelectorAll(".tilt"));
    cards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const mx = (e.clientX - r.left) / r.width;
        const my = (e.clientY - r.top) / r.height;

        const rx = (0.5 - my) * 8;
        const ry = (mx - 0.5) * 10;

        card.style.transform = `translateY(-4px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        card.style.setProperty("--mx", `${mx*100}%`);
        card.style.setProperty("--my", `${my*100}%`);
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  // Contact form -> mailto
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

  // Count-up animation
  function animateCount(el, to) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { el.textContent = String(to); return; }

    const start = 0;
    const dur = 900;
    const t0 = performance.now();

    function tick(now) {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(start + (to - start) * eased);
      el.textContent = String(val);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
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

    if (kpiRepos) animateCount(kpiRepos, user.public_repos ?? 0);
    if (kpiStars) animateCount(kpiStars, totalStars);
    if (kpiFollowers) animateCount(kpiFollowers, user.followers ?? 0);

    // Recently updated repos
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

    // Languages (rough)
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
      initReveal(); // re-observe because we recreated cards
    });
  }

  // Init
  initYear();
  applyAll();
  initContactForm();
  initSmoothAnchors();
  initScrollProgress();
  initActiveNav();
  initHeroParallax();
  initTiltCards();
  initReveal();
  loadGitHubStats().catch(() => {});
});
