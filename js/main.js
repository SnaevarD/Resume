// Vue app with vue-i18n for the EN / ÍS language switch
(function () {
    var STORAGE_KEY = 'cv-locale';

    function savedLocale() {
        try {
            var saved = localStorage.getItem(STORAGE_KEY);
            if (saved === 'en' || saved === 'is') return saved;
        } catch (e) { /* storage unavailable */ }
        return 'en';
    }

    var i18n = VueI18n.createI18n({
        legacy: false,
        globalInjection: true,
        locale: savedLocale(),
        fallbackLocale: 'en',
        messages: messages
    });

    var app = Vue.createApp({
        setup: function () {
            var t = i18n.global.t;
            var locale = i18n.global.locale;

            function applyLocale(value) {
                document.documentElement.lang = value;
                document.title = t('meta.title');
                try { localStorage.setItem(STORAGE_KEY, value); } catch (e) { /* storage unavailable */ }
            }

            function setLocale(value) {
                locale.value = value;
            }

            var navItems = [
                { id: 'about', label: 'about.title' },
                { id: 'experience', label: 'sections.workExperience' },
                { id: 'projects', label: 'sections.notableProjects' },
                { id: 'education', label: 'sections.education' }
            ];
            var activeSection = Vue.ref('about');

            // Highlight the nav link for the section currently in view
            function trackActiveSection() {
                var sections = navItems.map(function (item) { return document.getElementById(item.id); });
                function update() {
                    var offset = window.innerHeight * 0.3;
                    var current = navItems[0].id;
                    sections.forEach(function (section, i) {
                        if (section && section.getBoundingClientRect().top <= offset) current = navItems[i].id;
                    });
                    activeSection.value = current;
                }
                window.addEventListener('scroll', update, { passive: true });
                window.addEventListener('resize', update);
                // Wait a frame so v-cloak is gone and the layout is real before measuring
                requestAnimationFrame(update);
            }

            Vue.watch(locale, applyLocale, { immediate: true });
            Vue.onMounted(initInteractions);
            Vue.onMounted(trackActiveSection);

            return { locale: locale, setLocale: setLocale, navItems: navItems, activeSection: activeSection };
        }
    });

    app.use(i18n);
    app.mount('#app');

    function initInteractions() {
        // Nudge skill tooltips sideways so they never run off the screen
        document.querySelectorAll('.skills__Item').forEach(function (item) {
            function fit() {
                var rect = item.getBoundingClientRect();
                var half = parseFloat(getComputedStyle(item, '::after').width) / 2;
                var center = rect.left + rect.width / 2;
                var gap = 8;
                var shift = Math.min(0, window.innerWidth - gap - (center + half)) + Math.max(0, gap - (center - half));
                item.style.setProperty('--tipShift', shift + 'px');
            }
            item.addEventListener('mouseenter', fit);
            item.addEventListener('focus', fit);
        });

        // Smoothly expand/collapse the About me subsections
        var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        document.querySelectorAll('.aboutMe__Details').forEach(function (details) {
            var content = details.querySelector('.aboutMe__Text');
            var heightAnim = null;
            var fadeAnim = null;
            var closing = false;

            details.querySelector('summary').addEventListener('click', function (e) {
                if (reduceMotion.matches) return;
                e.preventDefault();

                var start = details.offsetHeight;
                var opening = !details.open || closing;
                if (heightAnim) heightAnim.cancel();
                if (fadeAnim) fadeAnim.cancel();

                details.open = false;
                var closedHeight = details.offsetHeight;
                details.open = true;
                var openHeight = details.offsetHeight;

                closing = !opening;
                details.style.overflow = 'hidden';
                var timing = { duration: 400, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' };
                heightAnim = details.animate({ height: [start + 'px', (opening ? openHeight : closedHeight) + 'px'] }, timing);
                fadeAnim = content.animate({
                    opacity: opening ? [0, 1] : [1, 0],
                    transform: opening ? ['translateY(-0.6rem)', 'none'] : ['none', 'translateY(-0.6rem)']
                }, Object.assign({ fill: 'both' }, timing));

                heightAnim.onfinish = function () {
                    details.open = opening;
                    details.style.overflow = '';
                    closing = false;
                    heightAnim = null;
                    fadeAnim.cancel();
                    fadeAnim = null;
                };
            });
        });
    }
})();
