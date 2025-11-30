Deployment instructions
=======================

1) Replace placeholders in `package.json`:

   - Open `package.json` and replace `<YOUR_GITHUB_USERNAME>` and `<REPO_NAME>` in the `homepage` field with your GitHub username and repository name.

2) Create a GitHub repository (web UI) or with `gh` CLI:

   - Web: create a new repository on https://github.com (name it the same as `<REPO_NAME>`)
   - CLI (optional): `gh repo create <REPO_NAME> --public --source=. --remote=origin --push`

3) From PowerShell, initialize and push (if not already a git repo):

```powershell
cd "C:\Users\Abhishek Negi\Downloads\DemoLearning-main\DemoLearning-main"
git init
git add .
git commit -m "chore: prepare project for GitHub Pages deploy"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<REPO_NAME>.git
git push -u origin main
```

4) What happens next

   - The workflow `.github/workflows/deploy.yml` triggers on pushes to `main`.
   - It runs `npm ci`, `npm run build` and then deploys `build/` to the `gh-pages` branch.
   - Your site will be available at `https://<YOUR_GITHUB_USERNAME>.github.io/<REPO_NAME>/` (may take a minute).

5) Optional

   - If you prefer the `gh-pages` npm package instead of Actions, install it locally:
     `npm install --save-dev gh-pages` and add deploy scripts to `package.json`.
   - You can also enable Pages in repository Settings → Pages and choose `gh-pages` branch if needed.
