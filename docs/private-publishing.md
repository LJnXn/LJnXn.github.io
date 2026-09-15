# Private publishing boundary

The public site and private blog are separate deployments, not a visibility
flag in one generated site.

## Public path

`src/content/blog` -> GitHub Actions -> GitHub Pages

The public workflow fails if `private/` or `src/content/private/` exists.

## Private path

Private source repository -> private build -> Raspberry Pi loopback service ->
Cloudflare Tunnel -> Cloudflare Access.

Requirements before enabling this path:

1. A domain managed in Cloudflare.
2. A dedicated hostname, such as `private.example.com`.
3. An Access policy allowing only selected identities.
4. A named Tunnel whose ingress points to a loopback-only Nginx virtual host.
5. A GitHub App or fine-grained token scoped only to the private-content
   repository if Actions deployment is enabled.

Never publish private build artifacts to GitHub Pages, store Access service
tokens in this repository, or expose the Raspberry Pi origin directly to the
Internet.
