import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export function getHashedPassword({ password }): Promise<string> {
    return new Promise((resolve, reject) => {
        bcrypt
            .hash(password, 10)
            .then((hash) => resolve(hash))
            .catch((error) => reject(error));
    });
}

export function getAreCredentialsValid({ suggestedPassword, userPassword }): Promise<boolean> {
    return new Promise((resolve, reject) => {
        bcrypt
            .compare(suggestedPassword, userPassword)
            .then((valid) => {
                if (!valid) {
                    reject(false);
                } else {
                    resolve(true);
                }
            })
            .catch((error) => reject(error));
    });
}

export function getToken({ userId }): Promise<string> {
    return jwt.sign({ userId }, 'HS256', { expiresIn: '24h' });
}
