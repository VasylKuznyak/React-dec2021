export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
}

interface IAddress {
    street: string;
    city: string;
}

