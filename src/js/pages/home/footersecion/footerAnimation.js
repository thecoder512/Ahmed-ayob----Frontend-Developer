import { ScrollTrigger, gsap } from 'gsap/all';

export default class FooterAnimation {
    constructor() {
        this.triggerElement = document.querySelector('.footer-seciton');
        this.footerRoundedShape = document.querySelector('.footer-shape');
        this.footerBtn = document.querySelector('.footer-btn');

        this.titleAnimation();
        this.render();
    }

    titleAnimation() {
        const titleText = new SplitType('.footer-title', {
            types: 'words, charecters',
        });

        const char = document.querySelectorAll('.footer-title .char');
        char.forEach((char) => {
            char.addEventListener('mouseenter', () => {
                char.classList.add('animate__rubberBand');
            });
        });
        char.forEach((char) => {
            char.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    char.classList.remove('animate__rubberBand');
                }, 700);
            });
        });
    }

    render() {
        gsap.registerPlugin(ScrollTrigger);

        // the rounded shape animation trigger
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: this.triggerElement,
                start: '0% 100%',
                end: '100% 140%',
                scrub: 1,
            },
        });
        tl.to(
            this.footerRoundedShape,
            {
                height: 0,
                rotation: 0.01,
                ease: 'none',
            },
            0
        );
        tl.to(
            '.footer-naviation',
            {
                paddingTop: `7rem`,
                rotation: 0.01,
                ease: 'none',
            },
            0
        );

        // hamburger border animation trigger
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: this.triggerElement,
                start: 'top 20%',
            },
        });
        tl2.to('.hamburger-btn', {
            border: `1px solid rgba(255, 255, 255, 0.2)`,
            rotation: 0.01,
        });

        // footer elements animation fade in trigger
        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: this.triggerElement,
                start: 'top 55%',
                end: '30% 80%',
                toggleActions: 'restart none reverse none',
                // markers: true,
                // scrub: 1,
            },
        });
        tl3.fromTo(
            '.footer-title',
            1,
            {
                y: '100%',
            },
            {
                y: 0,
                ease: 'elastic.out(1, 0.75)',
                rotation: 0.01,
            }
        );
        tl3.fromTo(
            '.footer-img',
            1,
            {
                scale: 0.5,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                ease: 'bounce.inout',
                rotation: 0.01,
            },
            '<'
        );
        tl3.fromTo(
            '.line',
            1,
            {
                width: 0,
            },
            {
                width: `100%`,
                rotation: 0.01,
            },
            '<.1'
        );
        tl3.fromTo(
            this.footerBtn,
            1,
            {
                x: `-65px`,
                scale: 0.8,
                opacity: 0,
            },

            {
                x: 0,
                scale: 1,
                opacity: 1,
                rotation: 0.01,
            },
            '<.3'
        );
        tl3.fromTo(
            '.footer-arrow',
            1,
            {
                x: 60,
                y: -60,
                opacity: 0,
            },
            { x: 0, y: 0, opacity: 1, rotation: 0.01 },
            '<.2'
        );
        tl3.fromTo(
            '.contact-b',
            1,
            {
                y: `-100%`,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                rotation: 0.01,
            },
            '<'
        );
        tl3.fromTo(
            '.footer-col',
            1,
            {
                y: `-100%`,
                opacity: 0,
                stagger: 0.1,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                rotation: 0.01,
            },
            '<'
        );
    }
}
