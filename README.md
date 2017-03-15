# mocha playground

two ways of running our test:

1. in the browser via the testrunner.html
2. in nodejs (no native DOM support - but we could create a virtual DOM with jsdom):  npm t

- mocha --require "babel-register" is needed to tell mocha to run babel before running the tests
- mocha --require "ignore-styles" is needed to tell mocha to ignore any webpack css includes within our *.js files
- "jsdom-global" to enable DOM support in our tests (https://github.com/rstacruz/jsdom-global)
- using mocha with es6 imports, we need babel-register, as well as babel and a preset like: babel-preset-latest. the preset must be specified within .babelrc
- if we want to run our test in the browser instead of nodejs, we have to include a js file that is transpiled to es5 and also make sure, that we have a module loader in place (e.g. systemJS)