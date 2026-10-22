// Pega aquí el enlace normal del video de YouTube cuando esté disponible.
const supportYoutubeUrl = 'https://youtu.be/K9FsEc6haeE';
const translationsEsEn = {
  'mi espacio': 'my space',
  'PORTAFOLIO PERSONAL': 'PERSONAL PORTFOLIO',
  'PORTAFOLIO': 'PORTFOLIO',
  'Python · TypeScript · React · n8n · Colombia (Remoto)': 'Python · TypeScript · React · n8n · Colombia (Remote)',
  'EXPLORA A TU RITMO': 'EXPLORE AT YOUR OWN PACE',
  'DISPONIBLE PARA NUEVOS RETOS': 'AVAILABLE FOR NEW CHALLENGES',
  'Hola, soy': 'Hi, I am',
  'Conóceme': 'About me',
  'Quién soy': 'About me',
  'Proyectos': 'Projects',
  'Archivos': 'Files',
  'Videos': 'Videos',
  'Contacto': 'Contact',
  'Todo en orden': 'All systems go',
  'TU ESPACIO': 'YOUR SPACE',
  'Disponible para colaborar': 'Available for opportunities',
  'Mi portafolio': 'My portfolio',
  'DESARROLLADOR FULL-STACK JR. · AUTOMATIZACIÓN CON IA': 'JUNIOR FULL-STACK DEVELOPER · AI AUTOMATION',
  'Ingeniero de Software en formación · Colombia · Disponible para trabajo remoto': 'Software Engineering student · Colombia · Available for remote work',
  'Perfil profesional': 'Professional profile',
  'Desarrollador Full-Stack Jr. con experiencia práctica en desarrollo de software, soporte técnico y automatización de procesos con inteligencia artificial. He creado herramientas para reducir tareas manuales y prototipos que combinan IA con atención humana.': 'Junior Full-Stack Developer with hands-on experience in software development, technical support, and AI-powered process automation. I have built tools that reduce manual work and prototypes that combine AI with human support.',
  'En Grupo Eulen desarrollé un agente para automatizar la asignación de hardware, con un ahorro estimado de más de 70 horas al mes. En Entre Agiles construí un prototipo para centralizar soporte en Telegram y automaticé registros y agendamientos con Power Automate.': 'At Grupo Eulen, I built an agent to automate hardware assignment, saving an estimated 70+ hours per month. At Entre Agiles, I built a prototype to centralize Telegram support and automated registration and scheduling with Power Automate.',
  'Experiencia': 'Experience',
  'Entre Agiles · Gestor de Operaciones y Soporte TI': 'Entre Agiles · Operations and IT Support Manager',
  'Prototipo de soporte con IA (n8n, Chatwoot, Supabase y Groq); automatización de registros, correo y calendario con Power Automate; atención a usuarios e informes operativos.': 'AI support prototype (n8n, Chatwoot, Supabase, and Groq); automated registration, email, and calendar workflows with Power Automate; user support and operations reporting.',
  'Grupo Eulen Colombia · Desarrollador Full-Stack Jr. / Soporte TI': 'Grupo Eulen Colombia · Junior Full-Stack Developer / IT Support',
  'Agente de asignación de hardware con Python, MySQL y TypeScript; desarrollo de aplicaciones de gestión de activos, bases de datos, soporte TI y administración de usuarios en Active Directory.': 'Hardware assignment agent built with Python, MySQL, and TypeScript; asset-management web applications, database design, IT support, and Active Directory user administration.',
  'Formación': 'Education',
  'Ingeniería de Software · Universidad Manuela Beltrán': 'Software Engineering · Universidad Manuela Beltrán',
  '9.º semestre · Graduación estimada: 2026': '9th semester · Expected graduation: 2026',
  'Certificaciones': 'Certifications',
  'Claude 101 y Claude Code in Action (Anthropic, 2026) · Scrum Fundamentals (2024) · Introducción a Java (2025) · Cisco: Ciberseguridad (2024) y CCNAv7 Switching, Routing and Wireless Essentials (2023) · Oracle Cloud Data Management Foundations (2023)': 'Claude 101 and Claude Code in Action (Anthropic, 2026) · Scrum Fundamentals (2024) · Introduction to Java (2025) · Cisco: Introduction to Cybersecurity (2024) and CCNAv7 Switching, Routing and Wireless Essentials (2023) · Oracle Cloud Data Management Foundations (2023)',
  'TECNOLOGÍAS': 'TECHNOLOGIES',
  'Habilidades': 'Skills',
  'Lenguajes': 'Languages',
  'Desarrollo': 'Development',
  'IA y automatización': 'AI and automation',
  'Datos y herramientas': 'Data and tools',
  'Infraestructura': 'Infrastructure',
  'Metodologías e idiomas': 'Methods and languages',
  'Scrum, Agile · Español nativo · Inglés B2': 'Scrum, Agile · Native Spanish · English B2',
  'Colombia · Remoto': 'Colombia · Remote',
  'CONTACTO': 'CONTACT',
  'DESARROLLO · AUTOMATIZACIÓN · INTELIGENCIA ARTIFICIAL': 'DEVELOPMENT · AUTOMATION · ARTIFICIAL INTELLIGENCE',
  'Soluciones prácticas para reducir trabajo manual y mejorar la atención.': 'Practical solutions that reduce manual work and improve support.',
  'Asignación de hardware con IA': 'AI-powered hardware assignment',
  'Agente para automatizar el registro de asignación de equipos. Integré Python, MySQL y TypeScript al flujo de gestión de activos. Procesaba unas 10 solicitudes diarias y ahorraba más de 70 horas de registro manual al mes.': 'An agent that automates hardware assignment records. I integrated Python, MySQL, and TypeScript into the asset-management workflow. It handled about 10 requests per day and saved over 70 hours of manual data entry each month.',
  'Soporte centralizado con IA en Telegram': 'Centralized AI support on Telegram',
  'Prototipo que centraliza consultas de soporte, ofrece atención inmediata y escala los casos al equipo humano cuando hace falta.': 'A prototype that centralizes support requests, provides immediate responses, and escalates cases to the human team when needed.',
  'Ver demostración ↗': 'View demo ↗',
  'Registro y agendamiento automático': 'Automated registration and scheduling',
  'Flujo en Power Automate para registrar participantes, enviar confirmaciones por correo y agendar sesiones en calendario. Automatiza alrededor de 10 registros semanales.': 'A Power Automate workflow that registers participants, emails confirmations, and schedules calendar sessions. It automates around 10 registrations each week.',
  'BIBLIOTECA': 'LIBRARY',
  'Recursos seleccionados para explorar y descargar.': 'Selected resources to explore and download.',
  'Recursos': 'Resources',
  'Material publicado por mí': 'Materials I have published',
  'CONTENIDO PUBLICADO': 'PUBLISHED CONTENT',
  'Agrega archivos a assets/projects': 'Add files to assets/projects',
  'Visible al actualizar': 'Published with updates',
  'El contenido de esta biblioteca lo publico yo al actualizar el sitio. Los visitantes pueden consultar los archivos publicados, pero no añadir ni subir archivos.': 'I publish library content when I update the site. Visitors can view published files, but cannot add or upload files.',
  'DEMO REEL': 'PROJECT VIDEOS',
  'En movimiento': 'Project demo',
  'Una mirada rápida a cómo funcionan mis proyectos.': 'A quick look at how my projects work.',
  'Haz clic en la miniatura para ver la demostración en YouTube.': 'Click the thumbnail to watch the demo on YouTube.',
  'La miniatura abre la demostración directamente en YouTube.': 'The thumbnail opens the demo directly on YouTube.',
  'Hablemos.': "Let's talk.",
  'Busco oportunidades en desarrollo Full-Stack, automatización con IA y soporte técnico.': 'I am looking for opportunities in Full-Stack development, AI automation, and technical support.',
  'Disponible para conversar sobre proyectos, equipos y oportunidades profesionales.': 'I am happy to talk about projects, teams, and career opportunities.',
  'CONTACTO DIRECTO': 'GET IN TOUCH',
  'Abrir WhatsApp': 'Open WhatsApp',
  'Código QR para iniciar una conversación conmigo por WhatsApp': 'QR code to start a WhatsApp conversation with me',
  'Hablemos por WhatsApp': "Let's talk on WhatsApp",
  'Escanea el código con la cámara de tu celular': 'Scan the code with your phone camera',
  'Copiar correo': 'Copy email',
  'Correo copiado': 'Email copied',
  'Abrir demostración de soporte con IA en Telegram en YouTube': 'Open the AI support demo on Telegram in YouTube',
  'Miniatura del proyecto: soporte centralizado en Telegram con inteligencia artificial': 'Project thumbnail: centralized AI support on Telegram',
  'UN POCO SOBRE MÍ': 'ABOUT ME',
  'Hablemos por WhatsApp': "Let's talk on WhatsApp",
  'Escanea el código para escribirme por WhatsApp': 'Scan the code to message me on WhatsApp',
  'PROYECTOS': 'PROJECTS',
  'Desarrollador Full-Stack Jr. especializado en automatización con IA.': 'Junior Full-Stack Developer specializing in AI automation.',
  'Colombia (Remoto)': 'Colombia (Remote)',
  'Abrir menú de inicio': 'Open Start menu',
  'Aplicaciones': 'Applications',
  'Escritorio del portafolio': 'Portfolio desktop',
  'Menú de inicio': 'Start menu',
  'Minimizar': 'Minimize',
  'Cerrar': 'Close',
  'Julio 2026 – Octubre 2026': 'July 2026 – October 2026',
  'Enero 2026 – Julio 2026': 'January 2026 – July 2026',
  'Video en preparación': 'Video coming soon',
  'Contacto': 'Contact',
  'DEMO REEL': 'PROJECT VIDEOS',
  '¡Hola! 👋 Bienvenido a mi portafolio. Elige un icono y te cuento más.': 'Hello! 👋 Welcome to my portfolio. Choose an icon and I will tell you more.',
  '¡Qué bueno tenerte aquí! En esta ventana te cuento quién soy y qué me inspira.': 'Great to have you here! This window tells you who I am and what inspires me.',
  'Aquí puedes explorar mis proyectos y abrir sus demos para probarlos.': 'Explore my projects and open their demos to try them out.',
  'En Archivos encontrarás recursos y materiales que he publicado.': 'In Files, you will find resources and materials I have published.',
  'Aquí puedes ver demostraciones y conocer el proceso detrás de mis proyectos.': 'Watch demos and learn about the process behind my projects.',
  '¿Hablamos? En esta ventana encuentras mis enlaces de contacto.': 'Let’s talk! This window has all my contact links.',
  '✳ &nbsp;My portfolio': '✳ &nbsp;My portfolio',
  '✳ &nbsp;Mi portafolio': '✳ &nbsp;My portfolio'
};
function localizeMarkup(markup, language) {
  for (const [spanish, english] of Object.entries(translationsEsEn)) {
    markup = language === 'en'
      ? markup.split(spanish).join(english)
      : markup.split(english).join(spanish);
  }
  return markup;
}
let currentLanguage = 'es';
try { currentLanguage = localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'es'; } catch { /* use Spanish by default */ }

const apps = {
  about: {
    name: 'Quién soy', icon: '◉', body: `
      <p class="label">DESARROLLADOR FULL-STACK JR. · AUTOMATIZACIÓN CON IA</p><h2>Angel David Garzon Prieto</h2>
      <p class="subhead">Ingeniero de Software en formación · Colombia · Disponible para trabajo remoto</p>
      <div class="about-grid"><div class="profile-card"><h3>Perfil profesional</h3>
      <p>Desarrollador Full-Stack Jr. con experiencia práctica en desarrollo de software, soporte técnico y automatización de procesos con inteligencia artificial. He creado herramientas para reducir tareas manuales y prototipos que combinan IA con atención humana.</p>
      <p>En Grupo Eulen desarrollé un agente para automatizar la asignación de hardware, con un ahorro estimado de más de 70 horas al mes. En Entre Agiles construí un prototipo para centralizar soporte en Telegram y automaticé registros y agendamientos con Power Automate.</p>
      <h3>Experiencia</h3><p><strong>Entre Agiles · Gestor de Operaciones y Soporte TI</strong><br>Julio 2026 – Octubre 2026</p><p>Prototipo de soporte con IA (n8n, Chatwoot, Supabase y Groq); automatización de registros, correo y calendario con Power Automate; atención a usuarios e informes operativos.</p>
      <p><strong>Grupo Eulen Colombia · Desarrollador Full-Stack Jr. / Soporte TI</strong><br>Enero 2026 – Julio 2026</p><p>Agente de asignación de hardware con Python, MySQL y TypeScript; desarrollo de aplicaciones de gestión de activos, bases de datos, soporte TI y administración de usuarios en Active Directory.</p>
      <h3>Formación</h3><p><strong>Ingeniería de Software · Universidad Manuela Beltrán</strong><br>9.º semestre · Graduación estimada: 2026</p>
      <h3>Certificaciones</h3><p>Claude 101 y Claude Code in Action (Anthropic, 2026) · Scrum Fundamentals (2024) · Introducción a Java (2025) · Cisco: Ciberseguridad (2024) y CCNAv7 Switching, Routing and Wireless Essentials (2023) · Oracle Cloud Data Management Foundations (2023)</p></div>
      <div class="info-card"><p class="label">TECNOLOGÍAS</p><h3>Habilidades</h3><p><strong>Lenguajes</strong><br>Python, TypeScript, JavaScript, Java</p><p><strong>Desarrollo</strong><br>React, Node.js, Spring Boot, HTML5, CSS3, API REST e integración de APIs</p><p><strong>IA y automatización</strong><br>n8n, agentes de IA, ingeniería de prompts, Chatwoot, Supabase, Groq, Power Automate, Docker</p><p><strong>Datos y herramientas</strong><br>MySQL, MongoDB, diseño de bases de datos, Git, GitHub, Excel</p><p><strong>Infraestructura</strong><br>Active Directory, soporte TI y resolución de incidencias</p><p><strong>Metodologías e idiomas</strong><br>Scrum, Agile · Español nativo · Inglés B2</p><p class="label" style="margin-top:20px">CONTACTO</p><p>Colombia · Remoto<br>+57 320 250 1045<br>angeldavid9@outlook.com</p></div></div>`
  },
  projects: {
    name: 'Proyectos', icon: '▰', body: `
      <p class="label">DESARROLLO · AUTOMATIZACIÓN · INTELIGENCIA ARTIFICIAL</p><h2>Proyectos</h2>
      <p class="subhead">Soluciones prácticas para reducir trabajo manual y mejorar la atención.</p>
      <div class="projects-grid"><article class="project-card"><div class="project-visual">✳</div><h3>Asignación de hardware con IA</h3>
      <p>Agente para automatizar el registro de asignación de equipos. Integré Python, MySQL y TypeScript al flujo de gestión de activos. Procesaba unas 10 solicitudes diarias y ahorraba más de 70 horas de registro manual al mes.</p><p class="label">PYTHON · MYSQL · TYPESCRIPT · AGENTES DE IA</p></article>
      <article class="project-card"><div class="project-visual">⌘</div><h3>Soporte centralizado con IA en Telegram</h3><p>Prototipo que centraliza consultas de soporte, ofrece atención inmediata y escala los casos al equipo humano cuando hace falta.</p><p class="label">N8N · CHATWOOT · SUPABASE · GROQ</p><button class="small-link" data-open-videos>Ver demostración ↗</button></article>
      <article class="project-card"><div class="project-visual">◷</div><h3>Registro y agendamiento automático</h3><p>Flujo en Power Automate para registrar participantes, enviar confirmaciones por correo y agendar sesiones en calendario. Automatiza alrededor de 10 registros semanales.</p><p class="label">POWER AUTOMATE · OUTLOOK · CALENDAR</p></article></div>
      <div id="tester-slot"></div>`
  },
  files: {
    name: 'Archivos', icon: '▤', body: `
      <p class="label">BIBLIOTECA</p><h2>Archivos</h2>
      <p class="subhead">Recursos seleccionados para explorar y descargar.</p>
      <div class="folder-list"><div class="folder-card"><span class="folder-symbol">📁</span><span><strong>Proyectos</strong><small>assets/projects/</small></span></div>
      <div class="folder-card"><span class="folder-symbol">📁</span><span><strong>Recursos</strong><small>Material publicado por mí</small></span></div></div>
      <div class="file-list"><p class="label">CONTENIDO PUBLICADO</p><div class="file-row"><span>Agrega archivos a assets/projects</span><small>Visible al actualizar</small></div></div>
      <div class="empty-note">El contenido de esta biblioteca lo publico yo al actualizar el sitio. Los visitantes pueden consultar los archivos publicados, pero no añadir ni subir archivos.</div>`
  },
  videos: {
    name: 'Videos', icon: '▷', body: `
      <p class="label">DEMO REEL</p><h2>En movimiento</h2><p class="subhead">Una mirada rápida a cómo funcionan mis proyectos.</p>
      <div class="video-grid"><article class="video-card"><h3>Centralización de soporte con IA en Telegram</h3><p>Haz clic en la miniatura para ver la demostración en YouTube.</p><a class="video-thumbnail-link" href="${supportYoutubeUrl}" target="_blank" rel="noopener noreferrer" aria-label="Abrir demostración de soporte con IA en Telegram en YouTube"><img src="assets/videos/soporte-ia-telegram-thumbnail.jpeg" alt="Miniatura del proyecto: soporte centralizado en Telegram con inteligencia artificial"><span class="video-play-button" aria-hidden="true">▶</span></a></article></div>
      <div class="empty-note">La miniatura abre la demostración directamente en YouTube.</div>`
  },
  contact: {
    name: 'Contacto', icon: '✉', body: `
      <p class="label">DESARROLLADOR FULL-STACK JR. · COLOMBIA · REMOTO</p><h2>Hablemos.</h2><p class="subhead">Busco oportunidades en desarrollo Full-Stack, automatización con IA y soporte técnico.</p>
      <div class="profile-card"><h3>Angel David Garzon Prieto</h3><p>Disponible para conversar sobre proyectos, equipos y oportunidades profesionales.</p>
      <div class="whatsapp-qr-card"><span class="whatsapp-qr-label"><i></i> CONTACTO DIRECTO</span><a href="https://wa.me/qr/RLSCKOMU6JFOO1" target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp"><img src="assets/whatsapp-qr.jpeg" alt="Código QR para iniciar una conversación conmigo por WhatsApp"></a><p><strong>Hablemos por WhatsApp</strong><span>Escanea el código con la cámara de tu celular</span></p></div>
      <div class="contact-links"><a class="whatsapp" href="https://wa.me/qr/RLSCKOMU6JFOO1" target="_blank" rel="noreferrer">◉ &nbsp;WhatsApp</a><a class="github" href="https://github.com/angeldavid30082003-netizen" target="_blank" rel="noreferrer">⌘ &nbsp;GitHub</a><a class="linkedin" href="https://www.linkedin.com/in/angel-prieto-b84b0b2a2" target="_blank" rel="noreferrer">in &nbsp;LinkedIn</a><button class="email" type="button" data-copy-email="angeldavid9@outlook.com">✉ &nbsp;Copiar correo</button></div></div>`
  }
};

const appNamesEn = { about: 'About me', projects: 'Projects', files: 'Files', videos: 'Videos', contact: 'Contact' };
function getAppName(id) { return currentLanguage === 'en' ? appNamesEn[id] : apps[id].name; }
function getAppBody(id) { return currentLanguage === 'en' ? localizeMarkup(apps[id].body, 'en') : apps[id].body; }
function animateHeroName() {
  const name = document.querySelector('.hero-name');
  if (!name || name.dataset.animated) return;
  const fullName = name.textContent;
  name.dataset.animated = 'true';
  name.setAttribute('aria-label', fullName);
  let letterIndex = 0;
  name.replaceChildren(...fullName.split(/(\s+)/).map(part => {
    if (/^\s+$/.test(part)) return document.createTextNode(part);
    const word = document.createElement('span');
    word.className = 'hero-name-word';
    for (const character of part) {
      const letter = document.createElement('span');
      letter.className = 'hero-name-letter';
      letter.style.setProperty('--letter-index', letterIndex++);
      letter.textContent = character;
      word.append(letter);
    }
    return word;
  }));
}
const layer = document.querySelector('#window-layer');
const taskApps = document.querySelector('#task-apps');
const windows = new Map();
let z = 2;
let sequence = 0;

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}
function setActive(id) {
  for (const [key, win] of windows) {
    win.task.classList.toggle('active', key === id && !win.el.classList.contains('minimized'));
  }
}
function applyLanguage(language) {
  currentLanguage = language === 'en' ? 'en' : 'es';
  try { localStorage.setItem('portfolio-language', currentLanguage); } catch { /* language still changes for this visit */ }
  document.documentElement.lang = currentLanguage;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const text = node.nodeValue.trim();
    if (!text) continue;
    let translated;
    if (currentLanguage === 'en') translated = translationsEsEn[text];
    else translated = Object.entries(translationsEsEn).find(([, english]) => english === text)?.[0];
    if (translated) node.nodeValue = node.nodeValue.replace(text, translated);
  }
  document.title = currentLanguage === 'en' ? 'Angel David Garzon Prieto — Portfolio' : 'Angel David Garzon Prieto — Portafolio';
  document.querySelector('meta[name="description"]').content = currentLanguage === 'en'
    ? 'Portfolio of Angel David Garzon Prieto, Junior Full-Stack Developer and AI automation specialist.'
    : 'Portafolio de Angel David Garzon Prieto, desarrollador Full-Stack Jr. y especialista en automatización con IA.';
  document.querySelector('#desktop').setAttribute('aria-label', currentLanguage === 'en' ? 'Portfolio desktop' : 'Escritorio del portafolio');
  document.querySelector('.avatar-companion').setAttribute('aria-label', currentLanguage === 'en' ? 'Interactive avatar' : 'Avatar interactivo');
  document.querySelector('.desktop-icons').setAttribute('aria-label', currentLanguage === 'en' ? 'Applications' : 'Aplicaciones');
  startMenu.setAttribute('aria-label', currentLanguage === 'en' ? 'Start menu' : 'Menú de inicio');
  launcher.setAttribute('aria-label', currentLanguage === 'en' ? 'Open Start menu' : 'Abrir menú de inicio');
  document.querySelector('.language-switch').setAttribute('aria-label', currentLanguage === 'en' ? 'Language' : 'Idioma');
  document.querySelector('.start-menu-heading span').textContent = currentLanguage === 'en' ? 'PORTFOLIO' : 'PORTAFOLIO';
  document.querySelector('.start-menu-foot span:last-child').innerHTML = currentLanguage === 'en' ? '✳ &nbsp;My portfolio' : '✳ &nbsp;Mi portafolio';
  document.querySelectorAll('[data-set-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.setLanguage === currentLanguage)));
  for (const [id, win] of windows) {
    win.task.title = getAppName(id);
    win.task.setAttribute('aria-label', getAppName(id));
    win.el.querySelector('.window-title').lastChild.nodeValue = getAppName(id);
    win.el.querySelector('[data-action="minimize"]').setAttribute('aria-label', currentLanguage === 'en' ? 'Minimize' : 'Minimizar');
    win.el.querySelector('[data-action="close"]').setAttribute('aria-label', currentLanguage === 'en' ? 'Close' : 'Cerrar');
    win.el.querySelector('.window-content').innerHTML = getAppBody(id);
    bindAppContent(win.el);
  }
  if (activeCompanionTopic) companionMessage.textContent = localizeMarkup(companionMessages[activeCompanionTopic] || companionMessages.welcome, currentLanguage);
  updateClock();
}
document.querySelectorAll('[data-set-language]').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.setLanguage)));
function bindAppContent(el) {
  el.querySelectorAll('[data-demo]').forEach(button => button.onclick = () => showDemo(el, button.dataset.demo));
  el.querySelector('[data-open-videos]')?.addEventListener('click', () => openApp('videos'));
  const copyEmailButton = el.querySelector('[data-copy-email]');
  copyEmailButton?.addEventListener('click', async () => {
    const email = copyEmailButton.dataset.copyEmail;
    try {
      await navigator.clipboard.writeText(email);
      copyEmailButton.textContent = currentLanguage === 'en' ? '✓ Email copied' : '✓ Correo copiado';
      window.setTimeout(() => { copyEmailButton.innerHTML = currentLanguage === 'en' ? '✉ &nbsp;Copy email' : '✉ &nbsp;Copiar correo'; }, 2200);
    } catch {
      window.prompt(currentLanguage === 'en' ? 'Copy this email address:' : 'Copia esta dirección de correo:', email);
    }
  });
}
function showDemo(win, title) {
  const slot = win.querySelector('#tester-slot');
  const content = currentLanguage === 'en'
    ? `<div class="tester"><div class="tester-head"><span>▶ &nbsp;${escapeHtml(title)} — Preview</span><button class="small-link" id="close-demo">Close ×</button></div><div class="tester-frame"><div><h3>Connect your demo here</h3><p>Replace this area with your interactive project or a link to the published demo.</p></div></div></div>`
    : `<div class="tester"><div class="tester-head"><span>▶ &nbsp;${escapeHtml(title)} — Vista previa</span><button class="small-link" id="close-demo">Cerrar ×</button></div><div class="tester-frame"><div><h3>Conecta aquí tu demo</h3><p>Reemplaza este espacio con tu proyecto interactivo o con el enlace publicado.</p></div></div></div>`;
  slot.innerHTML = content;
  win.querySelector('#close-demo').onclick = () => { slot.innerHTML = ''; };
  slot.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function makeDraggable(win) {
  const bar = win.querySelector('.window-titlebar');
  let startX, startY, offsetX, offsetY;
  bar.addEventListener('pointerdown', event => {
    if (event.target.closest('button')) return;
    win.style.zIndex = ++z;
    const rect = win.getBoundingClientRect();
    startX = event.clientX; startY = event.clientY;
    offsetX = rect.left + rect.width / 2 - window.innerWidth / 2;
    offsetY = rect.top + rect.height / 2 - window.innerHeight / 2;
    bar.setPointerCapture(event.pointerId);
    bar.onpointermove = move => {
      win.style.transform = `translate(calc(-50% + ${offsetX + move.clientX - startX}px),calc(-50% + ${offsetY + move.clientY - startY}px))`;
    };
    bar.onpointerup = () => { bar.onpointermove = null; };
  });
}
function openApp(id) {
  const app = apps[id];
  showCompanion(id);
  let current = windows.get(id);
  if (current) {
    current.el.classList.remove('minimized');
    current.el.style.zIndex = ++z;
    setActive(id);
    return;
  }
  const el = document.createElement('section');
  el.className = 'window';
  el.style.zIndex = ++z;
  el.style.transform = `translate(-50%,-50%) translate(${(sequence % 3 - 1) * 24}px,${(sequence % 2) * 12}px)`;
  sequence++;
  el.innerHTML = `<header class="window-titlebar"><div class="window-title"><span class="mini-icon">${app.icon}</span>${getAppName(id)}</div><div class="window-controls"><button data-action="minimize" aria-label="${currentLanguage === 'en' ? 'Minimize' : 'Minimizar'}">−</button><button data-action="close" aria-label="${currentLanguage === 'en' ? 'Close' : 'Cerrar'}">×</button></div></header><div class="window-content">${getAppBody(id)}</div>`;
  layer.append(el);
  const task = document.createElement('button');
  task.className = 'task-app active';
  task.title = getAppName(id);
  task.setAttribute('aria-label', getAppName(id));
  task.textContent = app.icon;
  taskApps.append(task);
  current = { el, task };
  windows.set(id, current);
  el.addEventListener('pointerdown', () => { el.style.zIndex = ++z; setActive(id); });
  task.onclick = () => {
    if (el.classList.contains('minimized')) { el.classList.remove('minimized'); el.style.zIndex = ++z; showCompanion(id); }
    else el.classList.add('minimized');
    setActive(id);
  };
  el.querySelector('[data-action="close"]').onclick = () => { el.remove(); task.remove(); windows.delete(id); };
  el.querySelector('[data-action="minimize"]').onclick = () => { el.classList.add('minimized'); setActive(null); };
  bindAppContent(el);
  makeDraggable(el);
  setActive(id);
}

const launcher = document.querySelector('#launcher');
const startMenu = document.querySelector('#start-menu');
const taskbar = document.querySelector('.taskbar');
const desktop = document.querySelector('#desktop');
const companion = document.querySelector('#avatar-companion');
const companionPose = document.querySelector('#avatar-pose');
const companionImage = companionPose.querySelector('img');
const companionMessage = document.querySelector('#avatar-message');
const companionImages = {
  welcome: 'assets/avatar-saludo.png',
  about: 'assets/avatar-sobre-mi.png',
  projects: 'assets/avatar-proyectos.png',
  files: 'assets/avatar-archivos.png',
  videos: 'assets/avatar-videos.png',
  contact: 'assets/avatar-contacto.png',
  idle: 'assets/avatar-pensativo.png'
};
const companionMessages = {
  welcome: '¡Hola! 👋 Bienvenido a mi portafolio. Elige un icono y te cuento más.',
  about: '¡Qué bueno tenerte aquí! En esta ventana te cuento quién soy y qué me inspira.',
  projects: 'Aquí puedes explorar mis proyectos y abrir sus demos para probarlos.',
  files: 'En Archivos encontrarás recursos y materiales que he publicado.',
  videos: 'Aquí puedes ver demostraciones y conocer el proceso detrás de mis proyectos.',
  contact: '¿Hablamos? En esta ventana encuentras mis enlaces de contacto.'
};
let companionTimer;
let companionReady = false;
let companionSectionOpened = false;
let activeCompanionTopic = null;
function setCompanionPose(topic, onLoaded) {
  const nextImage = companionImages[topic] || companionImages.idle;
  companionPose.classList.toggle('is-mirrored', topic === 'projects' || topic === 'files');
  if (companionImage.getAttribute('src') === nextImage) {
    if (onLoaded) onLoaded();
    return;
  }
  companion.classList.add('is-changing');
  companionImage.addEventListener('load', () => {
    companion.classList.remove('is-changing');
    if (onLoaded) onLoaded();
  }, { once: true });
  companionImage.src = nextImage;
}
function reactCompanion() {
  companion.classList.remove('is-reacting');
  void companion.offsetWidth;
  companion.classList.add('is-reacting');
}
function showCompanion(topic) {
  activeCompanionTopic = topic;
  if (topic !== 'welcome') companionSectionOpened = true;
  companionMessage.textContent = localizeMarkup(companionMessages[topic] || companionMessages.welcome, currentLanguage);
  companion.classList.add('is-speaking');
  setCompanionPose(topic, reactCompanion);
  clearTimeout(companionTimer);
  companionTimer = setTimeout(() => {
    companion.classList.remove('is-speaking', 'is-reacting');
    setCompanionPose('idle');
  }, 5200);
}
function revealCompanion() {
  if (companionReady) return;
  companionReady = true;
  companion.classList.add('is-ready');
  if (!companionSectionOpened) showCompanion('welcome');
  else if (activeCompanionTopic) setCompanionPose(activeCompanionTopic);
}
companionImage.addEventListener('load', revealCompanion, { once: true });
companionImage.addEventListener('error', () => { companion.hidden = true; }, { once: true });
if (companionImage.complete && companionImage.naturalWidth > 0) revealCompanion();
let taskbarDrag = null;

taskbar.addEventListener('pointerdown', event => {
  if (event.target.closest('button, nav')) return;
  const bar = taskbar.getBoundingClientRect();
  taskbarDrag = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    left: bar.left,
    top: bar.top,
    moved: false
  };
});
taskbar.addEventListener('pointermove', event => {
  if (!taskbarDrag || event.pointerId !== taskbarDrag.pointerId) return;
  const dx = event.clientX - taskbarDrag.startX;
  const dy = event.clientY - taskbarDrag.startY;
  if (!taskbarDrag.moved && Math.hypot(dx, dy) < 5) return;
  if (!taskbarDrag.moved) {
    taskbarDrag.moved = true;
    taskbar.setPointerCapture(event.pointerId);
    taskbar.style.transform = 'none';
    taskbar.style.bottom = 'auto';
  }
  const bounds = desktop.getBoundingClientRect();
  const bar = taskbar.getBoundingClientRect();
  const maxLeft = Math.max(0, bounds.width - bar.width);
  const maxTop = Math.max(0, bounds.height - bar.height);
  taskbar.style.left = `${Math.min(maxLeft, Math.max(0, taskbarDrag.left - bounds.left + dx))}px`;
  taskbar.style.top = `${Math.min(maxTop, Math.max(0, taskbarDrag.top - bounds.top + dy))}px`;
});
taskbar.addEventListener('pointerup', event => {
  if (taskbarDrag && event.pointerId === taskbarDrag.pointerId) taskbarDrag = null;
});
taskbar.addEventListener('pointercancel', () => { taskbarDrag = null; });

function closeStartMenu() {
  startMenu.hidden = true;
  launcher.setAttribute('aria-expanded', 'false');
}
launcher.addEventListener('click', () => {
  startMenu.hidden = !startMenu.hidden;
  launcher.setAttribute('aria-expanded', String(!startMenu.hidden));
});
startMenu.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => {
  openApp(button.dataset.open);
  closeStartMenu();
}));
function readIconPositions() {
  try { return JSON.parse(localStorage.getItem('portfolio-icon-positions') || '{}'); }
  catch { return {}; }
}
function saveIconPosition(id, position) {
  try {
    const positions = readIconPositions();
    positions[id] = position;
    localStorage.setItem('portfolio-icon-positions', JSON.stringify(positions));
  } catch { /* Icon dragging still works for the current visit. */ }
}

document.querySelectorAll('.desktop-icon[data-open]').forEach(button => {
  const savedPositions = readIconPositions();
  const saved = savedPositions[button.dataset.open] || { x: 0, y: 0 };
  button.style.transform = `translate(${saved.x}px, ${saved.y}px)`;
  let drag = null;

  button.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    const rect = button.getBoundingClientRect();
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY, offsetX: saved.x, offsetY: saved.y, baseLeft: rect.left - saved.x, baseTop: rect.top - saved.y, width: rect.width, height: rect.height, moved: false };
  });
  button.addEventListener('pointermove', event => {
    if (!drag || event.pointerId !== drag.id) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (!drag.moved && Math.hypot(dx, dy) < 5) return;
    if (!drag.moved) {
      drag.moved = true;
      button.setPointerCapture(event.pointerId);
    }
    const bounds = desktop.getBoundingClientRect();
    const x = Math.min(bounds.right - drag.width - drag.baseLeft, Math.max(bounds.left - drag.baseLeft, drag.offsetX + dx));
    const y = Math.min(bounds.bottom - drag.height - drag.baseTop, Math.max(bounds.top - drag.baseTop, drag.offsetY + dy));
    button.style.transform = `translate(${x}px, ${y}px)`;
    saved.x = x;
    saved.y = y;
  });
  button.addEventListener('pointerup', event => {
    if (!drag || event.pointerId !== drag.id) return;
    if (drag.moved) {
      button.dataset.dragged = 'true';
      saveIconPosition(button.dataset.open, saved);
    }
    drag = null;
  });
  button.addEventListener('pointercancel', () => { drag = null; });
  button.addEventListener('click', event => {
    if (button.dataset.dragged === 'true') {
      delete button.dataset.dragged;
      event.preventDefault();
      return;
    }
    openApp(button.dataset.open);
  });
});
document.querySelectorAll('.open-about[data-open]').forEach(button => button.addEventListener('click', () => openApp(button.dataset.open)));
document.addEventListener('pointerdown', event => {
  if (!startMenu.hidden && !startMenu.contains(event.target) && !launcher.contains(event.target)) closeStartMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !startMenu.hidden) {
    closeStartMenu();
    launcher.focus();
  }
});
function updateClock() {
  const time = new Date().toLocaleTimeString(currentLanguage === 'en' ? 'en-US' : 'es-CO', { hour: '2-digit', minute: '2-digit' });
  document.querySelector('#clock').textContent = time;
  document.querySelector('#task-clock').textContent = time;
}
animateHeroName();
applyLanguage(currentLanguage);
updateClock();
setInterval(updateClock, 30000);
