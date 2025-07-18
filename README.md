# Portfolio

A minimal, terminal-inspired personal portfolio website made by me (hi, i'm me).

## Tech Stack

- [Vite](https://vitejs.dev/) (build tool)
- TypeScript (just because)
- HTML5 & CSS3

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) (or use npm/yarn)

### Install dependencies

```sh
pnpm install
```

### Start the development server

```sh
pnpm dev
```

### Build for production

```sh
pnpm build
```

### Preview production build

```sh
pnpm preview
```

## Project Structure

```sh
portfolio/
├── index.html
├── node_modules
│   ├── typescript -> .pnpm/typescript@5.8.3/node_modules/typescript
│   └── vite -> .pnpm/vite@6.3.5/node_modules/vite
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── public
│   └── arrow.svg
├── README.md
├── src
│   ├── assets
│   │   └── APOD.jpg
│   ├── data
│   │   ├── dummy.json
│   │   └── projects.json
│   ├── main.ts
│   ├── scripts
│   │   ├── genDummy.ts
│   │   └── ui.ts
│   ├── styles
│   │   ├── main.css
│   │   └── reset.css
│   └── vite-env.d.ts
└── tsconfig.json
```

## Credits

- [Space Mono](https://fonts.google.com/specimen/Space+Mono) font by Colophon Foundry
- Project images from [Picsum Photos](https://picsum.photos/)

## License

This project is for personal use and learning. Feel free to use as inspiration and even steal!
[Just don't be a dick.](https://dbad-license.org/)
