# nextjs-top-scroll-progress-bar

A lightweight Next.js component that adds a customizable scroll progress bar at the top of your page. The progress bar indicates how far the user has scrolled through the content, providing a better user experience.

## Features

- **Automatic scroll progress tracking**
- **Customizable appearance** (height and color)
- **Works with Next.js App Router**
- **Zero dependencies**
- **TypeScript support**

See [CHANGELOG.md](./CHANGELOG.md) for release history and updates.

## Installation

```bash
npm install nextjs-top-scroll-progress-bar
# or
yarn add nextjs-top-scroll-progress-bar
# or
pnpm add nextjs-top-scroll-progress-bar
```

## Usage

The component can be used with both the App Router (Next.js 13+) and the Pages Router. Choose the appropriate setup based on your project.

### With App Router (Next.js 13+)

1. Create a client component for the progress bar (since it uses browser APIs):

```tsx
// app/components/ClientTopScrollProgressBar.tsx
'use client'

import { TopScrollProgressBar } from 'nextjs-top-scroll-progress-bar'

interface TopScrollProgressBarProps {
  height?: number;
  color?: string;
}

export default function ClientTopScrollProgressBar({ height, color }: TopScrollProgressBarProps) {
  return <TopScrollProgressBar height={height} color={color}/>
}
```

2. Use the component in your root layout:

```tsx
// app/layout.tsx
import ClientTopScrollProgressBar from './components/ClientTopScrollProgressBar'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ClientTopScrollProgressBar color="#F00" height={4} />
        {children}
      </body>
    </html>
  )
}
```

### With Pages Router

1. Create a client component for the progress bar:

```tsx
// components/ClientTopScrollProgressBar.tsx
import { TopScrollProgressBar } from 'nextjs-top-scroll-progress-bar'

interface TopScrollProgressBarProps {
  height?: number;
  color?: string;
}

export default function ClientTopScrollProgressBar({ height, color }: TopScrollProgressBarProps) {
  return <TopScrollProgressBar height={height} color={color}/>
}
```

2. Add it to your `_app.tsx`:

```tsx
// pages/_app.tsx
import type { AppProps } from 'next/app'
import ClientTopScrollProgressBar from '../components/ClientTopScrollProgressBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ClientTopScrollProgressBar color="#F00" height={4} />
      <Component {...pageProps} />
    </>
  )
}
```

## Props

The component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string` | `'#FF0000'` | Color of the progress bar. Accepts any valid CSS color value (hex, rgb, hsl, etc.) |
| `height` | `number` | `4` | Height of the progress bar in pixels |

## Examples

```tsx
// Default appearance
<ClientTopScrollProgressBar />

// Custom red color with 4px height
<ClientTopScrollProgressBar color="#FF0000" height={4} />

// Using RGB color
<ClientTopScrollProgressBar color="rgb(0, 128, 255)" height={3} />
```

## Development

### Project Structure

```
├── src/                    # Source code
│   ├── TopScrollProgressBar.tsx  # Main component
│   └── index.ts           # Entry point
├── dist/                   # Built files (generated)
├── __tests__/             # Test files
└── package.json           # Project configuration
```

### Setup Development Environment

1. Clone the repository:
```bash
git clone https://github.com/renjith100/nextjs-top-scroll-progress-bar.git
cd nextjs-top-scroll-progress-bar
```

2. Install dependencies:
```bash
npm install
```

3. Start development:
```bash
npm run build # Build the package
```

### Testing with a Local Next.js Project

To test the package locally before publishing:

1. In your package directory, create a local package:
```bash
npm pack
```
This will create a file like `nextjs-top-scroll-progress-bar-0.0.2.tgz`

2. In your Next.js project's `package.json`, add the local package:
```json
{
  "dependencies": {
    "nextjs-top-scroll-progress-bar": "file:/path/to/nextjs-top-scroll-progress-bar-0.0.2.tgz"
  }
}
```

3. Install the package in your Next.js project:
```bash
npm install
```

4. Use the component as described in the Usage section above.

Whenever you make changes to the package:
1. Rebuild the package: `npm run build`
2. Create a new package: `npm pack`
3. Reinstall in your Next.js project: `npm install`

### Running Tests

The project uses Jest and React Testing Library for testing. Tests are located in the `src/__tests__` directory.

```bash
# Run tests once
npm test

# Run tests in watch mode (for development)
npm run test:watch
```

The test suite includes:
- Component rendering tests
- Props validation tests
- Scroll behavior tests

### Building

The package uses Rollup for building and generates both ESM and CommonJS formats:

```bash
npm run build
```

This will create:
- `dist/index.cjs.js` - CommonJS format
- `dist/index.esm.js` - ES Module format
- `dist/index.d.ts` - TypeScript declarations

## License

MIT

