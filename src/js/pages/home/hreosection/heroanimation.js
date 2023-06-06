import { ScrollTrigger, gsap } from 'gsap/all';
export default class HeroAnimation {
    constructor() {
        this.render();
        // this.mainTitleAnimation();
    }

    render() {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.about-section',
                start: `top 100%`,
                end: `top 20%`,
                scrub: 1,
            },
        });

        tl.to(
            '.hero-img',
            {
                height: '90vh',
                rotation: 0.01,
            },
            '<'
        );
        tl.to(
            '.home-arrow',
            {
                y: '-200',
                rotation: 0.01,
            },
            '<'
        );
        tl.to(
            '.h-anime',
            {
                y: '-100',
                rotation: 0.01,
                stagger: 0.2,
            },
            '<'
        );
    }

    mainTitleAnimation() {
        const titles = gsap.utils.toArray('.hero-section p');
        const tl = gsap.timeline({ defaults: { duration: 0.3 } });
        titles.forEach((title) => {
            let splitText = new SplitType(title, {
                types: 'workds characters',
            });
            // tl.to(
            //     '.hero-section',
            //     {
            //         y: 0,
            //     },
            //     '<4'
            // );
            tl.from(
                splitText.chars,
                {
                    opacity: 0,
                    rotateX: -90,
                    y: 30,
                    stagger: 0.025,
                },
                '<'
            );
            tl.to(
                splitText.chars,
                {
                    opacity: 0,
                    rotateX: 90,
                    y: -30,
                    stagger: 0.025,
                },
                '<1'
            );
        });
        tl.to('.main-title', { lineHeight: 1 }, '<');
        tl.to(
            '.hero-section p .char',
            {
                opacity: 1,
                rotateX: 0,
                y: 0,
                stagger: 0.01,
            },
            '<'
        );
        tl.fromTo(
            '.digital-ball',
            {
                scale: 0.2,
                opacity: 0,
            },
            {
                opacity: 1,
                scale: 1,
            },
            '<.2'
        );
        tl.from(
            '.logo',
            {
                scale: 0.5,
                opacity: 0,
            },
            '<.1'
        );
        if (window.innerWidth < 1023) {
            tl.from(
                '.menu',
                {
                    x: `-100%`,
                    scale: 0.5,
                    opacity: 0,
                },
                '<'
            );
        } else {
            tl.from(
                '.menu-list',
                {
                    scale: 0.5,
                    opacity: 0,
                    x: `-100%`,
                    stagger: 0.1,
                },
                '<'
            );
        }
        tl.from('.hero-text', { bottom: `19%` }, '<');
        tl.to(
            '.home-arrow path',
            {
                strokeDashoffset: 0,
                opacity: 1,
                ease: 'power4.inout',
            },
            '<.2'
        );
    }
}
