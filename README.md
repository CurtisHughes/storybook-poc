# Storybook POC
Testing shared component functionality. Most of the functionality is derived from [Sharing React components between separate projects, self hosting with git, installing with yarn/npm](https://medium.com/@Powderham/sharing-react-components-between-separate-projects-self-hosting-with-git-installing-with-yarn-npm-d3275b64239c)
and [this one](https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220)

### Local Development
Run the following script to develop locally:
```bash
$ npm start
```
You can build the production bundle locally with the following command (it will be placed in a `dist` folder at the root of the project):
```
$ npm run build
```

### Installation
The npm cli provides functionality for installing packages directly from a git remote host https://docs.npmjs.com/cli/install. 
The following command will run the `prepare` script from the `package.json` file and then pull down everything from the git repository (excluding items listed in `.npmignore`):
```
$ npm install --save git+ssh://git@github.com:CurtisHughes/storybook-poc.git\#master
```

```javascript
// package.json
// ...
"dependencies": {
    "react": "16.1.1",
    "react-dom": "16.1.1",
    "storybook-poc": "git+ssh://git@github.com/CurtisHughes/storybook-poc.git\#master",
    // ...
}
//...    
```

Note: You can also specify specific semantic versioning using the [semver](https://github.com/npm/node-semver) module and the `#semver:<semver>` option instead of `#<branch>`

### Example Usage
```javascript
import { Component } from 'storybook-poc';
// ...
const AnotherComponent = (props: Props) => (
  <div>
    <Component />
  </div>
// ...
```

### Webpack
The project utilizes [webpack](https://webpack.js.org/) in order to build and compile shared components into a single distribution file. There are a couple of specific configurations related to this process:
```javascript
{
  // ...
  output: {
    path: dist,
    filename: 'app.bundle.js',
    libraryTarget: 'umd', // <-- This exposes your library under all the module definitions, allowing it to work with CommonJS, AMD and as global variable.
    umdNamedDefine: true // <-- Will name the AMD module of the UMD build. Otherwise an anonymous define is used
  },
  // ...
}
```
