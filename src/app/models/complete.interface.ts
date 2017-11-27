export interface Complete {
    action: string;
    description: string;
    cost: string;
    manpower: string;
    method: string;
    materials: Material[];
}

export interface Material {
    name: string;
    quantity: string;
}