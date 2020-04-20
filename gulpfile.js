'use strict';

global.$ = {
  g:   require('gulp'), //галп таск менеджер
  gp:     require('gulp-load-plugins')(),//Все плагины для галпа
  bs:     require('browser-sync').create(),//Браузер синк . Нужен для сервера
  print:  require('gulp-print').default,  // Печатать в терминале для отладки
  path: {                                         //  Обьект содержащий все пути
    tasks: require('./gulp/config/tasks.js'), //путь к моим задачам
    serverDir: './app/build',//папка где будет запускаться сервер
    src: {//пути к исходникам
      html: ['./app/src/*.html','./app/src/pages/*.html'],
      style: './app/src/scss/*.*',
      js: './app/src/scripts/*.js',
      img: './app/src/images/**/*.{png,jpg,gif,svg}',
      fonts: './app/src/fonts/**/*.*',
    },
    build: {//пути к уже готового проекта
      html: './app/build',
      style: './app/build/styles/',
      js: './app/build/scripts/',
      img: './app/build/images/',
      fonts: './app/build/fonts/',
    },
    watch: {//пути за которами ведется слежка
      html: ['./app/src/*.html', './app/src/views/**/*.*','./app/src/pages/**/*.*'],
      style: './app/src/scss/**/*.*',
      js: './app/src/scripts/**/*.*',
      img: './app/src/images/**/*.{png,jpg,gif,svg}',
      fonts: './app/src/fonts/**/*.*',
    }
  }
}

$.path.tasks.forEach(taskPath => require(taskPath)()); //пробегаюсь по массиву моих задач и инициализирую их в этот файл задачу в глобальной видемости этого файла
$.g.task('default', $.g.series($.g.parallel('html', 'sass', 'scripts', 'img', 'fonts','watch', 'server')))//запуск всех моих задач
$.g.task('build',   $.g.series($.g.parallel('html', 'sass', 'scripts', 'img', 'fonts')))//запуск всех моих задач кроме сервера и прослушки
