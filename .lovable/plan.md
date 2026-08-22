# Full CV Integration

Bring the entire updated resume onto the portfolio, using the full CV bullet wording, and serve the new PDF from the download button.

## Content updates

**Hero / About**
- Replace the intro copy with the new Profile Summary (third-year CS & Business Analytics student; SSD cache research at IIT Ropar; operations and QA work).
- Education entries expanded with their full bullets: FLAME University (full merit scholarship, GPA 7.65/10, formal verification with SAT/TLA+/Alloy, classification & clustering with PCA, LPG-era public policy term paper, Dot Slash Club) and Jawahar Navodaya Vidyalaya, Ganderbal (2017–2024, Atal Tinkering Labs coordination).

**Experience** — four roles in chronological order, each with its full bullets:
- IIT Ropar, Research Intern, SSD Systems (May 2026 – Present)
- Discover India Program, Taraksi silver filigree research (Sept 2025 – April 2026)
- PartyHub, QA Testing Intern (Jul 2025 – Aug 2025)
- Goonj, Research and Operations Intern (May 2025 – Jul 2025)

**Selected Works (Projects)** — three project cards with full descriptions and links:
- Cache Performance Benchmark Suite (C++, perf_event_open, RDTSCP) → GitHub repo
- IPL Data Mining (Python, analysis, visualization) → GitHub repo
- Personal Website & Portfolio (HTML/CSS/JS, Vercel) → live site

**Skills** — regrouped into the CV's four categories: Programming & Tools; Data & Systems; Soft Skills; Languages (English, Hindi, Urdu, Kashmiri).

**New: Service** section — FLAME University Karta Initiative, University Leader (Aug 2024 – Present) with both bullets.

**New: Writings** section — Deccan Herald "Lost in Instruction" and Kashmir Poetics contributions, both as clickable links, plus the closing line on research synthesis and communication.

Both new sections get nav entries in the existing scholarly naming style and the same scroll animations as the rest of the site.

## CV download

Replace `public/Sheikh_Mohsin_CV.pdf` with the newly uploaded `SheikhMohsinResume.pdf` so the hero download button serves the current CV. The button behaviour and filename stay unchanged.

## Technical notes

- Edits stay in `src/components/` (`Hero.tsx`, `About.tsx`, `Experience.tsx`, `Projects.tsx`, `Skills.tsx`, `Navigation.tsx`, `Footer.tsx`) plus two new components `Service.tsx` and `Writings.tsx` wired into `src/pages/Index.tsx`.
- Existing dark academia tokens, serif typography, and framer-motion patterns are reused; no design-system or backend changes.
