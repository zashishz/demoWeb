let gulp = require('gulp');
let watch = require('gulp-watch');
let browserSync = require('browser-sync').create();

//Watcher
gulp.task('watch', () => {

    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });

    watch('./app/index.html', () =>  browserSync.reload());

    watch('./app/assets/styles/**/*.css', () => gulp.start('cssInject'));
});

gulp.task('cssInject', ['styles'], () => {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(browserSync.stream());
})