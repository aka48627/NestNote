# NestNote

A collaborative note taking application built with Next.js and Postgres (Neon).

## Getting Started

Install dependencies (requires Node 18+):

```bash
npm install
```

Create a `.env` file based on `.env.example` and provide your Neon database connection string.

Run the development server:

```bash
npm run dev
```

## Project Structure

- `src/app` – Next.js app router files
- `src/components` – React components
- `src/lib/db.ts` – helper for querying Neon Postgres
- `db/schema.sql` – simple SQL schema

This repository only contains a minimal skeleton to demonstrate nested notes. Features such as authentication, rich text editing and collaboration would require additional implementation.
