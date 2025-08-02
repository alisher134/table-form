// libraries
import { type FC } from 'react';
import {
  Skeleton,
  Table, Text,
} from '@mantine/core';
import SortableHeader from 'components/ProductTable/SortableHeader';
// config
import { TABLE_HEADERS } from 'components/ProductTable/config';
// types
import type {
  Sort, SortName,
} from 'types/filterTypes';
import type { ProductType } from 'types/productTypes';

type ProductTableProps = {
  isLoading: boolean;
  products: ProductType[];
  sort: Sort;
  handleSort: (key: SortName) => void;
};

const ProductTable: FC<ProductTableProps> = ({
  isLoading, products, handleSort, sort,
}) => {
  if (isLoading) {
    return [...Array.from({ length: 10 }).keys()].map((idx) => (
      <Skeleton
        key={idx}
        height="45"
        mb="sm"
        visible={isLoading}
      />
    ));
  }

  return (
    <>
      <Table
        className="product-table"
        highlightOnHover
        horizontalSpacing="sm"
        verticalSpacing="sm"
        withColumnBorders
        withTableBorder
      >
        <Table.Thead className="product-table-head">
          <Table.Tr>
            {TABLE_HEADERS.map((item) => (
              <Table.Th key={item.title} c="dark" w={100}>
                {item.key ? (
                  <SortableHeader
                    handleSortType={() => handleSort(item.key)}
                    name={item.key}
                    sort={sort}
                    title={item.title}
                  />
                ) : item.title}
              </Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {products.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>{product.id}</Table.Td>
              <Table.Td>{product.fullName}</Table.Td>
              <Table.Td>{product.date}</Table.Td>
              <Table.Td>{product.status}</Table.Td>
              <Table.Td>{product.category}</Table.Td>
              <Table.Td>{product.productType}</Table.Td>
              <Table.Td>{product.description}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      {!products.length && <Text mt="md" size="lg">Ничего не найдено!</Text>}
    </>

  );
};

export default ProductTable;
