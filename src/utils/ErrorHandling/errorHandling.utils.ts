export default class ErrorHandling {

    constructor() {}

    static checkNotUndefinedParameters(...args) {

        args.forEach((arg, index) => {

            if (arg === undefined) {
                throw new Error(`Missing parameter [ at position ${index} ]`);
            }

            if (typeof arg === "object") {
                const notFoundArg = Object.entries(arg).find(entry => entry[1] === undefined)

                if (notFoundArg) {
                    throw new Error(`Missing parameter [ ${notFoundArg[0]} ]`);
                }
            }
        })        
    }

    static checkNotNullParameters(...args) {
        args.forEach((arg, index) => {

            if (arg === undefined) {
                throw new Error(`Missing parameter [ at position ${index} ]`);
            }

            if (typeof arg === "object") {
                const notFoundArg = Object.entries(arg).find(entry => entry[1] === undefined)
                
                if (notFoundArg) {
                    throw new Error(`Missing parameter [ ${notFoundArg[0]} ]`);
                    
                }
            }
        })       
    }
}