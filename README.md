[![status](https://github.com/SamLefebvre/SamLefebvre.github.io/actions/workflows/vuepress-deploy.yml/badge.svg)](https://github.com/SamLefebvre/SamLefebvre.github.io/actions/workflows/vuepress-deploy.yml)

# Welcome !

This GitHub project is behind my personal website: https://samlefebvre.github.io


Take a look !


## Development

This project is built with [VuePress 2](https://v2.vuepress.vuejs.org/), a Vue-powered static site generator.

### Environment setup

- Install [Node.js](https://nodejs.org/) (LTS recommended). On Windows with Chocolatey: `choco install nodejs`
- npm is included with Node.js; no separate package manager is required.

### Steps

- Clone this repository
- `npm install`
- `npm run dev`

Build the site:

- `npm run docs:build`

## Deployment

- Automatic deployment via GitHub Actions (`npm ci` and `npm run docs:build` on push to `production`).

## Update

- Upgrade Node.js when needed: e.g. `choco upgrade nodejs` (Windows / Chocolatey)
- Bump versions in `package.json` (e.g. with [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens))
- Apply updates: `npm update` (within semver ranges) or adjust versions manually, then `npm install`

Cleanup and reinstall:

- Remove `node_modules` (PowerShell: `Remove-Item -Recurse -Force node_modules`)
- Optional: delete `package-lock.json` for a full dependency re-resolve
- `npm cache clean --force`
- `npm install`

Note for VuePress 2.0: use relative paths instead of absolute in Markdown where possible.

<!-- relative path -->
[Home](../README.md)  
[Config Reference](../reference/config.md)  
[Getting Started](./getting-started.md)  
<!-- absolute path -->
[Guide](/guide/README.md)  
[Config Reference > markdown.links](/reference/config.md#links)  
<!-- URL -->
[GitHub](https://github.com)  

dans liens markdown => link avec .md  
dans liens RouterLinks => links avec .html
