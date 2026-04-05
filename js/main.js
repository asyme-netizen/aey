const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const translations = {
  en: {
    navPortfolio: 'Portfolio', navServices: 'Services', navAbout: 'About', navContact: 'Contact', letsTalk: 'Let’s Talk',
    eyebrow: 'AEY STUDIO · DIGITAL DESIGN & EXECUTION',
    heroTitle: 'Designing premium digital experiences that make your work look serious from the first second.',
    heroText: 'I help businesses, creators, and professionals present themselves with strong websites, polished graphic design, premium CVs, clean book formatting, and organized portfolios that feel modern, credible, and built to convert.',
    viewProjects: 'View Portfolio', startProject: 'Start a Project', heroPoint1: 'Fast execution with organized files', heroPoint2: 'Arabic and English ready', heroPoint3: 'Desktop, tablet, and mobile optimized',
    servicesKicker: 'EXPERTISE & SERVICES', servicesTitle: 'A clean and powerful presentation for the services clients actually pay for.', servicesDesc: 'Each service is presented with the same goal: make your business feel premium, trustworthy, and visually organized.',
    service1Title: 'Website Design', service1Text: 'Personal websites, company websites, stores, platforms, and course websites with a premium layout and clean user experience.',
    service2Title: 'Graphic Design', service2Text: 'Strong visuals for brands, social content, presentations, and materials that need to look modern and well-structured.',
    service3Title: 'CV & Portfolio Design', service3Text: 'Professional CVs and portfolio layouts that make your profile easier to trust and more attractive to recruiters or clients.',
    service4Title: 'Book Formatting', service4Text: 'Clean formatting for books and long documents with smart spacing, readable structure, and polished export-ready results.',
    portfolioKicker: 'REAL WORK SHOWCASE', portfolioTitle: 'A project system ready for your real case studies and internal pages.', portfolioDesc: 'Add your real projects once, and each card will automatically open a dedicated internal project page built with the same design system.',
    aboutKicker: 'ABOUT AEY STUDIO', aboutTitle: 'Ahmed Emad Younes creates digital work that looks strong, organized, and ready to represent serious brands.',
    aboutText1: 'The focus is not only beauty. The focus is clarity, confidence, and a premium first impression that helps people trust your work faster.',
    aboutText2: 'Every layout is built to perform smoothly on desktop, tablet, and mobile, with bilingual support and a structure that can grow as your portfolio grows.',
    stat1Label: 'Core service categories', stat2Label: 'Languages built in', stat3Label: 'Theme modes', stat4Label: 'Responsive layout',
    contactKicker: 'CONTACT', contactTitle: 'Let’s build something that makes your brand look professional.', contactDesc: 'Send your project brief, contact me directly by email, or message me on Facebook and WhatsApp.',
    contactEmail: 'Email', contactFacebook: 'Facebook', contactWhatsapp: 'WhatsApp',
    formName: 'Full Name', formEmail: 'Email Address', formService: 'Service Type', formService1: 'Website Design', formService2: 'Graphic Design', formService3: 'CV / Portfolio', formService4: 'Book Formatting', formMessage: 'Project Brief', sendInquiry: 'Send Inquiry', sendEmail: 'Send Email',
    portfolioOpen: 'Open project', backToHome: '← Back to portfolio', metaService: 'Service', metaType: 'Type', metaYear: 'Year', challengeTitle: 'Challenge', solutionTitle: 'Solution'
  },
  ar: {
    navPortfolio: 'الأعمال', navServices: 'الخدمات', navAbout: 'نبذة', navContact: 'تواصل', letsTalk: 'ابدأ الحديث',
    eyebrow: 'AEY STUDIO · تصميم وتنفيذ رقمي',
    heroTitle: 'تصميم تجارب رقمية احترافية تجعل عملك يبدو قويًا من أول ثانية.',
    heroText: 'أساعد الشركات وصناع المحتوى والمحترفين على الظهور بشكل أقوى من خلال مواقع احترافية، وتصميمات جرافيك منظمة، وسير ذاتية مميزة، وتنسيق كتب، وبورتفوليو يقدم العمل بصورة حديثة وموثوقة وقابلة للتحويل.',
    viewProjects: 'عرض الأعمال', startProject: 'ابدأ مشروعك', heroPoint1: 'تنفيذ سريع وملفات منظمة', heroPoint2: 'جاهز بالعربية والإنجليزية', heroPoint3: 'مُحسن للديسكتوب والتابلت والموبايل',
    servicesKicker: 'الخبرات والخدمات', servicesTitle: 'عرض نظيف وقوي للخدمات التي يدفع العملاء مقابلها فعلًا.', servicesDesc: 'كل خدمة هنا هدفها أن تجعل مشروعك يبدو احترافيًا وموثوقًا ومنظمًا بصريًا.',
    service1Title: 'تصميم المواقع', service1Text: 'مواقع شخصية ومواقع شركات ومتاجر ومنصات ومواقع كورسات بتصميم احترافي وتجربة استخدام منظمة.',
    service2Title: 'جرافيك ديزاين', service2Text: 'تصميمات قوية للبراندات والسوشيال والمحتوى والعروض التقديمية وكل ما يحتاج شكلًا حديثًا ومنظمًا.',
    service3Title: 'تصميم CV والبورتفوليو', service3Text: 'سير ذاتية وبورتفوليو بشكل احترافي يجعل ملفك أسهل في الثقة وأكثر جاذبية للتوظيف أو للعملاء.',
    service4Title: 'تنسيق الكتب', service4Text: 'تنسيق نظيف للكتب والمستندات الطويلة بمسافات مدروسة وبنية قراءة مريحة وإخراج جاهز للنشر.',
    portfolioKicker: 'عرض الأعمال الحقيقية', portfolioTitle: 'نظام مشاريع جاهز لأعمالك الحقيقية وصفحاتها الداخلية.', portfolioDesc: 'أضف مشاريعك الحقيقية مرة واحدة، وكل بطاقة ستفتح تلقائيًا في صفحة مشروع داخلية بنفس نظام التصميم.',
    aboutKicker: 'عن AEY STUDIO', aboutTitle: 'أحمد عماد يونس يصنع أعمالًا رقمية تبدو قوية ومنظمة وجاهزة لتمثيل البراندات الجادة.',
    aboutText1: 'الهدف ليس الجمال فقط، بل الوضوح والثقة والانطباع الأول الاحترافي الذي يجعل الناس تثق في عملك أسرع.',
    aboutText2: 'كل تخطيط هنا مبني ليعمل بسلاسة على الديسكتوب والتابلت والموبايل، مع دعم اللغتين وبنية قابلة للنمو مع زيادة أعمالك.',
    stat1Label: 'فئات الخدمات الأساسية', stat2Label: 'لغتان مدمجتان', stat3Label: 'وضعان للألوان', stat4Label: 'تجاوب كامل',
    contactKicker: 'التواصل', contactTitle: 'دعنا نبني شيئًا يجعل علامتك تبدو احترافية.', contactDesc: 'أرسل تفاصيل مشروعك أو تواصل معي مباشرة عبر الإيميل أو فيسبوك أو واتساب.',
    contactEmail: 'البريد الإلكتروني', contactFacebook: 'فيسبوك', contactWhatsapp: 'واتساب',
    formName: 'الاسم الكامل', formEmail: 'البريد الإلكتروني', formService: 'نوع الخدمة', formService1: 'تصميم مواقع', formService2: 'جرافيك ديزاين', formService3: 'CV / بورتفوليو', formService4: 'تنسيق كتب', formMessage: 'تفاصيل المشروع', sendInquiry: 'إرسال الطلب', sendEmail: 'إرسال إيميل',
    portfolioOpen: 'فتح المشروع', backToHome: '→ العودة إلى الأعمال', metaService: 'الخدمة', metaType: 'النوع', metaYear: 'السنة', challengeTitle: 'التحدي', solutionTitle: 'الحل'
  }
};

const root = document.documentElement;
const body = document.body;
const themeColorMeta = $('#themeColorMeta');
const themeToggle = $('#themeToggle');
const langToggle = $('#langToggle');
const menuToggle = $('#menuToggle');
const siteNav = $('#siteNav');

function setTheme(theme) {
  root.dataset.theme = theme;
  themeColorMeta?.setAttribute('content', theme === 'dark' ? '#07111e' : '#f4f8ff');
  themeToggle?.setAttribute('aria-pressed', String(theme === 'dark'));
  localStorage.setItem('aey-theme', theme);
  root.classList.add('theme-animating');
  window.clearTimeout(window.__themeAnimTimer);
  window.__themeAnimTimer = window.setTimeout(() => root.classList.remove('theme-animating'), 430);
}

function preferredTheme() {
  const saved = localStorage.getItem('aey-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;
  root.lang = lang;
  root.dir = lang === 'ar' ? 'rtl' : 'ltr';
  body.lang = lang;
  localStorage.setItem('aey-lang', lang);
  if (langToggle) langToggle.textContent = lang === 'ar' ? 'EN' : 'AR';
  $$('[data-i18n]').forEach(node => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });
  renderPortfolio();
  hydrateProjectPage();
}

function preferredLanguage() {
  const saved = localStorage.getItem('aey-lang');
  if (saved === 'ar' || saved === 'en') return saved;
  return 'en';
}

function renderPortfolio() {
  const grid = $('#portfolioGrid');
  if (!grid || !window.AEY_PROJECTS) return;
  const lang = root.lang === 'ar' ? 'ar' : 'en';
  grid.innerHTML = window.AEY_PROJECTS.map(project => `
    <article class="portfolio-card reveal visible">
      <div class="portfolio-visual" style="background:${project.gradient}">${project.category[lang]}</div>
      <div class="portfolio-content">
        <p class="portfolio-category">${project.service[lang]}</p>
        <h3>${project.title[lang]}</h3>
        <p>${project.summary[lang]}</p>
        <a class="portfolio-link" href="project.html?slug=${project.slug}">${translations[lang].portfolioOpen}</a>
      </div>
    </article>
  `).join('');
}

function hydrateProjectPage() {
  const titleNode = $('#projectTitle');
  if (!titleNode || !window.AEY_PROJECTS) return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug') || window.AEY_PROJECTS[0].slug;
  const project = window.AEY_PROJECTS.find(item => item.slug === slug) || window.AEY_PROJECTS[0];
  const lang = root.lang === 'ar' ? 'ar' : 'en';
  document.title = `${project.title[lang]} | AEY Studio`;
  $('#projectCategory').textContent = project.category[lang];
  titleNode.textContent = project.title[lang];
  $('#projectSummary').textContent = project.summary[lang];
  $('#projectService').textContent = project.service[lang];
  $('#projectType').textContent = project.type[lang];
  $('#projectYear').textContent = project.year;
  $('#projectShort').textContent = project.short;
  $('#projectChallenge').textContent = project.challenge[lang];
  $('#projectSolution').textContent = project.solution[lang];
  $('#projectGradient').style.background = project.gradient;
}

function initReveal() {
  const items = $$('.reveal');
  if (!('IntersectionObserver' in window) || !items.length) {
    items.forEach(item => item.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  items.forEach(item => observer.observe(item));
}

menuToggle?.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  const open = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

siteNav && $$('a', siteNav).forEach(link => link.addEventListener('click', () => {
  siteNav.classList.remove('open');
  menuToggle?.classList.remove('active');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

themeToggle?.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
langToggle?.addEventListener('click', () => setLanguage(root.lang === 'ar' ? 'en' : 'ar'));

window.matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', event => {
  if (!localStorage.getItem('aey-theme')) setTheme(event.matches ? 'dark' : 'light');
});

$('#year') && ($('#year').textContent = new Date().getFullYear());
setTheme(preferredTheme());
setLanguage(preferredLanguage());
renderPortfolio();
hydrateProjectPage();
initReveal();
