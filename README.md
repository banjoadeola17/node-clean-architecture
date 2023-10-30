# Raw Template

> RESTful api with Domain Driven Design

## Development Environment Setup

1.  Make sure you have `nvm`, node `v12.18.3` or `LTS` version of node installed
2.  Install `yarn` - `npm install -g yarn`.

## Documentation

## Docker support

**Prerequisites**

1. [Docker](https://www.docker.com/products/docker-engine) Community Edition v17 or higher

```sh
$ docker build -t raw-template  .
$ docker run -p 30041:30041 --env-file=.env node-clean-architecture
```

Access `http://localhost:<PORT>` and you're ready to go!

> http://localhost:30041/

## Quick Start

1. Clone the repository with `git clone`
2. Install the dependencies with [Yarn](https://yarnpkg.com/en/docs/install/)
4. Run the application in development mode with `yarn start:dev:rs`
5. Access `http://localhost:<PORT>` and you're ready to go!
   > http://localhost:30007

## Overview

- uses Node.js > v9
- written using ES6
- uses Yarn for package dependency management
- uses [Airbnb JavaScript Style](https://github.com/airbnb/javascript)
- uses `Mongoose` as ODM
- Filename convention - `camelCase`

## CLI Tools

- `yarn build` - build codebase for production
- `yarn start:dev` - start the application in development mode
- `yarn start:dev:rs` - start the application in development mode with nodemon for automatic server restart on code change
- `yarn test` - run Unit tests
- `yarn lint` - lint codebase using Airbnb style
- `yarn lint:fix` - fix code according to Airbnb style

### Databases & Messaging

- [Mongodb](https://www.mongodb.com) - Main datastore

## Some Tech

- [Express](https://expressjs.com/) - Node Framweork
- [Awilix](https://github.com/jeffijoe/awilix) - dependency resolution support powered by `Proxy`
- [Nodemon](https://nodemon.io/) - Use for development file reload.
- [CORS](https://github.com/expressjs/cors) - a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [Compression](https://github.com/expressjs/compression) - Node.js compression middleware.
- [Http-status](https://github.com/adaltas/node-http-status) - Utility to interact with HTTP status code.
- [Winston](https://github.com/winstonjs/winston) - A multi-transport async logging library for node.js.
- [Morgan](https://github.com/expressjs/morgan) - HTTP request logger middleware for node.js
- [Lodash](https://lodash.com/) - A modern JavaScript utility library delivering modularity, performance & extras
- [Mongoose](https://mongoosejs.com/) - Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
- [Chance](https://chancejs.com/) - generate massive amounts of fake data in the browser and node.js

- [Moment](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript.
- [Moment-timezone](https://momentjs.com/timezone/) - Parse and display dates in any timezone.

### Tests

- [mocha](https://mochajs.org/) - JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun
- [chai](http://chaijs.com/) - a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
- [supertest](https://github.com/visionmedia/supertest) - HTTP assertions made easy via superagent.
- [cross-env](https://github.com/kentcdodds/cross-env) - makes it so you can have a single command without worrying about setting or using the environment variable properly for the platform

