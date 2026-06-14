# WBBDocs

A multi-app documentation portal built with [Docusaurus](https://docusaurus.io/), hosted on GitHub Pages. Each app has its own independent docs site (navbar, sidebar, favicon, search) under a shared domain.

**Live site:** https://vincenttran99.github.io/WBBDocs/

---

## Structure

```
WBBDocs/
├── apps/
│   ├── portal/     → Landing page at /WBBDocs/
│   ├── app1/       → App 1 docs at /WBBDocs/app1/
│   └── app2/       → App 2 docs at /WBBDocs/app2/
├── scripts/
│   └── build-all.js   → Builds all apps into dist/
└── .github/workflows/deploy.yml   → Auto-deploy on push to main
```

---

## Getting Started

**Prerequisites:** Node.js 22+

```bash
# Install all dependencies
npm install

# Start a specific app locally (e.g. app1)
npm run start:app1

# Build all apps
npm run build
```

---

## Adding a New App

1. **Scaffold the app:**
   ```bash
   npx create-docusaurus@latest apps/my-app classic --typescript
   ```

2. **Update `apps/my-app/docusaurus.config.ts`:**
   - Set `baseUrl: '/WBBDocs/my-app/'`
   - Set `url: 'https://vincenttran99.github.io'`
   - Disable blog: `blog: false`
   - Add `routeBasePath: '/'` to the docs preset
   - Add the local search plugin (copy from an existing app)

3. **Update `apps/my-app/docs/intro.md`** — add `slug: /` to frontmatter:
   ```markdown
   ---
   sidebar_position: 1
   title: Introduction
   slug: /
   ---
   ```

4. **Register the app in the portal** — add an entry to the `APPS` array in `apps/portal/src/pages/index.tsx`:
   ```tsx
   { id: 'my-app', name: 'My App', description: 'Documentation for My App' },
   ```

5. **Replace the app's favicon and logo** — put your files in `apps/my-app/static/img/`:
   - `favicon.ico`
   - `logo.svg`

6. **Commit and push to `main`** — GitHub Actions will auto-build and deploy.

---

## Replacing Icons for an Existing App

Each app has its own `static/img/` directory. Replace these files:

| File | Usage |
|---|---|
| `apps/<name>/static/img/favicon.ico` | Browser tab icon |
| `apps/<name>/static/img/logo.svg` | Navbar logo |

---

## Deployment

Deploys automatically to GitHub Pages on every push to `main`.

**First-time setup** — enable GitHub Pages on the repository:
> Settings → Pages → Source = "Deploy from a branch" → Branch = `gh-pages` → Save

The `gh-pages` branch is created automatically on the first successful workflow run.

To trigger a deploy manually:
> GitHub → Actions → "Deploy to GitHub Pages" → Run workflow

---

## Local Development & Testing

### 1. Dev server — hot-reload (dùng khi viết docs)

```bash
npm run start:portal   # → http://localhost:3000/WBBDocs/
npm run start:app1     # → http://localhost:3000/WBBDocs/app1/
npm run start:app2     # → http://localhost:3000/WBBDocs/app2/
```

Thay đổi file `.md` hay `.tsx` tự reload ngay. **Search không hoạt động ở dev mode** — chỉ hoạt động sau khi build.

### 2. Build + serve từng app (test search)

```bash
npm run build:app1
npm run serve --workspace=apps/app1   # → http://localhost:3000/WBBDocs/app1/
```

### 3. Serve toàn bộ `dist/` (giống GitHub Pages nhất)

```bash
npm run serve   # build tất cả apps rồi mở http://localhost:4000/WBBDocs/
```

Đây là cách chính xác nhất để kiểm tra trước khi push — cùng cấu trúc path với GitHub Pages:

| URL | Nội dung |
|---|---|
| `http://localhost:4000/WBBDocs/` | Portal |
| `http://localhost:4000/WBBDocs/app1/` | App 1 docs |
| `http://localhost:4000/WBBDocs/app2/` | App 2 docs |
