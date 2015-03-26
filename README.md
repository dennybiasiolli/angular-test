# [angular-test](https://github.com/dennybiasiolli/angular-test)

A personal scaffolded base for [AngularJS](http://angularjs.org) projects.

***

## Quick Start

Install Node.js and then:

```sh
$ git clone git://github.com/dennybiasiolli/angular-test
$ cd angular-test
$ sudo npm -g install bower
$ npm install
$ bower install
```

Finally, open `file:///path/to/angular-test/www/index.html` in your browser.


## Purpose

`angular-test` is designed to make life easy by providing a basic framework
with which to kickstart AngularJS projects. It contains a best-practice
directory structure to ensure code reusability and maximum scalability.
angular-test also comes prepackaged with the most popular design frameworks
around: [Twitter Bootstrap](http://getbootstrap.com),
[Angular UI](http://angular-ui.github.io),
[Angular Bootstrap](http://angular-ui.github.io/bootstrap).
All you have to do is clone it and start coding!


## Philosophy

Keep in mind that `angular-test` is not an example of an AngularJS app: this is a
kickstarter. If you're looking for an example of what a complete, non-trivial
AngularJS app that does something real looks like, complete with a REST backend
and authentication and authorization, then take a look at
[`angular-app`](http://github.com/angular-app/angular-app), which does just
that - and does it well.


## Learn

### Overall Directory Structure

At a high level, the structure looks roughly like this:

```
angular-test/
  |- www/
  |  |- app/
  |  |  |- shared/      // acts as reusable components or partials of our site
  |  |  |  |- sidebar/  // example
  |  |  |  |  |- sidebarDirective.js
  |  |  |  |  |- sidebarView.html
  |  |  |  |- article/  // example
  |  |  |  |  |- articleDirective.js
  |  |  |  |  |- articleView.html
  |  |  |- components/  // each component is treated as a mini Angular app
  |  |  |  |- view1/
  |  |  |  |  |- app.js
  |  |  |  |  |- controllers.js
  |  |  |  |  |- directives.js
  |  |  |  |  |- filters.js
  |  |  |  |  |- services.js
  |  |  |  |  |- news.json
  |  |  |  |  |- view1.html
  |  |  |  |  |- view1_articolo.html
  |  |  |  |- view2/
  |  |  |  |  |- view2.js
  |  |  |  |  |- view2.html
  |  |  |- app.js
  |  |  |- controllers.js
  |  |  |- directives.js
  |  |  |- filters.js
  |  |  |- services.js
  |  |- assets/
  |  |  |- libs/
  |  |  |  |- img/      // Images and icons for your app
  |  |  |  |- css/      // All styles and style related files (SCSS or LESS files)
  |  |  |  |- js/       // JavaScript files written for your app that are not for angular
  |  |  |  |- libs/     // Third-party libraries such as jQuery, angularJs, bootstrap, etc.
  |  |- index.html
  |- .bowerrc
  |- bower.json
  |- package.json
```

What follows is a brief description of each entry. Look [scotch.io](https://scotch.io/tutorials/angularjs-best-practices-directory-structure#a-better-structure-and-foundation) to learn more.

- `www/` - our application sources. [Read more &raquo;](src/README.md)
- `app/assets/libs/` - third-party libraries. [Bower](http://bower.io) will install
  packages here.
- `.bowerrc` - the Bower configuration file. This tells Bower to install
  components into the `app/assets/libs/` directory.
- `bower.json` - this is our project configuration for Bower and it contains the
  list of Bower dependencies we need.
- `package.json` - metadata about the app, used by NPM and our build script. Our
  NPM dependencies are listed here.


### Detailed Installation

This section provides a little more detailed understanding of what goes into
getting `angular-test` up and running. Though `angular-test` is really simple
to use, it might help to have an understanding of the tools involved here, like
Node.js and Bower.

For `angular-test` [Node.js](http://nodejs.org) is required. Once you have
Node.js installed, you can simply use `npm` to make it all happen:

```sh
$ npm -g install bower
```

If you're on Linux (like I am) then throw `sudo` in front of that command.  If
you're on Windows, then you're on your own.

Next, you can either clone this repository using Git, download it as a zip file
from GitHub, or merge the branch into your existing repository. Assuming you're
starting from scratch, simply clone this repository using git:

```sh
$ git clone git://github.com/dennybiasiolli/angular-test my-project-name
$ cd my-project-name
```

And then install the remaining build dependencies locally:

```sh
$ npm install
```

This will read the `dependencies` (empty by default) and the `devDependencies`
(which contains our build requirements) from `package.json` and install
everything needed into a folder called `node_modules/`.

There are many Bower packages used by `angular-test`, like Twitter Bootstrap
and Angular UI, which are listed in `bower.js`. To install them into the
`app/assets/libs/` directory, simply run:

```sh
$ bower install
```

In the future, should you want to add a new Bower package to your app, run the
`install` command:

```sh
$ bower install packagename --save-dev
```

The `--save-dev` flag tells Bower to add the package at its current version to
our project's `bower.js` file so should another developer download our
application (or we download it from a different computer), we can simply run the
`bower install` command as above and all our dependencies will be installed for
us. Neat!

Technically, `angular-test` is now ready to go.

However, prior to hacking on your application, you will want to modify the
`package.json` file to contain your project's information. Do not remove any
items from the `devDependencies` array as all are needed for the build process
to work.

