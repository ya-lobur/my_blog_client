export interface IPost {
    id?: number;
    blog_id?: number;
    title?: string;
    description?: string;
    liked_by?: number[];
    author?: {id?: number, first_name?: string, last_name?: string};
    text_content?: string;
}