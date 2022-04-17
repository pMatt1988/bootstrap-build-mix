# Bootstrap Build Mix

Bootstrap Build Mix is a simple bootstrap build pipeline using Laravel Mix.

## Installation
`npm install`

## Usage
To build app.scss and app.js, run `npm run build`.
You may be asked to run `npm run build` twice the first time.

To watch for changes to app.js and app.scss, run `npm run watch` this command will also run browserSync.
If you would like to run watch without browserSync `npm run build -- --watch`.

There is an example of how Bootstrap scss values can be overridden in the `src/scss/app.scss` files.

You can change your input file names and output folders in `webpack.mix.js` as well as add your own custom sass and
js files.



