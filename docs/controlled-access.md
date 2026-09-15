# Controlled lab access

The public site only links to a dedicated authenticated entry point. It never
links directly to the existing control-hub Tailscale Serve listener.

## Request and login flow

1. A visitor submits the collaborator issue form with their GitHub username,
   requested private project, and minimum repository permission.
2. The administrator reviews the request. Approval adds the username to the
   OAuth proxy allowlist; the repository invitation remains an explicit owner
   action with the requested Read, Triage, or Write permission.
3. The approved visitor opens the login endpoint and authenticates with
   GitHub OAuth.
4. The proxy authorizes the GitHub identity before forwarding to the limited
   lab application.

## Network boundary

Use a dedicated Funnel listener, preferably port `8443`, pointing to a
loopback-only authenticated gateway. Keep the existing `443` Serve listener
tailnet-only because it currently fronts the complete control hub.

```text
Internet -> Tailscale Funnel :8443 -> GitHub OAuth proxy -> limited gateway
Tailnet  -> Tailscale Serve  :443  -> complete control hub
```

Funnel provides public TLS and forwarding, not identity verification. Never
enable it until the OAuth proxy rejects users outside the explicit allowlist.

## Repository collaboration

There is no separate lab-access request. An approved collaborator inherits the
basic authenticated landing page, while GitHub independently enforces access
to each private repository. No workflow automatically invites applicants.
