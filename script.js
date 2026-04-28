const siteData = {
  icons: {
    email: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm2.1-.25L12 11.57l6.9-5.07H5.1Zm14.4 1.86-6.76 4.97a1.25 1.25 0 0 1-1.48 0L4.5 8.36v8.89c0 .14.11.25.25.25h14.5a.25.25 0 0 0 .25-.25V8.36Z" fill="currentColor"/>
      </svg>
    `,
    whatsapp: `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 3.25a8.75 8.75 0 0 0-7.56 13.16L3 21l4.73-1.38A8.75 8.75 0 1 0 12 3.25Zm0 15.75a6.94 6.94 0 0 1-3.55-.97l-.25-.15-2.8.82.84-2.72-.16-.28A7 7 0 1 1 12 19Zm3.9-5.17c-.21-.1-1.24-.61-1.43-.68-.19-.07-.33-.1-.46.1-.14.2-.53.68-.65.82-.12.14-.24.15-.45.05-.21-.1-.88-.32-1.67-1.02-.62-.55-1.04-1.23-1.16-1.44-.12-.2-.01-.31.09-.41.09-.09.21-.24.31-.36.1-.12.14-.2.21-.34.07-.14.03-.25-.02-.36-.05-.1-.46-1.12-.63-1.53-.17-.41-.34-.35-.46-.35h-.39c-.14 0-.36.05-.55.25-.19.2-.73.71-.73 1.73s.75 2 1.05 2.41c.31.41 1.48 2.25 3.58 3.15.5.22.89.35 1.19.45.5.16.95.14 1.3.08.4-.06 1.24-.51 1.42-1 .17-.49.17-.91.12-1-.05-.08-.19-.13-.4-.23Z" fill="currentColor"/>
      </svg>
    `,
  },
  services: [
    {
      title: "Estruturas metalicas",
      description: "Fabricacao e montagem de estruturas para galpoes, coberturas, mezaninos e reforcos.",
    },
    {
      title: "Soldagem especializada",
      description: "Solda com acabamento tecnico para manutencao, reparo e desenvolvimento de componentes.",
    },
    {
      title: "Serralheria sob medida",
      description: "Portoes, grades, corrimaos, escadas e solucoes personalizadas conforme o espaco.",
    },
    {
      title: "Caldeiraria leve",
      description: "Corte, dobra, ajuste e montagem de pecas para aplicacoes tecnicas e industriais.",
    },
    {
      title: "Manutencao industrial",
      description: "Recuperacao de estruturas, reforco de equipamentos e intervencoes com rapidez.",
    },
    {
      title: "Projetos personalizados",
      description: "Desenvolvimento sob demanda com foco em funcionalidade, durabilidade e bom acabamento.",
    },
  ],
  projects: [
    {
      category: "estruturas",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
      alt: "Estrutura metalica industrial em fase de montagem",
      title: "Galpao e cobertura",
      description: "Montagem de estrutura resistente para operacao industrial e fluxo logistica.",
    },
    {
      category: "soldagem",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
      alt: "Profissional executando soldagem em metal",
      title: "Soldagem tecnica",
      description: "Reforco estrutural e acabamento de precisao para pecas e equipamentos.",
    },
    {
      category: "serralheria",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80",
      alt: "Servico de serralheria com portao metalico",
      title: "Portoes e acessos",
      description: "Projetos sob medida para seguranca, circulacao e acabamento contemporaneo.",
    },
    {
      category: "estruturas",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
      alt: "Equipe trabalhando em estrutura de metal",
      title: "Execucao em campo",
      description: "Instalacoes com planejamento, seguranca operacional e entrega organizada.",
    },
    {
      category: "soldagem",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80",
      alt: "Detalhe de corte e acabamento em peca metalica",
      title: "Pecas especiais",
      description: "Producoes com corte, ajuste e solda para aplicacoes especificas de cada cliente.",
    },
    {
      category: "serralheria",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
      alt: "Escada metalica com acabamento moderno",
      title: "Escadas e corrimaos",
      description: "Solucoes que combinam funcionalidade, resistencia e visual profissional.",
    },
  ],
  highlights: [
    {
      title: "Atendimento consultivo",
      description: "Entendemos a necessidade antes de fabricar.",
    },
    {
      title: "Entrega com capricho",
      description: "Acabamento tecnico, limpo e funcional.",
    },
    {
      title: "Agilidade real",
      description: "Processo organizado para responder e executar com eficiencia.",
    },
  ],
  contacts: [
    {
      icon: "email",
      title: "Enviar e-mail",
      text: "newmaxmontagens@gmail.com",
      href: "mailto:newmaxmontagens@gmail.com?subject=Orcamento%20New%20Max",
    },
    {
      icon: "whatsapp",
      title: "Chamar no WhatsApp",
      text: "(11) 99999-9999",
      href: "https://wa.me/5511999999999?text=Ola%2C%20quero%20um%20orcamento%20da%20New%20Max",
      external: true,
    },
  ],
};

const serviceGrid = document.querySelector("#service-grid");
const projectGrid = document.querySelector("#project-grid");
const aboutHighlights = document.querySelector("#about-highlights");
const contactActions = document.querySelector("#contact-actions");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");
const filterButtons = document.querySelectorAll(".filter-button");
const counters = document.querySelectorAll("[data-counter]");

const renderServices = () => {
  if (!serviceGrid) {
    return;
  }

  serviceGrid.innerHTML = siteData.services
    .map(
      (service, index) => `
        <article class="service-card reveal">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </article>
      `
    )
    .join("");
};

const renderProjects = () => {
  if (!projectGrid) {
    return;
  }

  projectGrid.innerHTML = siteData.projects
    .map(
      (project) => `
        <article class="project-card reveal" data-category="${project.category}">
          <img src="${project.image}" alt="${project.alt}">
          <div class="project-content">
            <strong>${project.title}</strong>
            <p>${project.description}</p>
          </div>
        </article>
      `
    )
    .join("");
};

const renderHighlights = () => {
  if (!aboutHighlights) {
    return;
  }

  aboutHighlights.innerHTML = siteData.highlights
    .map(
      (item) => `
        <article>
          <strong>${item.title}</strong>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
};

const renderContacts = () => {
  if (!contactActions) {
    return;
  }

  contactActions.innerHTML = siteData.contacts
    .map(
      (contact) => `
        <a class="contact-card" href="${contact.href}" ${contact.external ? 'target="_blank" rel="noreferrer"' : ""}>
          <span class="contact-icon">${siteData.icons[contact.icon] ?? ""}</span>
          <div>
            <strong>${contact.title}</strong>
            <p>${contact.text}</p>
          </div>
        </a>
      `
    )
    .join("");
};

renderServices();
renderProjects();
renderHighlights();
renderContacts();

const projectCards = document.querySelectorAll(".project-card");
const revealItems = document.querySelectorAll(".reveal");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    projectCards.forEach((card) => {
      const matches = selectedFilter === "all" || card.dataset.category === selectedFilter;
      card.classList.toggle("is-hidden", !matches);
    });
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const animateCounter = (element) => {
  const target = Number(element.dataset.counter);
  const duration = 1400;
  const start = performance.now();

  const step = (timestamp) => {
    const progress = Math.min((timestamp - start) / duration, 1);
    const value = Math.floor(progress * target);
    element.textContent = value.toString();

    if (progress < 1) {
      requestAnimationFrame(step);
      return;
    }

    element.textContent = target.toString();
  };

  requestAnimationFrame(step);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.7,
  }
);

counters.forEach((counter) => counterObserver.observe(counter));
