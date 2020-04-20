module.exports = () =>
  $.g.task('html', () =>
    $.g.src($.path.src.html)
      .pipe($.gp.include())
      .pipe($.g.dest($.path.build.html))
      .on('end', $.bs.reload))

