import 'mocha';
import { expect } from 'chai';
import { validateEmail } from './Email.utils';

describe('Email', () => {

    describe('validateEmail()', () => {
        it('it should not accept not formted', () => {
            const email = "test"
            expect(() => validateEmail(email)).to.throw("Email invalid")
        });
        it('it should not accept not formted email', () => {
            const email = "test@"
            expect(() => validateEmail(email)).to.throw("Email invalid")
        });
        it('it should not accept not formted email', () => {
            const email = "test@test"
            expect(() => validateEmail(email)).to.throw("Email invalid")
        });
        it('it should not accept not formted email', () => {
            const email = "test@test.com"
            expect(() => validateEmail(email)).to.not.throw("Email invalid")
        });
    });

});
