let mix = require('laravel-mix');

const bSync = process.env.BROWSER_SYNC;

mix
    .js('src/js/app.js', 'js/')
    // .js('src/js/another-js-file.js', 'js/')
    .sass('src/scss/app.scss', 'css/')
    //.sass('src/scss/another-sass-file.scss', 'css/')
    .setPublicPath('public');

// return webpack env

if (bSync) {
    mix.browserSync({
        serveStatic: [{
            dir: './public'
        }],
        files: [
            './public/**/*.html',
            './public/css/**/*.css',
            './public/js/**/*.js',
            './src/scss/**/*.scss',
            './src/js/**/*.js'
        ],
    })
}
