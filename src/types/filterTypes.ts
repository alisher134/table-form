export type Status = 'active' | 'inactive';

export type Category = 'typeA' | 'typeB' | 'typeC';

export type SortType = 'asc' | 'desc';

export type SortName = 'id' | 'fullName' | 'date';

export type DateRange = {
  from?: string | null;
  to?: string | null;
};

export type Sort = {
  field: SortName | null;
  order: SortType | null;
};

export type Filter = {
  status?: Status[] | null;
  category?: Category[] | null;
  fullName?: string | null;
  dateRange?: DateRange;
};

export type PaginationResponse = {
  page: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
};

export type PaginationType = {
  page: number;
  pageSize: number;
};

export type ApiResponse<TData> = {
  data: TData[];
  pagination: PaginationResponse;
};

export type Params = {
  pagination: PaginationType;
  filters?: Filter;
  sort?: Sort;
};
