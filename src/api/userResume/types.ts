export interface IResumeRequest {
   userId: string | null,
   userToken: string | null
}

export interface IResumeResponse {
    bytes: string;
}