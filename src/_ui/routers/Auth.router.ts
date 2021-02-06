import express from 'express';

import AuthController from '../../application/Auth/Auth.controller'

import { handleResponseError } from '../../../config/logger/index';
import UserReposityMock from '../../_infra/User/User.repository.mock';

export default class AuthRouter {
    private path = '/auth';
    private router = express.Router();
    private authController = new AuthController({ userRepository: new UserReposityMock() });

    constructor() {
        this.intializeRoutes();
    }

    private intializeRoutes(): void {
        this.router.get(`${this.path}/sign-in`, (req, res) => this.signIn(req, res));
    }

    private async signIn(request: express.Request, response: express.Response): Promise<void> {
        const { username, password } = request.query;

        try {
            const res = await this.authController.signInWithUsernameAndPassword({ username, password });
            console.log('res:', res);
            response.send(res);
        } catch (error) {
            handleResponseError(error, response);
        }
    }

}