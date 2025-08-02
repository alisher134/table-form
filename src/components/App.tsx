// libraries
import { type FC } from 'react';
import {
  Alert,
  Box,
  Container,
  Flex,
  Text,
  Title,
} from '@mantine/core';
// api
import { fetchProducts } from 'api/fetchProducts';
// components
import ProductFilter from 'components/ProductFilter';
import { ProductPagination } from 'components/ProductPagination';
import ProductTable from 'components/ProductTable';
// hooks
import { useFilter } from 'hooks/useFilter';

const App: FC = () => {
  const {
    data: products,
    dataTotalPages: productsTotalPages,
    isLoading,
    error,
    page,
    sort,
    pageSize,
    handlePagination,
    handlePageSize,
    handleSort,
    handleApplyFilter,
    handleClearFilter,
  } = useFilter(fetchProducts);

  return (
    <Container px="xl" py="sm" size="xl">
      {error && (
      <Alert bg="red" mb="md" title="Error">
        <Text>{error}</Text>
      </Alert>
      )}

      <Title mb="lg">Задача по формам</Title>

      <Flex gap="xl">
        <Box flex="1">
          <ProductTable
            handleSort={handleSort}
            isLoading={isLoading}
            products={products}
            sort={sort}
          />

          <ProductPagination
            handlePageSize={handlePageSize}
            handlePagination={handlePagination}
            page={page}
            pageSize={pageSize}
            paginationTotal={productsTotalPages}
          />
        </Box>

        <ProductFilter handleApplyFilter={handleApplyFilter} handleClearFilter={handleClearFilter} />
      </Flex>
    </Container>
  );
};

export default App;
