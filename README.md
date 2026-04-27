# @demografix/n8n-nodes-genderize

This is an n8n community node. It lets you use Genderize.io in your n8n workflows.

Genderize.io is a gender prediction API that infers gender based on names using statistical analysis.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

- **Get Gender**: Predict the gender for a given name with probability score

## Credentials

An API key is required for all Genderize.io requests.

### Free tier — 2,500 requests/month
Sign up at [genderize.io](https://genderize.io) for a free account. Free accounts include 2,500 requests per month at no cost.

### Paid tiers
For higher volumes, subscribe to a paid plan at [genderize.io](https://genderize.io) — tiers cover increased monthly request quotas.

### Setup
1. Sign up at [genderize.io](https://genderize.io)
2. Copy your API key from the dashboard
3. In n8n, create new "Genderize API" credentials
4. Paste the API key
5. Test the credentials to verify they work

## Compatibility

This node is built using n8n's declarative style and requires n8n version 1.0 or later.

## Usage

### Basic Example
1. Add the "Genderize" node to your workflow
2. Enter a name (e.g., "Peter", "Sarah", "Alex")
3. Execute the node

### Response Data
The node returns the following data:
- `name`: The name that was queried
- `gender`: Predicted gender ("male", "female", or null)
- `probability`: Confidence score (0-1, where 1 is 100% confident)
- `count`: Number of data samples used for this prediction
- `rateLimit.limit`: Total requests allowed in current period
- `rateLimit.remaining`: Requests remaining in current period
- `rateLimit.reset`: Seconds until the rate limit window resets

### Tips
- Names with probability close to 0.5 indicate unisex names with less certainty
- The API supports diacritics and non-Latin alphabets
- Use the `rateLimit` data to monitor your API usage and avoid hitting limits

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Genderize.io official website](https://genderize.io)
- [Genderize.io API documentation](https://genderize.io/documentation)
