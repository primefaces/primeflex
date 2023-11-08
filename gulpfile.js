'use strict';

var gulp = require('gulp'),
    rename = require('gulp-rename');

gulp.task('copy-package-json', function () {
    return gulp.src(['package-lib.json']).pipe(rename('package.json')).pipe(gulp.dest('dist-lib/'));
});

gulp.task('copy-lib', function () {
    return gulp.src(['styles/lib/**/*', 'README.md', 'LICENSE.md']).pipe(gulp.dest('dist-lib/'));
});

gulp.task('build-lib', gulp.series('copy-package-json', 'copy-lib'));
