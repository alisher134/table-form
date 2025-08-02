// libraries
import { Flex, Pagination, Select } from '@mantine/core';
// config
import { PAGE_SIZES } from 'components/ProductPagination/config';

type ProductPaginationProps = {
  paginationTotal: number;
  page: number;
  pageSize: number;
  handlePagination: (page: number) => void;
  handlePageSize: (page: number) => void;
};

export const ProductPagination = ({
  paginationTotal, page, pageSize, handlePageSize, handlePagination,
}: ProductPaginationProps) => (
  <Flex align="center" gap="lg" justify="center" mt="lg">
    <Pagination
      onChange={(value) => handlePagination(value)}
      radius="md"
      total={paginationTotal}
      value={page}
    />

    <Select
      data={PAGE_SIZES}
      onChange={(value) => handlePageSize(Number(value))}
      size="xs"
      value={String(pageSize)}
      w="60"
    />
  </Flex>
);
