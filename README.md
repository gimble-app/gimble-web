# Gimble

https://gimble-app.firebaseapp.com/

## Table of Contents

- [Getting started](#getting-started)
- [Running the app](#running-the-app)
- [Running tests](#running-tests)
- [Deploying the app](#deploying-the-app)
- [Installing packages](#installing-packages)
- [Coding standards](#coding-standards)
- [Visual design](#visual-design)

## Getting started
Some of the basics you will need to install:
- This is a React app, so you need to have [node](https://nodejs.org).
- We use [Yarn](https://yarnpkg.com) for package management.

## Running the app
`yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Running tests
We use [Jest](https://facebook.github.io/jest/) as the test runner.

`yarn test`
Launches the test runner in watch mode and runs tests. Every time you save a file, it will re-run the tests.

### Code coverage
We use the built in coverage provided by Jest.

## Deploying the app
`yarn run build`

Builds for production and puts everything in the `build` folder.

We use [Firebase hosting](https://firebase.google.com/docs/hosting/). All of the configuration is in firebase.json.

`firebase deploy`
Manually deploys the site, copying the assets from the build folder.
Nb. Usually we don't need to run this as it is part of the pipeline.

### Pipeline
We use [Travis](travis-ci.org). All the configuration is in travis.yml.

## Installing packages
```
yarn add <your package name>
```

Or for development dependencies:
```
yarn add --dev <your package name>
```

## Coding Standards
- Tests should be written with the `.test.js` suffix and colocated with their source files.

## Visual design
We currently use [Material UI](https://material-ui-next.com/).
