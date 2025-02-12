# htmlCOde
some Problems at work

下面的内容请忽略！！~

```
# change directory. 
cd light-blue-angular2-seed 

# install the repo width 
npm  install 

# start the server
npm start

# use Hot Module Replavement
npm run server:dev:hmr
```  
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

# Table of Contents
* [File Structure](#file-structure)
* [Getting Started](#getting-started)
	* [Dependencies](#dependencies)
	* [Installing](#installing)
	* [Running the app](#running-the-app)
* [Configuration](#configuration)
# File structure
We use the component approach in Light Blue App. This is the new standard for developing Angular apps and a great way 
to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained 
app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class.
 Here's how it looks:
```
light-blue/angular2-seed/
 ├──config/                    * our configuration
 |   ├──helpers.js             * helper functions for our configuration files
 │   ├──webpack.dev.js         * our development webpack config
 │   ├──webpack.prod.js        * our production webpack config
 │
 ├──src/                       * our source files that will be compiled to javascript
 |   ├──main.browser.ts        * our entry file for our browser environment
 │   │
 |   ├──index.html             * Index.html: where we generate our index page
 │   │
 |   ├──polyfills.ts           * our polyfills file
 │   │
 |   ├──vendor.ts              * our vendor file
 │   │
 │   ├──app/                   * WebApp: folder
 │   │   └──app.ts             * App.ts: a simple version of our App component components
 │   │
 │   └──assets/                * static assets are served here
 │       ├──icon/              * our list of icons from www.favicon-generator.org
 │       ├──robots.txt         * for search engines to crawl your website
 │       └──humans.txt          * for humans to know who the developers are
 │
 │
 ├──tslint.json                * typescript lint config
 ├──typedoc.json               * typescript documentation generator
 ├──tsconfig.json              * config that webpack uses for typescript
 ├──package.json               * what npm uses to manage it's dependencies
 └──webpack.config.js          * webpack main configuration file

```

# Getting Started
## Dependencies
What you need to run this app;
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v4.x.x`(or `v5.x.x`) and NPM `3.x.x`+
> If you have `nvm` installed, which is highly recommended(`brew install nvm`) you can do a `nvm install --lts && nvm use` in `$` to run with the latest Node LTS. You can also have this `zsh` done for you [automatically]

## Installing
* `npm install` to install all dependencies
* `npm run server` to start the dev server in anther tab  

### server 
```bash
# develoment
npm run server
# production
npm run build:prod
npm run server:prod
```

## Other commands 

### build files
```bash
# development
npm run build:dev
# production
npm run build:prod
# Aot
npm run build:aot
```

### hot module replacement
```bash
npm run server:dev:hmr
```

### watch and build files
```bash
npm run watch
```

# Configuration
Configutation files live in `config/`. We are currently using wepack.

# Aot Don'ts
The following are some things that will make Aot compile fail.

- Don't use require statements for your templates or styles, use styleUrls and templateUrls, the angular2-template-loader plugin will change it to require at build time.
- Don't use default exports.
- Don't use form.controls.controlName, use form.get(‘controlName’)
- Don't use control.error?.someError, use control.hasError(‘someError’)
- Don't use functions in your providers, routes or declarations, export a function and then reference that function name
- Inputs, Output, View or Content Child(ren), Hostbindings, and any field you use form the template or annotate for Angular should be public

# Types 
> When you include a module that doesn't include Type Definitions inside of the module you can include external Type Difinitions with @types

i.e, to have youtube api support, run this command in terminal:
```shell
npm i @tyees/youtube @types/youtuboe @tyes/api @types/gapi.youtube
```

In some sases where your code editor doesn's support Typescript 2 yet or these types weren't listed in ```tsconfig.json```, add these to **"src/custom-typings.d.ts"** to make peace with the compile check:
```es6
import '@types/gapi.youtube';
import '@types/gapi';
import '@types/youtube';
```

## Custom Type Definitions
When including 3rd party dodules you also need to include the tye definition for the module if they don't provide one within the module. You can try to install it with @types

```
npm install @types/node
npm install @types/lodash
```

If you can't find the type definition in the registry we can make an ambient definition in this file for now. For example

```typescript
declare module "my-module" {
	export function doesSomething(value: string): string;
}
```

If you're prototyping and you will fix the types laster you can also declare it as type any

```typescript
declare var assert: any;
declare var _: any;
declare var $: any;
```

If you're importing a module that uses Node.js modules which are CommonJS you need to import as
```typescript
import * as _ from 'lodash';
```

# Support, Question, or Feedback
> Contact us anytime for anything about this Light Bule or Angular 4 consulting.

* [Twitter: @Flatlogic](https://twitter.com/Flatlogic)
* [Email: support@flatlogic.com](mailto:suppert@flatlogic.com)

# License
[Wrapbootstrap licence](http://support.wrapbootstrap.com/knowledge_base/topics/usage-licenses).

Light Blue 3.7.0 is based on [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter).
