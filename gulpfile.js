var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');

gulp.task('sass', function(){
    return gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css'))
});

gulp.task('css-min', function(){
    return gulp.src('build/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'))
});
  
 
gulp.task('default', [ 'sass' ]);

gulp.task('release', [ 'sass', 'css-min' ]);
