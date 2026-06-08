(function() {
    'use strict';

    var translations = {
        de: {
            // ── Navigation ──
            'nav.retreats': 'Retreats',
            'nav.philosophy': 'Philosophie',
            'nav.about': '\u00DCber uns',
            'nav.contact': 'Kontakt',
            'nav.journal': 'Journal',
            'nav.experience': 'Erlebnis',
            'nav.lang': 'EN',
            'nav.cta': 'Stay Tuned',

            // ── Hero (index.html) ──
            'hero.title': 'Setze deinen K\u00F6rper zur\u00FCck - ohne dein Leben zu verlassen.',
            'hero.subtitle': 'Strukturierte Retreats f\u00FCr Frauen, die viel leisten und einen Reset brauchen, der wirklich wirkt.',
            'hero.cta': 'Erfahre es als Erste',
            'hero.trust': 'Unser erstes Retreat ist gelaufen. Das n\u00e4chste kommt.',

            // ── Intro ──
            'intro.label': 'UNSER KONZEPT',
            'intro.p1': 'Glow Besties ist ein Raum f\u00FCr Frauen, die es gewohnt sind, zu performen - im Job, im Sport, im Alltag.',
            'intro.p2': 'Unsere Retreats helfen dir, runterzufahren, dein Nervensystem zu regulieren und wieder in Kontakt mit deinem K\u00F6rper zu kommen - ohne Struktur oder Ehrgeiz zu verlieren.',
            'intro.p3': 'Verankert in Bewegung, Ern\u00E4hrung und echter Erholung konzentrieren wir uns auf das, was dir langfristig wirklich guttut.',

            // ── Retreat Teaser (homepage) ──
            'retreatteaser.label': 'N\u00C4CHSTES RETREAT',
            'retreatteaser.tagline': 'Ein paar Tage zum Resetten, Bewegen und Wiederfinden',
            'retreatteaser.title': 'The Alpine Reset',
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
            'cta.title': 'Stay tuned f\u00fcrs n\u00e4chste Retreat.',
            'cta.subtitle': 'Unser erstes Retreat ist gelaufen. Trag dich ein und erfahre als Erste, wenn wir das n\u00e4chste planen.',
            'cta.name_placeholder': 'Dein Name',
            'cta.email_placeholder': 'Deine E-Mail',
            'cta.submit': 'Erfahre es als Erste',
            'cta.note': 'Du erh\u00E4ltst alle Details per E-Mail.',
            'cta.success': 'Du bist dabei! Wir melden uns bald bei dir.',
            'cta.consent': 'Ich stimme der Verarbeitung meiner Daten gem\u00E4\u00DF der <a href="datenschutz.html" target="_blank" rel="noopener">Datenschutzerkl\u00E4rung</a> zu.',

            // ── Instagram ──
            'instagram.label': 'INSTAGRAM',
            'instagram.title': 'Folge uns auf Instagram und entdecke das Retreat.',
            'instagram.handle': '@theglowbesties',
            'instagram.cta': 'Zu Instagram',

            // ── Gluten-Free Promise (index.html) ──
            'glutenfree.label': 'KOMPLETT GLUTENFREI',
            'glutenfree.title': 'Glutenfrei, von Anfang bis Ende.',
            'glutenfree.p1': 'Jede Mahlzeit bei unseren Retreats ist zu 100% glutenfrei. Nicht als Zusatz oder Sonderwunsch, sondern von Grund auf so gedacht.',
            'glutenfree.p2': 'Unsere Mitgr\u00FCnderin Leonie lebt mit Z\u00F6liakie, deshalb haben wir das ganze Erlebnis rund um Essen gebaut, das sicher, n\u00E4hrend und richtig gut ist. Keine Sorge vor Spuren, keine Kompromisse, kein Au\u00DFenvor-Sein.',
            'glutenfree.badge': '100% Glutenfrei',
            'hero.glutenfree': '100% glutenfrei, von Grund auf',

            // ── Footer ──
            'footer.logo': 'Glow Besties Retreats',
            'footer.tagline': 'move \u00B7 nourish \u00B7 connect',
            'footer.retreats': 'Retreats',
            'footer.about': '\u00DCber uns',
            'footer.journal': 'Journal',
            'footer.experience': 'Erlebnis',
            'footer.instagram': 'Instagram',
            'footer.impressum': 'Impressum',
            'footer.datenschutz': 'Datenschutz',
            'footer.copy': '\u00A9 2026 Glow Besties Retreats',

            // ── Contact Page ──
            'contact.label': 'KONTAKT',
            'contact.title': 'Lass uns connecten.',
            'contact.subtitle': 'Wir freuen uns von dir zu h\u00F6ren.',
            'contact.insta.label': 'INSTAGRAM',
            'contact.insta.title': 'Schreib uns auf Instagram',
            'contact.insta.cta': 'Folge uns auf Instagram',
            'contact.cta.title': 'Erfahre es als Erste.',
            'contact.cta.subtitle': 'Melde dich an und erfahre als Erste von unserem n\u00E4chsten Retreat.',

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
            'retreat.hero.title': 'Weitere Retreats sind in Planung',
            'retreat.hero.tagline': 'Bewegen. Resetten. Wiederfinden.',
            'retreat.hero.date': '29. - 31. Mai 2026',
            'retreat.hero.cta': 'Erfahre es als Erste',
            'retreat.past.label': 'UNSER ERSTES RETREAT',
            'retreat.past.title': 'The Alpine Reset',
            'retreat.past.text': 'Unser erstes Retreat ist gelaufen: drei Tage Bewegung, komplett glutenfreie Ern\u00e4hrung und echte Verbindung in den Bergen \u00fcber dem Montafon. Sieh dir an, wie es sich angef\u00fchlt hat.',
            'retreat.past.cta': 'So war es',

            // ── Retreats Page: Quick Facts ──
            'retreat.facts.location.label': 'Ort',
            'retreat.facts.location.value': 'Tanafreida, Montafon',
            'retreat.facts.duration.label': 'Dauer',
            'retreat.facts.duration.value': '3 Tage / 2 N\u00E4chte',
            'retreat.facts.group.label': 'Gruppengr\u00F6\u00DFe',
            'retreat.facts.group.value': 'Klein & intim',
            'retreat.facts.food.label': 'Essen',
            'retreat.facts.food.value': '100% Glutenfrei',

            // ── Retreats Page: Coming Soon ──
            'retreat.comingsoon': 'Weitere Retreats in Planung - stay tuned',
            'retreat.coming.cta': 'Erfahre es als Erste',
            'retreat.coming.label': 'WAS KOMMT',
            'retreat.coming.title': 'Weitere Retreats sind unterwegs.',
            'retreat.coming.text': 'Neue Orte, neue Erlebnisse, gleiche Intention. Trag dich ein und erfahre als Erste, wenn wir unser n\u00e4chstes Retreat ank\u00fcndigen.',

            // ── Retreats Page: About Summary ──
            'retreat.about.label': '\u00DCBER DIESES RETREAT',
            'retreat.about.text': 'Ein paar Tage, die dir helfen, runterzufahren, deinen K\u00F6rper zu bewegen und wieder zu dir selbst zu finden - ohne deine Struktur oder deinen Ehrgeiz zu verlieren.',
            'retreat.about.cta': 'Mehr Details',

            // ── Retreats Page: Food ──
            'retreat.food.label': 'ERN\u00C4HRUNG',
            'retreat.food.title': 'Komplett glutenfrei, ohne Kompromisse.',
            'retreat.food.desc': 'Jede Mahlzeit ist zu 100% glutenfrei. Unsere Mitgr\u00FCnderin Leonie lebt mit Z\u00F6liakie, deshalb ist sicheres, glutenfreies Essen hier kein Zusatz, sondern die Grundlage. Wir passen uns jedem Ern\u00E4hrungsbed\u00FCrfnis an (vegan, vegetarisch, pescetarisch oder omnivor) - ohne Einschr\u00E4nkungen und ohne Kompromisse, nur n\u00E4hrende Mahlzeiten, gemacht f\u00FCr dich.',

            // ── Retreats Page: Location ──
            'retreat.location.label': 'DER ORT',
            'retreat.location.title': 'Tanafreida. \u00DCber dem Montafon.',
            'retreat.location.desc': 'Ein Bergrefugium auf \u00FCber 1.000 m, umgeben von Natur, frischer Bergluft und Stille. Acht individuell gestaltete Apartments, 40.000 m\u00B2 Wiesen und Wald, und ein Ausblick, der alles andere vergessen l\u00E4sst.',
            'retreat.location.desc.short': 'Ein Bergrefugium auf \u00FCber 1.000 m, umgeben von Natur, Wiesen und Stille.',
            'retreat.location.cta': 'Mehr \u00FCber Tanafreida',

            // ── Retreat Detail Page ──
            'retreatdetail.hero.label': 'THE ALPINE RESET',
            'retreatdetail.hero.title': 'Ein paar Tage zum Resetten, Bewegen und Wiederfinden',
            'retreatdetail.hero.subtitle': '29.-31. Mai 2026 | Tanafreida, Montafon',
            'retreatdetail.about.p1': 'Ein paar Tage, die dir helfen, runterzufahren, deinen K\u00F6rper zu bewegen und wieder zu dir selbst zu finden - ohne deine Struktur oder deinen Ehrgeiz zu verlieren.',
            'retreatdetail.about.p2': 'Dieses Retreat kombiniert bewusste Bewegung, Nervensystem-Erholung und n\u00E4hrende glutenfreie Mahlzeiten in einer kleinen, intimen Frauengruppe. Kein starrer Zeitplan, kein Druck - nur Raum, um dich wieder wie du selbst zu f\u00FChlen.',

            // \u2500\u2500 Experience Page \u2500\u2500
            'exp.hero.label': 'DAS ERLEBNIS',
            'exp.hero.title': 'Das erste Alpine Reset',
            'exp.hero.subtitle': 'Drei Tage in den \u00F6sterreichischen Alpen. So hat es sich angef\u00FChlt.',
            'exp.intro.label': 'MAI 2026',
            'exp.intro.p1': 'Zw\u00f6lf Frauen, ein Bergrefugium \u00fcber dem Montafon und drei Tage, die wir bis ins Detail geplant haben. Vom ersten Lavendel-Matcha-Latte bis zur abschlie\u00dfenden Pilates-Einheit war jeder Moment mit Absicht gestaltet, und genauso viel Raum zum Durchatmen dazwischen.',
            'exp.intro.p2': 'Hier ist, wie das Wochenende verlief, und ein Vorgeschmack auf das, was beim n\u00e4chsten Mal auf dich wartet. Alles, von Anfang bis Ende, komplett glutenfrei.',
            'exp.day.label': 'EIN TAG IN DEN ALPEN',
            'exp.day.title': 'Wie das Wochenende verlief',
            'exp.day1.label': 'FREITAG',
            'exp.day1.title': 'Ankommen und Willkommen',
            'exp.day1.text': 'Wir haben alle mit einem Lavendel-Matcha-Latte und hausgemachtem Kefir empfangen, einer kleinen Goodie Bag zum Ankommen und einer Welcome Ceremony mit Leonie, die den Ton f\u00fcr die Tage setzte. Der erste Abend kam bei einem glutenfreien Glow-Bowl-Dinner zusammen und bei genau den Gespr\u00e4chen, die Fremde zu alten Freundinnen machen.',
            'exp.day2.label': 'SAMSTAG',
            'exp.day2.title': 'Bewegen, n\u00e4hren, resetten',
            'exp.day2.text': 'Der Samstag begann mit einer Morning Activation und Gua Sha mit Eli, dann ein langsames, n\u00e4hrendes glutenfreies Fr\u00fchst\u00fcck. Von dort ging es in die Berge zu einer langen Wanderung, mit einer entspannten Pause in der Natur und viel Zeit, die Aussicht aufzunehmen. Am Abend haben wir gemeinsam gegrillt, uns ums Feuer zu einer Meditation unter den Sternen versammelt und den Tag weich ausklingen lassen.',
            'exp.day3.label': 'SONNTAG',
            'exp.day3.title': 'Glow und Abschied',
            'exp.day3.text': 'Der letzte Tag begann geerdet, mit einem Faszien-Stretch mit Leonie und einem entspannten glutenfreien Abschiedsbrunch. Eine Longevity-Speakerin teilte, wie man sich langfristig gut f\u00fchlt, und wir endeten stark mit einer Pilates-Sculpt-Einheit. Bevor alle gingen, versammelten wir uns f\u00fcr das Foto ganz oben auf dieser Seite, leichter, als wir gekommen waren.',
            'exp.fri.a': 'Wir haben alle mit einem Lavendel-Matcha-Latte und hausgemachtem Kefir empfangen, dazu eine kleine Goodie Bag zum Ankommen. Eine Welcome Ceremony mit Leonie setzte den Ton f\u00fcr die kommenden Tage.',
            'exp.fri.b': 'Der erste Abend kam bei einem komplett glutenfreien Glow-Bowl-Dinner zusammen, mit genau den leichten Gespr\u00e4chen, die Fremde bis zur Nacht zu alten Freundinnen machen.',
            'exp.sat.a': 'Der Samstag begann sanft: eine Morning Activation und Gua Sha mit Eli, dann ein langsames, n\u00e4hrendes glutenfreies Fr\u00fchst\u00fcck als Start in den Tag.',
            'exp.sat.b': 'Von dort ging es in die Berge zu einer langen Wanderung, mit einer entspannten Pause in der Natur und viel Zeit, die Aussicht einfach aufzunehmen.',
            'exp.sat.c': 'Am Abend haben wir gemeinsam gegrillt, uns ums Feuer zu einer Meditation unter den Sternen versammelt und den Tag weich in die Nacht \u00fcbergehen lassen.',
            'exp.sun.a': 'Der letzte Tag begann geerdet, mit einem Faszien-Stretch mit Leonie und einem entspannten glutenfreien Abschiedsbrunch.',
            'exp.sun.b': 'Eine Longevity-Speakerin teilte, wie man sich langfristig gut f\u00fchlt, und wir endeten stark mit einer Pilates-Sculpt-Einheit, bevor wir uns verabschiedeten.',
            'exp.ag.f1.label': 'Welcome Drink',
            'exp.ag.f1.text': 'Empfangen wurden wir mit einem Lavendel-Matcha-Latte und Kefir.',
            'exp.ag.f2.label': 'Goodie Bag',
            'exp.ag.f2.text': 'Eine kleine Goodie Bag wartete auf jede von uns.',
            'exp.ag.f3.label': 'Welcome Ceremony',
            'exp.ag.f3.text': 'Eine Welcome Ceremony mit Leonie setzte den Ton f\u00fcr das Wochenende.',
            'exp.ag.f4.label': 'Glow-Bowl-Dinner',
            'exp.ag.f4.text': 'Der erste Abend kam bei einem komplett glutenfreien Glow-Bowl-Dinner zusammen.',
            'exp.ag.s1.label': 'Morning Activation',
            'exp.ag.s1.text': 'Der Samstag begann mit einer Morning Activation, um den K\u00f6rper zu wecken.',
            'exp.ag.s2.label': 'Gua Sha',
            'exp.ag.s2.text': 'Dann Gua Sha mit Eli, langsam und erdend.',
            'exp.ag.s3.label': 'Fr\u00fchst\u00fcck',
            'exp.ag.s3.text': 'Ein n\u00e4hrendes glutenfreies Fr\u00fchst\u00fcck als Start in den Tag.',
            'exp.ag.s4.label': 'Die Wanderung',
            'exp.ag.s4.text': 'Es ging in die Berge zu einer langen Wanderung.',
            'exp.ag.s5.label': 'Pause am Wasserfall',
            'exp.ag.s5.text': 'Eine entspannte Mittagspause an einem Wasserfall auf der Wanderung.',
            'exp.ag.s6.label': 'Sunset-BBQ',
            'exp.ag.s6.text': 'Am Abend haben wir gemeinsam gegrillt, w\u00e4hrend die Sonne unterging.',
            'exp.ag.s7.label': 'Fire Meditation',
            'exp.ag.s7.text': 'Und uns ums Feuer zu einer Meditation unter den Sternen versammelt.',
            'exp.ag.u1.label': 'Faszien-Stretch',
            'exp.ag.u1.text': 'Der letzte Morgen begann geerdet, mit einem Faszien-Stretch mit Leonie.',
            'exp.ag.u2.label': 'Abschiedsbrunch',
            'exp.ag.u2.text': 'Ein entspannter, komplett glutenfreier Abschiedsbrunch zusammen.',
            'exp.ag.u3.label': 'Longevity-Talk',
            'exp.ag.u3.text': 'Eine Longevity-Speakerin dar\u00fcber, wie man sich langfristig gut f\u00fchlt.',
            'exp.ag.u4.label': 'Pilates Sculpt',
            'exp.ag.u4.text': 'Und wir endeten stark mit einer Pilates-Sculpt-Einheit mit Eli.',
            'exp.ag.u5.label': 'Abschied',
            'exp.ag.u5.text': 'Und zum Schluss ein gemeinsames Gruppenfoto. Genau diese Frauen haben das Alpine Reset zu dem gemacht, was es war.',
            'exp.pause.label': 'RAUM ZUM ATMEN',
            'exp.pause.title': 'Zeit, einfach nichts zu tun',
            'exp.pause.text': 'Wir haben viel geplant, und die Pausen gleich mit. Zwischen den Sessions war immer Raum, um in der Wiese zu ruhen, ein bisschen zu schlendern oder einfach mit der Aussicht zu sitzen. Diese ruhigen Momente z\u00e4hlten genauso viel wie alles auf dem Plan.',
            'exp.gallery.label': 'MOMENTE',
            'exp.gallery.title': 'Mehr Momente vom Wochenende',
            'exp.quotes.label': 'IN IHREN WORTEN',
            'exp.quotes.title': 'Was die M\u00E4dels gesagt haben',
            'exp.review.cta': 'Bewertung abgeben',
            'exp.review.label': 'TEILE DEINE ERFAHRUNG',
            'exp.review.title': 'Hinterlasse eine Bewertung',
            'exp.review.intro': 'Warst du bei einem Glow Besties Retreat? Wir w\u00fcrden gern h\u00f6ren, wie es war. Bewertungen werden gepr\u00fcft, bevor sie auf der Seite erscheinen.',
            'exp.review.name': 'Dein Name',
            'exp.review.text': 'Deine Bewertung',
            'exp.review.consent': 'Ich bin einverstanden, dass meine Bewertung und mein Vorname auf dieser Website ver\u00f6ffentlicht werden d\u00fcrfen. Siehe <a href=\"datenschutz.html\" target=\"_blank\" rel=\"noopener\">Datenschutz</a>.',
            'exp.review.submit': 'Bewertung senden',
            'exp.quote1.text': 'Ich kam an, ohne jemanden zu kennen, und ging mit einer Gruppe von Frauen, die ich in meinem Leben behalten m\u00F6chte.',
            'exp.quote1.name': 'Lucy',
            'exp.quote2.text': 'Drei Tage, die meinen Kopf wirklich zur Ruhe gebracht haben. Ich kam leichter nach Hause.',
            'exp.quote2.name': 'Alice',
            'exp.quote3.text': 'Alles war glutenfrei, und ich musste mir kein einziges Mal Sorgen ums Essen machen. Allein das war unbezahlbar.',
            'exp.quote3.name': 'Leonie',
            'exp.closing.title': 'Das Gef\u00FChl, das bleibt',
            'exp.closing.text': 'Bewegung, echte Ern\u00E4hrung und Verbindung, die l\u00E4nger h\u00E4lt als ein Wochenende. Jede Mahlzeit war komplett glutenfrei, jeder Moment daf\u00FCr gemacht, dass du dich wieder wie du selbst f\u00FChlst. Das ist, was wir schaffen, und wir w\u00FCrden uns freuen, wenn du beim n\u00E4chsten Mal dabei bist.',
            'exp.cta.title': 'Sei beim n\u00E4chsten Mal dabei',
            'exp.cta.button': 'Erfahre es als Erste'
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
