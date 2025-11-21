# React Confetti Sample App

A collection of interactive examples demonstrating various use cases of the [react-confetti](https://github.com/alampros/react-confetti/) library. Designed for learning and exploring confetti effects in React applications.

## Setup

Clone the repository, install dependencies, and start the development server:

```bash
git clone <repository-url>
cd react-confetti-app
nvm use
pnpm install
pnpm dev
```

## Features

- Basic confetti toggle with button control
- Timer-based confetti with countdown animation
- Task completion celebration with toast notification
- Themed confetti variations (seasonal effects)
- Interactive playground for parameter tuning
- Dark mode support
- Responsive layout for mobile and desktop
- Modern UI with glassmorphism effects

## Page Structure

```
/                    → Redirect to /basic
/basic               → Basic confetti toggle
/countdown           → Timer-based confetti
/toast               → Task completion with toast notification
/seasonal            → Themed confetti variations
/playground          → Interactive parameter tuning
```

## Tech Stack

- Vite (Development environment and build tool)
- React 19 (Functional Components)
- TypeScript (Type-safe development)
- Tailwind CSS v4 (Styling with modern features)
- React Router v7 (Client-side routing)
- Biome (Code linting and formatting)

## Project Structure

```
react-confetti-app/
├── .github/workflows/
│   └── biome.yml
├── .vscode/
│   ├── settings.json
│   └── extensions.json
├── public/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── .nvmrc
├── biome.json
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── PLAN.md
├── PROJECT_NOTES.md
└── README.md
```
