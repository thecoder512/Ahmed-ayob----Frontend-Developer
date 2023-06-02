import { ScrollTrigger, gsap } from '/node_modules/gsap/all.js';

export default class HeroAnimation {
    constructor() {
        this.render();
    }

    render() {
        gsap.registerPlugin(ScrollTrigger);
        let tl = gsap.timeline({
            defaults: {
                scrollTrigger: {
                    tigger: '.about-section',
                    start: 'top 0%',
                    scrub: 1,
                },
                duration: 1,
            },
        });

        tl.to('.hero-text .arrow', 2, {
            y: '-200',
            rotation: 0.01,
        });
        tl.to(
            '.hero-img',
            2,
            {
                height: '90vh',
                rotation: 0.01,
            },
            '<'
        );
        tl.to(
            '.digital-ball',
            2,
            {
                y: '-100',
                rotation: 0.01,
            },
            '<'
        );
        tl.to(
            '.main-title',
            2,
            {
                y: '-100',
                rotation: 0.01,
            },
            '<'
        );
    }
}
