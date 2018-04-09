/* 
* @Author: Marte
* @Date:   2016-10-27 16:15:29
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-28 16:20:13
*/
var gulp = require('gulp');
var uglify = require('gulp-uglify');
gulp.task('uglify',function(){
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})
gulp.task('default',function(){
    gulp.watch('src/js/*.js',['uglify'])
})


// 获取 gulp-ruby-sass 模块
var sass = require('gulp-ruby-sass')
var minify = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')

// 编译sass
gulp.task('sass', function() {
  return sass('src/css/*.scss', { style: 'compact' })
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(minify())
    .pipe(gulp.dest('dist/style'))
});
// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function() {
    // 监听文件修改，当文件被修改则执行
    gulp.watch('src/css/*.scss', ['sass'])
});
// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 sass 任务和 auto 任务
gulp.task('default', ['sass', 'auto'])

//图片压缩
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var notify = require('gulp-notify');
gulp.task('imagemin',function(){
    return gulp.src('src/images/**/*')
            .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true})))
            .pipe(gulp.dest('dist/images'))
            .pipe(notify({message:'Imagemin task complete'}))
});