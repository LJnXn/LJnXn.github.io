# LJnXn personal site

Astro source for the public personal site at `https://ljnxn.github.io`.

## Local development

```bash
npm install
npm run dev
```

Public posts live in `src/content/blog`. Set `PUBLIC_LAB_ACCESS_URL` only after
the dedicated Tailscale Funnel endpoint has an authentication proxy in front
of it. Never point this variable at the existing control-hub Serve endpoint.

Pushes to `main` deploy through GitHub Pages. Enable Pages with **GitHub
Actions** as its source in repository settings after the first push.

The controlled-access boundary is documented in `docs/controlled-access.md`.
Funnel is not an identity provider; the public URL stays disabled until the
GitHub OAuth allowlist is enforced at the origin.

Create a public article by adding a Markdown file under `src/content/blog`
with `title`, `description`, `published`, and optional `tags` frontmatter.
Article comments use the repository's GitHub Discussions through Giscus.
