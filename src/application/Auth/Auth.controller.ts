import { checkAreCredentialsValid, getToken } from '../../utils/Password/Password.utils';
import ErrorHandling from '../../utils/ErrorHandling/errorHandling.utils';
import UserRepository from '../../domain/User/User.repository';
import IAuth from './Auth.interface';

export default class AuthController implements IAuth {
    private _userRepository: UserRepository;

    constructor({ userRepository }: { userRepository: UserRepository }) {
        this._userRepository = userRepository;
    }

    async signInWithUsernameAndPassword({ username, password }: { username: string, password: string }): Promise<string> {
        ErrorHandling.checkNotUndefinedParameters({ username, password });
        ErrorHandling.checkNotNullParameters({ username, password });

        const user = await this._userRepository.getUserByUsername(username);

        try {
            await checkAreCredentialsValid({ suggestedPassword: password, userPassword: user.password })
            return getToken({ userId: user.id })
        } catch (error) {
            throw new Error('Invalid credentials')
        }
    }
}