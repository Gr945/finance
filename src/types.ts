export interface ProductType {
    rowId: number;
    barCode: number;
    item: string;
    art: string;
    size: string;
    available: number;
    products: number;
    allProducts: number;
}

export type ProductKeys = keyof ProductType;

export interface HeaderTypes {
    id: number;
    name: string;
    width: string;
    key: ProductKeys;
}

export interface AddProductType {
    bar: number | null;
    art: number | null;
    size: number | null;
    category: string;
}
