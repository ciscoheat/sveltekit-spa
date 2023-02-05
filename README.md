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
+     fallback: '200.html' // Could be different depending on host
+   })
  }
};

export default config;
```

**src/routes/+layout.ts**

```ts
export const ssr = false;
```

## The fallback page

Since the site is static, a request like `https://yoursite.com/user/3` will fail with a 404 since the file `public_html/user/3/index.html` doesn't exist (and shouldn't, since this site route is dynamic). Therefore the `fallback` option is set in the `svelte.config.js`, but the web host needs to be able to use it.

### Apache

For traditional web hosts that are using Apache, this can be easily done with a `.htaccess` file, which is included in this project.

**static/.htaccess**

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^200\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /200.html [L]
</IfModule>
```

### Nginx

Nginx can be configured in a similar way like this:

```
# nginx configuration by winginx.com

location ~ ^/200\.html$ { }

location / {
  if (!-e $request_filename){
    rewrite ^(.*)$ /200.html break;
  }
}
```

### Other hosts

For other hosts, read more in the [SvelteKit docs](https://kit.svelte.dev/docs/adapter-static#spa-mode-add-fallback-page).

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

Which will create a set of files in the `build` folder, which can be uploaded to your hosting service.

You can preview the production build with `npm run preview`, or use `npm run serve` to test it locally with `http-server`. See `package.json` for how its configured.
