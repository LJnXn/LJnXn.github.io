# Controlled lab access

The public site only links to a dedicated authenticated entry point. It never
links directly to the existing control-hub Tailscale Serve listener.

## Request and login flow

1. A visitor submits their GitHub username through the public access-request
   issue form.
2. The administrator reviews the request and adds the username to the OAuth
   proxy allowlist.
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
