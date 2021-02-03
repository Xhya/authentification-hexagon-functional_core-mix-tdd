export type CountryType = {
    name: string;
    code: string;
};

export default class Country {
    private name: string;
    private code: string;

    constructor({ name, code }: CountryType) {
        this.name = name;
        this.code = code;
    }
}
