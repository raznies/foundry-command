# Foundry Command — Architecture

## 1. Overview
A high-performance PWA for rznies to monitor the Foundry Squad.
Style: Dark mode, Apple-esque, minimal, motion-heavy.

## 2. Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + Framer Motion
- **Backend/DB:** Appwrite (Pro)
- **Deployment:** Vercel (linked to GitHub `raznies/foundry-command`)

## 3. Data Schema (Appwrite)
### Collections:
- **Agents:** `id`, `name`, `status` (Active, Idle, Thinking), `lastHeartbeat`.
- **Tasks:** `id`, `title`, `description`, `assignee`, `status`, `priority`.
- **Logs:** `id`, `agentId`, `message`, `timestamp`.

## 4. Execution Plan
1. **Local Setup:** Initialize repository via Daytona.
2. **Backend Setup:** Scripted Appwrite initialization (Collections/Indexes).
3. **Frontend:** Core UI components (Agent Status Cards, Task Board).
4. **Integration:** Connect to Appwrite SDK.
