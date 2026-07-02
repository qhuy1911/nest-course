export type PaginationQueryParams = {
  page: number;
  limit: number;
};

export type PaginationResponse<T> = {
  loggerId?: number;
  page: number;
  limit: number;
  data: T[];
};
