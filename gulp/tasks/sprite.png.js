'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function(cb) {
    var spriteData = $.gulp.src('./source/spritesrc/png/*.png')
        .pipe($.gp.spritesmith({
          imgName: 'sprite.png',
          imgPath: '../img/sprites/sprite.png',
          algorithm: 'binary-tree',
          padding: 20,
          cssName: 'sprite-png.scss'
        }));
    spriteData.css.pipe($.gulp.dest('./source/style/common'));
    spriteData.img.pipe($.gulp.dest('./source/images/sprites'));

    cb();
  })
};
