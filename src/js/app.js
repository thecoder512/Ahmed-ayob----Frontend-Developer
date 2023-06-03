import ComponentsObject from './components/index.js';
import Pages from './pages/index.js';

// import gsap from 'gsap';
class AppObject {
    constructor() {
        gsap.timeline();

        this.ComponentsObject = new ComponentsObject();
        this.Pages = new Pages();
    }
}

new AppObject();
