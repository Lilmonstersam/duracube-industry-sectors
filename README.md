# DuraCube sector landing page mockups

Landing page mockups for the DuraCube Education and Commercial sector campaigns in Google Ads, plus the site-wide changes to the Send Us Your Plans form.

| Page | Mockup | Live page | Campaigns |
|---|---|---|---|
| Education | `education.html` | /education-sector/ | Education, all states (QLD and NSW priority) |
| Commercial | `commercial.html` | /commercial-sector/ | Commercial, all states |
| Send Us Your Plans | `send-us-your-plans.html` | /send-us-your-plans/ | Site-wide |

`index.html` redirects to the Education page, and `commercial-sa.html` (the old link) redirects to `commercial.html`. Move between pages with the footer **Applications** links (Education, Commercial) and the header **Free Quote** button. The Industrial and Sports & Recreation pages were removed after DuraCube's change of direction, and their footer links go to the live site.

## What changed

- **Education:** a keyword-led page for schools built around quick turnaround, the 15-year warranty and the new anti-tamper lock indicator. Toilet partitions (FHPC and POB) lead, with FHPM and LPM lockers as secondary products. Local teams in all four states, QLD and NSW first.
- **Commercial:** now Australia-wide, with local teams in all four states and a commercial and workplace lockers block.
- **Both sector pages:** a short quote form (plans upload optional), two paths at the top (**Get a price** / **Specifying? Download FF&E schedules**), tap-to-call and a sticky Call / Free quote bar on mobile.
- **Send Us Your Plans:** plans upload optional, a new "What do you need?" dropdown, and a green submit button.

The header and footer are the live site's, unchanged apart from the footer Applications links and the header Free Quote link. Headings and buttons follow the homepage styles.

## Notes and annotations

Each page has two buttons in the bottom-left corner:

- **Change notes** toggles the annotations. Yellow = new, blue = changed, pink = dev notes.
- **Keywords & dev notes** opens target keywords, suggested titles and meta descriptions, and build notes.

## Folder structure

```
.
├── index.html                 Redirect to the Education page
├── education.html
├── commercial.html
├── commercial-sa.html         Redirect to commercial.html (old link)
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
