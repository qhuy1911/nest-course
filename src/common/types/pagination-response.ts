export type PaginationResponse<T> = {
  loggerId?: number;
  page: number;
  limit: number;
  data: T[];
};
