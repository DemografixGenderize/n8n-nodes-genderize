"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemografixGenderizeApi = void 0;
class DemografixGenderizeApi {
    constructor() {
        this.name = 'demografixGenderizeApi';
        this.displayName = 'Genderize API';
        this.documentationUrl = 'https://github.com/org/@demografix/-genderize?tab=readme-ov-file#credentials';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                typeOptions: { password: true },
                required: true,
                default: '',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                qs: {
                    apikey: '={{$credentials.apiKey}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: 'https://api.genderize.io',
                url: '',
                qs: {
                    name: 'test',
                },
            },
        };
    }
}
exports.DemografixGenderizeApi = DemografixGenderizeApi;
//# sourceMappingURL=DemografixGenderizeApi.credentials.js.map