import config from '../config/index';
import track from "./track";
import time from "./time";

class Log {
    constructor() {
        this.debug = config.DEBUG;
    }

    logger(callback, ...args) {
        if (!this.debug) return
        let mes = `[${time.getCurrentTime()}] (${track()}))\n`
        callback(mes, ...args)
    }

    info(...args) {
        this.logger(console.log, ...args)
    }

    error(...args) {
        this.logger(console.error, ...args)
    }

    warn(...args) {
        this.logger(console.warn, ...args)
    }
}

export default new Log();
