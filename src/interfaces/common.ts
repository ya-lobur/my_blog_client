export interface IPromiseErr {
    error: any;
    location: string;
}

export interface IDefaultPagination {
    current_page: number;
    next_page: number | null;
    previous_page: number | null;
    page_size: number;
    total_pages: number;
    total_items: number;
    results: any[];
}