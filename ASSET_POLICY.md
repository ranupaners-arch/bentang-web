# Asset sourcing and publication policy

## Source hierarchy
1. Exact curated source-photo URLs in `ASSET_MANIFEST.csv`; open each photo page, confirm the photo matches intended scene, read license, credit photographer, download original/appropriate resolution and optimize. If an exact URL fails, replace with another actually verified freely licensed photo with comparable composition; update the ledger.
2. Unsplash or Pexels photo pages with verifiable creators/license. Wikimedia Commons file pages with specific CC/public-domain terms and required attribution.
3. Pinterest is a moodboard/referral tool, NEVER a production image download or copyright shortcut. Trace to origin and verify permissions.
4. Original CSS textures/illustrations are permitted. Do not ship watermarked or gated images.

## File conventions
`public/assets/<category>/<asset-id>-<short-subject>.webp` plus Next.js `next/image` with accurate width/height and `sizes`. Preserve appropriate composition and focal point, avoid fake overlays/collages that misrepresent the landscape.

## Ledger columns
`id`, `purpose`, `source_url`, `local_path`, `photographer`, `license_url`, `status`, `alt_id`. Unverified author names remain blank and status must remain `to_verify` until the agent sees the original page. Update the CSV rather than making up credits.

## Editorial and cultural accuracy
Images of traditional houses, motifs and local people must have precise context where possible. Avoid claiming a person is from a specific community based solely on appearance. Write non-exoticizing captions; verify cultural interpretations before production. Always label the demo/portfolio nature of the project.

## Useful license references
- https://unsplash.com/license
- https://www.pexels.com/license/
- https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia
