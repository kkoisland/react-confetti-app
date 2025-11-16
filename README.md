# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and uses Biome for linting and formatting.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Biome Setup

This project uses [Biome](https://biomejs.dev/) for fast and efficient linting and formatting.

### VS Code Setup

1. Install the Biome extension:
   - Name: Biome
   - Publisher: biomejs
   - Description: Toolchain of the web

2. The workspace is already configured in `.vscode/settings.json` to:
   - Use Biome as the default formatter
   - Format on save
   - Use tabs for indentation

### Commands

```bash
# Check all files
pnpm exec biome check .

# Check and fix all files
pnpm exec biome check --write .

# Format specific files
pnpm exec biome format --write <files>

# Lint specific files
pnpm exec biome lint --write <files>
```

### CI/CD

GitHub Actions workflow is configured in `.github/workflows/biome.yml` to run Biome checks on every push and pull request to the main branch.
