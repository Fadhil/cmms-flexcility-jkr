export interface Quotation {
    cost: string;
    time: string;
    pic: string;
    manpower: string;
    method: string;
    materials: Material[];
}
export interface Material {
    name: string;
    quantity: string;
}