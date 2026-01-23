"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genderGetDescription = void 0;
const showOnlyForGenderGet = {
    operation: ['get'],
    resource: ['gender'],
};
exports.genderGetDescription = [
    {
        displayName: 'First name',
        name: 'name',
        type: 'string',
        displayOptions: { show: showOnlyForGenderGet },
        default: '',
        description: "The name to fetch gender for",
    },
];
//# sourceMappingURL=get.js.map