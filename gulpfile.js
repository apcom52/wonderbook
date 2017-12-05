var gulp = require('gulp');
var browserify = require('browserify');
var babelify  = require('babelify');
var source  = require('vinyl-source-stream');

gulp.task('build-react', function() {
   var options = {
       entries: "./media/js/react/Application.jsx",
       extensions: ['.jsx'],
       paths: ['./media/js/react/']
   };

   return browserify(options)
       .transform('babelify', {presets: ["es2015", "react"]})
       .bundle()
       .pipe(source('app.js'))
       .pipe(gulp.dest('./media/js/'));
});

gulp.task('watch', function () {
    gulp.watch('./media/js/react/*.jsx', ['build-react']);
});

