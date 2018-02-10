export class Minister {
    id: string = '';
    profileUrl: string = '';
    partyImageUrl: string = '';
    salutation: string = '';
    fullName: string = '';
    brief: string = '';
    party: string = '';
    twitterUrl: string = '';
    facebookUrl: string = '';
    instagramUrl: string = '';
    websiteUrl: string = '';
    youtubeUrl: string = '';
    linkedInUrl: string = '';
    googlePlusUrl: string = '';
    speechUrl: string = '';
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
