export interface IBlogModel {
    id: number;
    description: string;
    owner: { id: number, first_name: string, last_name: string };
}

