export interface RegisterRequest {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    country: string;
    date: String;
    genter: String;
}

export interface Credentials {
    username: string;
    password: string;
}

export interface User {
    id: number;
    username: string;
    lastname: string;
    firstname: string;
    country: string;
    token: string;
}
