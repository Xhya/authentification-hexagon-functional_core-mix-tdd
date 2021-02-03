import parsePhoneNumber from 'libphonenumber-js';

export function validatePhoneNumber({ phoneNumber, areaCode }): void {
    const parsedPhoneNumber = parsePhoneNumber(`${areaCode ? '+' + areaCode : ''}${phoneNumber}`);

    if (!parsedPhoneNumber) {
        throw new Error('Given data wrong');
    }

    if (!parsedPhoneNumber.isValid()) {
        throw new Error('Invalid phone number');
    }
}

export function getFormatedPhoneNumber({ phoneNumber, areaCode }): string {
    validatePhoneNumber({ phoneNumber, areaCode });
    const parsedPhoneNumber = parsePhoneNumber(`${areaCode ? '+' + areaCode : ''}${phoneNumber}`);
    return String(parsedPhoneNumber.nationalNumber);
}
