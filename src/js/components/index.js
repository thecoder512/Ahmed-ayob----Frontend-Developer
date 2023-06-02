import HeaderObject from './header/index.js';
import WindowObject from './header/window.js';
import MagneticObject from './magnetic.js';
export default class ComponentsObject {
    constructor() {
        this.HeaderObject = new HeaderObject();
        this.WindowObject = new WindowObject();
        this.MagneticObject = new MagneticObject();
    }
}
