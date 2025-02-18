# nextjs-top-scroll-progress-bar

A lightweight Next.js component that adds a customizable scroll progress bar at the top of your page. The progress bar indicates how far the user has scrolled through the content, providing a better user experience.

## Features

- **Automatic scroll progress tracking**
- **Customizable appearance** (height and color)
- **Works with Next.js App Router**
- **Zero dependencies**
- **TypeScript support**

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

## License

MIT

