var gulp  = require('gulp');
var spawn = require('gulp-spawn');
var browserSync = require('browser-sync');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');

var config = {
  src: {
    dot: './dot/*.dot',
    html: './www/*.html'
  },
  target: './_target'
};

gulp.task('dot', function() {
  gulp
    .src(config.src.dot)
    .pipe(plumber())
    .pipe(spawn({
      cmd: 'dot',
      // args: ['-Tpng'],
      args: ['-Tsvg'],
      filename: function(base, ext) {
        return base + '.svg';
      }
    }))
    .pipe(gulp.dest(config.target))
    .pipe(rename('preview.svg'))
    .pipe(gulp.dest(config.target))
})

gulp.task('html', function() {
  gulp
    .src(config.src.html)
    .pipe(gulp.dest(config.target))
})

gulp.task('watch', function() {
  gulp.watch(config.src.dot, ['dot', browserSync.reload])
})

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: config.target
    },
    host: 'localhost'
  });
});


gulp.task('default', ['html', 'browser-sync', 'watch'])
