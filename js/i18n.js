(function() {
    'use strict';

    var translations = {
        de: {
            // ── Navigation ──
            'nav.retreats': 'Retreats',
            'nav.about': '\u00DCber uns',
            'nav.lang': 'EN',
            'nav.cta': 'Zur Warteliste',

            // ── Hero (index.html) ──
            'hero.title': 'Finde zur\u00FCck zu dir selbst \u2013 ohne deine Ambitionen aufzugeben.',
            'hero.subtitle': 'Ein Raum, um zur Ruhe zu kommen und dich wieder wie du selbst zu f\u00FChlen.',
            'hero.cta': 'Zur Warteliste',

            // ── Intro ──
            'intro.label': 'UNSERE GESCHICHTE',
            'intro.p1': 'Glow Besties ist ein Raum f\u00FCr Frauen, die es gewohnt sind, zu performen \u2013 im Job, im Sport, im Alltag.',
            'intro.p2': 'Unsere Retreats helfen dir, runterzufahren, dein Nervensystem zu regulieren und wieder in Kontakt mit deinem K\u00F6rper zu kommen \u2013 ohne Struktur oder Ehrgeiz zu verlieren.',
            'intro.p3': 'Verankert in Bewegung, Ern\u00E4hrung und echter Erholung konzentrieren wir uns auf das, was dir langfristig wirklich guttut.',

            // ── Philosophy ──
            'philosophy.label': 'UNSERE PHILOSOPHIE',
            'philosophy.title': 'Gemacht f\u00FCrs echte Leben.',
            'philosophy.p1': 'Hier geht es nicht darum, vor deinem Alltag zu fliehen. Sondern darum, dich in deinem Alltag besser zu f\u00FChlen.',
            'philosophy.p2': 'Wir setzen auf Langlebigkeit, Nervensystem-Balance und nachhaltige Routinen \u2013 durch Bewegung, Ern\u00E4hrung und bewusste Pausen.',
            'philosophy.p3': 'Weniger Druck. Mehr Klarheit. Ein K\u00F6rper, der sich wirklich gut anf\u00FChlt.',

            // ── For You ──
            'foryou.label': 'F\u00DCR DICH',
            'foryou.title': 'Das ist f\u00FCr dich, wenn\u2026',
            'foryou.item1': 'du immer \u201Ean\u201C bist und es dir schwer f\u00E4llt, abzuschalten',
            'foryou.item2': 'du dich st\u00E4ndig pushst \u2013 im Job, beim Training, im Alltag',
            'foryou.item3': 'du dich nicht nur funktionieren, sondern wirklich gut f\u00FChlen willst',
            'foryou.item4': 'dir deine langfristige Gesundheit und Energie wichtig sind',
            'foryou.item5': 'du Bewegung liebst und gerne an deine Grenzen gehst',
            'foryou.item6': 'du echte Verbindung und einen klaren Kopf suchst',

            // ── Experience ──
            'experience.label': 'DAS ERLEBNIS',
            'experience.title': 'Was dich erwartet',
            'experience.card1.title': 'Ruhige Morgen',
            'experience.card1.text': 'Starte den Tag mit Stretching, Sonnenlicht und Routinen, die dein System erden.',
            'experience.card2.title': 'Bewusste Bewegung',
            'experience.card2.text': 'Faszienarbeit, Mobilit\u00E4t, Wandern, Joggen und Pilates.',
            'experience.card3.title': 'Nervensystem-Reset',
            'experience.card3.text': 'Breathwork, angeleitete Sessions und ruhige Abende, um deinen K\u00F6rper aus dem Dauerstress-Modus zu holen.',
            'experience.card4.title': 'Ern\u00E4hrung',
            'experience.card4.text': 'Komplett glutenfreie, ausgewogene Mahlzeiten mit Fokus auf Protein, N\u00E4hrstoffe und stabile Energie.',
            'experience.card5.title': 'Reflexion & Klarheit',
            'experience.card5.text': 'Journaling, angeleitete Reflexionen und Raum, um wieder klar zu denken.',
            'experience.card6.title': 'Echte Verbindung',
            'experience.card6.text': 'Eine kleine Gruppe, ehrliche Gespr\u00E4che und gemeinsame Erlebnisse.',

            // ── Image Break ──
            'imagebreak.text': 'Tritt ein in Ruhe, Klarheit und Verbindung.',

            // ── Founders Preview (index.html) ──
            'founders.label': '\u00DCBER UNS',
            'founders.title': 'Zwei Freundinnen. Eine gemeinsame Realit\u00E4t.',
            'founders.text': 'Wir sind seit \u00FCber 15 Jahren beste Freundinnen \u2013 obwohl wir selten am selben Ort gelebt haben. Was uns verbindet, ist ein gemeinsamer Lebensstil: schnelle Karrieren, hohe Erwartungen und das st\u00E4ndige Gef\u00FChl, performen zu m\u00FCssen.',
            'founders.cta': 'Unsere Geschichte lesen',

            // ── Retreat Card (index.html) ──
            'retreat.label': 'N\u00C4CHSTES RETREAT',
            'retreat.title': 'Montafon Retreat',
            'retreat.date': '29. \u2013 31. Mai 2026',
            'retreat.tags': 'Bewegung \u00B7 Ern\u00E4hrung \u00B7 Verbindung',
            'retreat.cta': 'Retreat ansehen',

            // ── CTA Section ──
            'cta.title': 'Bleib dran.',
            'cta.subtitle': 'Unser Montafon Retreat ist ausgebucht! Weitere Retreats sind in Planung - melde dich an und erfahre es als Erste.',
            'cta.name_placeholder': 'Dein Name',
            'cta.email_placeholder': 'Deine E-Mail',
            'cta.submit': 'Auf die Warteliste',
            'cta.note': 'Du erh\u00E4ltst alle Details per E-Mail.',
            'cta.success': 'Du bist dabei! Wir melden uns bald bei dir.',
            'cta.consent': 'Ich stimme der Verarbeitung meiner Daten gem\u00E4\u00DF der <a href="datenschutz.html" target="_blank" rel="noopener">Datenschutzerkl\u00E4rung</a> zu.',

            // ── Instagram ──
            'instagram.label': 'INSTAGRAM',
            'instagram.title': 'Folge uns auf Instagram und entdecke das Retreat.',
            'instagram.handle': '@theglowbesties',
            'instagram.cta': 'Zu Instagram',

            // ── Footer ──
            'footer.logo': 'Glow Besties Retreats',
            'footer.tagline': 'move \u00B7 nourish \u00B7 connect',
            'footer.retreats': 'Retreats',
            'footer.about': '\u00DCber uns',
            'footer.instagram': 'Instagram',
            'footer.impressum': 'Impressum',
            'footer.datenschutz': 'Datenschutz',
            'footer.copy': '\u00A9 2026 Glow Besties Retreats',

            // ── About Page ──
            'about.label': '\u00DCBER UNS',
            'about.title': 'Zwei Freundinnen. Eine gemeinsame Realit\u00E4t.',
            'about.p1': 'Wir sind seit \u00FCber 15 Jahren beste Freundinnen \u2013 obwohl wir selten am selben Ort gelebt haben.',
            'about.p2': 'Was uns verbindet, ist ein gemeinsamer Lebensstil: schnelle Karrieren, hohe Erwartungen und das st\u00E4ndige Gef\u00FChl, performen zu m\u00FCssen.',
            'about.p3': 'Wir arbeiten beide in der Beratung, wir pushen uns beide \u2013 im Job, im Sport, im Alltag. Und wir wissen beide, wie schwer es ist, wirklich runterzufahren.',
            'about.p4': 'Glow Besties ist entstanden, um beides zusammenzubringen: Leistung und Erholung.',

            // ── About: Eli ──
            'about.eli.name': 'Eli',
            'about.eli.p1': 'Ich war schon immer ein Mensch, der Abwechslung braucht. Beim Sport, im Leben, bei allem. F\u00FCr mich ging es nie nur ums K\u00F6rperliche. Bewegung ist mein Weg zu mentaler Balance und dazu, wirklich aufzutanken.',
            'about.eli.p2': 'Abgesehen davon ist mir echte, menschliche Verbindung am wichtigsten. Ich arbeite in einer schnelllebigen Welt, in der so viel \u00FCber Bildschirme passiert. Das macht echte Zeit mit echten Menschen zum Wertvollsten, was es gibt.',
            'about.eli.p3': 'Genau daf\u00FCr haben wir Glow Besties gegr\u00FCndet.',

            // ── About: Leonie ──
            'about.leonie.name': 'Leonie',
            'about.leonie.p1': 'Mich hat Leistung schon immer angetrieben \u2013 in meiner Karriere und im Sport.',
            'about.leonie.p2': 'Gleichzeitig lebe ich mit Z\u00F6liakie. Lange hat das meinen Alltag kompliziert gemacht, besonders im sozialen Bereich.',
            'about.leonie.p3': 'Heute habe ich einen Weg gefunden, Struktur, Gesundheit und Leichtigkeit wieder zu vereinen.',
            'about.leonie.p4': 'Deshalb sind alle unsere Retreats komplett glutenfrei \u2013 ohne Verzicht, aber mit Qualit\u00E4t, Balance und Genuss. Weil sich gut f\u00FChlen niemals nach Einschr\u00E4nkung anfühlen sollte.',

            // ── About: CTA ──
            'about.cta.title': 'Willst du dabei sein?',
            'about.cta.button': 'Zur Warteliste',

            // ── Retreats Page: Hero ──
            'retreat.hero.label': 'RETREATS',
            'retreat.hero.title': 'Montafon Retreat',
            'retreat.hero.subtitle': '29. \u2013 31. Mai 2026',

            // ── Retreats Page: Intro ──
            'retreat.intro.p1': 'Drei Tage in den \u00F6sterreichischen Alpen \u2013 um runterzufahren, deinen K\u00F6rper zu bewegen und wieder zu dir selbst zu finden.',
            'retreat.intro.p2': 'Dieses Retreat kombiniert bewusste Bewegung, Nervensystem-Erholung und n\u00E4hrende glutenfreie Mahlzeiten in einer kleinen, intimen Frauengruppe. Kein starrer Zeitplan, kein Druck \u2013 nur Raum, um dich wieder wie du selbst zu f\u00FChlen.',
            'retreat.intro.tags': 'Bewegung \u00B7 Ern\u00E4hrung \u00B7 Verbindung',

            // ── Retreats Page: Location ──
            'retreat.location.label': 'DER ORT',
            'retreat.location.title': 'Tanafreida. \u00DCber dem Montafon.',
            'retreat.location.desc': 'Ein Bergrefugium auf \u00FCber 1.000 m, umgeben von Natur, frischer Bergluft und Stille. Acht individuell gestaltete Apartments, 40.000 m\u00B2 Wiesen und Wald, und ein Ausblick, der alles andere vergessen l\u00E4sst.',
            'retreat.location.cta': 'Mehr \u00FCber Tanafreida',

            // ── Retreats Page: Schedule ──
            'retreat.schedule.label': 'DER ABLAUF',
            'retreat.schedule.title': 'Dein Wochenende',

            // Friday
            'retreat.schedule.friday.title': 'Freitag \u2013 Ankommen & Runterkommen',
            'retreat.schedule.friday.t1.time': 'Ab 15:00',
            'retreat.schedule.friday.t1.name': 'Entspanntes Ankommen',
            'retreat.schedule.friday.t1.desc': 'Protein-Drink & Matcha',
            'retreat.schedule.friday.t2.time': '17:30',
            'retreat.schedule.friday.t2.tag': 'Move',
            'retreat.schedule.friday.t2.name': 'In deinem K\u00F6rper ankommen',
            'retreat.schedule.friday.t2.desc': 'Sanftes Yoga',
            'retreat.schedule.friday.t3.time': '18:15',
            'retreat.schedule.friday.t3.name': 'Angeleitetes Journaling',
            'retreat.schedule.friday.t4.time': '19:00',
            'retreat.schedule.friday.t4.tag': 'Nourish',
            'retreat.schedule.friday.t4.name': 'Willkommens-Dinner',
            'retreat.schedule.friday.t4.desc': 'Gemeinsam kochen & genie\u00DFen',
            'retreat.schedule.friday.t5.time': '20:30',
            'retreat.schedule.friday.t5.name': 'Gef\u00FChrte Meditation',

            // Saturday
            'retreat.schedule.saturday.title': 'Samstag \u2013 Entdecken & Verbinden',
            'retreat.schedule.saturday.t1.time': '07:30',
            'retreat.schedule.saturday.t1.tag': 'Move',
            'retreat.schedule.saturday.t1.name': 'Morning Mobility & Gua-Sha-Routine',
            'retreat.schedule.saturday.t2.time': '09:00',
            'retreat.schedule.saturday.t2.tag': 'Nourish',
            'retreat.schedule.saturday.t2.name': 'Gemeinsames Fr\u00FChst\u00FCck',
            'retreat.schedule.saturday.t3.time': '10:00',
            'retreat.schedule.saturday.t3.tag': 'Move',
            'retreat.schedule.saturday.t3.name': 'Bergwanderung',
            'retreat.schedule.saturday.t4.time': '12:30',
            'retreat.schedule.saturday.t4.tag': 'Nourish',
            'retreat.schedule.saturday.t4.name': 'Bergpicknick',
            'retreat.schedule.saturday.t4.desc': 'Mittagessen mit Aussicht',
            'retreat.schedule.saturday.t5.time': '14:30',
            'retreat.schedule.saturday.t5.name': 'Freie Zeit',
            'retreat.schedule.saturday.t5.desc': 'Sauna, Spaziergang oder einfach quatschen',
            'retreat.schedule.saturday.t6.time': '19:00',
            'retreat.schedule.saturday.t6.tag': 'Nourish',
            'retreat.schedule.saturday.t6.name': 'Gemeinsames Abendessen',
            'retreat.schedule.saturday.t7.time': '20:30',
            'retreat.schedule.saturday.t7.tag': 'Move',
            'retreat.schedule.saturday.t7.name': 'Breathwork-Session',
            'retreat.schedule.saturday.t8.time': '21:30',
            'retreat.schedule.saturday.t8.tag': 'Connect',
            'retreat.schedule.saturday.t8.name': 'M\u00E4delsabend',
            'retreat.schedule.saturday.t8.desc': 'Spiele, gute Gespr\u00E4che & ein Glas Wein',

            // Sunday
            'retreat.schedule.sunday.title': 'Sonntag \u2013 Reflektieren & Auftanken',
            'retreat.schedule.sunday.t1.time': '08:00',
            'retreat.schedule.sunday.t1.tag': 'Move',
            'retreat.schedule.sunday.t1.name': 'Pilates oder Morning Run',
            'retreat.schedule.sunday.t1.desc': 'Du entscheidest',
            'retreat.schedule.sunday.t2.time': '09:00',
            'retreat.schedule.sunday.t2.tag': 'Nourish',
            'retreat.schedule.sunday.t2.name': 'Gemeinsames Fr\u00FChst\u00FCck',
            'retreat.schedule.sunday.t3.time': '10:30',
            'retreat.schedule.sunday.t3.name': 'Longevity-Talk',
            'retreat.schedule.sunday.t3.desc': 'Gastsprecher:in',
            'retreat.schedule.sunday.t4.time': '11:30',
            'retreat.schedule.sunday.t4.name': 'Abschluss-Journaling',
            'retreat.schedule.sunday.t5.time': '12:30',
            'retreat.schedule.sunday.t5.tag': 'Nourish',
            'retreat.schedule.sunday.t5.name': 'Gemeinsames Mittagessen & Checkout',

            'retreat.schedule.note': 'Der Ablauf kann sich je nach Wetter und Gruppe anpassen. Flexibilit\u00E4t geh\u00F6rt dazu.'
        }
    };

    // ── Store original English text ──
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        el.setAttribute('data-i18n-original', el.textContent);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
        el.setAttribute('data-i18n-original-html', el.innerHTML);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
        el.setAttribute('data-i18n-original-placeholder', el.placeholder);
    });

    // ── Set language ──
    function setLanguage(lang) {
        // Update <html lang="">
        document.documentElement.lang = lang;

        // Swap text content
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            var key = el.getAttribute('data-i18n');
            if (lang === 'de' && translations.de[key]) {
                el.textContent = translations.de[key];
            } else {
                el.textContent = el.getAttribute('data-i18n-original');
            }
        });

        // Swap HTML content (for elements with links)
        document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
            var key = el.getAttribute('data-i18n-html');
            if (lang === 'de' && translations.de[key]) {
                el.innerHTML = translations.de[key];
            } else {
                el.innerHTML = el.getAttribute('data-i18n-original-html');
            }
        });

        // Handle placeholders on inputs
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
            var key = el.getAttribute('data-i18n-placeholder');
            if (lang === 'de' && translations.de[key]) {
                el.placeholder = translations.de[key];
            } else {
                el.placeholder = el.getAttribute('data-i18n-original-placeholder');
            }
        });

        // Update toggle button text
        var toggleBtn = document.querySelector('.nav-lang');
        if (toggleBtn) {
            toggleBtn.textContent = lang === 'de' ? 'EN' : 'DE';
        }

        // Save preference
        localStorage.setItem('lang', lang);
    }

    // ── Toggle button handler ──
    var langBtn = document.querySelector('.nav-lang');
    if (langBtn) {
        langBtn.addEventListener('click', function() {
            var current = localStorage.getItem('lang') || 'en';
            setLanguage(current === 'en' ? 'de' : 'en');
        });
    }

    // ── On page load: apply saved preference ──
    var saved = localStorage.getItem('lang');
    if (saved === 'de') {
        setLanguage('de');
    }

})();
