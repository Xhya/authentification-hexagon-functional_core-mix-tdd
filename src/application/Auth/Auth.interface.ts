import { UserType } from '../../domain/User/User.domain';

export default interface IAuth {
    signInUser({ user }: { user: UserType }): Promise<string>
    signInWithUsernameAndPassword({ username, password }: { username: string, password: string }): Promise<string>
}