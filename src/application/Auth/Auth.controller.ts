import { getAreCredentialsValid, getToken } from '../../utils/Password/Password.utils';
import ErrorHandling from '../../utils/ErrorHandling/errorHandling.utils';
import UserRepository from '../../domain/User/User.repository';
import { UserType } from '../../domain/User/User.domain';
import IAuth from './Auth.interface';

export default class AuthController implements IAuth {
    private _userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this._userRepository = userRepository;
    }

    async signInUser({ user }: { user: UserType }): Promise<string> {
        ErrorHandling.checkNotUndefinedParameters({ user });
        ErrorHandling.checkNotNullParameters({ user });

        return this.signInWithUsernameAndPassword({ username: user.username, password: user.password })
    }

    async signInWithUsernameAndPassword({ username, password }: { username: string, password: string }): Promise<string> {
        ErrorHandling.checkNotUndefinedParameters({ username, password });
        ErrorHandling.checkNotNullParameters({ username, password });

        const user = await this._userRepository.getUserByUsername(username);

        const areCredentialsValid = await getAreCredentialsValid({ suggestedPassword: password, userPassword: user.password})

        if (areCredentialsValid) {
            return getToken({ userId: user.id })
        } else {
            throw new Error('Invalid credentials')
        }
    }
}