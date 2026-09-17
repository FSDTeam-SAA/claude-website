# Google login deployment

The code changes isolate each OAuth request's selected public signup role, restrict redirects to this site, normalize backend auth URLs, and report backend failures in server logs. Existing account roles remain owned by the backend.

## Website production environment

```dotenv
NEXTAUTH_URL=https://analyticsoccer.com
BACKEND_URL=https://api.analyticsoccer.com/api/v1
NEXT_PUBLIC_BACKEND_URL=https://api.analyticsoccer.com/api/v1
```

Set `NEXTAUTH_SECRET`, `GOOGLE_CLIENT_ID`, and `GOOGLE_CLIENT_SECRET` in the website hosting environment. Do not copy localhost URLs into production. `BACKEND_URL` is an optional private server override; browser API calls still require `NEXT_PUBLIC_BACKEND_URL`. Rebuild after changing public environment values.

## Dashboard production environment

Set `NEXTAUTH_URL` to the actual dashboard HTTPS origin, `NEXTAUTH_SECRET` to its existing stable secret, and both backend URLs to `https://api.analyticsoccer.com/api/v1`. Dashboard login remains limited to existing admin accounts.

## Backend production environment

The backend `GOOGLE_CLIENT_ID` must exactly match the website `GOOGLE_CLIENT_ID`; token verification enforces this audience. Preserve the existing MongoDB and JWT configuration (`MONGO_URI`, `ACCESS_TOKEN_SECRET`, `ACCESS_TOKEN_EXPIRES`, `REFRESH_TOKEN_SECRET`, `REFRESH_TOKEN_EXPIRES`). Confirm production can reach MongoDB and Google's token verification service.

In the Google OAuth client, authorize this redirect URI exactly:

```text
https://analyticsoccer.com/api/auth/callback/google
```

Keep the localhost callback authorized separately for local development.

## Validation after deployment

1. Deploy the backend and rebuild/redeploy the website and dashboard with the production environment.
2. Test Google sign-in with an existing account and a new goalkeeper/guest account; existing roles should remain unchanged.
3. Test admin credentials on the dashboard.
4. If Google login fails, inspect website logs for `Google signIn callback error` and backend logs for `Google token verification failed` or `Google login error`. Do not share ID tokens, session tokens, or secrets.

Public endpoint checks confirm the website and backend respond, but they do not prove Google token verification or database login succeeds. Production sign-in still needs to be verified after deployment; no hosting settings were changed from this workspace.

Local checks: `node tests/google-auth.cjs`, TypeScript checks for all three projects, website lint on changed files, and backend `tests/auth-verification.cjs`.
