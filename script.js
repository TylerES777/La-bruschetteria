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
    'hero.eyebrow': 'Trattoria · Cocina italiana auténtica',
    'hero.title': 'Sabores de <span class="accent">Italia</span><br>servidos con alma',
    'hero.lede': 'Pasta artesanal, bruschettas al horno de leña y vinos seleccionados de cada región. Una mesa donde Italia se siente como en casa.',
    'hero.cta1': 'Reserva tu mesa',
    'hero.cta2': 'Ver la carta',
    'hero.meta1': 'Desde 2008',
    'hero.meta2': 'Cocina abierta hasta tarde',
    'hero.meta3': 'Pasta hecha cada mañana',

    /* welcome */
    'welcome.eyebrow': 'Benvenuti',
    'welcome.title': 'Una pizca de Italia en cada plato',
    'welcome.lede': 'No somos un restaurante italiano más. Somos una familia que cocina lo que su nonna les enseñó: con tiempo, con producto, con amor.',
    'welcome.body': 'Cada mañana amasamos la pasta a mano, encendemos el horno antes del amanecer y elegimos lo mejor del mercado para que tu mesa sea siempre la mejor de la noche. Nuestra carta es pequeña por elección: preferimos hacer pocas cosas, y hacerlas extraordinariamente bien.',
    'welcome.signature': '— Famiglia La Bruschetteria',

    /* features */
    'feat.title': 'Por qué La Bruschetteria',
    'feat.lede': 'Tres pilares que defienden cada plato que sale de nuestra cocina.',
    'feat1.title': 'Pasta fresca diaria',
    'feat1.body': 'Harina italiana 00, huevos camperos y las manos de Marco a las 6 de la mañana. Sin congelados, sin atajos.',
    'feat2.title': 'Horno de leña',
    'feat2.body': 'Encina y haya quemándose a 450°C. Bruschettas y pizzas con esa corteza que solo el fuego sabe dar.',
    'feat3.title': 'Bodega italiana',
    'feat3.body': 'Más de 80 etiquetas seleccionadas: del Piemonte a Sicilia. Vinos honestos para mesas honestas.',
    'feat4.title': 'Producto del día',
    'feat4.body': 'Pescado fresco del puerto, verduras de huertas locales, embutidos y quesos importados directamente de Italia.',

    /* menu preview */
    'menu.eyebrow': 'Nuestra carta',
    'menu.title': 'Sabores que cuentan historias',
    'menu.lede': 'Una selección de platos que recorren Italia desde Piamonte hasta Sicilia, pasando por la Toscana y Nápoles.',
    'menu.cat1': 'Bruschettas',
    'menu.cat1.desc': 'El corazón de nuestra casa: pan al horno con los mejores ingredientes.',
    'menu.cat2': 'Pasta',
    'menu.cat2.desc': 'Hecha cada mañana. Tagliatelle, ravioli, gnocchi, lasaña.',
    'menu.cat3': 'Pizza',
    'menu.cat3.desc': 'Masa madre, fermentada 48 horas. Horno de leña a 450°C.',
    'menu.cat4': 'Carnes y pescados',
    'menu.cat4.desc': 'Producto premium tratado con respeto y técnica italiana.',
    'menu.viewAll': 'Ver carta completa',

    /* story */
    'story.eyebrow': 'Nuestra historia',
    'story.title': 'Tres generaciones, una sola receta: la pasión',
    'story.lede': '«Cuando mi abuela cocinaba, llenaba la casa entera de aromas. Hoy seguimos abriendo las ventanas para que esos mismos aromas lleguen a la calle.»',
    'story.p1': 'La Bruschetteria nació en 2008 de la mano de Lorenzo y Sofia, dos hermanos que dejaron Bologna con una sola idea: ofrecer a España la cocina que su madre les preparaba los domingos. Empezaron con seis mesas y un horno de leña.',
    'story.p2': 'Hoy seguimos siendo una casa pequeña por convicción. Nos importa más reconocerte cuando entras que llenar mil mesas. Aquí cada plato lleva nuestro nombre, y eso solo se cumple cocinando como en casa.',
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
    'r1.text': 'La mejor pasta fresca que he comido fuera de Italia. Las bruschettas son una experiencia: el pan, los tomates, ese aceite… volveré pronto.',
    'r1.author': 'Marta R.',
    'r1.note': 'Reseña en Google · 5 estrellas',
    'r2.text': 'Ambiente cálido, servicio impecable y una carta que respeta la tradición. Pedimos los tagliatelle al ragù y los ravioli de calabaza: ambos sublimes.',
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
    'foot.tagline': 'Cocina italiana honesta, mesa por mesa, plato por plato.',
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
    'about.s1.p1': 'En 2008, Lorenzo y Sofia abrieron una pequeña trattoria con seis mesas, un horno de leña y la convicción de que España merecía conocer la cocina italiana real, esa que no entra en los manuales.',
    'about.s1.p2': 'Trajeron la receta del ragù de su abuela, el horno de uno de los mejores artesanos de la Emilia-Romagna, y un acuerdo con un proveedor de aceite toscano que aún hoy nos sigue mandando cada otoño la primera prensada.',
    'about.s2.title': 'La cocina que no transige',
    'about.s2.lede': 'Pasta cada día, pan cada día, salsas que respetan los tiempos.',
    'about.s2.p1': 'Nuestra cocina abre a las 6 de la mañana. Antes de que llegue el primer comensal, Marco ya ha amasado los tagliatelle del día, Lucia ha encendido el horno y la salsa de tomate lleva tres horas reduciendo a fuego lento.',
    'about.s2.p2': 'No usamos nada congelado. Nada precocinado. Nada que no podamos rastrear hasta su origen. Es más caro, sí. Pero también es la única manera de cocinar que conocemos.',
    'about.s3.title': 'Las personas detrás de la mesa',
    'about.s3.lede': 'Un equipo que se siente familia, no plantilla.',
    'about.s3.p1': 'Lorenzo dirige la sala como dirigía la cocina su padre: con ojo atento y paciencia infinita. Sofia es la jefa de cocina y la guardiana de las recetas. Marco es el pasta-maker que llegó hace nueve años y ya no se fue.',
    'about.s3.p2': 'Cuando entras, Lorenzo te reconoce. Sofia se asoma desde la cocina si llegas con buena cara. Marco te explica cómo se ha hecho la pasta si se lo preguntas. Eso es La Bruschetteria.',

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
    'hero.eyebrow': 'Trattoria · Authentic Italian cuisine',
    'hero.title': 'The flavors of <span class="accent">Italy</span><br>served with soul',
    'hero.lede': 'Hand-rolled pasta, wood-fired bruschettas, and wines hand-picked from every region. A table where Italy feels like home.',
    'hero.cta1': 'Reserve your table',
    'hero.cta2': 'See the menu',
    'hero.meta1': 'Since 2008',
    'hero.meta2': 'Kitchen open late',
    'hero.meta3': 'Pasta made every morning',

    /* welcome */
    'welcome.eyebrow': 'Benvenuti',
    'welcome.title': 'A taste of Italy in every plate',
    'welcome.lede': 'We are not just another Italian restaurant. We are a family cooking what our nonna taught us: with time, with produce, with love.',
    'welcome.body': 'Every morning we knead our pasta by hand, light the oven before dawn, and pick the best of the market so your table is always the best of the night. Our menu is small by choice: we would rather do a few things, and do them extraordinarily well.',
    'welcome.signature': '— The La Bruschetteria family',

    /* features */
    'feat.title': 'Why La Bruschetteria',
    'feat.lede': 'Three pillars behind every plate that leaves our kitchen.',
    'feat1.title': 'Fresh pasta daily',
    'feat1.body': 'Italian 00 flour, free-range eggs and Marco\'s hands at 6 a.m. No frozen, no shortcuts.',
    'feat2.title': 'Wood-fired oven',
    'feat2.body': 'Oak and beech burning at 450°C. Bruschettas and pizzas with the crust only fire knows how to give.',
    'feat3.title': 'Italian cellar',
    'feat3.body': 'Over 80 hand-picked labels, from Piemonte to Sicily. Honest wines for honest tables.',
    'feat4.title': 'Daily produce',
    'feat4.body': 'Fresh fish from the port, vegetables from local farms, charcuterie and cheese imported direct from Italy.',

    /* menu preview */
    'menu.eyebrow': 'Our menu',
    'menu.title': 'Flavors that tell stories',
    'menu.lede': 'A selection of dishes that travel Italy from Piemonte to Sicily, by way of Tuscany and Naples.',
    'menu.cat1': 'Bruschettas',
    'menu.cat1.desc': 'The heart of our house: oven-baked bread with the best ingredients.',
    'menu.cat2': 'Pasta',
    'menu.cat2.desc': 'Made every morning. Tagliatelle, ravioli, gnocchi, lasagna.',
    'menu.cat3': 'Pizza',
    'menu.cat3.desc': 'Sourdough, fermented 48 hours. Wood-fired oven at 450°C.',
    'menu.cat4': 'Meats & fish',
    'menu.cat4.desc': 'Premium produce treated with respect and Italian technique.',
    'menu.viewAll': 'See full menu',

    /* story */
    'story.eyebrow': 'Our story',
    'story.title': 'Three generations, one recipe: passion',
    'story.lede': '"When my grandmother cooked, the whole house filled with aromas. Today we still open the windows so those same aromas reach the street."',
    'story.p1': 'La Bruschetteria was born in 2008 from the hands of Lorenzo and Sofia, two siblings who left Bologna with one idea: to offer Spain the cuisine their mother used to make on Sundays. They started with six tables and a wood-fired oven.',
    'story.p2': 'We are still a small house by conviction. We care more about recognizing you when you walk in than filling a thousand tables. Every plate carries our name — and that is only fulfilled by cooking like home.',
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
    'r2.text': 'Warm atmosphere, impeccable service and a menu that respects tradition. We ordered the tagliatelle al ragù and the pumpkin ravioli — both sublime.',
    'r2.author': 'James W.',
    'r2.note': 'TripAdvisor · 5 stars',
    'r3.text': 'They made us feel like at nonna\'s house. The sommelier recommended a Barolo that paired perfectly with the ossobuco. Unforgettable.',
    'r3.author': 'Ana & Luis',
    'r3.note': 'Anniversary · October 2025',

    /* CTA banner */
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
    'foot.tagline': 'Honest Italian cooking, table by table, plate by plate.',
    'foot.explore': 'Explore',
    'foot.visit': 'Visit us',
    'foot.follow': 'Follow us',
    'foot.legal': '© 2026 La Bruschetteria · All rights reserved',
    'foot.privacy': 'Privacy',
    'foot.cookies': 'Cookies',

    /* about page */
    'about.title': 'Our story',
    'about.lede': 'From Bologna to Madrid, with a stop in every plate.',
    'about.s1.title': 'It started in a small kitchen',
    'about.s1.lede': '"If my grandmother saw what we cook today, she wouldn\'t be surprised. She\'d be proud we forgot nothing."',
    'about.s1.p1': 'In 2008, Lorenzo and Sofia opened a small trattoria with six tables, a wood-fired oven, and the conviction that Spain deserved real Italian cooking — the kind that doesn\'t make it into manuals.',
    'about.s1.p2': 'They brought their grandmother\'s ragù recipe, the oven from one of Emilia-Romagna\'s finest artisans, and a deal with a Tuscan oil maker who still sends us the first pressing every autumn.',
    'about.s2.title': 'A kitchen that doesn\'t compromise',
    'about.s2.lede': 'Pasta every day, bread every day, sauces that respect time.',
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
