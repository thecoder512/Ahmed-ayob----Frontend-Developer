export default class SliderSystem {
    constructor() {
        this.cards = document.querySelectorAll('.card');
        this.cardWidth = document.querySelector('.card').offsetWidth;
        this.corsouel = document.querySelector('.card-slider');
        this.navigation = document.querySelectorAll('.btn-nav');

        this.dragging = false;
        this.mousePosition = { x: 0 };
        this.prevPageX;
        this.prevScrollLeft;

        this.ondown();
        this.onMove();
        this.onup();
        this.navigations();
    }

    dragging() {}
    ondown() {
        this.corsouel.addEventListener('mousedown', (e) => {
            this.dragging = true;
            this.prevPageX = e.pageX;
            this.prevScrollLeft = this.corsouel.scrollLeft;
        });
    }
    onMove() {
        this.corsouel.addEventListener('mousemove', (e) => {
            if (this.dragging) {
                e.preventDefault();
                let positonDiff = e.pageX - this.prevPageX;
                this.corsouel.scrollLeft = this.prevScrollLeft - positonDiff;
            }
        });
    }
    onup() {
        this.corsouel.addEventListener('mouseup', (e) => {
            this.dragging = false;
        });
    }
    navigations() {
        this.navigation.forEach((button) => {
            button.addEventListener('click', () => {
                if (button.id === 'nav-left') {
                    this.corsouel.scrollLeft += -this.cardWidth;
                } else {
                    this.corsouel.scrollLeft += this.cardWidth;
                }
            });
        });
    }
}
