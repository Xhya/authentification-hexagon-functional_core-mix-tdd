import * as express from 'express';
import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
    level: 'info',
    format: process.env.NODE_ENV === 'production' ? format.json() : format.simple(),
    transports: [
        // - Write to all logs with level `info` and above to `combined.log`
        new transports.File({ filename: 'combined.log' }),
        // - Write all logs error (and above) to Console/terminal
        new transports.Console(),
    ],
});

export function logInfo(component, message): void {
    logger.info(`[${component}] ${message}`);
}

export function handleResponseError(error, response: express.Response): void {
    logger.info('something went wrong:', error);
    response.status(500).json(error.message);
}

export function handleError(error): void {
    logger.info('something went wrong:', error);
}

export function loggerMiddleware(request: express.Request, response: express.Response, next): void {
    console.time('requestTime');

    if (process.env.NODE_ENV !== 'TEST') {
        console.log(`${request.method} ${request.path}`);
    }
    console.timeEnd('requestTime');
    next();
}

export function validateInput(input: any, description: string, type?: string) {
    if (input === undefined || input === null) {
        throw new Error(`Invalid input [ ${description} ]`)
    } else {
        return true;
    }
}
