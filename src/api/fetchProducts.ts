// libraries
import axios from 'axios';
// types
import type { ApiResponse, Params } from 'types/filterTypes';
import type { ProductType } from 'types/productTypes';

export const axiosInstance = axios.create({
  baseURL: '/api',
});

export const fetchProducts = async (params?: Params) => {
  const { data } = await axiosInstance.post<ApiResponse<ProductType>>('/data', params || {});

  return data;
};
