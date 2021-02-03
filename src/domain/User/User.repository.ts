import User, { UserType } from "./User.domain";

export default interface UserRepository {
    getUserById(userId : number) : UserType | undefined;
    getUserByUsername(username : string) : UserType | undefined;
    addANewUser(user: User) : void;
    updateUser(user: User) : void;
    deleteUserById(userId: number) : void;
}