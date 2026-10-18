# Dolody website

Official site for Dolody, a music player for iPhone. Built with React + Vite and served by Cloudflare Workers (static assets + a Hono Worker).

Pages: `/` home, `/guide` Wi-Fi Transfer guide, `/support` FAQ & contact, `/privacy` privacy policy. Text lives in `src/react-app/i18n/` (`en`, `zh-Hans`, `zh-Hant`); the language follows the browser and can be switched in the nav.

## Development

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

Then bind the custom domain `dolody.deeptrans.pro` to the `dolody` Worker in the Cloudflare dashboard (Workers & Pages › dolody › Settings › Domains & Routes).

## When the app launches

Set `APP_STORE_URL` in `src/react-app/config.ts`; the "Coming soon" badge turns into a download button.
