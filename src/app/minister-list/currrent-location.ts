export class CurrentLocation {
    long_name: string = '';
    short_name: string = '';
    types: any[];
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
