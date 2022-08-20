import es from "event-stream";
import chalk from "chalk";

const calculator = (stream, parse, callback) => {
  let total = 0;
  stream
    .pipe(es.split())
    .pipe(
      es.mapSync(function (line) {
        total += parse(line);
      })
    )
    .on("error", function (err) {
      console.log("Error while reading file.", err);
    })
    .on("end", function () {
      console.log(chalk.white.inverse("Tax calculation finished"));
      callback(total);
    });
};

export default calculator;
