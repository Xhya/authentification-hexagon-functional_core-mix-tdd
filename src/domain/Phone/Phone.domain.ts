import ErrorHandling from '../../utils/ErrorHandling/errorHandling.utils';
import { validatePhoneNumber, getFormatedPhoneNumber } from './Phone.utils';

export type PhoneType = {
    phoneNumber: string;
    areaCode: string;
};

export default class Phone {
    private phoneNumber : string;
    private areaCode : string;

    constructor({ phoneNumber, areaCode }: PhoneType) {
        try {
            ErrorHandling.checkNotUndefinedParameters({ phoneNumber, areaCode });
            ErrorHandling.checkNotNullParameters({ phoneNumber, areaCode });
        } catch (e) {
            return null;
        }
        
        this.validatePhoneNumber({ phoneNumber, areaCode });
        
        this.phoneNumber = this.getFormatedPhoneNumber({ phoneNumber, areaCode });
        this.areaCode = areaCode;
    }

    
    validatePhoneNumber({ phoneNumber, areaCode }: PhoneType): void {
        validatePhoneNumber({ phoneNumber, areaCode })
    }

    getFormatedPhoneNumber({ phoneNumber, areaCode }: PhoneType): string {
        return getFormatedPhoneNumber({ phoneNumber, areaCode });
    }

}