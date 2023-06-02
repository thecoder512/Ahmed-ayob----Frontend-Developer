import { gsap } from '/node_modules/gsap/all.js';

export default class HamburgerObject {
    constructor() {
        this.menu = document.querySelector('.menu-slide');
        this.hamburgerELement = document.querySelector('.hidden-menu');
        this.blurShape = document.querySelector('.blur-shape');
        this.menuButton = document.querySelector('.menu');
        this.hamburger = document.querySelector('.hamb-wrapper');
        this.html = document.querySelector('html');
        this.tl = gsap.timeline({
            defaults: { duration: 1.5, ease: 'elastic.out' },
        });
        this.tlhover = gsap.timeline({
            defaults: { duration: 0.5, ease: 'sine.inout' },
        });

        this.hamburgerPopUp();
        this.menuShow();
    }

    hamburgerPopUp() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                this.hamburger.classList.add('show-hamburger-scroll');
            } else if (window.scrollY < 40) {
                this.hamburger.classList.remove('show-hamburger-scroll');
            }
        });
    }

    menuShow() {
        const tl = gsap.timeline({
            defaults: { duration: 0.6, ease: 'cubic-bezier(.7, 0, .2, 1)' },
        });
        // when nav menu Text element is clicked then show the menu and active the hamburger shape to x
        this.menuButton.addEventListener('click', () => {
            this.hamburger.classList.add('active-hamburger');
            this.menu.classList.add('active');
            this.blurShape.classList.add('active-blur-shape');
            this.html.style.overflow = 'hidden';
            gsap.to('.hamburger-btn .btn-fill', 1, {
                y: '0',
                ease: 'power2.inout',
            });
        });

        this.hamburger.addEventListener('click', (e) => {
            // cheking if the hamburger is clicked and the menu is not shown so show it that will make when you scroll then the dark hamburger appear when click show menu
            if (this.hamburger.classList.contains('active-hamburger')) {
                this.hamburger.classList.remove('active-hamburger');
                this.menu.classList.remove('active');
                this.blurShape.classList.remove('active-blur-shape');
                this.html.style.overflow = 'auto';
            } else {
                this.hamburger.classList.add('active-hamburger');
                this.menu.classList.add('active');
                this.blurShape.classList.add('active-blur-shape');
                this.html.style.overflow = 'hidden';
            }
        });
    }
}
