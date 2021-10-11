interface PhoneNumberDictionary {
    [phone: string]: {
        num: string;
    };
}
export interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}
