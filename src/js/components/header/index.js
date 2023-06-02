import HamburgerObject from './hamburger.js';
import LogoObject from './logo.js';
export default class HeaderObject {
    constructor() {
        this.LogoObject = new LogoObject();
        this.HamburgerObject = new HamburgerObject();
    }
}
