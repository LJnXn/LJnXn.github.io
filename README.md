# LJnXn personal site

Astro source for the public personal site at `https://ljnxn.github.io`.

## Local development

```bash
npm install
npm run dev
```

Public posts live in `src/content/blog`. Set `PUBLIC_PRIVATE_BLOG_URL` only to
the Cloudflare Access protected private-blog origin. Private post bodies must
never be placed in this repository; the public workflow rejects conventional
private-content directories before building.

Pushes to `main` deploy through GitHub Pages. Enable Pages with **GitHub
Actions** as its source in repository settings after the first push.
