// The role of the Server is to listen to HTTP requests and match them to controllers via routers

import express, { Application } from 'express';
import * as http from 'http';
import { validateInput, logInfo } from '../../config/logger/index';

export default class Server {
    private app: Application;

    private server: http.Server;
    private port: string;
    private middlewares: any;
    private httpHeader: string[][];
    private serverBaseUrl: string;

    constructor({ port, middlewares, httpHeader, serverBaseUrl, routers }) {
        validateInput(port, 'port');
        validateInput(middlewares, 'middlewares');
        validateInput(httpHeader, 'httpHeader');
        validateInput(serverBaseUrl, 'serverBaseUrl');
        validateInput(routers, 'routers');

        this.app = express();

        this.port = port;
        this.middlewares = middlewares;
        this.httpHeader = httpHeader;
        this.serverBaseUrl = serverBaseUrl;

        this.setHeader(this.httpHeader);
        this.initMiddlewares(this.middlewares);
        this.initRoutes(routers);
    }

    public getServer(): http.Server {
        return this.server;
    }

    public start(): void {
        this.server = http.createServer(this.app);
        this.listen();
    }

    public listen(): void {
        this.server.listen(this.port, () => {
            console.log(`Server listening on port: ${this.port}`);
        });
    }

    public close(): void {
        this.server.close();
    }

    private setHeader(httpHeaders: string[][]): void {
        this.app.use((req: any, res, next) => {
            httpHeaders.forEach((httpHeader) => {
                res.header(httpHeader[0], httpHeader[1]);
            });
            next();
        });
    }

    private initMiddlewares(middlewares: Array<any>): void {
        middlewares.forEach((middleware) => {
            this.app.use(middleware);
        });
    }

    private async initRoutes(routers): Promise<void> {
        routers.forEach((Router) => {
            const router = new Router();
            this.app.use(this.serverBaseUrl, router.router);
            logInfo(`INITIALIZED ROUTER`, `path: ${router.path}`);
        });
    }

}


