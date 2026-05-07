# crime-investigation

This repository is configured to deploy to **GitHub Pages** using a GitHub Actions workflow.

## Deployment

- Workflow file: `.github/workflows/deploy-pages.yml`
- Trigger: push to `main` (or manual `workflow_dispatch`)
- Published content: repository root (includes `index.html`)

After merging to `main`, enable Pages in repository settings (if not already enabled):

1. Go to **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Save
