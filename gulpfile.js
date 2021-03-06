'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sprite:png',
    'sprite:svg'
  ),
  $.gulp.parallel(
    'js:foundation',
    'js:process',
    'css:foundation'
  ),
  $.gulp.parallel(
    'sass',
    'pug'
  ),
  $.gulp.parallel(
    'copy:favicon',
    'copy:image',
    'copy:fonts',
    'js:plugins:copy'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
