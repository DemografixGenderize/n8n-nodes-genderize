"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genderDescription = void 0;
const get_1 = require("./get");
const showOnlyForGender = {
    resource: ['user'],
};
exports.genderDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForGender,
        },
        options: [
            {
                name: 'Get Gender',
                value: 'getGender',
                action: 'Get gender',
                description: 'Get gender',
                routing: {
                    request: {
                        method: 'GET',
                        url: '',
                        qs: {
                            name: '={{$value}}',
                        },
                    },
                },
            },
        ],
        default: 'getAll',
    },
    ...get_1.genderGetDescription,
];
//# sourceMappingURL=index.js.map