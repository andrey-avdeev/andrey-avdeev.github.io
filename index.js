/**
 * ==============================================================================
 * 1. GLOBAL STATE & DATA STORAGE
 * ==============================================================================
 */
const siteData = {
    // Контакты для шапки сайта
    topContacts: [
        { url: "https://t.me/avdeev_andrew", icon: "fab fa-telegram", title: "Telegram" },
        { url: "mailto:seorazer@gmail.com", icon: "fas fa-envelope", title: "Email" }
    ],
    bio: {
        short: "I enjoy making complex AI based systems and dub techno.",
        timeline: [
            { year: "2025", text: "Head of ML, Aeroflot" },
            { year: "2023", text: "Head of Billing, VK Cloud" },
            { year: "2021", text: "TeamLead, Checklens" },
            { year: "2019", text: "ML Engineer, X5 Retail Group" },
            { year: "2018", text: "ML Engineer, Papajobs startup" },
            { year: "2016", text: "Software engineer, KPMG" },
            { year: "2015", text: "Master's degree in System Analysis and Management, MIPT(Moscow)" }
        ]
    },
    music: [
        {
            bandcampEmbed: `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=3033949546/size=large/bgcol=333333/linkcol=ffffff/minimal=true/track=2542345076/transparent=true/" seamless><a href="https://obsqurionrecords.bandcamp.com/album/va-experimental">VA experiMental by Andrew Veed</a></iframe>`,
            links: [
                { url: "https://music.apple.com/us/song/another-flight/1847894301", icon: "fab fa-apple", title: "Apple Music" },
                { url: "https://open.spotify.com/track/0BDCMbdaeWtfYkMmXAon23?si=490e318e7bcc43da", icon: "fab fa-spotify", title: "Spotify" },
                { url: "https://www.beatport.com/track/another-flight/22317523", icon: "fab fa-compact-disc", title: "Beatport" },
                // { url: "#", icon: "fab fa-youtube", title: "YouTube" },
                { url: "https://music.yandex.com/album/38787746/track/144293117", icon: "fas fa-music", title: "Yandex Music" }
            ]
        },
        {
            bandcampEmbed: `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=2055238039/size=large/bgcol=333333/linkcol=e99708/minimal=true/track=2335450668/transparent=true/" seamless><a href="https://ubertrend.bandcamp.com/album/va-dub-techno-v-12">VA Dub Techno v.12 by Ubertrend Records</a></iframe>`,
            links: [
                { url: "https://music.apple.com/us/song/soulplexity/1828013614", icon: "fab fa-apple", title: "Apple Music" },
                { url: "https://open.spotify.com/track/4l9xakMxUlVV7kxVPODbj1?si=bdb5b812f3ea470c", icon: "fab fa-spotify", title: "Spotify" },
                { url: "https://www.beatport.com/track/soulplexity/20790993", icon: "fab fa-compact-disc", title: "Beatport" },
                // { url: "#", icon: "fab fa-youtube", title: "YouTube" },
                { url: "https://music.yandex.com/album/37504715/track/141202845", icon: "fas fa-music", title: "Yandex Music" }
            ]
        },
        {
            bandcampEmbed: `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=3893362553/size=large/bgcol=333333/linkcol=e99708/minimal=true/transparent=true/" seamless><a href="https://ubertrend.bandcamp.com/album/fungiverse">Fungiverse by ANDREW VEED</a></iframe>`,
            links: [
                { url: "https://music.apple.com/nl/album/fungiverse/1802747591", icon: "fab fa-apple", title: "Apple Music" },
                { url: "https://open.spotify.com/album/6d10Ue3Q2Azsyug0p0FRj0?si=4jkfl3uWT2KPhDBiy2xbmQ", icon: "fab fa-spotify", title: "Spotify" },
                { url: "https://www.beatport.com/release/fungiverse/4995255", icon: "fab fa-compact-disc", title: "Beatport" },
                { url: "https://www.youtube.com/watch?v=rfVEl8Lk5gE&list=OLAK5uy_lNYyP1osi2VsGQaTPc3Egz9_X0ovz0kRc", icon: "fab fa-youtube", title: "YouTube" },
                { url: "https://music.yandex.com/album/35997514", icon: "fas fa-music", title: "Yandex Music" }
            ]
        },
        {
            bandcampEmbed: `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=1718163823/size=large/bgcol=333333/linkcol=e99708/minimal=true/track=352035821/transparent=true/" seamless><a href="https://ubertrend.bandcamp.com/album/va-dub-techno-v-11">VA Dub Techno v.11 by Ubertrend Records</a></iframe>`,
            links: [
                { url: "https://music.apple.com/us/song/grounded/1791182467", icon: "fab fa-apple", title: "Apple Music" },
                { url: "https://open.spotify.com/track/545gJztpyXU8055V6on767?si=6034875f4fa54787", icon: "fab fa-spotify", title: "Spotify" },
                { url: "https://www.beatport.com/track/grounded/20016898", icon: "fab fa-compact-disc", title: "Beatport" },
                // { url: "#", icon: "fab fa-youtube", title: "YouTube" },
                { url: "https://music.yandex.com/album/35636052/track/136666860", icon: "fas fa-music", title: "Yandex Music" }
            ]
        },
        {
            bandcampEmbed: `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=3456547454/size=large/bgcol=333333/linkcol=e99708/minimal=true/track=261156476/transparent=true/" seamless><a href="https://ubertrend.bandcamp.com/album/va-dub-techno-v-x">VA DUB TECHNO v.X by Ubertrend Records</a></iframe>`,
            links: [
                // { url: "#", icon: "fab fa-apple", title: "Apple Music" },
                { url: "https://open.spotify.com/track/4LQiB5fu6tDyC0JPjCYx1L?si=6b82167bd3304bd1", icon: "fab fa-spotify", title: "Spotify" },
                { url: "https://www.beatport.com/track/warped-crossroads/19367275", icon: "fab fa-compact-disc", title: "Beatport" },
                // { url: "#", icon: "fab fa-youtube", title: "YouTube" },
                { url: "https://music.yandex.com/album/40506197/track/136241028", icon: "fas fa-music", title: "Yandex Music" }
            ]
        },
        {
            bandcampEmbed: `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=1636462323/size=large/bgcol=333333/linkcol=e99708/minimal=true/transparent=true/" seamless><a href="https://ubertrend.bandcamp.com/album/scorched-midnight">Scorched Midnight by Andrew Veed</a></iframe>`,
            links: [
                { url: "https://music.apple.com/nl/album/scorched-midnight/1761423472", icon: "fab fa-apple", title: "Apple Music" },
                { url: "https://open.spotify.com/album/5HaF0UhlpE59KoKeE9nuot?si=fiDkOfgQRx631m_X6QgwQA", icon: "fab fa-spotify", title: "Spotify" },
                { url: "https://www.beatport.com/release/scorched-midnight/4682868", icon: "fab fa-compact-disc", title: "Beatport" },
                { url: "https://www.youtube.com/watch?v=alkqLf0OpZ8&list=OLAK5uy_kIKzo_Et0xb8pnYbcLEnREZtbFcdLACuU", icon: "fab fa-youtube", title: "YouTube" },
                { url: "https://music.yandex.com/album/40506195", icon: "fas fa-music", title: "Yandex Music" }
            ]
        },
        {
            bandcampEmbed: `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=1611230279/size=large/bgcol=333333/linkcol=e99708/minimal=true/track=1165644995/transparent=true/" seamless><a href="https://ubertrend.bandcamp.com/album/va-dub-techno-v9">VA DUB TECHNO v9 by Ubertrend Records</a></iframe>`,
            links: [
                { url: "https://music.apple.com/us/song/star-builder/1737224528", icon: "fab fa-apple", title: "Apple Music" },
                { url: "https://open.spotify.com/track/23psKSyXGzY0iPyxXewlo3?si=731521691f3e498a", icon: "fab fa-spotify", title: "Spotify" },
                { url: "https://www.beatport.com/track/star-builder/18839924", icon: "fab fa-compact-disc", title: "Beatport" },
                // { url: "#", icon: "fab fa-youtube", title: "YouTube" },
                { url: "https://music.yandex.com/album/35435642/track/136199470", icon: "fas fa-music", title: "Yandex Music" }
            ]
        },
        {
            bandcampEmbed: `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=1318432700/size=large/bgcol=333333/linkcol=e99708/minimal=true/transparent=true/" seamless><a href="https://ubertrend.bandcamp.com/album/sugar-continuous">Sugar Continuous by ANDREW VEED</a></iframe>`,
            links: [
                { url: "https://music.apple.com/nl/album/sugar-continuous/1734525994", icon: "fab fa-apple", title: "Apple Music" },
                { url: "https://open.spotify.com/album/48WgmoSHMHR4Ff6BF4WUmg?si=YpoNkpgwTTqgYSSl2F3cLQ", icon: "fab fa-spotify", title: "Spotify" },
                { url: "https://www.beatport.com/release/sugar-continuous/4480615", icon: "fab fa-compact-disc", title: "Beatport" },
                { url: "https://www.youtube.com/watch?v=zM72upfREnY&list=OLAK5uy_ky81NHKSQuHUvTPeFdO0Yk9m_TL6wBktk", icon: "fab fa-youtube", title: "YouTube" },
                { url: "https://music.yandex.com/album/35454940", icon: "fas fa-music", title: "Yandex Music" }
            ]
        },
        {
            bandcampEmbed: `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=752235112/size=large/bgcol=333333/linkcol=e99708/minimal=true/track=2594670603/transparent=true/" seamless><a href="https://ubertrend.bandcamp.com/album/va-dub-techno-v8">VA DUB TECHNO v8 by Andrew Veed</a></iframe>`,
            links: [
                { url: "https://music.apple.com/us/song/seal-deal/1728124988", icon: "fab fa-apple", title: "Apple Music" },
                { url: "https://open.spotify.com/track/250nPqIvl80xIITR2Fwx7K?si=f196f1caee6e4ee2", icon: "fab fa-spotify", title: "Spotify" },
                { url: "https://www.beatport.com/track/seal-deal/18624717", icon: "fab fa-compact-disc", title: "Beatport" },
                // { url: "#", icon: "fab fa-youtube", title: "YouTube" },
                { url: "https://music.yandex.com/album/35558804/track/136476314", icon: "fas fa-music", title: "Yandex Music" }
            ]
        },
        {
            bandcampEmbed: `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=26926011/size=large/bgcol=333333/linkcol=e32c14/minimal=true/transparent=true/" seamless><a href="https://retrigg.bandcamp.com/album/xenoqa">XenoQA by ANDREW VEED</a></iframe>`,
            links: [
                { url: "https://music.apple.com/nl/album/xenoqa-single/1710805476", icon: "fab fa-apple", title: "Apple Music" },
                { url: "https://open.spotify.com/album/55nyrkemniQrn1UKRmigOM?si=s9jLL5IxQ6OY290EunvQCw", icon: "fab fa-spotify", title: "Spotify" },
                { url: "https://www.beatport.com/release/xenoqa/4293251", icon: "fab fa-compact-disc", title: "Beatport" },
                { url: "https://www.youtube.com/watch?v=h8LJutYwjMg&list=OLAK5uy_lUUTBFKbrd8jr1Es2s1ciBh1PT5i4E7Po", icon: "fab fa-youtube", title: "YouTube" },
                { url: "https://music.yandex.com/album/35669714", icon: "fas fa-music", title: "Yandex Music" }
            ]
        },
        {
            bandcampEmbed: `<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=2679252989/size=large/bgcol=333333/linkcol=e32c14/minimal=true/transparent=true/" seamless><a href="https://retrigg.bandcamp.com/album/gravity-refraction">Gravity Refraction by ANDREW VEED</a></iframe>`,
            links: [
                { url: "https://music.apple.com/nl/album/gravity-refraction-ep/1672169859", icon: "fab fa-apple", title: "Apple Music" },
                { url: "https://open.spotify.com/album/4PWDKzbXIhuHOmNTyVi9GL?si=RwQ3Bs_RRK67Z47EvnKi9A", icon: "fab fa-spotify", title: "Spotify" },
                { url: "https://www.beatport.com/release/gravity-refraction/4029660", icon: "fab fa-compact-disc", title: "Beatport" },
                { url: "https://www.youtube.com/watch?v=MsVUQEsRmwE&list=OLAK5uy_mh6ht9c7qoHUDpc7fyw9VbwzXhXsQ-ncg", icon: "fab fa-youtube", title: "YouTube" },
                { url: "https://music.yandex.com/album/35885118", icon: "fas fa-music", title: "Yandex Music" }
            ]
        }
    ],
    projects: [
        {
            title: "Decouple",
            link: "https://github.com/andrey-avdeev/decouple",
            icon: "fab fa-github",
            content: "Python mediator library."
        },
        {
            title: "Convolut",
            link: "https://github.com/convolut/convolut",
            icon: "fab fa-github",
            content: "Example of event based architecture for ML training framework instead of callbacks."
        },
        {
            title: "Telemetry",
            link: "https://github.com/andrey-avdeev/telemetry",
            icon: "fab fa-github",
            content: "Example how to organize observability of your code base by Gateway and Factory patterns."
        },
        {
            title: "Blackout Game",
            link: "https://js13kgames.com/games/blackout/index.html",
            icon: "fas fa-globe",
            content: "Arcade jumper. Jump on enemy drones and prevent them from falling on your connected platforms. For Js13kGames[2018]."
        },
        {
            title: "ReGravy Game",
            link: "/games/regravy/index.html",
            icon: "fas fa-globe",
            content: "ReGravy is a space themed arcade where you must escape asteroids and walls of a lunar cave by reversing gravity vector. There is laser gun, of course. For Js13kGames[2015]."
        },
        {
            title: "Snake Game",
            link: "/games/snake/index.html",
            icon: "fas fa-globe",
            content: "Classic snake game with teleports and poison dots. Build for embedding into website awaiters."
        }
    ],
    events: [
        {
            date: "2025-08-29",
            title: "Konklav, DEX",
            location: "Moscow, Russia",
            description: "Techno fest",
            mediaType: "photo",
            mediaSrc: "/photos/2025-08-29_konklav.png"
        },
        {
            date: "2025-03-28",
            title: "SHIFT, ARMA",
            location: "Moscow, Russia",
            description: "Techno fest",
            mediaType: "photo",
            mediaSrc: "/photos/2025-03-28_shift.jpg"
            // mediaType: "video",
            // mediaSrc: "https://www.youtube.com/embed/d"
        }
    ],
    contacts: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/avdeevandrew", icon: "fab fa-linkedin" },
        { name: "Email", url: "mailto:seorazer@gmail.com", icon: "fas fa-envelope" },
        { name: "Telegram", url: "https://t.me/avdeev_andrew", icon: "fab fa-telegram" },
        { name: "GitHub", url: "https://github.com/andrey-avdeev", icon: "fab fa-github" },
        { name: "Kaggle", url: "https://www.kaggle.com/seorazer", icon: "fab fa-kaggle" },
        { name: "Codewars", url: "https://www.codewars.com/users/andrey-avdeev", icon: "fas fa-code" }, // Семантическая иконка кода
        { name: "SoundCloud", url: "https://soundcloud.com/andrey_avdeev/tracks", icon: "fab fa-soundcloud" },
        { name: "Beatport", url: "https://www.beatport.com/artist/andrew-veed/1110831", icon: "fas fa-compact-disc" }, // Семантическая иконка пластинки
        { name: "Bandcamp", url: "https://ubertrend.bandcamp.com/album/fungiverse", icon: "fab fa-bandcamp" },
        { name: "Spotify", url: "https://open.spotify.com/artist/3HY8DBrwe0ByJWEg5lCGy1", icon: "fab fa-spotify" },
        { name: "Apple Music", url: "https://music.apple.com/nl/artist/andrew-veed/1672169860", icon: "fab fa-apple" },
        { name: "YouTube", url: "https://www.youtube.com/channel/UChgyS4CvEorhxaVs7jVamQg/featured", icon: "fab fa-youtube" }
    ]
};

/**
 * ==============================================================================
 * 2. OBJECT-ORIENTED RENDERING IMPLEMENTATION
 * ==============================================================================
 */

class ViewRenderer {
    static renderTopContacts(contacts) {
        return contacts.map(c => `<a href="${c.url}" target="_blank" title="${c.title}"><i class="${c.icon}"></i></a>`).join('');
    }

    static renderBio(bio) {
        return `
            <section id="bio" class="section">
                <h2 class="section-title">Biography</h2>
                <div class="bio-grid">
                    <div class="bio-text">
                        <p>${bio.short}</p>
                    </div>
                    <div class="timeline">
                        ${bio.timeline.map(t => `
                            <div class="timeline-item">
                                <span class="timeline-year">${t.year}</span>
                                <span>${t.text}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    static renderCarousel(id, title, cardsHtml) {
        return `
            <section id="${id}" class="section">
                <h2 class="section-title">${title}</h2>
                <div class="carousel-wrapper">
                    <button class="carousel-btn prev" data-track="${id}-track"><i class="fas fa-chevron-left"></i></button>
                    <div class="carousel-track" id="${id}-track">
                        ${cardsHtml}
                    </div>
                    <button class="carousel-btn next" data-track="${id}-track"><i class="fas fa-chevron-right"></i></button>
                </div>
            </section>
        `;
    }

    static renderMusic(musicList) {
        const cards = musicList.map(album => `
            <div class="album-card">
                ${album.bandcampEmbed}
                <div class="album-links">
                    ${album.links.map(l => `<a href="${l.url}" title="${l.title}" target="_blank"><i class="${l.icon}"></i></a>`).join('')}
                </div>
            </div>
        `).join('');
        return this.renderCarousel('music', 'Music', cards);
    }

    static renderProjects(projectList) {
        // Карточка теперь обернута в <a>, а иконка подтягивается из данных p.icon
        const cards = projectList.map(p => `
            <a href="${p.link}" target="_blank" class="project-card" title="Open Project">
                <div class="project-header">
                    <h3>${p.title}</h3>
                    <i class="${p.icon}"></i>
                </div>
                <div class="project-body">
                    <span>${p.content}</span>
                </div>
            </a>
        `).join('');
        return this.renderCarousel('projects', 'Projects', cards);
    }

    static renderEvents(events) {
        const systemNow = new Date();
        const sorted = [...events].sort((a, b) => new Date(b.date) - new Date(a.date));

        const listHtml = sorted.map(ev => {
            const isPassed = new Date(ev.date) < systemNow;
            const itemClass = isPassed ? 'passed' : '';
            const badge = isPassed ? `<div class="done-badge">done</div>` : '';
            
            const mediaBlock = ev.mediaType === 'video'
                ? `<iframe src="${ev.mediaSrc}" allowfullscreen></iframe>`
                : `<img src="${ev.mediaSrc}" alt="${ev.title}" loading="lazy">`;

            return `
                <div class="event-item ${itemClass}">
                    ${badge}
                    <div class="event-info">
                        <div class="event-date">${ev.date}</div>
                        <h3>${ev.title}</h3>
                        <p><strong>Location:</strong> ${ev.location}</p>
                        <p style="margin-top: 8px;">${ev.description}</p>
                    </div>
                    <div class="event-media">
                        ${mediaBlock}
                    </div>
                </div>
            `;
        }).join('');

        return `
            <section id="events" class="section">
                <h2 class="section-title">Events</h2>
                <div class="event-list">${listHtml}</div>
            </section>
        `;
    }

    static renderContacts(contacts) {
        return `
            <section id="contacts" class="section">
                <h2 class="section-title">Contacts</h2>
                <div class="contacts-grid">
                    ${contacts.map(c => `
                        <a href="${c.url}" class="contact-link" target="_blank" title="${c.name}">
                            <i class="${c.icon}"></i>
                            <span>${c.name}</span>
                        </a>
                    `).join('')}
                </div>
            </section>
        `;
    }
}

class WebsiteApp {
    constructor(data) {
        this.data = data;
        this.appRoot = document.getElementById('app-root');
    }

    init() {
        // Рендер верхних контактов
        document.getElementById('top-contacts').innerHTML = ViewRenderer.renderTopContacts(this.data.topContacts);

        // Рендер основного тела
        this.appRoot.innerHTML = 
            ViewRenderer.renderBio(this.data.bio) +
            ViewRenderer.renderMusic(this.data.music) +
            ViewRenderer.renderProjects(this.data.projects) +
            ViewRenderer.renderEvents(this.data.events) +
            ViewRenderer.renderContacts(this.data.contacts);

        document.getElementById('current-year').textContent = new Date().getFullYear();
        
        this.setupNavigation();
        this.setupCarousels();
        this.setupScrollObservers();
    }

    setupNavigation() {
        const navBtn = document.getElementById('nav-btn');
        const navMenu = document.getElementById('nav-menu');
        
        navBtn.addEventListener('click', () => navMenu.classList.toggle('active'));
        
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 850) navMenu.classList.remove('active');
            });
        });
    }

    setupCarousels() {
        document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
            const track = wrapper.querySelector('.carousel-track');
            const btnPrev = wrapper.querySelector('.prev');
            const btnNext = wrapper.querySelector('.next');
            const scrollStep = 370;

            if(btnNext) {
                btnNext.addEventListener('click', () => {
                    track.scrollBy({ left: scrollStep, behavior: 'smooth' });
                    setTimeout(() => {
                        if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 15) {
                            track.appendChild(track.firstElementChild);
                            track.scrollLeft -= scrollStep;
                        }
                    }, 300);
                });
            }

            if(btnPrev) {
                btnPrev.addEventListener('click', () => {
                    if (track.scrollLeft <= 5) {
                        track.insertBefore(track.lastElementChild, track.firstElementChild);
                        track.scrollLeft += scrollStep;
                    }
                    track.scrollBy({ left: -scrollStep, behavior: 'smooth' });
                });
            }
        });
    }

    // Добавляем IntersectionObserver для подсветки карточек проектов в центре экрана (Desktop & Mobile)
    setupScrollObservers() {
        const projectTracks = document.querySelectorAll('#projects-track');
        
        projectTracks.forEach(track => {
            const observerOptions = {
                root: track, // Наблюдаем относительно самого контейнера скролла
                rootMargin: '0px',
                threshold: 0.7 // Карточка должна быть видна на 70%, чтобы получить фокус
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-focus');
                    } else {
                        entry.target.classList.remove('in-focus');
                    }
                });
            }, observerOptions);

            track.querySelectorAll('.project-card').forEach(card => observer.observe(card));
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new WebsiteApp(siteData);
    app.init();
});
