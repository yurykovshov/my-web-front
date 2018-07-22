var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');

gulp.task('sass', function(){
    return gulp.src('sass/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css'))
});

gulp.task('css-min', function(){
    return gulp.src('build/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'))
});
 
gulp.task('watch', function(){
    gulp.watch('sass/**/*.scss', ['sass']); 
});

gulp.task('default', [ 'sass' ]);

gulp.task('release', [ 'sass', 'css-min' ]);