(function() {
    'use strict';

    var translations = {
        de: {
            // ── Navigation ──
            'nav.retreats': 'Retreats',
            'nav.philosophy': 'Philosophie',
            'nav.about': '\u00DCber uns',
            'nav.lang': 'EN',
            'nav.cta': 'Warteliste',

            // ── Hero (index.html) ──
            'hero.title': 'Setze deinen K\u00F6rper zur\u00FCck - ohne dein Leben zu verlassen.',
            'hero.subtitle': 'Strukturierte Retreats f\u00FCr Frauen, die viel leisten und einen Reset brauchen, der wirklich wirkt.',
            'hero.cta': 'Zur Warteliste',
            'hero.trust': 'Erstes Retreat: Montafon, Mai 2026 | Ausgebucht',

            // ── Intro ──
            'intro.label': 'UNSER KONZEPT',
            'intro.p1': 'Glow Besties ist ein Raum f\u00FCr Frauen, die es gewohnt sind, zu performen - im Job, im Sport, im Alltag.',
            'intro.p2': 'Unsere Retreats helfen dir, runterzufahren, dein Nervensystem zu regulieren und wieder in Kontakt mit deinem K\u00F6rper zu kommen - ohne Struktur oder Ehrgeiz zu verlieren.',
            'intro.p3': 'Verankert in Bewegung, Ern\u00E4hrung und echter Erholung konzentrieren wir uns auf das, was dir langfristig wirklich guttut.',

            // ── Retreat Teaser (homepage) ──
            'retreatteaser.label': 'N\u00C4CHSTES RETREAT',
            'retreatteaser.tagline': 'Ein paar Tage zum Resetten, Bewegen und Wiederfinden',
            'retreatteaser.title': 'Montafon Retreat',
            'retreatteaser.date': '29.-31. Mai 2026',
            'retreatteaser.cta': 'Retreat ansehen',

            // ── Philosophy ──
            'philosophy.label': 'UNSERE PHILOSOPHIE',
            'philosophy.title': 'Gemacht f\u00FCrs echte Leben.',
            'philosophy.p1': 'Hier geht es nicht darum, vor deinem Alltag zu fliehen. Sondern darum, dich in deinem Alltag besser zu f\u00FChlen.',
            'philosophy.p2': 'Wir setzen auf Langlebigkeit, Nervensystem-Balance und nachhaltige Routinen - durch Bewegung, Ern\u00E4hrung und bewusste Pausen.',
            'philosophy.p3': 'Weniger Druck. Mehr Klarheit. Ein K\u00F6rper, der sich wirklich gut anf\u00FChlt.',

            // ── For You ──
            'foryou.label': 'F\u00DCR DICH',
            'foryou.title': 'Das ist f\u00FCr dich, wenn\u2026',
            'foryou.item1': 'du immer \u201Ean\u201C bist und es dir schwer f\u00E4llt, abzuschalten',
            'foryou.item2': 'du dich st\u00E4ndig pushst - im Job, beim Training, im Alltag',
            'foryou.item3': 'du dich nicht nur funktionieren, sondern wirklich gut f\u00FChlen willst',
            'foryou.item4': 'dir deine langfristige Gesundheit und Energie wichtig sind',
            'foryou.item5': 'du Bewegung und Herausforderung liebst',
            'foryou.item6': 'du echte Verbindung und einen klaren Kopf suchst',

            // ── Experience (homepage) ──
            'experience.label': 'DAS ERLEBNIS',
            'experience.title': 'Was dich erwartet',
            'experience.card1.title': 'Ruhige Morgen',
            'experience.card1.text': 'Ruhige Routinen, Sonnenlicht und Raum, um sanft in den Tag zu starten.',
            'experience.card2.title': 'Bewusste Bewegung',
            'experience.card2.text': 'Faszien, Mobilit\u00E4t, Pilates, Wandern und leichtes Laufen.',
            'experience.card3.title': 'Nervensystem-Reset',
            'experience.card3.text': 'Breathwork und angeleitete Sessions, um aus dem Stressmodus herauszukommen.',
            'experience.card4.title': 'Ern\u00E4hrung',
            'experience.card4.text': 'Komplett glutenfreie Mahlzeiten mit Fokus auf Balance, Energie und Qualit\u00E4t.',
            'experience.card5.title': 'Reflexion & Klarheit',
            'experience.card5.text': 'Journaling und angeleitete Impulse, um den Kopf frei zu bekommen.',
            'experience.card6.title': 'Echte Verbindung',
            'experience.card6.text': 'Eine kleine Gruppe, ehrliche Gespr\u00E4che und gemeinsame Erfahrung.',

            // ── Experience (retreat pages - more detailed) ──
            'retreat.exp.card1.text': 'Ruhige Routinen, Sonnenlicht und Raum, um sanft in den Tag zu starten. Mit Stretching, frischer Luft und erdenden Ritualen.',
            'retreat.exp.card2.text': 'Faszien, Mobilit\u00E4t, Pilates, Wandern und leichtes Laufen. Bewegung, die gleichzeitig fordert und regeneriert.',
            'retreat.exp.card3.text': 'Breathwork und angeleitete Sessions, um aus dem Stressmodus herauszukommen. Lerne Tools, die du mit nach Hause nehmen kannst.',
            'retreat.exp.card4.text': 'Komplett glutenfreie Mahlzeiten mit Fokus auf Balance, Energie und Qualit\u00E4t. Mit Sorgfalt zubereitet und gemeinsam genossen.',
            'retreat.exp.card5.text': 'Journaling und angeleitete Impulse, um den Kopf frei zu bekommen. Schaffe Raum f\u00FCr die Gedanken, die z\u00E4hlen.',
            'retreat.exp.card6.text': 'Eine kleine Gruppe, ehrliche Gespr\u00E4che und gemeinsame Erfahrung. Kein Smalltalk, nur echte Momente.',

            // ── Founders Preview (index.html) ──
            'founders.label': '\u00DCBER UNS',
            'founders.title': 'Zwei Freundinnen. Gleiches Tempo.',
            'founders.text': 'Wir haben Glow Besties aufgebaut, um Leistung und Erholung zu verbinden - weil wir es selbst gebraucht haben.',
            'founders.cta': '\u00DCber uns',

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
            'about.p1': 'Wir sind seit \u00FCber 15 Jahren beste Freundinnen - obwohl wir selten am selben Ort gelebt haben.',
            'about.p2': 'Was uns verbindet, ist ein gemeinsamer Lebensstil: schnelle Karrieren, hohe Erwartungen und das st\u00E4ndige Gef\u00FChl, performen zu m\u00FCssen.',
            'about.p3': 'Wir arbeiten beide in der Beratung, wir pushen uns beide - im Job, im Sport, im Alltag. Und wir wissen beide, wie schwer es ist, wirklich runterzufahren.',
            'about.p4': 'Glow Besties ist entstanden, um beides zusammenzubringen: Leistung und Erholung.',

            // ── About: Eli ──
            'about.eli.name': 'Eli',
            'about.eli.p1': 'Ich war schon immer ein Mensch, der Abwechslung braucht. Beim Sport, im Leben, bei allem. F\u00FCr mich ging es nie nur ums K\u00F6rperliche. Bewegung ist mein Weg zu mentaler Balance und dazu, wirklich aufzutanken.',
            'about.eli.p2': 'Abgesehen davon ist mir echte, menschliche Verbindung am wichtigsten. Ich arbeite in einer schnelllebigen Welt, in der so viel \u00FCber Bildschirme passiert. Das macht echte Zeit mit echten Menschen zum Wertvollsten, was es gibt.',
            'about.eli.p3': 'Genau daf\u00FCr haben wir Glow Besties gegr\u00FCndet.',

            // ── About: Leonie ──
            'about.leonie.name': 'Leonie',
            'about.leonie.p1': 'Mich hat Leistung schon immer angetrieben - in meiner Karriere und im Sport.',
            'about.leonie.p2': 'Gleichzeitig lebe ich mit Z\u00F6liakie. Lange hat das meinen Alltag kompliziert gemacht, besonders im sozialen Bereich.',
            'about.leonie.p3': 'Heute habe ich einen Weg gefunden, Struktur, Gesundheit und Leichtigkeit wieder zu vereinen.',
            'about.leonie.p4': 'Deshalb sind alle unsere Retreats komplett glutenfrei - ohne Verzicht, aber mit Qualit\u00E4t, Balance und Genuss. Weil sich gut f\u00FChlen niemals nach Einschr\u00E4nkung anf\u00FChlen sollte.',

            // ── About: CTA ──
            'about.cta.title': 'Willst du dabei sein?',
            'about.cta.button': 'Retreat ansehen',

            // ── Retreats Page: Hero ──
            'retreat.hero.label': 'RETREATS',
            'retreat.hero.title': 'Montafon Retreat',
            'retreat.hero.tagline': 'Bewegen. Resetten. Wiederfinden.',
            'retreat.hero.cta': 'Zur Warteliste',

            // ── Retreats Page: Quick Facts ──
            'retreat.facts.location.label': 'Ort',
            'retreat.facts.location.value': 'Tanafreida, Montafon',
            'retreat.facts.duration.label': 'Dauer',
            'retreat.facts.duration.value': '3 Tage / 2 N\u00E4chte',
            'retreat.facts.group.label': 'Gruppengr\u00F6\u00DFe',
            'retreat.facts.group.value': 'Klein & intim',

            // ── Retreats Page: Coming Soon ──
            'retreat.comingsoon': 'Weitere Retreats in Planung - stay tuned',

            // ── Retreats Page: About Summary ──
            'retreat.about.label': '\u00DCBER DIESES RETREAT',
            'retreat.about.text': 'Ein paar Tage, die dir helfen, runterzufahren, deinen K\u00F6rper zu bewegen und wieder zu dir selbst zu finden - ohne deine Struktur oder deinen Ehrgeiz zu verlieren.',
            'retreat.about.cta': 'Mehr Details',

            // ── Retreats Page: Food ──
            'retreat.food.label': 'ERN\u00C4HRUNG',
            'retreat.food.title': 'Komplett glutenfrei, ohne Kompromisse.',
            'retreat.food.desc': 'Alle Mahlzeiten sind komplett glutenfrei - mit Fokus auf Balance, Qualit\u00E4t und Genuss.',

            // ── Retreats Page: Location ──
            'retreat.location.label': 'DER ORT',
            'retreat.location.title': 'Tanafreida. \u00DCber dem Montafon.',
            'retreat.location.desc': 'Ein Bergrefugium auf \u00FCber 1.000 m, umgeben von Natur, frischer Bergluft und Stille. Acht individuell gestaltete Apartments, 40.000 m\u00B2 Wiesen und Wald, und ein Ausblick, der alles andere vergessen l\u00E4sst.',
            'retreat.location.desc.short': 'Ein Bergrefugium auf \u00FCber 1.000 m, umgeben von Natur, Wiesen und Stille.',
            'retreat.location.cta': 'Mehr \u00FCber Tanafreida',

            // ── Retreat Detail Page ──
            'retreatdetail.hero.label': 'MONTAFON RETREAT',
            'retreatdetail.hero.title': 'Ein paar Tage zum Resetten, Bewegen und Wiederfinden',
            'retreatdetail.hero.subtitle': '29.-31. Mai 2026 | Tanafreida, Montafon',
            'retreatdetail.about.p1': 'Ein paar Tage, die dir helfen, runterzufahren, deinen K\u00F6rper zu bewegen und wieder zu dir selbst zu finden - ohne deine Struktur oder deinen Ehrgeiz zu verlieren.',
            'retreatdetail.about.p2': 'Dieses Retreat kombiniert bewusste Bewegung, Nervensystem-Erholung und n\u00E4hrende glutenfreie Mahlzeiten in einer kleinen, intimen Frauengruppe. Kein starrer Zeitplan, kein Druck - nur Raum, um dich wieder wie du selbst zu f\u00FChlen.'
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
