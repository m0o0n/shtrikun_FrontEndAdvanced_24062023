
import fileinclude  from "gulp-file-include"
export const html =()=>{
    return app.gulp.src(app.path.src.html, {sourcemaps: true})
    .pipe(fileinclude())
    .pipe(app.gulp.dest(app.path.build.files))
    .pipe(app.plugins.browsersync.stream())
}