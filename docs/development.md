# Setting up a development environment

The first thing to do is clone the repo:

```
git clone https://github.com/jsonnull/aleamancer.git
cd aleamancer
```

We use yarn to manage dependencies. Run it to get all dependencies needed to
build and test the project:

```
yarn
```

The `package.json` contains entries in `scripts` for building, testing,
linting, and type-checking. These four steps are run on CI as well—all pull
requests must pass CI before being merged, so keep these in mind during
development.

# Development workflow

The webpack build server is started using `npm run start`. This will run
`webpack-dev-server` and make the app available at localhost:8080.

Unfortunately, hot-module-reloading is broken in recent versions of
`react-redux`, so manual refreshes may be required.
