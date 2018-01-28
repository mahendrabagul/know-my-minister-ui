export class NavBar {
    usefulLinks: UsefulLink[] = [];
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
class UsefulLink {
    title: string = "";
    link: string = "";
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}