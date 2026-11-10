# first_hack

## Current implementation notes
- Admin email allowlist: `salahudheen2006@gmail.com`.
- Admin sign-in uses Supabase email magic links; the email must be confirmed and able to receive the link.
- Admin access is enforced twice: the interface checks the email, and Storage Row Level Security policies restrict write operations.
- Public visitors can view the icon bucket; only the configured admin can upload, update, or delete icons.
- `/api/health` returns a JSON health response.
