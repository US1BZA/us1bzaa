# Security Policy

## Implemented Security Measures

### P0 - Critical Security Controls

#### 1. Dependency Management
- **Pinned versions**: All dependencies use exact versions (no ^ or ~)
- **Package manager**: pnpm with lockfile for deterministic builds
- **Build validation**: TypeScript and ESLint checks enforced in build pipeline

#### 2. Security Headers
Implemented comprehensive HTTP security headers:

- **HSTS**: `max-age=31536000; includeSubDomains; preload`
- **CSP**: Strict Content Security Policy with YouTube iframe support
- **X-Frame-Options**: SAMEORIGIN
- **X-Content-Type-Options**: nosniff
- **Referrer-Policy**: strict-origin-when-cross-origin
- **Permissions-Policy**: Disabled camera, microphone, geolocation, payment
- **COOP**: same-origin-allow-popups
- **CORP**: same-origin

#### 3. XSS Prevention
- Removed `dangerouslySetInnerHTML` from chart component
- Implemented safe CSS injection using DOM API
- All user-facing links use `rel="noopener noreferrer"`
- Tor links marked with nofollow

#### 4. Error Handling
- Production: Only error digest logged (no sensitive data)
- Development: Full error details for debugging
- Structured logging ready for integration with Sentry/DataDog

#### 5. Third-Party Privacy
- YouTube API: User consent required before loading
- Clear privacy notice about data collection
- Opt-in model with consent dialog

### Verification Checklist

After deployment, verify:

\`\`\`bash
# 1. Check security headers
curl -I https://your-domain.com | grep -E 'Strict-Transport|Content-Security|X-Frame|X-Content'

# 2. Test CSP compliance
# Open browser DevTools → Console, check for CSP violations

# 3. Verify HTTPS enforcement
curl -I http://your-domain.com
# Should redirect to HTTPS

# 4. Test YouTube player
# Enable music player → Check for consent dialog → Verify no CSP errors

# 5. Build validation
pnpm install --frozen-lockfile
pnpm run type-check
pnpm run lint
pnpm run build
\`\`\`

### CSP Report-Only Mode (Recommended for Initial Deploy)

To test CSP without breaking functionality, temporarily use report-only mode in `next.config.mjs`:

\`\`\`javascript
{
  key: 'Content-Security-Policy-Report-Only',
  value: '...' // Same CSP value
}
\`\`\`

Monitor browser console for violations, then switch to enforcing mode.

### Known Limitations

1. **YouTube API**: Requires 'unsafe-inline' and 'unsafe-eval' in script-src due to third-party code
2. **COEP**: Not implemented due to potential conflicts with external resources
3. **SRI**: YouTube API doesn't provide integrity hashes

### Future Improvements (P1)

- Integrate error tracking (Sentry/DataDog)
- Add rate limiting for API routes
- Implement automated security scanning in CI
- Add SBOM generation with CycloneDX
- Setup Dependabot/Renovate for dependency updates

## Reporting Security Issues

If you discover a security vulnerability, please email: us1bza@proton.me

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

**Do not** create public GitHub issues for security vulnerabilities.
