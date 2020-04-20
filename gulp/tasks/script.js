module.exports = () => {
  // Перенос файла common.js в папку build
  $.g.task('scripts', () =>
    $.g.src($.path.src.js)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.include())
      .pipe($.gp.babel())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gp.rename('index.min.js'))
      .pipe($.g.dest($.path.build.js))
      .pipe($.bs.reload({
        stream: true
      }))
  )
}
