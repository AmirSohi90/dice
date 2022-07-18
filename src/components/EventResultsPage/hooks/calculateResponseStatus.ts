export enum ResponseStatus {
    IDLE = "IDLE",
    LOADING = "LOADING",
    SUCCESS = "SUCCESS",
    NO_DATA = "NO_DATA",
    ERROR = "ERROR"
}

export interface QueryInformation {
    status: "error" | "idle" | "loading" | "success";
    error: unknown;
}

export class HTTPError extends Error {
    readonly statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
}

const isObject = (obj: unknown): obj is Record<string | number | symbol, unknown> => obj === Object(obj);

const isHttpError = (error: unknown): error is HTTPError => {
    return isObject(error) && typeof error.statusCode === "number";
};

export const calculateResponseStatus = (queryInformation: QueryInformation, key?: string): ResponseStatus => {
    const { status, error } = queryInformation;
    if (typeof key === "string" && !key) return ResponseStatus.IDLE;
    if (status === "idle") return ResponseStatus.IDLE;
    if (isHttpError(error) && error.statusCode === 404) return ResponseStatus.NO_DATA;
    if (status === "success") return ResponseStatus.SUCCESS;
    if (status === "loading") return ResponseStatus.LOADING;
    return ResponseStatus.ERROR;
};
