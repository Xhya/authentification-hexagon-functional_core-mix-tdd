export default class ErrorHandling {

    constructor() {}

    static checkNotUndefinedParameters(...args) {

        args.forEach((arg, index) => {

            if (arg === undefined) {
                throw new Error(`Missing parameter [ at position ${index} ] cannot be undefined`);
            }

            if (typeof arg === "object") {
                const notFoundArg = Object.entries(arg).find(entry => entry[1] === undefined)

                if (notFoundArg) {
                    throw new Error(`Missing parameter [ ${notFoundArg[0]} ] cannot be undefined`);
                }
            }
        })        
    }

    static checkNotNullParameters(...args) {
        args.forEach((arg, index) => {

            if (arg === undefined) {
                throw new Error(`Missing parameter [ at position ${index} ] cannot be null`);
            }

            if (typeof arg === "object") {
                const notFoundArg = Object.entries(arg).find(entry => entry[1] === undefined)
                
                if (notFoundArg) {
                    throw new Error(`Missing parameter [ ${notFoundArg[0]} ] cannot be null`);
                    
                }
            }
        })       
    }
}