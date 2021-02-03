import ErrorHandling from '../../utils/ErrorHandling/errorHandling.utils';
import { validateEmail } from './Email.utils';

export type EmailType = {
    email: string;
};

export default class Email {
    private email : string;

    constructor({ email }: EmailType) {
        ErrorHandling.validateInput({ email });

        this.validateEmail(email);
        this.email = email;
    }

    public validateEmail(email: string) {
        validateEmail(email)
    }

}