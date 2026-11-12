# SCS Aviation website prototype

Prototype preview of the SCS Aviation website. Static site built with Astro 5.

Published with GitHub Pages at https://kevinandseven.github.io/scs-aviation-preview/.

This is a preview. The quote form does not send anything (`PROTOTYPE_MODE` is on in `src/config.ts`). Every page sends a `noindex` robots meta, and `robots.txt` disallows all crawlers.

## Build

Node 20.

```bash
npm install
npm run build
```

Output is written to `dist/`.

## Local preview

```bash
npm run preview
```

Open http://localhost:4321/scs-aviation-preview/.

Business facts and prototype settings live in `src/config.ts`.
