declare module 'MainTypes' {
    export interface Banner {
        click_code: string;
        product_name: string;
        product_uuid: string;
        product_image: string;
    }
    export interface BestItem {
        click_code: string;
        product_name: string;
        product_uuid: string;
        product_price: {
            type1: number;
            type2: string;
        };
        product_image: string;
    }
}
