module.exports = () => {
  $.g.task('sass', () => {
    return $.g.src($.path.src.style)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass({outputStyle: 'compressed'}))
      .pipe($.gp.autoprefixer())
      .pipe($.gp.groupCssMediaQueries())
      .pipe($.gp.rename('main.min.css'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.g.dest($.path.build.style)).on('end', $.bs.reload)
  });
}
