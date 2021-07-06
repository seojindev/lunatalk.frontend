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
    export interface Category {
        click_code: string;
        product_name: string;
        product_uuid: string;
        product_image: string;
        product_thumb_image: string;
    }
    export interface Categories {
        acc: Category;
        bag: Category;
        stationery: Category;
        wallet: Category;
        CUSTOM_ITEM: Category;
    }
}
