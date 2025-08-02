// types
import type { Category, Status } from 'types/filterTypes';

export type ProductType = {
  id: number;
  fullName: string;
  date: string;
  status: Status;
  category: Category;
  productType: string;
  description:string
};
