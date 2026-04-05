const translations = {
  en: {
    navPortfolio: 'Portfolio',
    navServices: 'Services',
    navExperience: 'Experience',
    navContact: 'Contact',
    letsTalk: 'Let’s Talk',
    eyebrow: 'DIGITAL ARCHITECT & STRATEGIST',
    heroTitle: 'Crafting Kinetic Digital Experiences.',
    heroText:
      'Building the gap between architectural precision and technical innovation to build high-performance products that resonate.',
    viewProjects: 'View Projects',
    aboutMe: 'About Me',
    servicesTitle: 'Expertise & Services',
    servicesText:
      'We provide end-to-end digital transformation through specialized design and engineering workflows.',
    service1Title: 'UI/UX Design',
    service1Text:
      'Creating cohesive visual languages and user-centric flows that drive brand clarity.',
    service2Title: 'Web Engineering',
    service2Text:
      'High-performance front-end and scalable solutions built with technical precision.',
    service3Title: 'Brand Strategy',
    service3Text:
      'Positioning your product in the digital landscape through story-driven identity systems.',
    worksTitle: 'Selected Works',
    worksText: 'A showcase of architectural precision in digital design and engineering.',
    work1Tag: 'FINTECH PLATFORM',
    work1Title: 'Nova Capital Platform',
    work2Tag: 'IDENTITY SYSTEM',
    work2Title: 'Arcis Brand System',
    work3Tag: 'E-COMMERCE',
    work3Title: 'Vertex Fashion Hub',
    work4Tag: 'WEB APPLICATION',
    work4Title: 'Oasis Smart Management',
    discoverMore: 'Discover more projects',
    aboutTitle:
      "Ahmed's approach to digital design is fundamentally different. He doesn't just build websites; he builds dynamic structures that breathe with the user's intent.",
    aboutPerson: 'Ahmed Emad',
    aboutRole: 'CTO, Nexus Dynamics',
    stat1: 'Years Exp.',
    stat2: 'Projects',
    stat3: 'Global Clients',
    stat4: 'Awards',
    contactTitle: 'Start a Conversation',
    contactText:
      'Whether you have a specific project or just want to explore the possibilities, I’m here to talk.',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    projectBrief: 'Your Project Brief',
    submitInquiry: 'Submit Inquiry',
    footerText: '© 2026 Ahmed Emad Younes. Built with architectural precision.'
  },
  ar: {
    navPortfolio: 'الأعمال',
    navServices: 'الخدمات',
    navExperience: 'الخبرات',
    navContact: 'التواصل',
    letsTalk: 'ابدأ الآن',
    eyebrow: 'مصمم ومطور مواقع واستراتيجي رقمي',
    heroTitle: 'أصنع تجارب رقمية احترافية نابضة بالحياة.',
    heroText:
      'أجمع بين الدقة في التصميم والابتكار التقني لبناء مواقع ومنصات عالية الأداء تترك انطباعًا قويًا.',
    viewProjects: 'شاهد الأعمال',
    aboutMe: 'من أنا',
    servicesTitle: 'الخبرات والخدمات',
    servicesText:
      'أقدم حلولًا رقمية متكاملة تشمل التصميم والتطوير وبناء تجربة قوية تساعدك على النمو.',
    service1Title: 'تصميم UI/UX',
    service1Text:
      'تصميم واجهات وتجارب مستخدم واضحة وعصرية تعكس هويتك وتدعم أهدافك.',
    service2Title: 'تطوير المواقع',
    service2Text:
      'تنفيذ مواقع ومتاجر ومنصات سريعة وعملية بكود منظم وتجربة استخدام ممتازة.',
    service3Title: 'الهوية والاستراتيجية',
    service3Text:
      'بناء حضور رقمي مميز يساعد مشروعك على الظهور والثقة والتحويل بشكل أفضل.',
    worksTitle: 'أعمال مختارة',
    worksText: 'نماذج توضح الجمع بين جودة التصميم وقوة التنفيذ.',
    work1Tag: 'منصة مالية',
    work1Title: 'منصة نوفا كابيتال',
    work2Tag: 'هوية بصرية',
    work2Title: 'هوية أركِس',
    work3Tag: 'متجر إلكتروني',
    work3Title: 'فيرتكس فاشون',
    work4Tag: 'تطبيق ويب',
    work4Title: 'أواسس للإدارة الذكية',
    discoverMore: 'اكتشف المزيد من الأعمال',
    aboutTitle:
      'طريقة أحمد في بناء المواقع مختلفة. هو لا يصنع مجرد صفحات، بل يبني تجربة رقمية متكاملة تتحرك مع هدف المستخدم وتدعم نمو المشروع.',
    aboutPerson: 'أحمد عماد',
    aboutRole: 'مصمم ومطور مواقع',
    stat1: 'سنوات خبرة',
    stat2: 'مشروع',
    stat3: 'عميل',
    stat4: 'إنجاز',
    contactTitle: 'ابدأ محادثة',
    contactText:
      'سواء كان لديك مشروع واضح أو تريد استكشاف الفكرة، يسعدني التواصل معك ومساعدتك.',
    fullName: 'الاسم الكامل',
    emailAddress: 'البريد الإلكتروني',
    projectBrief: 'نبذة عن مشروعك',
    submitInquiry: 'إرسال الطلب',
    footerText: '© 2026 أحمد عماد يونس. تم بناء الموقع بعناية واحترافية.'
  }
};

const root = document.body;
const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');

function applyLanguage(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;
  root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  root.dataset.lang = lang;
  langToggle.textContent = lang === 'ar' ? 'EN' : 'AR';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      if (key === 'heroTitle') {
        if (lang === 'en') {
          el.innerHTML = 'Crafting <span class="accent">Kinetic</span><br />Digital Experiences.';
        } else {
          el.innerHTML = 'أصنع <span class="accent">تجارب رقمية</span><br />احترافية نابضة بالحياة.';
        }
      } else {
        el.textContent = dict[key];
      }
    }
  });

  localStorage.setItem('site-lang', lang);
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('site-theme', theme);
}

langToggle.addEventListener('click', () => {
  const next = root.dataset.lang === 'ar' ? 'en' : 'ar';
  applyLanguage(next);
});

themeToggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  applyTheme(next);
});

applyLanguage(localStorage.getItem('site-lang') || 'en');
applyTheme(localStorage.getItem('site-theme') || 'dark');
