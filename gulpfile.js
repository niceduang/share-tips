/* ============================引入插件=============================== */
var gulp = require('gulp')
var plugins = require('gulp-load-plugins')({
  rename: {
    'gulp-ruby-sass': 'sass',
    'gulp-clean-css': 'cleancss'
  }
})
var browserSync = require('browser-sync').create()
var reload = browserSync.reload

/* =============================发布任务============================== */
gulp.task('html', function () {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'))
})

gulp.task('css', function () {
  // var cssFilter = plugins.filter(['src/**/*.css', '!src/css/vendor'], {restore: true})
  return gulp.src('src/css/**/*.css')
    .pipe(plugins.cleancss())
    .pipe(gulp.dest('dist/css/'))
})

gulp.task('js', function () {
  // var jsFilter = plugins.filter(['src/**/*.js', '!src/js/vendor'], {restore: true})
  return gulp.src('src/**/*.js')
    .pipe(plugins.uglify())
    .pipe(gulp.dest('dist/'))
})
gulp.task('img', function () {
  gulp.src('src/img/*')
    .pipe(plugins.imagemin())
    .pipe(gulp.dest('dist/img'))
})

gulp.task('dist', ['html', 'css', 'js', 'img'], function () {
  return gulp.src(['src/res', 'src/mocks'])
    .pipe(gulp.dest('dist/'))
})
/* =============================合并任务============================== */

gulp.task('bundle', function () {
  var vendor = {
    css: ['src/css/vendor/jquery.fullpage.css'],
    js: ['src/js/vendor/jquery.js', 'src/js/vendor/jquery.fullpage.js']
  }
  // 合并库css
  gulp.src(vendor.css)
    .pipe(plugins.concat('bundle.css'))
    .pipe(gulp.dest('src/css/vendor/'))

  // 合并库js
  gulp.src(vendor.js)
    .pipe(plugins.concat('bundle.js'))
    .pipe(gulp.dest('src/js/vendor/'))
})

/* =============================服务器任务============================== */

// 静态服务器 + 监听 scss/html 文件
gulp.task('server', ['sass', 'bundle'], function () {
  browserSync.init({
    server: './src'
  })
  gulp.watch('src/scss/**/*.scss', ['sass'])
  gulp.watch('src/**/*.html', ['html']).on('change', reload)
  gulp.watch('src/js/**/*.js', ['js']).on('change', reload)
})

/* =============================编译任务============================== */
gulp.task('sass', function () {
  // 编译库样式文件
  plugins.sass('src/scss/vendor/*.scss', {sourcemap: true})
    .on('error', plugins.sass.logError)
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('src/css/vendor/'))
    .pipe(reload({stream: true}))
  // 编译项目样式文件
  plugins.sass('src/scss/main.scss', {sourcemap: true})
    .on('error', plugins.sass.logError)
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('src/css/'))
    .pipe(reload({stream: true}))
  return gulp
})

/* =============================默认任务============================== */
gulp.task('default', ['dist'])
