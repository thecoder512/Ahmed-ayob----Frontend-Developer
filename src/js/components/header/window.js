import { ScrollTrigger, gsap } from 'gsap/all';

export default class WindowObject {
    constructor() {
        this.arrow = document.querySelector('.back-top');
        this.menu = document.querySelector('.menu-slide');
        this.hamburgerELement = document.querySelector('.hidden-menu');
        this.blurShape = document.querySelector('.blur-shape');
        this.menuButton = document.querySelector('.menu');
        this.trigger = document.querySelector('.about-section');
        this.hamburger = document.querySelector('.hamb-wrapper');
        this.html = document.querySelector('html');

        this.render();
        this.menuRmoveONClickOnWindow();
    }

    render() {
        gsap.registerPlugin(ScrollTrigger);

        // arrow up animation
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: this.trigger,
                start: 'top 70%',
                toggleActions: 'restart none none reverse',
            },

            ease: 'power4.in',
        });

        tl.to(this.arrow, 0.3, {
            opacity: 1,
            scale: 1,
        });

        this.arrow.addEventListener('click', () => {
            window.scrollTo(0, 0);
        });
    }

    menuRmoveONClickOnWindow() {
        if (window.innerWidth > 550) {
            window.addEventListener('click', (e) => {
                if (
                    !(
                        e.target.closest('.menu-slide') ||
                        e.target.matches('.menu-slide *') ||
                        e.target.classList.contains('menu') ||
                        e.target.classList.contains('hamburger-btn')
                    )
                ) {
                    this.hamburger.classList.remove('active-hamburger');
                    this.menu.classList.remove('active');
                    this.blurShape.classList.remove('active-blur-shape');
                    this.html.style.overflow = 'auto';
                }
            });
        }
    }
}
