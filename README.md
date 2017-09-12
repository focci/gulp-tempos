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
    }))
    .pipe(gulp.dest('./dist'));
});
```

## Parameter
| Parameter    |  Description               |
| ------- |:------------------------------: |
| data    | The data object to be imported  |
| option  | Only one parameter is included (extname: the extension of the output file)|

## Donation
![Wechat](https://raw.githubusercontent.com/focci/asset/master/pay/wechat.jpg)
&nbsp;&nbsp;&nbsp;&nbsp;
![Alipay](https://raw.githubusercontent.com/focci/asset/master/pay/alipay.jpg)