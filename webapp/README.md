# BloodyARK WebApp

A production-ready Next.js 15 experience for the BloodyARK community. The interface embraces a red / black futuristic aesthetic, runs exclusively in dark mode, and is fully containerised for repeatable deployments.

## ✨ Highlights

- **Futuristic design** – Orbitron typography, neon-red glow accents, and a dark gradient backdrop applied globally.
- **Focused landing page** – Hero, about, Discord promo, feature grid, and an animated season prize pool block.
- **Servers hub** – Platform-specific join guide (Steam / PS5 / Xbox) followed by hover-animated ASA map cards.
- **Strict dark mode** – Light-theme toggle removed; the UI is locked to the designed palette.
- **Optimised assets** – Custom glowing BA favicon and transparent logo.

## 🛠 Tech Stack

- [Next.js 15](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for lightweight animation
- Docker + docker-compose for production parity

## 🚀 Local Development

```
npm install
npm run dev
```

Visit `http://localhost:3000` in your browser. Next.js hot reloads any changes under `src/`.

### Quality Checks

- `npm run lint` – ESLint (flat config)
- `npm run build` – production compilation

## 🐳 Docker Deployment

```
docker compose up --build -d
```

The compose stack launches the production Next.js app and a MongoDB instance. Stop/recreate with `docker compose down` / `docker compose up` as needed. Logs are available via `docker compose logs -f`.

## 📁 Key Paths

- `src/app/page.tsx` – landing page layout
- `src/app/servers/page.tsx` – servers hub
- `src/components/` – reusable UI blocks (Hero, About, ServerList, ServerGuide, etc.)
- `public/` – static assets including `logo.png` and the glowing `favicon.png`

## 📦 Deployment Notes

- `docker-compose.yml` builds the production bundle (`npm run build`) and serves it via `next start` on port **3000**.
- `.github/workflows/deploy.yml` uses `appleboy/ssh-action` for remote deployments (pull + restart) on an EC2 host.

## 🔐 Environment

Provide a `MONGODB_URI` via `.env` or remote environment configuration for Mongo connectivity. Compose already wires the internal MongoDB container at `mongodb://mongo:27017/bloodyarkdb`.

---

Enjoy the wipe. **Evolve or die.**
