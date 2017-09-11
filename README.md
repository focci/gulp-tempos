# gulp-tempos
Gulp plugin to compile tempos templates.

## Install
```
npm install --save-dev gulp-tempos
```
## Usage
```
var gulp = require('gulp'),
    tempos = require('gulp-tempos');

gulp.task('tempos', function() {
    gulp.src(['src/*.temp'])
    .pipe( tempos(null, {
    	extname: '.html'
    }) )
    .pipe(gulp.dest('./dist'));
});
```
## Parameter
| Parameter    |  Discription               |
| ------- |:------------------------------: |
| extname | The extension of the output file|

## Donation
![Wechat](https://coding.net/u/focci/p/asset/git/raw/master/focci_wechat.jpg)
&nbsp;&nbsp;&nbsp;&nbsp;
![Alipay](https://coding.net/u/focci/p/asset/git/raw/master/focci_alipay.jpg)