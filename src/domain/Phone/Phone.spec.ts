import 'mocha';
import { expect } from 'chai';
import { validatePhoneNumber, getFormatedPhoneNumber } from './Phone.utils';

describe('Phone', () => {
    describe('validatePhoneNumber()', () => {
        it('it should throw error if phone number not well formated', () => {
            const phoneNumber = '060000000';
            const areaCode = "33";
            expect(() => validatePhoneNumber({ phoneNumber, areaCode })).to.throw('Invalid phone number');
        });
        it('it should throw error if areaCode does not correspond to phone number format', () => {
            const phoneNumber = '0600000000';
            const areaCode = "34";
            expect(() => validatePhoneNumber({ phoneNumber, areaCode })).to.throw('Invalid phone number');
        });
        it('it should not throw error if phone number is well formated', () => {
            const phoneNumber = '0600000000';
            const areaCode = "33";
            expect(() => validatePhoneNumber({ phoneNumber, areaCode })).to.not.throw('Invalid phone number');
        });
        it('it should not throw error if phone number is as space around', () => {
            const phoneNumber = '  0600000000  ';
            const areaCode = "33";
            expect(() => validatePhoneNumber({ phoneNumber, areaCode })).to.not.throw('Invalid phone number');
        });
        it('it should not throw error if phone number is as space inside', () => {
            const phoneNumber = '  06 00 00 00 00  ';
            const areaCode = "33";
            expect(() => validatePhoneNumber({ phoneNumber, areaCode })).to.not.throw('Invalid phone number');
        });
    });
    describe('getFormatedPhoneNumber()', () => {
        it('it should get phone number without 0 upfront', () => {
            const phoneNumber = '0600000000';
            const areaCode = "33";

            const formatedPhoneNumber = getFormatedPhoneNumber({ phoneNumber, areaCode });
            expect(formatedPhoneNumber).to.equal('600000000');
        });
        it('it should get phone number without spaces inside', () => {
            const phoneNumber = '06 00 00 00 00';
            const areaCode = "33";

            const formatedPhoneNumber = getFormatedPhoneNumber({ phoneNumber, areaCode });
            expect(formatedPhoneNumber).to.equal('600000000');
        });
        it('it should get phone number without spaces around', () => {
            const phoneNumber = '   06 00 00 00 00   ';
            const areaCode = "33";

            const formatedPhoneNumber = getFormatedPhoneNumber({ phoneNumber, areaCode });
            expect(formatedPhoneNumber).to.equal('600000000');
        });
    });
});
