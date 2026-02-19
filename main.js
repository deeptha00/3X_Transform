document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');

    document.addEventListener('mousemove', (e) => {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';

        setTimeout(() => {
            outline.style.left = e.clientX - 15 + 'px';
            outline.style.top = e.clientY - 15 + 'px';
        }, 50);

        // Hero Image Parallax
        const heroImg = document.querySelector('.hero-visual img');
        if (heroImg) {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            heroImg.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
        }
    });


    // Mobile Menu Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Navbar Scroll Transition
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Reveal
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // 1. Populate RESULTS (from my_images)
    const resultImages = [
        'my_images/WhatsApp Image 2026-02-19 at 10.15.41 PM (1).jpeg',
        'my_images/WhatsApp Image 2026-02-19 at 10.15.41 PM (2).jpeg',
        'my_images/WhatsApp Image 2026-02-19 at 10.15.41 PM (3).jpeg',
        'my_images/WhatsApp Image 2026-02-19 at 10.15.41 PM (4).jpeg',
        'my_images/WhatsApp Image 2026-02-19 at 10.15.41 PM.jpeg',
        'my_images/WhatsApp Image 2026-02-19 at 10.34.51 PM.jpeg',
        'my_images/WhatsApp Image 2026-02-19 at 10.34.52 PM (1).jpeg',
        'my_images/WhatsApp Image 2026-02-19 at 10.34.52 PM (2).jpeg',
        'my_images/WhatsApp Image 2026-02-19 at 10.34.52 PM.jpeg',
        'my_images/WhatsApp Image 2026-02-19 at 10.34.53 PM (1).jpeg',
        'my_images/WhatsApp Image 2026-02-19 at 10.34.53 PM.jpeg'
    ];

    const resultsGrid = document.getElementById('main-gallery');
    resultImages.forEach((src, index) => {
        const item = document.createElement('div');
        item.className = 'grid-item reveal';
        item.innerHTML = `
            <img src="${src}" alt="Transformation Result ${index + 1}">
            <div class="item-overlay">
                <span style="color: var(--primary-gold); font-size: 0.7rem; letter-spacing: 2px;">TRANSFORMATION</span>
                <h3 style="font-size: 1.2rem; margin-top: 5px;">RESULT 0${index + 1}</h3>
            </div>
        `;
        resultsGrid.appendChild(item);
        revealObserver.observe(item);
    });

    // 2. Populate ACHIEVEMENTS (from images folder)
    const achievementImages = [
        'Images/WhatsApp Image 2026-02-10 at 7.26.06 PM (1).jpeg',
        'Images/WhatsApp Image 2026-02-10 at 7.26.06 PM (2).jpeg',
        'Images/WhatsApp Image 2026-02-10 at 7.26.06 PM (3).jpeg',
        'Images/WhatsApp Image 2026-02-10 at 7.26.06 PM.jpeg',
        'Images/WhatsApp Image 2026-02-10 at 7.30.42 PM.jpeg'
    ];

    const achievementGrid = document.getElementById('achievements-gallery');
    achievementImages.forEach((src, index) => {
        const item = document.createElement('div');
        item.className = 'grid-item reveal';
        item.innerHTML = `
            <img src="${src}" alt="Achievement ${index + 1}">
            <div class="item-overlay">
                <span style="color: var(--primary-gold); font-size: 0.7rem; letter-spacing: 2px;">ACHIEVEMENT</span>
                <h3 style="font-size: 1.2rem; margin-top: 5px;">MILESTONE 0${index + 1}</h3>
            </div>
        `;
        achievementGrid.appendChild(item);
        revealObserver.observe(item);
    });

    // 3. Populate CERTIFICATES (from certificates folder)
    const certificateImages = [
        'Certificates/WhatsApp Image 2026-02-10 at 7.26.06 PM (1).jpeg',
        'Certificates/WhatsApp Image 2026-02-10 at 7.26.06 PM (2).jpeg',
        'Certificates/WhatsApp Image 2026-02-10 at 7.26.06 PM.jpeg',
        'Certificates/WhatsApp Image 2026-02-10 at 7.30.35 PM.jpeg',
        'Certificates/WhatsApp Image 2026-02-10 at 7.30.36 PM.jpeg',
        'Certificates/WhatsApp Image 2026-02-10 at 7.30.37 PM.jpeg',
        'Certificates/WhatsApp Image 2026-02-10 at 7.30.38 PM.jpeg',
        'Certificates/WhatsApp Image 2026-02-10 at 7.30.39 PM.jpeg',
        'Certificates/WhatsApp Image 2026-02-10 at 7.30.40 PM.jpeg'
    ];

    const certSlider = document.getElementById('cert-slider');
    certificateImages.forEach((src, index) => {
        const card = document.createElement('div');
        card.className = 'slider-card reveal';
        card.innerHTML = `
            <div class="card-img-wrap">
                <img src="${src}" alt="Professional Certification ${index + 1}">
            </div>
            <div style="padding: 10px;">
                <span style="color: var(--primary-gold); font-size: 0.6rem; letter-spacing: 2px; text-transform: uppercase;">Validated Credential</span>
                <h4 style="font-size: 0.9rem; margin-top: 5px; font-family: 'Syncopate';">ACCREDITATION 0${index + 1}</h4>
            </div>
        `;
        certSlider.appendChild(card);
        revealObserver.observe(card);
    });

    // WhatsApp Enquiry Integration
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = contactForm.querySelector('input[placeholder="FULL NAME"]').value;
            const email = contactForm.querySelector('input[placeholder="EMAIL@EXAMPLE.COM"]').value;
            const goals = contactForm.querySelector('textarea[placeholder="DESCRIBE YOUR VISION..."]').value;

            const message = `Hello Dipin! I'm interested in 3X TRANSFORM.%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Goal:* ${goals}`;
            const whatsappUrl = `https://wa.me/917012272360?text=${message}`;

            window.open(whatsappUrl, '_blank');
        });
    }

    // Smooth Scroll
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
});
