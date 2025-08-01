export interface ApiResponse<T> {
    status: number;
    data?: T;
    rawBody?: string;
}