var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('gulp-sass', function () {
    return gulp.src('app/sass/main.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});





// gulp.task('mytask', function () {
// 	return gulp.src('source-files');
// 	.pipe(plugin());
// 	.pipe(gulp.dest('folder'));	
// });