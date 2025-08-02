// libraries
import {
  array, mixed, object, ObjectSchema, string,
} from 'yup';
// types
import type { Category, Filter, Status } from 'types/filterTypes';

export const FILTER_FORM_WIDTH = { base: '100%', md: '25%' };

export const CHECKBOX_STATUS_DATA = [
  {
    label: 'Active',
    value: 'active',
  },
  {
    label: 'Inactive',
    value: 'inactive',
  },
];

const statusValues = ['active', 'inactive'] as const;

export const CATEGORY_SELECT_DATA = [
  'typeA',
  'typeB',
  'typeC',
] as const;

export const filterValidationSchema:ObjectSchema<Filter> = object({
  status:
    array()
      .of(mixed<Status>().oneOf(statusValues))
      .nullable()
      .default([]),

  category:
    array()
      .of(mixed<Category>().oneOf(CATEGORY_SELECT_DATA))
      .nullable()
      .default([]),

  fullName: string().nullable().default(''),

  dateRange:
    object({
      to: string().nullable(),
      from: string().nullable(),
    })
      .nullable()
      .default({ to: null, from: null }),
});
