import 'mocha';
import { expect } from 'chai';
import { getHashedPassword, getToken } from './Password.utils';

describe('Password', () => {
    describe('getHashedPassword()', () => {
        it('hashed password should be a string', async () => {
            const password = 'testtest';
            const hashedPassword = await getHashedPassword({ password });
            expect(hashedPassword).to.be.a("string")
        });
    });
    describe('getToken()', () => {
        it('token should be a string', async () => {
            const userId = '123456';
            const token = getToken({ userId });
            expect(token).to.be.a("string")
        });
    });
});
