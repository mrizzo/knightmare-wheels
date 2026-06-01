# Knightmare Wheels — Website

Static website for Knightmare Wheels, a personal electric vehicle repair, sales, and upgrades shop in Setagaya, Tokyo.

No WordPress. No frameworks. Pure HTML, CSS, and vanilla JS.

## Setup

### Contact Form

The contact form uses [Formspree](https://formspree.io) (free tier, no backend needed):

1. Sign up at formspree.io
2. Create a new form → copy the endpoint ID
3. In `index.html`, replace `YOUR_FORM_ID`:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

### Social Links

Update the `href` values for each social link in `index.html`:
- Instagram
- Facebook
- Twitter / X
- Yelp
- Email (`mailto:` link)

## Hosting (GitHub Pages)

1. Push to GitHub
2. Repo Settings → Pages → Source: `main` branch, `/ (root)`
3. Site will be live at `https://<username>.github.io/<repo>/`

For a custom domain, add a `CNAME` file with your domain and configure DNS.

## Stack

- HTML5
- CSS (custom properties, Grid, Flexbox — no framework)
- Vanilla JS
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) + [Space Mono](https://fonts.google.com/specimen/Space+Mono) via Google Fonts
- [Formspree](https://formspree.io) for form handling
