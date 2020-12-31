export interface Post {
    id: number;
    isAgreed: boolean;
    createrId: number;
    briefDescription: string;
    category: string;
    description: string;
    price: string;
    phone: string;
    additionalPhone?: string;
    region: string;
    city: string;
    filingDate: string | Date;
    numberOfViews: number;
    image?: string;
}
