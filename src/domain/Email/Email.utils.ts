export function validateEmail(email) {
    const regexp = new RegExp(/^\S+@\S+\.\S+$/)

    const isEmailValid = regexp.test(email);

    if (!isEmailValid) {
        throw new Error("Email invalid");
    }
}