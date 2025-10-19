# Monorepo with Bun

A monorepo setup using Bun as the JavaScript runtime and package manager, with Turborepo for monorepo management.

## Project Structure

```
monorepo-with-bun/
├── apps/
│   ├── frontend/     # React + Vite frontend application
│   └── backend/      # Bun backend application
└── packages/         # Shared packages (if any)
```

## Prerequisites

- [Bun](https://bun.sh) (v1.3.0 or higher)
- [Node.js](https://nodejs.org) (v18 or higher)

## Getting Started

1. Install dependencies:

```bash
bun install
```

2. Start development servers:

```bash
# Start all services
bun run dev

# Start individual services
cd apps/frontend && bun run dev
cd apps/backend && bun run dev
```

## Available Scripts

- `bun run dev` - Start all applications in development mode
- `bun run build` - Build all applications
- `bun run lint` - Run linting across all applications

## Applications

### Frontend

- Built with React + Vite
- TypeScript support
- TailwindCSS for styling
- Available at `http://localhost:5173`

### Backend

- Built with Bun runtime
- TypeScript support
- Prisma for database management
- Available at `http://localhost:3000`

## Development

To add a new application or package:

1. Create a new directory in `apps/` or `packages/`
2. Initialize with `bun init` or your preferred template
3. Add to workspace in root `package.json`
4. Update `turbo.json` pipeline as needed

## Environment Variables

Create a `.env` file in the respective application directories:

```env
# Backend
DATABASE_URL="your-database-url"

# Frontend
VITE_API_URL="http://localhost:3000"
```

## License

MIT
