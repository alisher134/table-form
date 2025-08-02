// libraries
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
// types
import type {
  ApiResponse,
  Filter, Params, SortName, SortType,
} from 'types/filterTypes';

const defaultPage = 1;
const defaultPageSize = 10;

export const useFilter = <TData>(fetch: (params: Params) => Promise<ApiResponse<TData>>, defaultParams?:Partial<Params>) => {
  const initialParams: Params = useMemo<Params>(() => ({
    pagination: {
      page: defaultParams?.pagination?.page ?? defaultPage,
      pageSize: defaultParams?.pagination?.pageSize ?? defaultPageSize,
    },
    filters: defaultParams?.filters ?? {},
    sort: defaultParams?.sort,
  }), [defaultParams]);

  const [data, setData] = useState<ApiResponse<TData>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [params, setParams] = useState<Params>(initialParams);

  const loadData = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(params);

      setData(response);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Unknown error');
    } finally {
      setIsLoading(false);
    }
  }, [fetch, params]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handlePagination = (page: number) => setParams({
    ...params,
    pagination: {
      ...params.pagination,
      page,
    },
  });

  const handlePageSize = (pageSize: number) => setParams({
    ...params,
    pagination: {
      pageSize,
      page: defaultPage,
    },
  });

  const handleApplyFilter = (filters: Filter) => setParams({
    ...params,
    filters,
    pagination: {
      ...params.pagination,
      page: defaultPage,
    },
  });

  const handleClearFilter = () => setParams({
    ...params,
    filters: {},
    pagination: {
      ...params.pagination,
      page: defaultPage,
    },
  });

  const handleSort = (field: SortName) => {
    const isSameField = params.sort?.field === field;
    const currentOrder = params.sort?.order ?? 'asc';

    const newOrder:SortType = isSameField && currentOrder === 'asc' ? 'desc' : 'asc';

    setParams({ ...params, sort: { field, order: newOrder } });
  };

  return {
    data: data?.data ?? [],
    dataTotalPages: data?.pagination.totalPages ?? 1,
    isLoading,
    error,
    page: params?.pagination?.page,
    pageSize: params?.pagination?.pageSize,
    sort: params?.sort,
    handlePageSize,
    handlePagination,
    handleSort,
    handleApplyFilter,
    handleClearFilter,
  };
};
