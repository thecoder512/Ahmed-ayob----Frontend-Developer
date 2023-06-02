import { gsap, ScrollTrigger } from '/node_modules/gsap/all.js';
class TextAnimations {
    constructor() {
        this.logoText = document.querySelector('.logo');
        this.logoTextConent = document.querySelector('.logo-text');
        this.logoa = document.querySelector('.logo-mark');
        this.gaintText = document.querySelectorAll('.main-title');
        this.aboutButton = document.querySelector('.about-btn');
        this.layout = document.querySelector('.layout');
        this.footerTitle = document.querySelectorAll('.footer-title');

        // this.home();
        this.logoReveal();
        // this.aboutSection();
    }
    home() {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.about-seciton',
                start: 'top bottom',
                end: 'top 60%',
                // markers: true,
                // pin: '.home-section',
                // pinSpacing: false,
                scrub: true,
                // anticipatepin: true,
            },
        });
        tl.to('.arrow', {
            y: -80,
            duration: 1,
            ease: 'none',
        });
        // gsap.to('.home-contianer', {
        //     scrollTrigger: {
        //         trigger: '.about-seciton',
        //         start: 'top bottom%',
        //         end: 'top 30%',
        //         // markers: true,
        //         // pin: '.home-section',
        //         // pinSpacing: false,
        //         scrub: true,
        //         // anticipatepin: true,
        //     },
        //     minHeight: '100vh',
        // });

        let scrollY = window.scrollY,
            currentY;

        window.addEventListener('scroll', (e) => {
            currentY = scrollY;
            scrollY = window.scrollY;
            if (scrollY > currentY) {
                document.documentElement.style.setProperty('--x', '-100%');
            } else {
                document.documentElement.style.setProperty('--x', '100%');
            }
        });
    }
}

export { TextAnimations };
