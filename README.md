# Bootstrap Build Mix

Bootstrap Build Mix is a simple bootstrap build pipeline using Laravel Mix.

## Installation
`npm install`
 

## Build
### Dev
To build app.scss and app.js, run `npm run build`.
You may be asked to run `npm run build` twice the first time.

To watch for changes to app.js and app.scss, run `npm run watch` this command will also run browserSync.
If you would like to run watch without browserSync `npm run build -- --watch`.

### Production
To build for production, run `npm run build:production`. This will minify css and js.

### Customizing
There is an example of how Bootstrap scss values can be overridden in the `src/scss/app.scss` files.

You can change your input file names and output folders in `webpack.mix.js` as well as add your own custom sass and
js files.

You can remove Bootstrap styling that you don't need by commenting out modules in `src/scss/_bootstrap.scss`.



