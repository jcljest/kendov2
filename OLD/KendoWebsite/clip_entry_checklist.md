# Kendo Clip Lab – MVP Launch Checklist
*(Ordered by priority for fastest working version)*

---

## Phase 1 – Core Setup (Day 1–2)
Goal: Have a working skeleton that can display a few clips with captions.

[ ] Decide content storage format (Markdown/YAML or JSON)  
[ ] Create `/clips/` folder in repo  
[ ] Create `taxonomy.md` with starter tag list  
[ ] Choose minimal tech stack (Vite + React + Tailwind, or plain HTML)  
[ ] Build clip page template with:
    - Title
    - Tags (strike, role, skill)
    - YouTube embed
    - 3–4 screenshot images with captions
    - Short notes (narrative + 2–3 cues)
[ ] Set up static routing:
    - `/` = list of all clips
    - `/clip/:slug` = single clip page
[ ] Add 2–3 test clips with frames in `/clips/<slug>/frames/`

---

## Phase 2 – Tagging & Discovery (Day 3–4)
Goal: Make it easy to find content without complex navigation.

[ ] Display tags on clip pages as clickable chips  
[ ] Clicking a tag filters the list page  
[ ] Decide core facets for MVP:
    - Strike
    - Role
    - Skill

---

## Phase 3 – Analysis Structure (Day 5+)
Goal: Add teaching value without slowing upload workflow.

[ ] Add “Key Cues” section (3–5 bullets under video)  
[ ] Add “Practice Bridge” placeholder (one short drill suggestion)  
[ ] Add “Related Clips” list (manual, 1–2 others with same tags)

---

## Phase 4 – Reliability & Workflow (Optional for MVP)
Goal: Keep adding content without site breaking.

[ ] Show frames and cues if video is unavailable  
[ ] Add “Video unavailable” message  
[ ] Create clip entry template in Notion/Google Sheets for quick data entry  
[ ] Add glossary page for tag definitions

---

## Phase 5 – Nice-to-Have Post-MVP
Goal: Improve browsing and depth after core is stable.

[ ] Advanced filters (multi-tag search)  
[ ] Collections / Playlists (e.g., “Debana Week”)  
[ ] Drill library (dedicated drill detail pages)  
[ ] Comparison mode (side-by-side clips or frame slider)

---

## MVP Rule
You do NOT need every analysis field or perfect tagging at launch — just:
- Video
- A few frames
- A couple tags
Once you can publish 1–2 clips, iterate from there.
