# DuraCube sector landing page mockups

Landing page mockups for the three DuraCube sector campaigns in Google Ads, plus the site-wide change to the Send Us Your Plans form.

| Page | Mockup | Live page | Campaign |
|---|---|---|---|
| Industrial | `industrial-qld.html` | /industrial-sector/ | QLD \| Sector \| Industrial |
| Sports & Recreation | `sports-nsw.html` | /sports-recreation-sector/ | NSW \| Sector \| Sports & Recreation |
| Commercial | `commercial-sa.html` | /commercial-sector/ | SA \| Sector \| Commercial |
| Send Us Your Plans | `send-us-your-plans.html` | /send-us-your-plans/ | Site-wide |

`index.html` redirects to the Industrial page. Move between the sector pages with the footer **Applications** links. Send Us Your Plans is linked from the notes panel.

## What changed

- A short quote form on each sector page (name, company, email, phone, project postcode, "what do you need" and an optional plans upload).
- Two paths at the top of each page: **Get a price** and **Specifying? Download FF&E schedules**.
- A state section showing the local office and the local case study first.
- A sticky Call / Free quote bar on mobile.
- NSW: a gym and change room lockers section near the top (LBSM-P, LPM, Zoo Fitness).
- SA: a commercial and workplace lockers block.
- Send Us Your Plans: plans upload is optional.

The header and footer are the live site's, unchanged apart from the footer Applications links. Headings and buttons follow the homepage styles.

## Notes and annotations

Each page has two buttons in the bottom-left corner:

- **Change notes** toggles the annotations. Yellow = new, blue = changed, pink = dev notes. Pink dashed outlines mark text that would change by state.
- **Keywords & dev notes** opens target keywords, suggested titles and meta descriptions, and build notes.

## Folder structure

```
.
├── index.html                 Redirect to the Industrial page
├── industrial-qld.html
├── sports-nsw.html
├── commercial-sa.html
├── send-us-your-plans.html
├── assets/                    Mockup images
├── site/                      Saved site CSS/JS for the sector pages
├── site-send/                 Saved site CSS/JS for Send Us Your Plans
├── robots.txt                 Blocks crawling
└── .github/workflows/deploy.yml
```

## Deployment

Every push to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`. Run it by hand from the Actions tab with **Run workflow**.

## Not for indexing or tracking

This is a copy of client pages for review only:

- Every page has `noindex, nofollow`, and `robots.txt` blocks crawling.
- The client's Google Tag Manager, Hotjar and Tawk.to scripts are removed so the mockup doesn't send data to their analytics or open chats.
- Forms are not connected.

Some header and footer images and the fonts load from duracube.com.au, so the pages need an internet connection.
