import ComponentsObject from './components/index.js';
import Pages from './pages/index.js';
class AppObject {
    constructor() {
        this.ComponentsObject = new ComponentsObject();
        this.Pages = new Pages();
    }
}

new AppObject();
