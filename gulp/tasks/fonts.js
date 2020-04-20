module.exports = () =>
  $.g.task('fonts', () =>
    $.g.src($.path.src.fonts)
      .pipe($.g.dest($.path.build.fonts)).on('end', $.bs.reload))
