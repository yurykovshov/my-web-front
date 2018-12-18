# My personal website front pages

[![Build Status](https://travis-ci.org/yurykovshov/my-web-front.svg?branch=master)](https://travis-ci.org/yurykovshov/my-web-front)

Based on https://github.com/romariolopezc/elm-webpack-4-starter

## Serve locally

```sh
yarn dev
```

* Access app at `http://localhost:8080/`

To analyse your elm code, look for deficiencies and apply best practices, use:

```sh
yarn elm-analyse
```

Access the web client at `http://localhost:3000`

## Build & bundle for production

There are presets related to production.
Presets:

* `compress`: Use WebpackCompressionPlugin
* `analyze`:  Use WebpackBundleAnalyzer

```sh
yarn prod
yarn prod:compress
yarn prod:analyze
```

## Deploying the App

To deploy our app, we are going to use the free service (for personal use) [Netlify](https://www.netlify.com/)

### Features on Netlify

* Automatic SSL Certificate
* Serves gzipped files from our build ;)
* Continuous deployment on selected Branches with preview

### Steps

1. Create an account [here](https://app.netlify.com/signup)
2. Download the CLI `$ yarn global add netlify-cli`
3. Login `$ netlify login` and it will open the browser for you to authorize the CLI
4. Deploy your site with `$ netlify deploy --prod`
5. Open the `Live URL` from the command output
6. Site live and ready.
