(() => {
  "use strict";
  const config = window.SITE_CONFIG || {};
  const text = (selector, value, root = document) => {
    if (typeof value !== "string") return;
    root.querySelectorAll(selector).forEach(element => { element.textContent = value; });
  };
  document.querySelectorAll("[data-text]").forEach(element => {
    const value = element.dataset.text.split(".").reduce((item, key) => item?.[key], config);
    if (typeof value === "string") element.textContent = value;
  });
  const name = config.company?.name || "DEVMONG";
  text("[data-company-name]", name);
  document.querySelectorAll("[data-brand-link]").forEach(link => link.setAttribute("aria-label", `${name} 홈`));
  const logo = config.company?.logo?.trim();
  // 로컬 로고만 허용합니다. 외부 추적 이미지나 스크립트 URL을 넣지 않습니다.
  if (logo && /^\.\/assets\/[a-zA-Z0-9가-힣._/-]+\.(svg|png|jpe?g|webp)$/i.test(logo) && !logo.includes("..")) {
    document.querySelectorAll("[data-brand-image]").forEach(image => {
      image.addEventListener("load", () => {
        image.hidden = false;
        image.nextElementSibling.hidden = true;
      }, { once: true });
      image.alt = name;
      image.src = logo;
    });
  }
  const isHome = document.body.dataset.page !== "privacy" && document.body.dataset.page !== "404";
  if (config.seo?.title) document.title = isHome ? config.seo.title : `${document.body.dataset.page === "privacy" ? "개인정보 안내" : "페이지를 찾을 수 없습니다"} | ${name}`;
  if (isHome) {
    const setMeta = (selector, value) => {
      if (value) document.querySelector(selector)?.setAttribute("content", value);
    };
    setMeta('meta[name="description"]', config.seo?.description);
    setMeta('meta[property="og:title"]', config.seo?.title);
    setMeta('meta[property="og:description"]', config.seo?.description);
  }

  document.querySelectorAll("[data-service]").forEach(card => {
    const item = config.services?.items?.[Number(card.dataset.service)];
    if (!item) return;
    text("[data-service-title]", item.title, card);
    text("[data-service-description]", item.description, card);
    if (Array.isArray(item.tags)) {
      const tags = card.querySelector(".service-tags");
      tags.replaceChildren(...item.tags.filter(tag => typeof tag === "string").map(tag => {
        const element = document.createElement("li");
        element.textContent = tag;
        return element;
      }));
    }
  });
  document.querySelectorAll("[data-about]").forEach(card => {
    const item = config.about?.items?.[Number(card.dataset.about)];
    if (!item) return;
    text("[data-about-title]", item.title, card);
    text("[data-about-description]", item.description, card);
  });

  // 실제 이메일이 등록되기 전에는 잘못된 주소로 문의가 전송되지 않게 합니다.
  const email = typeof config.contact?.email === "string" ? config.contact.email.trim() : "";
  const validEmail = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) && !/[\r\n?#]/.test(email);
  const contactButton = document.querySelector("[data-contact-button]");
  if (contactButton && validEmail) {
    contactButton.href = `mailto:${email}`;
    contactButton.removeAttribute("aria-disabled");
    contactButton.removeAttribute("role");
    contactButton.removeAttribute("tabindex");
    text("[data-contact-button-label]", config.inquiry?.button || "이메일로 문의하기");
    text("[data-contact-status]", email);
  } else if (contactButton) {
    contactButton.removeAttribute("href");
    contactButton.setAttribute("aria-disabled", "true");
    contactButton.setAttribute("role", "link");
    contactButton.setAttribute("tabindex", "0");
    text("[data-contact-button-label]", "연락처 준비 중");
    text("[data-contact-status]", "문의 이메일이 등록될 예정입니다.");
  }
  document.querySelectorAll("[data-contact-email]").forEach(link => {
    link.textContent = validEmail ? email : "문의 이메일 준비 중";
    if (validEmail) link.href = `mailto:${email}`;
    else link.removeAttribute("href");
  });
  const details = document.querySelector("[data-contact-details]");
  const appendDetail = (label, value, href) => {
    if (!details || typeof value !== "string" || !value.trim()) return;
    const row = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = label;
    if (href) {
      const link = document.createElement("a");
      link.href = href;
      link.textContent = value;
      description.append(link);
    } else description.textContent = value;
    row.append(term, description);
    details.append(row);
    details.hidden = false;
  };
  const phone = typeof config.contact?.phone === "string" ? config.contact.phone.trim() : "";
  const digits = phone.replace(/[\s().-]/g, "");
  appendDetail("전화", phone, /^\+?\d{7,15}$/.test(digits) ? `tel:${digits}` : undefined);
  appendDetail("주소", config.contact?.address);
  const companyDetails = document.querySelector("[data-company-details]");
  if (companyDetails) {
    const info = [config.company?.legalName ? `회사명 ${config.company.legalName}` : "", config.company?.representative ? `대표 ${config.company.representative}` : "", config.company?.businessNumber ? `사업자등록번호 ${config.company.businessNumber}` : ""].filter(Boolean);
    companyDetails.textContent = info.join(" · ");
    companyDetails.hidden = info.length === 0;
  }
  document.querySelectorAll("[data-draft-notice]").forEach(element => { element.hidden = config.showDraftNotice === false; });
  text("[data-year]", String(new Date().getFullYear()));

  const navbar = document.getElementById("navbar");
  const menuButton = document.querySelector(".mobile-menu-btn");
  const menu = document.getElementById("nav-links");
  if (navbar) {
    const updateNavbar = () => navbar.classList.toggle("scrolled", window.scrollY > 50);
    window.addEventListener("scroll", updateNavbar, { passive: true });
    updateNavbar();
  }
  if (navbar && menuButton && menu) {
    const setMenu = open => {
      navbar.classList.toggle("menu-open", open);
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    };
    menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
    menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        menuButton.focus();
      }
    });
    document.addEventListener("click", event => {
      if (!navbar.contains(event.target)) setMenu(false);
    });
    const mobile = window.matchMedia("(max-width: 768px)");
    mobile.addEventListener("change", () => setMenu(false));
    menuButton.hidden = false;
    document.documentElement.classList.add("js-menu");
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!reducedMotion.matches && "IntersectionObserver" in window) {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("is-pending");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.documentElement.classList.add("motion-enabled");
    revealElements.forEach(element => {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("is-pending");
        observer.observe(element);
      }
    });
    // 화면 감지 기능이 동작하지 않는 환경에서도 본문이 계속 숨겨지지 않게 합니다.
    window.setTimeout(() => revealElements.forEach(element => element.classList.remove("is-pending")), 6000);
  }
})();
