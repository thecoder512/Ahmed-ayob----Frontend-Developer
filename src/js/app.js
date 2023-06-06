import ComponentsObject from './components/index.js';
import Pages from './pages/index.js';

// import gsap from 'gsap';
class AppObject {
    constructor() {
        this.Pages = new Pages();
        this.ComponentsObject = new ComponentsObject();
    }
}

new AppObject();
