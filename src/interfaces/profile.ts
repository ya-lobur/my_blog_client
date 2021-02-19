export interface IRegistrationData {
    email: string;
    password: string;
    password_confirm: string;
    first_name: string;
    last_name?: string;
    birthday?: string | null;
}

export interface IProfile {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    birthday: string | null;
}