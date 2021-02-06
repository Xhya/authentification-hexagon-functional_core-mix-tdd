import { UserType } from '../../domain/User/User.domain';

export default interface IAuth {
    signInWithUsernameAndPassword({ username, password }: { username: string, password: string }): Promise<string>
}