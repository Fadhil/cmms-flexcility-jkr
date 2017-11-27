export interface Complete {
    finding: string;
    further: string;
    corrective: string;
    cost: string;
    manpower: string;
    method: string;
    materials: Material[];
}

export interface Material {
    name: string;
    quantity: string;
}