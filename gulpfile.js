var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

gulp.task('reload', browserSync.reload);

gulp.task('bundle-js', function() {
    return browserify('./client/src/modules/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./client/'));
});

gulp.task('rebuild-js', ['bundle-js'], browserSync.reload);

gulp.task('watch-files', function() {
    gulp.watch([
        'client/*.html',
        'client/assets/css/*.css'
    ], ['reload']);
    gulp.watch(['client/src/**/*.js'], ['rebuild-js']);
});

gulp.task('init', function() {
    browserSync.init({
        server: ['client/'],
        browser: 'Chrome'
    });
});

gulp.task('default', ['bundle-js', 'watch-files', 'init']);