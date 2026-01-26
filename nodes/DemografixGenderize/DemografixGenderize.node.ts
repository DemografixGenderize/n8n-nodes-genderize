import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';

export class DemografixGenderize implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Genderize',
		name: 'demografixGenderize',
		icon: 'file:demografixGenderize.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Get gender prediction for a given name using the Genderize.io API (100 free requests/day without API key, more with subscription)',
		defaults: {
			name: 'Genderize',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'demografixGenderizeApi', required: false }],
		requestDefaults: {
			baseURL: 'https://api.genderize.io',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Get Gender',
						value: 'getGender',
						action: 'Get gender prediction for a name',
						description: 'Get the predicted gender for a given first name',
						routing: {
							request: {
								method: 'GET',
								url: '',
								qs: {
									name: '={{$parameter.name}}',
									country_id: '={{$parameter.country_id || undefined}}',
								},
							},
							output: {
								postReceive: [
									{
										type: 'set',
										properties: {
											value: '={{ { ...($response.body), "rateLimit": { "limit": $response.headers["x-rate-limit-limit"], "remaining": $response.headers["x-rate-limit-remaining"], "reset": $response.headers["x-rate-limit-reset"] } } }}',
										},
									},
								],
							},
						},
					},
				],
				default: 'getGender',
			},
			{
				displayName: 'First Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				description: 'The first name to get gender prediction for',
				placeholder: 'e.g., Peter',
			},
			{
				displayName: 'Country Code',
				name: 'country_id',
				type: 'string',
				default: '',
				description: 'Optional ISO 3166-1 alpha-2 country code (e.g., US, GB, DK) for improved accuracy',
				placeholder: 'e.g., US',
			},
		],
	};
}
