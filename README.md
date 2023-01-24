# sveltekit-spa

An example how to configure SvelteKit to become a SPA with client-side routing.

Based on the SvelteKit skeleton template with as little modifications as possible, created by `npm create svelte@latest sveltekit-spa`.

## Changes from default configuration

Packages added:

- `@sveltejs/adapter-static` - to generate static files that can be hosted anywhere
- `http-server` - to demonstrate the fallback/proxy behavior of a static HTTP server

**svelte.config.js**

```diff
- import adapter from '@sveltejs/adapter-auto';
+ import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
-   adapter: adapter()
+   adapter: adapter({
+     fallback: 'index.html' // Could be different depending on host
+   })
  }
};

export default config;
```

**src/routes/+layout.svelte**

```ts
export const ssr = false;
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`, or use `npm run serve` to test it with a `http-server`. See `package.json` for how its configured.
