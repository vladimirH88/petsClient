export interface User {
    id: number;
    email: string;
    name: string;
    role: string;
    region?: string;
    city?: string;
    phoneNumber?: string;
    additionalPhoneNumber?: string;
}
