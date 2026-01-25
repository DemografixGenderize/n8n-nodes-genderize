import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class DemografixGenderizeApi implements ICredentialType {
	name = 'demografixGenderizeApi';

	displayName = 'Genderize API';

	// Link to your community node's README
	documentationUrl = 'https://github.com/DemografixGenderize/n8n-nodes-genderize?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				apikey: '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.genderize.io',
			url: '',
			qs: {
				name: 'test',
			},
		},
	};
}
