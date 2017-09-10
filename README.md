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
    gulp.src(['*.temp']).pipe(tempos()).pipe(gulp.dest('html'));
});
```
