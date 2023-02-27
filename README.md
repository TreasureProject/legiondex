# Legiondex

Your guide to the heroes of Bridgeworld.

## Development

### Pre-requisites

- Node v16+

### Setup

Install dependencies:

```
npm install
```

Create environment variable file:

```
cp .env.example .env
```

Fill environment variable file with relevant variables then auto-generate types from GraphQL queries:

```
npm run codegen
```

### Run

Start server:

```
npm run dev
```
