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
    'menu.title': 'La cucina italiana, hecha bien',
    'menu.lede': 'Bruschette, antipasti, pasta fresca casera, pizzas al horno y dolci. Una carta amplia y honesta, hecha como en casa.',
    'menu.cat1': 'Bruschette',
    'menu.cat1.desc': 'Tradizionale, Burrata, Napoletana y más.',
    'menu.cat2': 'Pasta Fresca',
    'menu.cat2.desc': 'Hecha a mano cada mañana.',
    'menu.cat3': 'Pizza',
    'menu.cat3.desc': 'Margherita, Diavola, Capricciosa, 6 Formaggi.',
    'menu.cat4': 'Dolci',
    'menu.cat4.desc': 'Tiramisù, cannoli, tortino di pistacchio.',
    'menu.viewAll': 'Ver carta completa',

    /* menu page – tabs */
    'menutab.bruschette':  'Bruschette',
    'menutab.antipasti':   'Antipasti',
    'menutab.compartir':   'Para Compartir',
    'menutab.insalata':    'Insalata & Lasagna',
    'menutab.pasta':       'Pasta',
    'menutab.pastafresca': 'Pasta Fresca',
    'menutab.specialita':  'Specialità',
    'menutab.pizza':       'Pizza',
    'menutab.postres':     'Dolci',
    'menupage.title':      'La carta',
    'menupage.lede':       'Bruschette, antipasti, pasta fresca casera, pizzas al horno y dolci. Como en una trattoria italiana de verdad.',
    'menupage.note.title':'Información alérgenos',
    'menupage.note.body': 'Pídale a su camarero la carta de alérgenos. Adaptamos platos para opciones sin gluten y vegetarianas siempre que es posible.',

    /* menu items (ES) */
    'm.panzerotti.desc': 'Croquetas de patata y mozzarella.',
    'm.polpette.desc':   'Albóndigas de berenjena en salsa de tomate.',
    'm.torta.desc':      'Torta de pasta con bechamel, mozzarella y salami italiano.',
    'm.arancini.desc':   'Bolitas de arroz rellenas de carne picada, guisantes y mozzarella.',
    'm.b-trad.desc':     'Tomate fresco, cebolla y albahaca.',
    'm.b-gorg.desc':     'Gorgonzola, rúcula, peperoncino, orégano y parmesano.',
    'm.b-parm.desc':     'Berenjenas horneadas en salsa de tomate, mozzarella y parmesano.',
    'm.b-capr.desc':     'Mozzarella de búfala, tomate cherry y albahaca fresca.',
    'm.b-burr.desc':     'Burrata y jamón curado italiano.',
    'm.b-sals.desc':     'Salchicha fresca napolitana, friarielli, mozzarella y orégano.',
    'm.b-mort.desc':     'Mortadella de pistacho con burrata fresca.',
    'm.b-mixto.eyebrow': 'Especialidad de la casa',
    'm.b-mixto.desc':    '6 unidades · Elección del chef · Una vuelta por nuestras bruschette favoritas.',
    'm.c-parm.desc':     'Berenjenas horneadas con salsa de tomate, mozzarella y parmesano.',
    'm.c-foca.desc':     'Mozzarella, ajo y orégano.',
    'm.c-pizf.desc':     'Selección de mini pizzas fritas en tres gustos diferentes.',
    'm.c-prov.desc':     'Cazuela de queso provolone fundido con salsa de tomate y pesto.',
    'm.c-cuor.desc':     'Rellenos de ricotta, spianata (salami italiano picante), jamón cocido y parmesano.',
    'm.c-tagl.desc':     'Gran selección de quesos y embutidos italianos.',

    /* story */
    'story.eyebrow': 'Nuestra historia',
    'story.title': 'Tres generaciones de cocina familiar',
    'story.lede': '«La cocina italiana no es complicada. Es buena materia prima, tiempos respetados y la paciencia de hacer las cosas como se hacían en casa.»',
    'story.p1': 'La Bruschetteria nació en 2008 de la mano de Lorenzo y Sofia, dos hermanos que dejaron Bologna con una sola idea: ofrecer a España la cocina italiana que su madre les preparaba los domingos.',
    'story.p2': 'Empezaron con seis mesas, un horno de leña y las recetas de su nonna. Hoy seguimos siendo una casa pequeña por convicción. Aquí cada plato lleva nuestro nombre.',
    'story.cta': 'Conoce nuestra historia',

    /* award (replaces invented stats) */
    'award.eyebrow': 'Reconocimiento',
    'award.title': 'El verdadero sabor de Italia',
    'award.body': 'Masa madre fermentada lenta, mozzarella Fior di Latte Campana, pasta hecha cada mañana y productos italianos importados directamente. La cucina italiana que aprendimos en casa, servida en Fuengirola.',

    /* reviews */
    'reviews.eyebrow': 'Testimonios',
    'reviews.title': 'Lo que dicen nuestros comensales',
    'reviews.lede': 'Más de 1.200 reseñas de cinco estrellas en Google y TripAdvisor.',
    'r1.text': 'El verdadero sabor de Italia. El sabor de Italia ha reconocido nuestra carta de pizzas como la mejor de la ciudad este año. Gracias a quienes nos visitan, recomiendan y vuelven.',
    'r1.author': 'El sabor de Italia',
    'r1.note': 'Cocina italiana · Fuengirola',
    'r2.text': 'Cocinamos con producto 100% italiano importado directamente desde Italia, sin intermediarios. Pasta fresca hecha cada día, masa madre fermentada 48 horas, mozzarella di bufala Campana DOP.',
    'r2.author': 'Cocina artesanal',
    'r2.note': 'Chef Andrea Palma · Napoli',
    'r3.text': 'Servicio a domicilio en Fuengirola, catering para eventos, tarjetas regalo y nuestra tienda italiana on-site. Llámanos al +34 951 77 49 81 o escríbenos por WhatsApp.',
    'r3.author': 'A tu disposición',
    'r3.note': 'Domicilio · Catering · Regalos',

    /* CTA banner */
    'cta.title': 'Reserva tu mesa esta noche',
    'cta.body': 'Las mejores noches se reservan con tiempo. Asegura tu sitio en el corazón de la trattoria.',
    'cta.btn': 'Hacer reserva',

    /* hours / footer */
    'hours.title': 'Horario',
    'hours.body': 'Martes a Domingo<br>13:00 — 16:00 · 19:30 — 23:30<br><small>Vie–Sáb · 19:00–23:30</small>',
    'addr.title': 'Dirección',
    'addr.body': 'C. Almáchar, 4<br>29640 Fuengirola · Málaga',
    'phone.title': 'Teléfono',
    'phone.body': '+34 951 77 49 81',
    'mail.title': 'Email',
    'mail.body': 'info@labruschetteria.es',

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
    'about.lede': 'De Nápoles a Fuengirola, con la tradición italiana en cada plato.',
    'about.s1.title': 'El verdadero sabor de Italia',
    'about.s1.lede': '«La tradición, el respeto por el buen producto y la elaboración de platos auténticos y sabrosos son nuestra seña de identidad.»',
    'about.s1.p1': 'La Bruschetteria es una trattoria italiana en el barrio de El Boquetillo, en Fuengirola, donde cocinamos como en casa: con honestidad, materia prima seleccionada y recetas que respetamos sin reinventar.',
    'about.s1.p2': 'Combinamos lo mejor del mercado local de Fuengirola con productos 100% italianos importados directamente desde Italia, sin intermediarios. Esa misma despensa la puedes encontrar también en nuestra tienda en el restaurante y online.',
    'about.s2.title': 'Napolitano, 10 años de cocina internacional',
    'about.s2.lede': '«Cocinar es respetar lo que tienes en las manos. El resto es técnica y paciencia.»',
    'about.s2.p1': 'Originario de Nápoles, Chef Andrea Palma se formó en cocinas internacionales que afinaron su técnica y su visión gastronómica. Su cocina es completamente artesanal y fiel a sus raíces italianas: pasta fresca hecha a mano cada día con métodos tradicionales, masa madre fermentada lenta para las pizzas, y atención al detalle desde la selección del producto hasta el plato.',
    'about.s2.p2': 'Su filosofía: una experiencia cálida, personal y cercana — donde cada plato cuenta una historia y cada comensal se siente parte de la mesa.',
    'about.s3.title': 'Menos es más',
    'about.s3.lede': 'Pureza, estacionalidad y respeto a la materia prima.',
    'about.s3.p1': 'Creemos en pocos ingredientes, pero de calidad excepcional, ejecutados con técnica impecable. No usamos atajos, ni precocinados, ni nada que no podamos rastrear hasta su origen.',
    'about.s3.p2': 'Por eso seguimos siendo una trattoria pequeña por convicción. Por eso cada plato lleva nuestro nombre. Y por eso, cuando vuelves, te reconocemos por el tuyo.',

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
    'res.note.body': 'Para reservas privadas, eventos o grupos grandes, llámanos al +34 951 77 49 81 o escríbenos a info@labruschetteria.es',
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
    'menu.title': 'Italian cooking, done right',
    'menu.lede': 'Bruschette, antipasti, fresh handmade pasta, wood-fired pizzas and dolci. A broad, honest menu cooked the way it\'s cooked at home.',
    'menu.cat1': 'Bruschette',
    'menu.cat1.desc': 'Tradizionale, Burrata, Napoletana and more.',
    'menu.cat2': 'Fresh Pasta',
    'menu.cat2.desc': 'Hand-made every morning.',
    'menu.cat3': 'Pizza',
    'menu.cat3.desc': 'Margherita, Diavola, Capricciosa, 6 Formaggi.',
    'menu.cat4': 'Tagliere & Dolci',
    'menu.cat4.desc': 'Italian platter, tiramisù, cannoli.',
    'menu.viewAll': 'See full menu',

    /* menu page – tabs */
    'menutab.bruschette':  'Bruschette',
    'menutab.antipasti':   'Antipasti',
    'menutab.compartir':   'To Share',
    'menutab.insalata':    'Salads & Lasagna',
    'menutab.pasta':       'Pasta',
    'menutab.pastafresca': 'Fresh Pasta',
    'menutab.specialita':  'Chef\'s Specials',
    'menutab.pizza':       'Pizza',
    'menutab.postres':     'Dolci',
    'menupage.title':      'The menu',
    'menupage.lede':       'Bruschette, antipasti, fresh handmade pasta, wood-fired pizzas and dolci. Like a real Italian trattoria.',
    'menupage.note.title':'Allergen information',
    'menupage.note.body': 'Ask your server for the allergen list. We adapt dishes for gluten-free and vegetarian options whenever possible.',

    /* menu items (EN) */
    'm.panzerotti.desc': 'Potato and mozzarella croquettes.',
    'm.polpette.desc':   'Eggplant meatballs in tomato sauce.',
    'm.torta.desc':      'Baked pasta cake with bechamel, mozzarella and Italian salami.',
    'm.arancini.desc':   'Rice balls stuffed with ground meat, peas and mozzarella.',
    'm.b-trad.desc':     'Fresh tomato, onion and basil.',
    'm.b-gorg.desc':     'Gorgonzola, rocket, peperoncino, oregano and Parmesan.',
    'm.b-parm.desc':     'Oven-baked eggplant in tomato sauce, mozzarella and Parmesan.',
    'm.b-capr.desc':     'Buffalo mozzarella, cherry tomato and fresh basil.',
    'm.b-burr.desc':     'Burrata and Italian cured ham.',
    'm.b-sals.desc':     'Fresh Neapolitan sausage, friarielli, mozzarella and oregano.',
    'm.b-mort.desc':     'Pistachio mortadella with fresh burrata.',
    'm.b-mixto.eyebrow': 'House specialty',
    'm.b-mixto.desc':    '6 pieces · Chef\'s choice · A tour through our favorite bruschette.',
    'm.c-parm.desc':     'Baked eggplant with tomato sauce, mozzarella and Parmesan.',
    'm.c-foca.desc':     'Mozzarella, garlic and oregano.',
    'm.c-pizf.desc':     'Selection of three fried mini-pizzas in different flavors.',
    'm.c-prov.desc':     'Melted provolone cheese with tomato sauce and pesto.',
    'm.c-cuor.desc':     'Stuffed with ricotta, spicy Italian spianata salami, cooked ham and Parmesan.',
    'm.c-tagl.desc':     'Grand selection of Italian cheeses and cured meats.',

    /* story */
    'story.eyebrow': 'Our story',
    'story.title': 'Three generations of family cooking',
    'story.lede': '"Italian cooking isn\'t complicated. It\'s good ingredients, respected timings and the patience to do things the way they were done at home."',
    'story.p1': 'La Bruschetteria was born in 2008 from the hands of Lorenzo and Sofia, two siblings who left Bologna with one idea: to offer Spain the Italian cuisine their mother used to make on Sundays.',
    'story.p2': 'They started with six tables, a wood-fired oven and their nonna\'s recipes. We\'re still a small house by conviction. Every plate carries our name.',
    'story.cta': 'Read the full story',

    /* award */
    'award.eyebrow': 'Recognition',
    'award.title': 'The true taste of Italy',
    'award.body': 'Slow-fermented sourdough, Fior di Latte Campana mozzarella, pasta made every morning and Italian produce imported direct. The Italian cooking we learned at home, served in Fuengirola.',

    /* reviews */
    'reviews.eyebrow': 'Testimonials',
    'reviews.title': 'What our guests say',
    'reviews.lede': 'Over 1,200 five-star reviews on Google and TripAdvisor.',
    'r1.text': 'The true taste of Italy. El sabor de Italia recognized our pizza menu as the best in town this year. Thanks to everyone who visits, recommends and comes back.',
    'r1.author': 'El sabor de Italia',
    'r1.note': 'Italian cuisine · Fuengirola',
    'r2.text': 'We cook with 100% Italian produce imported direct from Italy, no middlemen. Fresh pasta made every day, sourdough fermented 48 hours, mozzarella di bufala Campana DOP.',
    'r2.author': 'Artisanal kitchen',
    'r2.note': 'Chef Andrea Palma · Napoli',
    'r3.text': 'Home delivery in Fuengirola, catering for events, gift cards and our on-site Italian shop. Call us at +34 951 77 49 81 or write on WhatsApp.',
    'r3.author': 'At your service',
    'r3.note': 'Delivery · Catering · Gifts',

    /* CTA */
    'cta.title': 'Reserve your table tonight',
    'cta.body': 'The best evenings are booked ahead. Secure your seat at the heart of the trattoria.',
    'cta.btn': 'Book now',

    /* hours / footer */
    'hours.title': 'Hours',
    'hours.body': 'Monday to Thursday · 7:00 PM — 11:30 PM<br>Friday to Saturday · 1:00 PM — 4:00 PM &amp; 7:00 PM — 11:30 PM<br><small>Closed Sunday</small>',
    'addr.title': 'Address',
    'addr.body': 'C. Almáchar, 4<br>29640 Fuengirola · Málaga',
    'phone.title': 'Phone',
    'phone.body': '+34 951 77 49 81',
    'mail.title': 'Email',
    'mail.body': 'info@labruschetteria.es',

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
    'about.lede': 'From Naples to Fuengirola, with Italian tradition on every plate.',
    'about.s1.title': 'The true taste of Italy',
    'about.s1.lede': '"Tradition, respect for good produce and the preparation of authentic, flavorful dishes — that is our signature."',
    'about.s1.p1': 'La Bruschetteria is an Italian trattoria in the El Boquetillo neighborhood of Fuengirola, where we cook the way you would at home: with honesty, hand-picked produce and recipes we respect rather than reinvent.',
    'about.s1.p2': 'We combine the best of Fuengirola\'s local market with 100% Italian products imported directly from Italy, no middlemen. The same pantry is available in our on-site shop and online.',
    'about.s2.title': 'Napolitan, 10 years of international kitchens',
    'about.s2.lede': '"Cooking is respecting what you have in your hands. The rest is technique and patience."',
    'about.s2.p1': 'Originally from Naples, Chef Andrea Palma trained in international kitchens that sharpened his technique and gastronomic vision. His cooking is entirely artisanal and faithful to his Italian roots: fresh pasta made by hand every day using traditional methods, slow-fermented sourdough for the pizzas, and attention to detail from sourcing to plate.',
    'about.s2.p2': 'His philosophy: a warm, personal and welcoming experience — where every dish tells a story and every guest feels part of the table.',
    'about.s3.title': 'Less is more',
    'about.s3.lede': 'Purity, seasonality and respect for the produce.',
    'about.s3.p1': 'We believe in fewer ingredients, but of exceptional quality, executed with flawless technique. No shortcuts, no precooked anything, nothing we can\'t trace to its source.',
    'about.s3.p2': 'That\'s why we\'re still a small trattoria by conviction. Why El sabor de Italia voted us the The true taste of Italy. And why, when you come back, we recognize you by name.',

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
    'res.note.body': 'For private bookings, events or large groups, call us at +34 951 77 49 81 or write to events@labruschetteria.es',
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
