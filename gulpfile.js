var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');

gulp.task('default', function(){
	return gutil.log('Gulp is working');
});

gulp.task('watch', function(){
	gulp.watch('C:/Users/Administrator/Desktop/CinProj/client/public/css/*.scss', ['build-css']);
});

gulp.task('build-css', function(){
	return gulp.src('client/public/css/*.scss').pipe(sass()).pipe(gulp.dest('client/public/css'));
});