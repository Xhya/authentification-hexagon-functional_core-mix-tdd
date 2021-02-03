import ErrorHandling from '../../utils/ErrorHandling/errorHandling.utils';
import Email from '../Email/Email.domain';
import Phone from '../Phone/Phone.domain';

export type UserType = {
    id: string;
    username: string;
    password: string;
    email: Email;
    phone: Phone;
    role?: string
};

export default class User {
    private id : string;
    private username : string;
    private password : string;
    private email : Email;
    private phone : Phone | null;
    private role : string;

    constructor({ username, email, phone = null, password, role = "user" }: {
        username: string,
        email: Email, 
        phone: Phone,
        password: string,
        role?: string
    }) {
        ErrorHandling.checkNotUndefinedParameters({ username, password, email, role })
        ErrorHandling.checkNotNullParameters({ username, password, email, role })
        
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.role = role
    }

}