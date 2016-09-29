var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('reload', browserSync.reload);

gulp.task('watch-files', function() {
    gulp.watch([
        './client/src/**/*.js',
        './client/*.html'
    ], ['reload']);
});

gulp.task('init', function() {
    browserSync({
        server: ['client', 'bower_components'],
        browser: 'Chrome'
    });
});

gulp.task('default', ['watch-files', 'init']);

