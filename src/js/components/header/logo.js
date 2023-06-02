import { gsap } from '/node_modules/gsap/all.js';

export default class LogoObject {
    constructor() {
        this.logoText = document.querySelector('.logo');
        this.logoTextConent = document.querySelector('.logo-text');
        this.logoa = document.querySelector('.logo-mark');

        this.render();
    }
    render() {
        // START : If screen is bigger as 540 px do Revael
        if (window.innerWidth > 540) {
            this.logoText.addEventListener('mouseenter', (_) => {
                gsap.to(this.logoTextConent, 0.5, {
                    x: -80,
                    ease: 'power1.in',
                });
                gsap.to(
                    this.logoa,
                    0.5,
                    {
                        rotate: 360,
                        ease: 'power2.in',
                    },
                    '<'
                );
            });
            this.logoText.addEventListener('mouseleave', (_) => {
                gsap.to(this.logoTextConent, 0.5, {
                    x: 0,
                    ease: 'power1.inout',
                });
                gsap.to(
                    this.logoa,
                    0.5,
                    {
                        rotate: 0,
                        ease: 'power2.in',
                    },
                    '<'
                );
            });
        }
    }
}
