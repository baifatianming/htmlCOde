/* 
* @Author: Marte
* @Date:   2017-06-01 09:04:24
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-01 16:31:38
*/
//导入工具包，require('node_modules里面对应的功能模块')
var gulp = require('gulp'),
    fileinclude = require('gulp-file-include'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    connect = require('gulp-connect'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    os = require('os'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    gulpwebpack = require('gulp-webpack'),
    gulpopen = require('gulp-open');
var host = {
    path:'./dist',
    port:3040,
    index:'同班同名.html'
}
//定义任务1.导入页面公共模板
gulp.task('fileinclude',function(done){
    gulp.src('src/view/*.html')
    .pipe(fileinclude({
        prefix:'@@',
        basepath:'@file'
    }))
    .pipe(gulp.dest('dist/view'))
    .on('end',done)
})
//2.清除dist目录
gulp.task('clean',function(done){
    gulp.src(['dist'])
    .pipe(clean())
    .on('end',done)
})
//3.合并压缩css(可以使用sass,less)
gulp.task('cssmin',function(done){
    gulp.src(['src/css/*.css'])
    .pipe(concat('style.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css/'))
    .on('end',done)
})
//4.拷贝图片(需要对图片进一步处理)
//压缩图片
gulp.task("imagemin",function(done){
    gulp.src("src/images/*.{png,jpg,gif,ico}")
        .pipe(cache(imagemin({
            optimizationLevel: 5,           //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true,              //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true,               //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true,                //类型：Boolean 默认：false 多次优化svg直到完全优化
            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
            use: [pngquant()]               //使用pngquant深度压缩png图片的imagemin插件
        })))
        .pipe(gulp.dest("dist/images"))
        .on('end',done)
});
//

//5.运行web服务器
gulp.task('connect',function(){
    console.log('正在连接中......')
    connect.server({
        root:host.path,
        port:host.port,
        livereload:true
    })
})
var browser = os.platform() === 'linux' ?'google-chrome':(
    os.platform() === 'darwin' ?'google-chrome':(
        os.platform() === 'win32'?'chrome':'chrome')
    )
//6.自动打开页面
gulp.task('open',function(done){
    gulp.src('')
    .pipe(gulpopen({
        app:browser,
        uri:'http://localhost:3040/view/'+host.index
    }))
    .on('end',done)
})
//6.任务组装
gulp.task('dev',['fileinclude','cssmin','imagemin','bundle-js','connect','watch','open'])
//7.看守文档变化
gulp.task('watch',function(done){
    gulp.watch('src/**/*',['cssmin','fileinclude','bundle-js'])
})
//上面的任务主要是对html css image的处理
//下面的要配合webpack完成
gulp.task('bundle-js',function(done){
    gulp.src('src/js/main.js')
    .pipe(gulpwebpack(webpackConfig,webpack))
    .pipe(gulp.dest('dist/js'))
    .on('end',done)
})