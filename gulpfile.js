const gulp = require('gulp');
const babel = require('gulp-babel');
const uglifycss = require('gulp-uglifycss');
const polyfiller = require('gulp-polyfiller');


gulp.task('es6-es5', function (){
  return gulp.src('./src/js/*.js')
        .pipi(sourcemaps.init())
        .pipe(concat('cliente.min.js'))
        .pipe(babel({
          presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./output/js'));
});


gulp.task('babel', function() {
    return gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['@babel/preset-env'],
        }))
        .pipe(gulp.dest('./output/js'));
});

gulp.task('html', function(){
  return gulp.src('./src/*.html')
  .pipe(gulp.dest('./output'));
});

gulp.task('css', function () {
  return gulp.src('./src/css/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./output/css'));
});

gulp.task('js', function () {
  return gulp.src('./src/js/*.js')
  .pipe(gulp.dest('./output/js'));
});

gulp.task('polly', function () {
    gulp.src("./src/js/home.js")
        // push polyfills file after all scripts
        .pipe(polyfiller(['Promise', 'Fetch']))
        .pipe(gulp.dest('./output/js/'));
});
