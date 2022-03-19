export class DefaultRequestModel<T> {
    data!: T;
    status?: number;
    statusText?: string;
}