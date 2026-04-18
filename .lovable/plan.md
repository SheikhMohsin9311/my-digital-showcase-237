
The security panel shows 4 findings. The 4th (NO_RLS_POLICIES_FOUND) is a false-positive — this project has no public tables, so no RLS is needed. I'll mark it as ignored. The remaining three are real issues in `supabase/functions/send-contact-email/index.ts`.

## Plan: Harden the contact form Edge Function

### 1. Prevent abuse (OPEN_ENDPOINTS — error)
Add lightweight in-memory rate limiting keyed by IP (`x-forwarded-for`):
- Max 5 submissions per IP per hour
- Return `429` with a generic message when exceeded
- Use a `Map<string, { count, resetAt }>` at module scope (simple, no extra infra)

### 2. Sanitize email HTML (INPUT_VALIDATION — warn)
Add an `escapeHtml()` helper and run it on `name`, `email`, `subject`, and `message` before embedding them in the notification and confirmation HTML bodies. Prevents HTML/script injection in the email client.

### 3. Stop leaking internal errors (INFO_LEAKAGE — warn)
- Keep detailed `console.error` logging server-side
- Replace client-facing error payload with a generic message: `"Unable to send message. Please try again later."`
- Same for the 400 validation branch — keep it generic

### 4. Add basic field-length limits
Reject inputs exceeding sane caps (name 100, email 255, subject 200, message 2000) before processing — matches the client-side Zod schema and reduces payload abuse.

### 5. Dismiss the RLS finding
Mark `NO_RLS_POLICIES_FOUND` as ignored with the rationale: project has no public tables; contact submissions are processed via Edge Function and not stored in the database.

## Files touched
- `supabase/functions/send-contact-email/index.ts` — rewritten with rate limiting, HTML escaping, generic error responses, and length caps
- Security findings panel — mark RLS finding as not applicable

## Out of scope
- CAPTCHA (would require user to sign up for hCaptcha/Turnstile and add a secret — can be a follow-up if desired)
- Persistent rate limit storage (in-memory is sufficient for current traffic; would need a DB table for stricter enforcement across function instances)
