var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('html', function() {
    gulp.src('./src/index.html').pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
    return gulp.src('./src/scss/*.{scss, sass}')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
    gulp.watch('src/index.html', ['html']);
    gulp.watch('src/scss/*.{scss, sass}', ['sass']);
    gulp.watch('./src/js/**/*.js', ['scripts']);
});
var include = require("gulp-include");

gulp.task("scripts", function() {
    console.log("-- gulp is running task 'scripts'");

    gulp.src("src/js/main.js")
        .pipe(include())
        .on('error', console.log)
        .pipe(gulp.dest("dist/js"));
});

gulp.task("default", ["scripts"]);

gulp.task ("mover", function () {
    return gulp.src('src/images/*.*')
        .pipe(gulp.dest('dist/images'));
});

