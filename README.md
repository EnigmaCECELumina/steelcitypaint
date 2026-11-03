# Steel City Painting & Handyman

Static-exported Next.js site for residential painting and handyman work in Hamilton and nearby communities.

## Local development

```sh
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` before starting the dev server.

## Quote form

Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` to the access key from Web3Forms before building locally or add it to the Render service environment. Static exports include this key in browser code, as required for a client-side Web3Forms form. Optional photo attachments require a Web3Forms Pro plan and are limited to one image up to 5 MB.

## Render deployment

Push the repository to GitHub and connect it to Render as a Blueprint. `render.yaml` builds the static export and publishes `out/`.

## Content to confirm

Add real project photos and reviews only after Brent supplies them. The email address, business hours, paint brands, insurance details, and years in business are not published because they have not been confirmed.
