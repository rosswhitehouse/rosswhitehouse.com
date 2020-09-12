---
slug: "rollup-vs-gulp"
date: "2020/09/11"
title: "Rollup Vs Gulp"
type: "post"
---
This week at work I needed to implement a _Javscript compiler_ so we can use some ES6 features and minify some script files. Also SCSS would be a nice bonus!

## Context

Our help centre [link](help.hotjar.com) is a Zendesk Guide Theme. This works a bit like WordPress, in that you upload a theme with some template files, CSS and JS and Zendesk fills in the gaps. Similar to WordPress, updating the theme normally means zipping it locally, going to the URL and uploading it. To add an extra layer of complexity, we can only have 10 themes at once, so every time we upload one, we need to delete one.

As you can imagine, all of this is a _pain in the butt_ for the devleoper.

Over the last couple of months I've added a _Gitlab CI/CD pipeline_ to lint, zip and deploy the theme without the developer having to do anything. This all went well, and the next step is to get some compilation so we can use lovely arrow functions, let and const, and all that loveliness.

## First go: Rollup

At this time I was also learning to use Svelte (shoutout Scott Tolinski and his [excellent Svelte Series](https://www.leveluptutorials.com/tutorials/svelte-for-beginners)), and Svelte uses Rollup to compile. So here's me thinking this must be the new hotness, let's give it a bash.

First thing we need is a bunch of npm packages:
* `rollup`
* `rollup-plugin-terser` - We'll use [Terser](https://github.com/terser/terser) for compression.
* `@rollup/plugin-babel` - [Babel](https://babeljs.io/) is probably the most popular JS compiler around.
* `@babel/core` - The Babel compiler core.
* `@babel/preset-env` - This is a preset for Babel so we can use ES6.
* `globby` - We need this so we can use globs like `src/**/*.js`.

Here's our `rollup.config.js`:
```javascript
import { sync } from 'globby';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const configs = sync('src/**/*.js').map(inputFile => ({
    input: inputFile,
    output: {
        dir: './assets/js',
        format: 'cjs'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
            presets: [
              [
                '@babel/preset-env',
                {
                    modules: false,
                    targets: {
                        ie: '10'
                    }
                }
              ]
            ]
        }),
        terser()
    ]
}));

export default configs;
```

Let's talk Pros and Cons.

_Pro:_ It works. Probably the best pro we could as for.

_Con:_ It's a bit fiddly to figure out initially.

_Pro:_ It's just Javascript, I can read it. I even used an `array.map`.

_Con:_ There wasn't a super easy way to do a many-to-many compile. It seems the default way is to compile a Javascript file from `src/main.js` to `assets/main.js`, and if we want to compile a second file, we need another config, with it's own plugins. I suppose this would be useful if you wanted different plugins for each config.

There is a [multi-entry](https://github.com/rollup/plugins/tree/master/packages/multi-entry) plugin, but that only allows multiple entry points to a single output, whereas what I needed was multiple entries that map to multiple exits.

I used a workaround here with _Globby_. It returns an array of the files, which we loop over and have a config for the same one. It's a bit annoying not to have an easy way to compile every file in a directory to a similarly-named file in another directory. This feels a bit hacky.

I'd love to find out I'm wrong about this. _Let me know_ in comments, on Twitter or wherever.

That's why I tried something different.

## Second go: Gulp

We need a very similar babel setup here, but we need some different stuff to get Gulp going.

* `gulp` - core files.
* `gulp-babel` - Babel loader.
* `gulp-uglify` - Uglifies files. I tried `gulp-minify`, but that likes to give you a regular `.js` file, and a `.min.js` file, but all I really need is a like-for-like.
* `gulp-sass` - SCSS compiler.
* `node-sass` - Library that provides bindings for the CSS compiler

And here's our `gulpfile.js`:

```javascript
const { watch, src, dest, series, parallel } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

var sass = require('gulp-sass');
sass.compiler = require('node-sass');

function js() {
    return src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .pipe(dest('assets'))
}

function scss() {
    return src('src/scss/*.scss')
        .pipe(sass()).on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(dest('assets'));
}

exports.default = function() {
    series(scss, js);
    console.log('Watching src/scss and src/js');
    watch('src/scss/*scss', scss);
    watch('src/js/*js', js);
}

exports.build = parallel(scss, js);
```

There's a couple of functions, one for JS compilation and one for SCSS compilation. Then by default we're watching all of the files, and running the compilation functions when that happens.

There's also a build step that we need for the pipeline to compile on-demand.

_Pro:_ It's very straightforward, and I get a many-to-many compilation like I wanted.

_Pro:_ The SCSS is right in there, as well as a watcher so we can develop locally and have it build on the fly.

_Con:_ There's a barrier to entry here that you need to use Gulp's functions like `pipe`, `watch`, `series` and `parallel`. they're pretty self-explanatory and their docs are great, so it's not _that_ much of a problem.

## The Decision

We went with _Gulp_ in the end. It's simpler, and did exactly what we want right out of the box.

I think I was hesitant as I hadn't used Gulp in a long time, and Rollup seemed newer and sexier. Sometimes, you gotta go with what you know!