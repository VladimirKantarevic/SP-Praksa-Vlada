const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("watch", function () {
    // Define the files to watch
    gulp.watch("./css/*/.scss", gulp.series("sass"));
});

gulp.task("sass", function () {
    return gulp
        .src("/css/*/.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./test"));
});

gulp.task("default", gulp.series("watch"));