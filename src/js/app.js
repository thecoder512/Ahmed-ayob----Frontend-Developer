// import { CorsouelObject } from './utils/corsouel.js';
// import { HeroImgObject } from './utils/heroimg.js';
// import { MagneticObject } from './utils/magnetic.js';
// import { HamburgerObject } from './utils/menu.js';
// import { StaggerShape } from './utils/shapes.js';
// import { TextAnimations } from './utils/text.js';
import ComponentsObject from './components/index.js';
import Pages from './pages/index.js';
class AppObject {
    constructor() {
        this.ComponentsObject = new ComponentsObject();
        this.Pages = new Pages();
    }
}

new AppObject();
