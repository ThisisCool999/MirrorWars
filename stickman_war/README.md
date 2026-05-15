# Mirror War

A 2D RTS-lite where both armies wear identical blue cloth — you can't tell your soldiers from the enemy's. Build keeps, recruit warriors, archers, monks and lancers, drop rally flags, and don't slash your own people by mistake.

## Deploy to GitHub Pages

GitHub Pages serves static files only — there is no Node server, so `serve.js` is not used in production. Just push the contents of this folder to your repo.

### Option A: serve from repo root (simplest)

1. Create a public GitHub repo (e.g. `mirror-war`).
2. **Copy the contents** of this folder into the repo root — `index.html`, the `.nojekyll` file, and the `assets/` folder. Do NOT nest them inside an extra `stickman_war/` folder.
3. Commit & push.
4. On GitHub: **Settings → Pages → Source → Deploy from a branch → main → `/` (root) → Save**.
5. Wait ~30 seconds. Visit **`https://<your-username>.github.io/<repo-name>/`**.

### Option B: serve from a `docs/` folder

1. Put everything inside a `docs/` folder in your repo: `docs/index.html`, `docs/.nojekyll`, `docs/assets/…`.
2. Settings → Pages → Source → Deploy from a branch → main → `/docs` → Save.
3. Visit `https://<your-username>.github.io/<repo-name>/`.

### Common causes of 404

| Symptom | Fix |
|---|---|
| The whole site is 404 | The URL must include the repo name. Don't go to `https://USER.github.io/`, go to `https://USER.github.io/REPO-NAME/`. |
| The site loads but images are missing | You nested everything inside an extra folder like `stickman_war/`. Move the contents up one level so `index.html` is at the deploy root. |
| `_filename.png` files don't load | The `.nojekyll` file in this folder is what fixes that. Make sure it got committed (it's hidden — `ls -la` should show it). |
| Got 404 right after enabling Pages | Pages takes 30–60 seconds to build the first time. Refresh the Settings → Pages section to confirm it's live. |
| Repo is private | Pages on private repos requires GitHub Pro / Team. Either make the repo public or upgrade. |

## Run locally

If you just want to play locally instead of deploying:

```bash
node serve.js
# then open http://localhost:8101
```

Opening `index.html` directly via `file://` won't work — browsers block image loads under that scheme.
