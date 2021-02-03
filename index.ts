import * as bodyParser from 'body-parser';
import { loggerMiddleware } from './config/logger/index';

import Server from './src/_ui/Server';

import httpHeader from './config/webserver/http-headers.config';

require('dotenv').config();

class App {

    private server;

    start = () => {
        try {
            this.server = new Server({
                port: process.env.SERVER_PORT,
                routers: [],
                middlewares: [bodyParser.json(), bodyParser.urlencoded({ extended: true }), loggerMiddleware],
                httpHeader,
                serverBaseUrl: process.env.SERVER_BASE_ROUTE,
            });

            this.server.start();

        } catch (err) {
            console.log("Server error:", err);
            this.server.close();
            process.exit(1);
        }
    };

}

const app = new App();
app.start();
