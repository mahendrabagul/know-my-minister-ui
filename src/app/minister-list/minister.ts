export class Minister {
    profileUrl: string = '';
    partyImageUrl: string = '';
    salutation: string = '';
    fullName: string = '';
    brief: string = '';
    party: string = '';
    twitterProfile: string = '';
    facebookProfile: string = '';
    instagramProfile: string = '';
    website: string = '';
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
