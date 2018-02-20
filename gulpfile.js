var gulp = require('gulp');
var mjml = require('gulp-mjml');
var browserSync = require('browser-sync').create();

gulp.task('mjml', function() {
    return gulp
        .src('./*.mjml')
        .pipe(mjml())
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['mjml'], function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./*.mjml', ['mjml']);
});
