'use strict';

module.exports = function() {
  $.gulp.task('js:plugins:copy', function() {
    return $.gulp.src('./source/js/plugins/**/*.*', { since: $.gulp.lastRun('js:plugins:copy') })
      .pipe($.gulp.dest($.config.root + '/assets/js/plugins/'));
  });
};
