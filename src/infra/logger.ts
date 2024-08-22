import {createLogger, transports, format, transport} from "winston"

const logger = createLogger({
    level: "info",
    format: format.combine(format.timestamp(), format.json()),
    transports: [new transports.Console()]
});

export {logger};