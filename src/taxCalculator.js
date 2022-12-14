import es from "event-stream";

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
      console.log("Tax calculation finished", total);
      const newTotal = (total * 0.1).toFixed(2);
      callback(newTotal);
    });
};

export default calculator;
