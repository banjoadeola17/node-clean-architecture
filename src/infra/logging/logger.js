import { format, createLogger, transports } from "winston";

// const { combine, timestamp, label, printf, prettyPrint } = format;
// const CATEGORY = "winston custom format";

const logger = createLogger({
  // level: "info",
  // format: combine(
  //   label({ label: CATEGORY }),
  //   timestamp({
  //     format: "MMM-DD-YYYY HH:mm:ss",
  //   }),
  //   prettyPrint()
  // ),
  format: format.simple(),
  transports: [new transports.Console()],
});

export default logger;
