/* =============================================================
   La Bruschetteria — interactivity & i18n (traditional Italian)
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

    /* hero */
    'hero.eyebrow': 'Trattoria italiana · Auténtica',
    'hero.title': 'Una <span class="accent">trattoria</span><br>como en Italia',
    'hero.lede': 'Pasta fatta in casa, pizza al horno, antipasti tradicionales y un servicio que te recibe como en familia. La cocina italiana que aprendimos en casa.',
    'hero.cta1': 'Reservar mesa',
    'hero.cta2': 'Ver la carta',
    'hero.meta1': 'Cucina italiana',
    'hero.meta2': 'Pasta fresca diaria',
    'hero.meta3': 'Forno · 450°C',

    /* welcome */
    'welcome.eyebrow': 'Benvenuti',
    'welcome.title': 'Italia, en cada plato',
    'welcome.lede': 'Somos una familia italiana cocinando lo que aprendimos de nuestra madre y nuestra abuela. Sin atajos, sin compromisos: solo el sabor que viene de hacer las cosas bien.',
    'welcome.body': 'Nuestra masa fermenta 48 horas. Nuestra pasta se amasa cada mañana a las seis. Nuestra burrata llega de Puglia, nuestro prosciutto de Parma, nuestro aceite de Toscana. La carta es pequeña porque solo cocinamos lo que sabemos hacer bien.',
    'welcome.signature': '— Famiglia La Bruschetteria',

    /* features */
    'feat.title': 'La cucina italiana, hecha bien',
    'feat.lede': 'Cuatro pilares que defienden cada plato que sale de la cocina.',
    'feat1.title': 'Pasta fresca diaria',
    'feat1.body': 'Harina italiana 00, huevos camperos y manos a las seis de la mañana. Tagliatelle, ravioli, gnocchi: hechos hoy.',
    'feat2.title': 'Pizza al horno',
    'feat2.body': 'Masa madre fermentada 48 horas. Horno tradicional a 450°C. Mozzarella di bufala, San Marzano, albahaca fresca.',
    'feat3.title': 'Producto italiano',
    'feat3.body': 'Burrata de Andria, prosciutto di Parma, aceite toscano de primera prensada, tomate del Piennolo del Vesuvio.',
    'feat4.title': 'Bodega italiana',
    'feat4.body': 'Más de 80 etiquetas seleccionadas: Chianti, Barolo, Brunello, Prosecco. La Italia que se bebe.',

    /* menu preview */
    'menu.eyebrow': 'Nuestra carta',
    'menu.title': 'Sabores que recorren Italia',
    'menu.lede': 'Una carta que viaja del Piamonte a Sicilia, pasando por la Toscana, Nápoles, Bologna y Puglia.',
    'menu.cat1': 'Antipasti',
    'menu.cat1.desc': 'El comienzo: tablas, burrata, vitello tonnato, carpaccio.',
    'menu.cat2': 'Pasta',
    'menu.cat2.desc': 'Hecha cada mañana. Tagliatelle, ravioli, gnocchi, lasagna.',
    'menu.cat3': 'Pizza',
    'menu.cat3.desc': 'Masa madre fermentada 48 horas. Horno a 450°C.',
    'menu.cat4': 'Dolci',
    'menu.cat4.desc': 'Tiramisù, panna cotta, cannoli sicilianos, sfogliatella.',
    'menu.viewAll': 'Ver carta completa',

    /* story */
    'story.eyebrow': 'Nuestra historia',
    'story.title': 'Tres generaciones de cocina familiar',
    'story.lede': '«La cocina italiana no es complicada. Es buena materia prima, tiempos respetados y la paciencia de hacer las cosas como se hacían en casa.»',
    'story.p1': 'La Bruschetteria nació en 2008 de la mano de Lorenzo y Sofia, dos hermanos que dejaron Bologna con una sola idea: ofrecer a España la cocina italiana que su madre les preparaba los domingos.',
    'story.p2': 'Empezaron con seis mesas, un horno de leña y las recetas de su nonna. Hoy seguimos siendo una casa pequeña por convicción. Aquí cada plato lleva nuestro nombre.',
    'story.cta': 'Conoce nuestra historia',

    /* stats */
    'stats.title': 'La Bruschetteria en números',
    'stat1': 'Años cocinando',
    'stat2': 'Recetas tradicionales',
    'stat3': 'Etiquetas de vino',
    'stat4': 'Comensales felices',

    /* reviews */
    'reviews.eyebrow': 'Testimonios',
    'reviews.title': 'Lo que dicen nuestros comensales',
    'reviews.lede': 'Más de 1.200 reseñas de cinco estrellas en Google y TripAdvisor.',
    'r1.text': 'La mejor pasta fresca que he comido fuera de Italia. Las bruschettas son una experiencia: el pan, los tomates, ese aceite… volveré pronto.',
    'r1.author': 'Marta R.',
    'r1.note': 'Reseña en Google · 5 estrellas',
    'r2.text': 'Ambiente cálido, servicio impecable y una carta que respeta la tradición. Pedimos los tagliatelle al ragù y la pizza prosciutto e burrata: ambos sublimes.',
    'r2.author': 'James W.',
    'r2.note': 'TripAdvisor · 5 estrellas',
    'r3.text': 'Nos hicieron sentir como en casa de la nonna. La sommelier nos recomendó un Barolo que combinó perfecto con el ossobuco. Inolvidable.',
    'r3.author': 'Ana & Luis',
    'r3.note': 'Aniversario · Octubre 2025',

    /* CTA banner */
    'cta.title': 'Reserva tu mesa esta noche',
    'cta.body': 'Las mejores noches se reservan con tiempo. Asegura tu sitio en el corazón de la trattoria.',
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
    'foot.tagline': 'Cucina italiana tradizionale. Pasta fresca, pizza al horno y la mesa puesta como en casa.',
    'foot.explore': 'Explora',
    'foot.visit': 'Visítanos',
    'foot.follow': 'Síguenos',
    'foot.legal': '© 2026 La Bruschetteria · Todos los derechos reservados',
    'foot.privacy': 'Privacidad',
    'foot.cookies': 'Cookies',

    /* about page */
    'about.title': 'Nuestra historia',
    'about.lede': 'De Bologna a Madrid, con escala en cada plato.',
    'about.s1.title': 'Nació en una cocina pequeña',
    'about.s1.lede': '«Si mi abuela viera lo que hoy cocinamos, no estaría sorprendida. Estaría orgullosa de que no hemos olvidado nada.»',
    'about.s1.p1': 'En 2008, Lorenzo y Sofia abrieron una pequeña trattoria con seis mesas, un horno de leña y la convicción de que España merecía conocer la cocina italiana real.',
    'about.s1.p2': 'Trajeron la receta del ragù de su abuela, el horno de uno de los mejores artesanos de la Emilia-Romagna, y un acuerdo con un proveedor de aceite toscano que aún hoy nos sigue mandando cada otoño la primera prensada.',
    'about.s2.title': 'La cocina que no transige',
    'about.s2.lede': 'Pasta cada día, masa cada día, salsas que respetan los tiempos.',
    'about.s2.p1': 'Nuestra cocina abre a las 6 de la mañana. Antes de que llegue el primer comensal, Marco ya ha amasado los tagliatelle del día, Lucia ha encendido el horno y la salsa de tomate lleva tres horas reduciendo a fuego lento.',
    'about.s2.p2': 'No usamos nada congelado. Nada precocinado. Nada que no podamos rastrear hasta su origen. Es más caro, sí. Pero también es la única manera de cocinar que conocemos.',
    'about.s3.title': 'Las personas detrás de la mesa',
    'about.s3.lede': 'Un equipo que se siente familia, no plantilla.',
    'about.s3.p1': 'Lorenzo dirige la sala como dirigía la cocina su padre: con ojo atento y paciencia infinita. Sofia es la jefa de cocina y la guardiana de las recetas. Marco es el pasta-maker que llegó hace nueve años y ya no se fue.',
    'about.s3.p2': 'Cuando entras, Lorenzo te reconoce. Sofia se asoma desde la cocina si llegas con buena cara. Marco te explica cómo se ha hecho la pasta si se lo preguntas. Eso es La Bruschetteria.',

    /* values */
    'values.title': 'Nuestros valores',
    'values.lede': 'Cuatro principios que nos guían cada servicio.',
    'val1.title': 'Tradizione',
    'val1.body': 'Recetas que no inventamos. Solo respetamos.',
    'val2.title': 'Materia prima',
    'val2.body': 'De origen, de temporada, de mercado.',
    'val3.title': 'Tempo',
    'val3.body': 'No hay atajos en una cocina honesta.',
    'val4.title': 'Ospitalità',
    'val4.body': 'Una mesa nuestra es una mesa tuya.',

    /* menu page */
    'menupage.title': 'La carta',
    'menupage.lede': 'Cada plato es una carta de amor a una región de Italia.',
    'menutab.bruschettas': 'Bruschettas',
    'menutab.antipasti': 'Antipasti',
    'menutab.pasta': 'Pasta',
    'menutab.pizza': 'Pizza',
    'menutab.mains': 'Secondi',
    'menutab.desserts': 'Dolci',
    'menutab.drinks': 'Bevande',
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
    'hero.eyebrow': 'Italian trattoria · Authentic',
    'hero.title': 'A <span class="accent">trattoria</span><br>like in Italy',
    'hero.lede': 'Hand-rolled pasta, wood-fired pizza, traditional antipasti and service that welcomes you like family. The Italian cooking we learned at home.',
    'hero.cta1': 'Book a table',
    'hero.cta2': 'See the menu',
    'hero.meta1': 'Cucina italiana',
    'hero.meta2': 'Fresh pasta daily',
    'hero.meta3': 'Forno · 450°C',

    /* welcome */
    'welcome.eyebrow': 'Benvenuti',
    'welcome.title': 'Italy, on every plate',
    'welcome.lede': 'We\'re an Italian family cooking what we learned from our mother and our grandmother. No shortcuts, no compromises: just the flavor of doing things right.',
    'welcome.body': 'Our dough ferments 48 hours. Our pasta is kneaded fresh every morning at six. Our burrata comes from Puglia, our prosciutto from Parma, our oil from Tuscany. The menu is small because we only cook what we know how to cook well.',
    'welcome.signature': '— The La Bruschetteria family',

    /* features */
    'feat.title': 'Italian cooking, done right',
    'feat.lede': 'Four pillars behind every plate that leaves our kitchen.',
    'feat1.title': 'Fresh pasta daily',
    'feat1.body': 'Italian 00 flour, free-range eggs and hands at six in the morning. Tagliatelle, ravioli, gnocchi — made today.',
    'feat2.title': 'Wood-fired pizza',
    'feat2.body': 'Sourdough fermented 48 hours. Traditional oven at 450°C. Mozzarella di bufala, San Marzano, fresh basil.',
    'feat3.title': 'Italian produce',
    'feat3.body': 'Burrata from Andria, prosciutto di Parma, first-press Tuscan oil, Piennolo del Vesuvio tomatoes.',
    'feat4.title': 'Italian cellar',
    'feat4.body': 'Over 80 hand-picked labels: Chianti, Barolo, Brunello, Prosecco. The Italy you drink.',

    /* menu preview */
    'menu.eyebrow': 'Our menu',
    'menu.title': 'Flavors that travel Italy',
    'menu.lede': 'A menu that travels from Piedmont to Sicily, by way of Tuscany, Naples, Bologna and Puglia.',
    'menu.cat1': 'Antipasti',
    'menu.cat1.desc': 'The beginning: charcuterie boards, burrata, vitello tonnato, carpaccio.',
    'menu.cat2': 'Pasta',
    'menu.cat2.desc': 'Made every morning. Tagliatelle, ravioli, gnocchi, lasagna.',
    'menu.cat3': 'Pizza',
    'menu.cat3.desc': 'Sourdough fermented 48 hours. Oven at 450°C.',
    'menu.cat4': 'Dolci',
    'menu.cat4.desc': 'Tiramisù, panna cotta, Sicilian cannoli, sfogliatella.',
    'menu.viewAll': 'See full menu',

    /* story */
    'story.eyebrow': 'Our story',
    'story.title': 'Three generations of family cooking',
    'story.lede': '"Italian cooking isn\'t complicated. It\'s good ingredients, respected timings and the patience to do things the way they were done at home."',
    'story.p1': 'La Bruschetteria was born in 2008 from the hands of Lorenzo and Sofia, two siblings who left Bologna with one idea: to offer Spain the Italian cuisine their mother used to make on Sundays.',
    'story.p2': 'They started with six tables, a wood-fired oven and their nonna\'s recipes. We\'re still a small house by conviction. Every plate carries our name.',
    'story.cta': 'Read the full story',

    /* stats */
    'stats.title': 'La Bruschetteria in numbers',
    'stat1': 'Years cooking',
    'stat2': 'Traditional recipes',
    'stat3': 'Wines in cellar',
    'stat4': 'Happy guests',

    /* reviews */
    'reviews.eyebrow': 'Testimonials',
    'reviews.title': 'What our guests say',
    'reviews.lede': 'Over 1,200 five-star reviews on Google and TripAdvisor.',
    'r1.text': 'The best fresh pasta I\'ve had outside Italy. The bruschettas are an experience: the bread, the tomatoes, that olive oil… I\'ll be back soon.',
    'r1.author': 'Marta R.',
    'r1.note': 'Google review · 5 stars',
    'r2.text': 'Warm atmosphere, impeccable service and a menu that respects tradition. We ordered the tagliatelle al ragù and the prosciutto-burrata pizza — both sublime.',
    'r2.author': 'James W.',
    'r2.note': 'TripAdvisor · 5 stars',
    'r3.text': 'They made us feel like at nonna\'s house. The sommelier recommended a Barolo that paired perfectly with the ossobuco. Unforgettable.',
    'r3.author': 'Ana & Luis',
    'r3.note': 'Anniversary · October 2025',

    /* CTA */
    'cta.title': 'Reserve your table tonight',
    'cta.body': 'The best evenings are booked ahead. Secure your seat at the heart of the trattoria.',
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
    'foot.tagline': 'Traditional Italian cooking. Fresh pasta, wood-fired pizza and a table set like at home.',
    'foot.explore': 'Explore',
    'foot.visit': 'Visit us',
    'foot.follow': 'Follow us',
    'foot.legal': '© 2026 La Bruschetteria · All rights reserved',
    'foot.privacy': 'Privacy',
    'foot.cookies': 'Cookies',

    /* about */
    'about.title': 'Our story',
    'about.lede': 'From Bologna to Madrid, with a stop in every plate.',
    'about.s1.title': 'It started in a small kitchen',
    'about.s1.lede': '"If my grandmother saw what we cook today, she wouldn\'t be surprised. She\'d be proud we forgot nothing."',
    'about.s1.p1': 'In 2008, Lorenzo and Sofia opened a small trattoria with six tables, a wood-fired oven, and the conviction that Spain deserved real Italian cooking.',
    'about.s1.p2': 'They brought their grandmother\'s ragù recipe, the oven from one of Emilia-Romagna\'s finest artisans, and a deal with a Tuscan oil maker who still sends us the first pressing every autumn.',
    'about.s2.title': 'A kitchen that doesn\'t compromise',
    'about.s2.lede': 'Pasta every day, dough every day, sauces that respect time.',
    'about.s2.p1': 'Our kitchen opens at 6 a.m. Before the first guest arrives, Marco has already kneaded the day\'s tagliatelle, Lucia has lit the oven, and the tomato sauce has been reducing on a low flame for three hours.',
    'about.s2.p2': 'We use nothing frozen. Nothing precooked. Nothing we can\'t trace back to its source. It costs more, yes. But it\'s the only way to cook we know.',
    'about.s3.title': 'The people behind the table',
    'about.s3.lede': 'A team that feels like family, not staff.',
    'about.s3.p1': 'Lorenzo runs the floor like his father ran the kitchen: with a careful eye and infinite patience. Sofia is the head chef and guardian of the recipes. Marco is the pasta-maker who arrived nine years ago and never left.',
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

    /* menu */
    'menupage.title': 'The menu',
    'menupage.lede': 'Each dish is a love letter to a region of Italy.',
    'menutab.bruschettas': 'Bruschettas',
    'menutab.antipasti': 'Antipasti',
    'menutab.pasta': 'Pasta',
    'menutab.pizza': 'Pizza',
    'menutab.mains': 'Secondi',
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
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- mobile menu ---------- */
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => document.body.classList.toggle('menu-open'));
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

/* ---------- lightbox ---------- */
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
