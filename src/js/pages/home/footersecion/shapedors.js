export default class StaggerShape {
    constructor() {
        this.gridContainer = document.querySelector('.grid-container');
        this.numberODotsX = 30;
        this.numberODotsY = 20;

        // this.fillCanvasWithDots();
        // this.render();
    }

    fillCanvasWithDots() {
        // Generate the grid items dynamically
        for (let row = 0; row < this.numberODotsY; row++) {
            for (let col = 0; col < this.numberODotsX; col++) {
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');
                this.gridContainer.appendChild(gridItem);
            }
        }

        this.gridContainer.style.setProperty('--column', this.numberODotsX);
        this.gridContainer.style.setProperty('--row', this.numberODotsY);
    }

    render() {
        let tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
        scale: 1.8,
            tl.fromTo(
                '.grid-item',
                { scale: 0.2 },
                {
                    duration: 2,
                    scale: 1.8,
                    // y: 40,
                    // x: 20,

                    ease: 'power1.inOut',
                    stagger: {
                        yoyo: true,
                        repeat: 1,
                        amount: 1.5,
                        grid: 'auto',
                        ease: 'power2.out',
                        from: 'center',
                    },
                }
            );
        // generate a random index to start staggering with
        let gridItem, indexOfDots;
        setInterval(() => {
            indexOfDots = Math.floor(
                Math.random() * (this.numberODotsX * this.numberODotsY)
            );
            console.log(indexOfDots);
            gridItem = document.querySelectorAll('.grid-item')[indexOfDots];

            tl.fromTo(
                '.grid-item',
                { scale: 0.2 },
                {
                    duration: 2,
                    scale: 1.5,
                    // y: 40,
                    // x: 5,
                    ease: 'power1.inOut',
                    stagger: {
                        yoyo: true,
                        repeat: 1,
                        amount: 2.5,
                        grid: 'auto',
                        ease: 'power2.out',
                        from: indexOfDots,
                    },
                }
            );
        }, 2500);
    }
}
