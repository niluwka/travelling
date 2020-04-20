module.exports = () =>
  $.g.task('watch', () => {
    $.g.watch($.path.watch.html,  $.g.series('html'))
    $.g.watch($.path.watch.style, $.g.series('sass'))
    $.g.watch($.path.watch.js,    $.g.series('scripts'))
    $.g.watch($.path.watch.img,   $.g.series('img'))
    $.g.watch($.path.watch.fonts, $.g.series('fonts'))
  })
