[![Build Status](https://travis-ci.com/SamLefebvre/SamLefebvre.github.io.svg?branch=production)](https://travis-ci.com/SamLefebvre/SamLefebvre.github.io)
# Welcome !

This GitHub project is behind my personal website: https://samlefebvre.github.io


Take a look !


## Development

This project is build on [VuePress](https://v1.vuepress.vuejs.org/) which is a Vue-powered Static Site Generator.

### Environment setup
- Install NodeJS
    - `choco install nodejs`
- Install Yarn
    - `choco install yarn`

### Steps

- Clone this repository
- `yarn install`
- `yarn dev`

Build the website
- `yarn docs:build`

## Deployment
- Automatic deployment via travis-cli

## Update
- Update yarn `choco upgrade yarn`
- Update yarn `choco upgrade nodejs`
- Upgrade package.json [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)
- Upgrade packages `yarn upgrade`

Cleanup node_modules
- `rm -r -force node_modules`
- `rm yarn.lock`
- `yarn cache clean`
- `yarn install`

Note for Vuepress 2.0
Use relative path instead of absolute
 
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