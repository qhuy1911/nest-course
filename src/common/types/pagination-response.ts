export type PaginationResponse<T> = {
  loggerId?: string;
  page: number;
  limit: number;
  data: T[];
};
