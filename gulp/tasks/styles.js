let gulp = require('gulp');
let postcss = require('gulp-postcss');
let autoPrefixer = require('autoprefixer');
let postcssVars = require('postcss-simple-vars');
let postcssNested = require('postcss-nested');
let postcssImport = require('postcss-import');
let postcssMixins = require('postcss-mixins');

gulp.task('styles', () => gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([postcssImport, postcssMixins, postcssVars, postcssNested, autoPrefixer]))
    .on('error', function (err){
        console.log(err.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles')));