import Email from '../../domain/Email/Email.domain';
import { getHashedPassword } from '../../utils/Password/Password.utils';
import Phone from '../../domain/Phone/Phone.domain';
import User from '../../domain/User/User.domain';
import UserRepository from '../../domain/User/User.repository';
import ErrorHandling from '../../utils/ErrorHandling/errorHandling.utils';

export default class UserService {
    private _userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this._userRepository = userRepository;
    }

    async createANewUser({ username, password, email, phone = null, areaCode = null }): Promise<User> {
        ErrorHandling.checkNotUndefinedParameters({ username, password, email });
        ErrorHandling.checkNotNullParameters({ username, password, email });

        const userEmail = new Email({ email });
        const userPhone = new Phone({ phoneNumber: phone, areaCode });
        const userPassword = await getHashedPassword({ password });

        const user = new User({ username, email: userEmail, phone: userPhone, password: userPassword });

        this._userRepository.addANewUser(user);

        return user;
    }

    // addCourseByKeyToParcours(key : string) {
    //     //call to other hexagone
    //     let course = this._finder.findCourseByKey(key);

    // }
}
