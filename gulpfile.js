'use strict';

var gulp = require('gulp');

gulp.task('copy-lib', function() {
    return gulp.src([
        '_sass/lib/**/*',
    ])
	.pipe(gulp.dest('dist/'));
});
