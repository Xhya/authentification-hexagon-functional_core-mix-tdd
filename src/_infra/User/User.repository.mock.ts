import User, { UserType } from '../../domain/User/User.domain';
import UserRepository from '../../domain/User/User.repository';

export default class UserRepositoryMock implements UserRepository {

    public getUserById(userId: number): UserType | undefined {
        return {
            id: "1234",
            username: "toto",
            password: "test",
            email: null,
            phone: null,
            role: "user"
        }
    }

    public getUserByUsername(username: string): UserType | undefined {
        return {
            id: "1234",
            username: "toto",
            password: "test",
            email: null,
            phone: null,
            role: "user"
        }
    }

    public addANewUser(user: User): void {
        throw new Error('Not yet implemented')
    }

    public updateUser(user: User): void {
        throw new Error('Not yet implemented')
    }

    public deleteUserById(userId: number): void {
        throw new Error('Not yet implemented')
    }
}