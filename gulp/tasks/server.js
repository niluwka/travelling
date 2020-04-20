module.exports = function () {
  $.g.task('server', function () {
    $.bs.init({
      server: {
        baseDir: $.path.serverDir
      }
    });
  });
}
