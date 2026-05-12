/* =============================================================
   La Bruschetteria — interactivity & i18n
   ============================================================= */

/* ---------- i18n dictionary ---------- */
const I18N = {
  es: {
    /* nav */
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.menu': 'Carta',
    'nav.gallery': 'Galería',
    'nav.contact': 'Contacto',
    'nav.reserve': 'Reservar',
    'nav.cta': 'Reservar mesa',

    /* hero (home) */
    'hero.eyebrow': 'Steakhouse italiano · Brasa y producto',
    'hero.title': 'Brasa, carne y <span class="accent">tradición italiana</span>',
    'hero.lede': 'Carnes maduradas, parrilla de carbón y bruschettas a la brasa. El steakhouse italiano donde la carne se trata con respeto.',
    'hero.cta1': 'Reserva tu mesa',
    'hero.cta2': 'Ver la carta',
    'hero.meta1': 'Desde 2008',
    'hero.meta2': 'Parrilla abierta hasta tarde',
    'hero.meta3': 'Carne madurada en casa',

    /* welcome */
    'welcome.eyebrow': 'Benvenuti',
    'welcome.title': 'La brasa italiana, en su mejor versión',
    'welcome.lede': 'No somos un steakhouse más. Somos una familia italiana que entiende la carne: maduración, fuego de carbón y respeto al producto.',
    'welcome.body': 'Cada mañana encendemos la brasa, seleccionamos las piezas en cámara y ponemos al fuego solo lo que vale la pena. Pocas mesas, mucha carne. Nuestra carta es pequeña por elección: preferimos hacer pocas cosas, y hacerlas extraordinariamente bien.',
    'welcome.signature': '— Famiglia La Bruschetteria',

    /* features */
    'feat.title': 'Por qué La Bruschetteria',
    'feat.lede': 'Tres pilares que defienden cada pieza que sale de la parrilla.',
    'feat1.title': 'Maduración en casa',
    'feat1.body': 'Cámara de maduración propia: dry-aged 28, 45 y 60 días. La carne se respeta, no se apura.',
    'feat2.title': 'Parrilla de carbón',
    'feat2.body': 'Carbón de encina ardiendo a 700°C. Costra perfecta, jugo intacto. Solo el fuego sabe sellar así.',
    'feat3.title': 'Bodega italiana',
    'feat3.body': 'Tintos estructurados de Toscana y Piemonte. Vinos pensados para acompañar carne de verdad.',
    'feat4.title': 'Carne de origen',
    'feat4.body': 'Rubia gallega, Chianina toscana, Wagyu certificado. Sabemos de dónde viene cada pieza.',

    /* menu preview */
    'menu.eyebrow': 'Nuestra carta',
    'menu.title': 'La carta del fuego',
    'menu.lede': 'Carnes a la brasa, antipasti italianos y postres caseros. La cocina del fuego con acento italiano.',
    'menu.cat1': 'Bruschettas',
    'menu.cat1.desc': 'El bocado de bienvenida.',
    'menu.cat2': 'Pasta',
    'menu.cat2.desc': 'Cortes premium madurados.',
    'menu.cat3': 'Pizza',
    'menu.cat3.desc': 'Masa madre, fermentada 48 horas. Parrilla de carbón a 450°C.',
    'menu.cat4': 'Cortes premium',
    'menu.cat4.desc': 'El alma de la casa.',
    'menu.viewAll': 'Ver carta completa',

    /* story */
    'story.eyebrow': 'Nuestra historia',
    'story.title': 'Tres generaciones, una sola obsesión: el fuego',
    'story.lede': '«Mi abuelo asaba el cordero los domingos sobre brasa de viña. De ahí venimos. Nunca lo hemos olvidado.»',
    'story.p1': 'La Bruschetteria nació en 2008 de la mano de Lorenzo y Sofia, dos hermanos que dejaron Bologna con una sola idea: ofrecer a España la carne tratada como su padre les enseñó. Brasa de carbón, maduración propia y tiempo.',
    'story.p2': 'Hoy seguimos siendo una casa pequeña por convicción. Cada corte que sale a sala pasa por nuestras manos, nuestra cámara y nuestra brasa.',
    'story.cta': 'Conoce nuestra historia',

    /* stats */
    'stats.title': 'Lo que somos en números',
    'stat1': 'Años en familia',
    'stat2': 'Recetas originales',
    'stat3': 'Etiquetas en bodega',
    'stat4': 'Clientes felices',

    /* reviews */
    'reviews.eyebrow': 'Testimonios',
    'reviews.title': 'Lo que dicen nuestros comensales',
    'reviews.lede': 'Más de 1.200 reseñas de cinco estrellas en Google y TripAdvisor.',
    'r1.text': 'El mejor chuletón que he comido fuera del País Vasco. Maduración perfecta, costra exterior, jugo dentro. Vuelvo seguro.',
    'r1.author': 'Marta R.',
    'r1.note': 'Reseña en Google · 5 estrellas',
    'r2.text': 'Ambiente cálido, servicio impecable y carne tratada con respeto. Pedimos el tomahawk para dos y la tagliata de Chianina: ambos sublimes.',
    'r2.author': 'James W.',
    'r2.note': 'TripAdvisor · 5 estrellas',
    'r3.text': 'Nos hicieron sentir como en casa. La sommelier nos recomendó un Barolo que combinó perfecto con el chuletón madurado 60 días. Inolvidable.',
    'r3.author': 'Ana & Luis',
    'r3.note': 'Aniversario · Octubre 2025',

    /* CTA banner */
    'cta.title': 'Reserva tu mesa esta noche',
    'cta.body': 'Las mejores noches se reservan con tiempo. Asegura tu sitio frente a la parrilla.',
    'cta.btn': 'Hacer reserva',

    /* hours / footer */
    'hours.title': 'Horario',
    'hours.body': 'Martes a Domingo<br>13:00 — 16:00 · 19:30 — 23:30<br><small>Lunes cerrado</small>',
    'addr.title': 'Dirección',
    'addr.body': 'Calle del Olivo, 24<br>28004 Madrid · España',
    'phone.title': 'Teléfono',
    'phone.body': '+34 91 555 24 18',
    'mail.title': 'Email',
    'mail.body': 'reservas@labruschetteria.es',

    /* footer */
    'foot.tagline': 'Brasa, carne y tradición italiana. Pieza por pieza, fuego por fuego.',
    'foot.explore': 'Explora',
    'foot.visit': 'Visítanos',
    'foot.follow': 'Síguenos',
    'foot.legal': '© 2026 La Bruschetteria · Todos los derechos reservados',
    'foot.privacy': 'Privacidad',
    'foot.cookies': 'Cookies',

    /* about page */
    'about.title': 'Nuestra historia',
    'about.lede': 'De Bologna a Madrid, con escala en cada brasa.',
    'about.s1.title': 'Nació junto a una parrilla',
    'about.s1.lede': '«Si nuestro padre viera el fuego que mantenemos cada noche, no estaría sorprendido. Estaría orgulloso de que no hemos olvidado nada.»',
    'about.s1.p1': 'En 2008, Lorenzo y Sofia abrieron una pequeña casa con seis mesas, una parrilla de carbón y la convicción de que España merecía conocer la brasa italiana real.',
    'about.s1.p2': 'Trajeron la parrilla de un herrero piamontés, un acuerdo con ganaderos toscanos de Chianina y la receta de la marinada que su abuelo guardaba para las fiestas.',
    'about.s2.title': 'El fuego que no transige',
    'about.s2.lede': 'Carne madurada cada semana, brasa cada noche, tiempos que se respetan.',
    'about.s2.p1': 'La cámara abre a las 6 de la mañana. Antes de que llegue el primer comensal, Marco ya ha revisado las piezas, Lucia ha encendido la brasa y los cortes del día están atemperando.',
    'about.s2.p2': 'No usamos nada congelado. Nada precocinado. Nada que no podamos rastrear hasta su origen. Es más caro, sí. Pero también es la única manera de cocinar que conocemos.',
    'about.s3.title': 'Las personas detrás de la mesa',
    'about.s3.lede': 'Un equipo que se siente familia, no plantilla.',
    'about.s3.p1': 'Lorenzo dirige la sala como dirigía la parrilla su padre: con ojo atento y paciencia infinita. Sofia es la jefa de fuego y la guardiana de la cámara. Marco es el parrillero que llegó hace nueve años y ya no se fue.',
    'about.s3.p2': 'Cuando entras, Lorenzo te reconoce. Sofia se asoma desde la brasa si llegas con buena cara. Marco te explica cómo se ha madurado la pieza si se lo preguntas. Eso es La Bruschetteria.',

    /* values */
    'values.title': 'Nuestros valores',
    'values.lede': 'Cuatro principios que nos guían cada servicio.',
    'val1.title': 'Tradición',
    'val1.body': 'Recetas que no inventamos. Solo respetamos.',
    'val2.title': 'Producto',
    'val2.body': 'De origen, de temporada, de mercado.',
    'val3.title': 'Tiempo',
    'val3.body': 'No hay atajos en una cocina honesta.',
    'val4.title': 'Hospitalidad',
    'val4.body': 'Una mesa nuestra es una mesa tuya.',

    /* menu page */
    'menupage.title': 'La carta',
    'menupage.lede': 'Cada plato es una carta de amor a una región de Italia.',
    'menutab.bruschettas': 'Bruschettas',
    'menutab.antipasti': 'Antipasti',
    'menutab.pasta': 'Pasta',
    'menutab.pizza': 'Pizza',
    'menutab.mains': 'Carnes y Pescados',
    'menutab.desserts': 'Dolci',
    'menutab.drinks': 'Bebidas',
    'menupage.note.title': 'Información alérgenos',
    'menupage.note.body': 'Pídale a su camarero la carta de alérgenos. Adaptamos platos para opciones sin gluten y vegetarianas siempre que es posible.',

    /* gallery */
    'gallery.title': 'Galería',
    'gallery.lede': 'Imágenes que cuentan lo que las palabras no alcanzan.',

    /* contact */
    'contact.title': 'Contacto',
    'contact.lede': 'Estamos en pleno centro, esperando tu mesa.',
    'contact.form.title': 'Escríbenos',
    'contact.form.lede': 'Para grupos grandes, eventos privados o cualquier otra consulta.',
    'form.name': 'Nombre',
    'form.email': 'Email',
    'form.phone': 'Teléfono',
    'form.subject': 'Asunto',
    'form.message': 'Mensaje',
    'form.send': 'Enviar mensaje',
    'form.success': '¡Gracias! Hemos recibido tu mensaje y te responderemos en menos de 24 horas.',

    /* reservations */
    'res.title': 'Reserva tu mesa',
    'res.lede': 'Reserva online en menos de un minuto. Te confirmaremos por email.',
    'res.form.title': 'Reserva instantánea',
    'res.form.lede': 'Selecciona fecha, hora y número de comensales. Para grupos de más de 8 personas, contáctanos directamente.',
    'form.date': 'Fecha',
    'form.time': 'Hora',
    'form.guests': 'Comensales',
    'form.occasion': 'Ocasión (opcional)',
    'form.notes': 'Comentarios o alergias',
    'form.book': 'Confirmar reserva',
    'form.book.success': '¡Reserva recibida! Recibirás un correo de confirmación en breve.',
    'res.note.title': '¿Necesitas algo más?',
    'res.note.body': 'Para reservas privadas, eventos o grupos grandes, llámanos al +34 91 555 24 18 o escríbenos a eventos@labruschetteria.es',
  },

  en: {
    /* nav */
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.menu': 'Menu',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.reserve': 'Reserve',
    'nav.cta': 'Book a table',

    /* hero */
    'hero.eyebrow': 'Italian steakhouse · Fire and produce',
    'hero.title': 'Fire, beef and <span class="accent">Italian tradition</span>',
    'hero.lede': 'Dry-aged beef, charcoal grill and bruschettas over fire. The Italian steakhouse where meat is treated with respect.',
    'hero.cta1': 'Reserve your table',
    'hero.cta2': 'See the menu',
    'hero.meta1': 'Since 2008',
    'hero.meta2': 'Grill open late',
    'hero.meta3': 'Beef aged in-house',

    /* welcome */
    'welcome.eyebrow': 'Benvenuti',
    'welcome.title': 'The Italian grill, at its finest',
    'welcome.lede': 'We are not just another steakhouse. We are an Italian family that understands meat: aging, charcoal fire and respect for the cut.',
    'welcome.body': 'Every morning we light the coals, hand-pick the cuts from our cellar, and put on the fire only what is worth it. Few tables, lots of beef.',
    'welcome.signature': '— The La Bruschetteria family',

    /* features */
    'feat.title': 'Why La Bruschetteria',
    'feat.lede': 'Three pillars behind every cut that leaves our grill.',
    'feat1.title': 'In-house dry-aging',
    'feat1.body': 'Italian 00 flour, free-range eggs and Marco\'s hands at 6 a.m. No frozen, no shortcuts.',
    'feat2.title': 'Charcoal grill',
    'feat2.body': 'Holm oak charcoal burning at 700°C. Perfect crust, juice locked in. Only fire sears like this.',
    'feat3.title': 'Italian cellar',
    'feat3.body': 'Structured reds from Tuscany and Piemonte. Wines built to stand up to real beef.',
    'feat4.title': 'Beef of origin',
    'feat4.body': 'Galician Rubia, Tuscan Chianina, certified Wagyu. We know where every cut comes from.',

    /* menu preview */
    'menu.eyebrow': 'Our menu',
    'menu.title': 'The fire menu',
    'menu.lede': 'Wood-fired beef, Italian antipasti and house desserts. Fire-driven cooking with an Italian accent.',
    'menu.cat1': 'Bruschettas',
    'menu.cat1.desc': 'The welcome bite.',
    'menu.cat2': 'Pasta',
    'menu.cat2.desc': 'Premium dry-aged cuts.',
    'menu.cat3': 'Pizza',
    'menu.cat3.desc': 'Sourdough, fermented 48 hours. Charcoal grill at 450°C.',
    'menu.cat4': 'Premium cuts',
    'menu.cat4.desc': 'The soul of the house.',
    'menu.viewAll': 'See full menu',

    /* story */
    'story.eyebrow': 'Our story',
    'story.title': 'Three generations, one obsession: fire',
    'story.lede': '"My grandfather grilled lamb on vine coals every Sunday. That is where we come from. We have not forgotten."',
    'story.p1': 'La Bruschetteria was born in 2008 from the hands of Lorenzo and Sofia, two siblings who left Bologna with one idea: to offer Spain beef treated the way their father taught them. Charcoal fire, in-house aging, time.',
    'story.p2': 'We are still a small house by conviction. Every cut that reaches the table passes through our hands, our cellar and our grill.',
    'story.cta': 'Read the full story',

    /* stats */
    'stats.title': 'What we are in numbers',
    'stat1': 'Years as a family',
    'stat2': 'Original recipes',
    'stat3': 'Wines in cellar',
    'stat4': 'Happy guests',

    /* reviews */
    'reviews.eyebrow': 'Testimonials',
    'reviews.title': 'What our guests say',
    'reviews.lede': 'Over 1,200 five-star reviews on Google and TripAdvisor.',
    'r1.text': 'The best fresh pasta I\'ve had outside Italy. The bruschettas are an experience: the bread, the tomatoes, that olive oil… I\'ll be back soon.',
    'r1.author': 'Marta R.',
    'r1.note': 'Google review · 5 stars',
    'r2.text': 'Warm atmosphere, impeccable service and beef handled with respect. We ordered the tomahawk for two and the Chianina tagliata — both sublime.',
    'r2.author': 'James W.',
    'r2.note': 'TripAdvisor · 5 stars',
    'r3.text': 'They made us feel like at nonna\'s house. The sommelier recommended a Barolo that paired perfectly with the ossobuco. Unforgettable.',
    'r3.author': 'Ana & Luis',
    'r3.note': 'Anniversary · October 2025',

    /* CTA banner */
    'cta.title': 'Reserve your table tonight',
    'cta.body': 'The best evenings are booked ahead. Secure your seat by the grill.',
    'cta.btn': 'Book now',

    /* hours / footer */
    'hours.title': 'Hours',
    'hours.body': 'Tuesday to Sunday<br>1:00 PM — 4:00 PM · 7:30 PM — 11:30 PM<br><small>Closed Monday</small>',
    'addr.title': 'Address',
    'addr.body': '24 Calle del Olivo<br>28004 Madrid · Spain',
    'phone.title': 'Phone',
    'phone.body': '+34 91 555 24 18',
    'mail.title': 'Email',
    'mail.body': 'reservations@labruschetteria.es',

    /* footer */
    'foot.tagline': 'Fire, beef and Italian tradition. Cut by cut, fire by fire.',
    'foot.explore': 'Explore',
    'foot.visit': 'Visit us',
    'foot.follow': 'Follow us',
    'foot.legal': '© 2026 La Bruschetteria · All rights reserved',
    'foot.privacy': 'Privacy',
    'foot.cookies': 'Cookies',

    /* about page */
    'about.title': 'Our story',
    'about.lede': 'From Bologna to Madrid, with a stop at every grill.',
    'about.s1.title': 'It started next to a grill',
    'about.s1.lede': '"If my grandmother saw what we cook today, she wouldn\'t be surprised. She\'d be proud we forgot nothing."',
    'about.s1.p1': 'In 2008, Lorenzo and Sofia opened a small trattoria with six tables, a wood-fired oven, and the conviction that Spain deserved real Italian cooking — the kind that doesn\'t make it into manuals.',
    'about.s1.p2': 'They brought their grandmother\'s ragù recipe, the oven from one of Emilia-Romagna\'s finest artisans, and a deal with a Tuscan oil maker who still sends us the first pressing every autumn.',
    'about.s2.title': 'A kitchen that doesn\'t compromise',
    'about.s2.lede': 'Beef aged every week, fire every night, times that are respected.',
    'about.s2.p1': 'Our kitchen opens at 6 a.m. Before the first guest arrives, Marco has already kneaded the day\'s tagliatelle, Lucia has lit the oven, and the tomato sauce has been reducing on a low flame for three hours.',
    'about.s2.p2': 'We use nothing frozen. Nothing precooked. Nothing we can\'t trace back to its source. It costs more, yes. But it\'s the only way to cook we know.',
    'about.s3.title': 'The people behind the table',
    'about.s3.lede': 'A team that feels like family, not staff.',
    'about.s3.p1': 'Lorenzo runs the floor like his father ran the grill: with a careful eye and infinite patience. Sofia is the head of fire and guardian of the cellar. Marco is the grill-master who arrived nine years ago and never left.',
    'about.s3.p2': 'When you walk in, Lorenzo recognizes you. Sofia peeks from the kitchen if you arrive smiling. Marco explains how the pasta was made if you ask. That\'s La Bruschetteria.',

    /* values */
    'values.title': 'Our values',
    'values.lede': 'Four principles that guide every service.',
    'val1.title': 'Tradition',
    'val1.body': 'Recipes we don\'t invent. We only respect.',
    'val2.title': 'Produce',
    'val2.body': 'From the source, in season, from the market.',
    'val3.title': 'Time',
    'val3.body': 'There are no shortcuts in honest cooking.',
    'val4.title': 'Hospitality',
    'val4.body': 'Our table is your table.',

    /* menu page */
    'menupage.title': 'The menu',
    'menupage.lede': 'Each dish is a love letter to a region of Italy.',
    'menutab.bruschettas': 'Bruschettas',
    'menutab.antipasti': 'Antipasti',
    'menutab.pasta': 'Pasta',
    'menutab.pizza': 'Pizza',
    'menutab.mains': 'Meats & Fish',
    'menutab.desserts': 'Dolci',
    'menutab.drinks': 'Drinks',
    'menupage.note.title': 'Allergen information',
    'menupage.note.body': 'Ask your server for the allergen list. We adapt dishes for gluten-free and vegetarian options whenever possible.',

    /* gallery */
    'gallery.title': 'Gallery',
    'gallery.lede': 'Pictures that tell what words cannot.',

    /* contact */
    'contact.title': 'Contact',
    'contact.lede': 'We\'re in the heart of the city, waiting for your table.',
    'contact.form.title': 'Write to us',
    'contact.form.lede': 'For large groups, private events or any other inquiry.',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.subject': 'Subject',
    'form.message': 'Message',
    'form.send': 'Send message',
    'form.success': 'Thanks! We\'ve received your message and will reply within 24 hours.',

    /* reservations */
    'res.title': 'Reserve your table',
    'res.lede': 'Book online in under a minute. We\'ll confirm by email.',
    'res.form.title': 'Instant booking',
    'res.form.lede': 'Choose date, time and number of guests. For groups over 8, please contact us directly.',
    'form.date': 'Date',
    'form.time': 'Time',
    'form.guests': 'Guests',
    'form.occasion': 'Occasion (optional)',
    'form.notes': 'Comments or allergies',
    'form.book': 'Confirm booking',
    'form.book.success': 'Booking received! You\'ll get a confirmation email shortly.',
    'res.note.title': 'Need anything else?',
    'res.note.body': 'For private bookings, events or large groups, call us at +34 91 555 24 18 or write to events@labruschetteria.es',
  }
};

/* ---------- i18n apply ---------- */
function getLang() {
  return localStorage.getItem('lb-lang') || (navigator.language.startsWith('en') ? 'en' : 'es');
}
function setLang(lang) {
  if (!I18N[lang]) return;
  localStorage.setItem('lb-lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = I18N[lang][key];
    if (val !== undefined) {
      if (el.dataset.i18nMode === 'html' || /<[a-z]/i.test(val)) el.innerHTML = val;
      else el.textContent = val;
    }
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const [attr, key] = el.dataset.i18nAttr.split(':');
    const val = I18N[lang][key];
    if (val !== undefined) el.setAttribute(attr, val);
  });
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ---------- header scroll state ---------- */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- mobile menu ---------- */
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => document.body.classList.remove('menu-open'));
  });
}

/* ---------- reveal-on-scroll ---------- */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length || !('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px' });
  els.forEach(el => io.observe(el));
}

/* ---------- hero loaded ---------- */
function initHero() {
  const hero = document.querySelector('.hero');
  if (hero) requestAnimationFrame(() => hero.classList.add('loaded'));
}

/* ---------- menu tabs ---------- */
function initMenuTabs() {
  const tabs = document.querySelectorAll('.menu-tab');
  const sections = document.querySelectorAll('.menu-section');
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.toggle('active', t === tab));
      sections.forEach(s => s.classList.toggle('active', s.dataset.section === target));
    });
  });
}

/* ---------- lightbox gallery ---------- */
function initLightbox() {
  const items = document.querySelectorAll('.gallery-item');
  if (!items.length) return;
  const lightbox = document.getElementById('lightbox');
  const img = lightbox?.querySelector('img');
  if (!lightbox || !img) return;
  const sources = Array.from(items).map(it => it.querySelector('img')?.src).filter(Boolean);
  let index = 0;
  const open = (i) => {
    index = (i + sources.length) % sources.length;
    img.src = sources[index];
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };
  items.forEach((it, i) => it.addEventListener('click', () => open(i)));
  lightbox.querySelector('.lightbox-close').addEventListener('click', close);
  lightbox.querySelector('.lightbox-nav.prev').addEventListener('click', e => { e.stopPropagation(); open(index - 1); });
  lightbox.querySelector('.lightbox-nav.next').addEventListener('click', e => { e.stopPropagation(); open(index + 1); });
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') open(index - 1);
    if (e.key === 'ArrowRight') open(index + 1);
  });
}

/* ---------- forms (demo) ---------- */
function initForms() {
  document.querySelectorAll('form[data-demo]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const success = form.querySelector('.form-success');
      if (success) {
        success.classList.add('visible');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  });
}

/* ---------- counter animation ---------- */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const animate = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1500;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animate(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(c => io.observe(c));
}

/* ---------- language toggle setup ---------- */
function initLangToggle() {
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  setLang(getLang());
}

/* ---------- year stamp ---------- */
function stampYear() {
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

/* ---------- init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initReveal();
  initHero();
  initMenuTabs();
  initLightbox();
  initForms();
  initCounters();
  initLangToggle();
  stampYear();
});
