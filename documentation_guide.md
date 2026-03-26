

## One‑page portfolio (minimal, animated, low‑scroll)

This guide turns your resume data into a **single-page** website with **simple animation**, **minimal sections**, and **as little scrolling as possible**.

---

## Steps (do these in order)

1. **Decide the page goal**
   - Primary action: **Contact** (email + call). (No calendar embed unless you add it later.)
   - Secondary action: **Projects** (jump to section).

2. **Use a one-page layout**
   - No `/work`, `/blog`, `/contact`. Everything lives on `/`.
   - Keep sections short. Use **accordions** for Experience + Projects details.

3. **Use your real content (from `nishat_nasir_resume.txt`)**
   - Replace placeholder copy with the exact facts below.

4. **Keep motion minimal**
   - Only: smooth anchor scrolling + small hover lift + subtle fade-in on first view.
   - No heavy libraries.

5. **Reduce scrolling**
   - Put “Experience”, “Projects”, “Skills” into **compact cards**.
   - Use **2-column grids** on desktop.
   - Use **`<details>` accordions** for long text.

6. **Final check**
   - Mobile first: everything readable, buttons reachable, no giant hero padding.
   - One clear CTA stays visible early.

---

## Content to use (authoritative)

**Name**: Nishat Nasir Uddin  
**Title**: Software Engineer  
**Location**: Seoul, South Korea  
**Phone**: +82-010-9780-2701  
**Email**: nasirnishat00@gmail.com  
**GitHub**: github.com/nasir-nishat  
**LinkedIn**: linkedin.com/in/nasir-nishat  

### Experience highlights (compress to bullets)

- **CreateGo.io (Senior Software Engineer)**: Built a no‑code platform in Flutter with a drag‑and‑drop IDE + real-time preview. Built Figma → JSON pipeline using a TypeScript plugin, plus distributed AI agent architecture (OpenAI / Claude / Qwen / Grok), WebSockets, live IDE updates. Built backend with Supabase Edge Functions and BDD automation framework (50+ scenarios) + CI/CD.
- **cogo.xyz (Lead Platform Engineer, May 2023 – Oct 2025, Seoul)**: Multi‑synced retail/e‑commerce platform (POS, admin, kiosk, mobile) using Flutter + Spring APIs. Real-time inventory, consistent UX, mobile app shipped to Play Store/App Store. Co-led Flutter SDK integration and performance improvements.
- **finenex.net (Frontend Engineer, Jan 2022 – Apr 2023, Seoul)**.
- **AI/ML Chatbot for Mental Health (Mar 2023 – Jun 2023)**: BERT/GPT‑3 chatbot; data curation and training; reliable context-aware responses.

### Projects (keep 2 only to reduce scroll)

- **My Top Goals**: AI-driven accountability coaches with multiple personas; daily missions; personalized guidance.
- **Mehenot**: Local job & service marketplace in Bangladesh; skill-based matching; secure payments; early-access incentives; rapid adoption.

### Awards / Education (chips)

- Sejong University Excellence Scholarship  
- Sejong University Internship Scholarship  
- Undergraduate Student Research Award  
- **Sejong University — B.S. in CSE (2019–2023), Seoul**

### Skills (chips)

Dart, TypeScript, Flutter, Next.js, React, PostgreSQL, MongoDB, Supabase, Firebase, AI agent integrations

---

## One-page structure (low scroll)

Use this section order (it’s designed to stay short):

1. **Top bar (sticky)**
   - Left: name
   - Right: links (`#work`, `#experience`, `#skills`, `#contact`)
   - CTA button: **Contact**

2. **Hero (compact)**
   - One strong line: “Software Engineer building no‑code platforms and AI agents.”
   - 1 short sentence supporting line
   - Buttons: **Projects** (scroll) + **Email**
   - Small row: Seoul + key stack (Flutter / TypeScript / Supabase)

3. **What I build (3 cards)**
   - No‑code IDEs
   - AI agents + realtime collaboration
   - Multi-platform apps (mobile/web/desktop)

4. **Work (2 cards)**
   - My Top Goals
   - Mehenot
   - Each card has a **“Details” accordion** (optional) so the page stays short.

5. **Experience (accordion list)**
   - CreateGo.io
   - cogo.xyz
   - finenex.net
   - Mental health chatbot research

6. **Skills + Awards (chips)**
   - Split into two compact blocks.

7. **Contact (simple, no embed)**
   - Email + phone + GitHub + LinkedIn

---

## Animation rules (minimal)

- **Scroll**: `scroll-behavior: smooth;`
- **Reveal**: small `opacity + translateY` on first view (IntersectionObserver, tiny JS)
- **Hover**: cards lift `translateY(-2px)` + subtle border glow

That’s it. Keep it lightweight.