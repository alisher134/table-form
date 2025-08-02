// libraries
import { type FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box, Button, Checkbox, Flex, Group, Input, MultiSelect, Text,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
// config
import {
  CATEGORY_SELECT_DATA, CHECKBOX_STATUS_DATA,
  FILTER_FORM_WIDTH, filterValidationSchema,
} from 'components/ProductFilter/config';
// types
import type { Filter } from 'types/filterTypes';

type ProductFilterProps = {
  handleApplyFilter: (values: Filter) => void;
  handleClearFilter: () => void
};

const ProductFilter: FC<ProductFilterProps> = ({ handleApplyFilter, handleClearFilter }) => {
  const {
    control, watch, reset, handleSubmit, formState: { dirtyFields },
  } = useForm<Filter>({
    mode: 'onSubmit',
    resolver: yupResolver(filterValidationSchema),
    defaultValues: filterValidationSchema.getDefault(),
  });

  const dateFrom = watch('dateRange.from');
  const dateTo = watch('dateRange.to');

  const onSubmit = handleSubmit((values) => {
    const dirtyOnly = Object.fromEntries(
      Object.entries(values).filter(([key]) => dirtyFields[key as keyof Filter]),
    ) as Partial<Filter>;

    handleApplyFilter(dirtyOnly);
  });

  const handleReset = () => {
    reset();
    handleClearFilter();
  };

  return (
    <Box className="filter-form" component="form" onSubmit={onSubmit} w={FILTER_FORM_WIDTH}>
      <Flex justify="space-between">
        <Text size="lg">Фильтр</Text>
        <Button onClick={handleReset} type="button" variant="outline">Очистить</Button>
      </Flex>

      <Controller
        control={control}
        name="status"
        render={({ field }) => (
          <Checkbox.Group
            {...field}
            label="Статус"
            mb="sm"
            size="md"
          >
            <Group>
              {CHECKBOX_STATUS_DATA.map((item) => (
                <Checkbox
                  key={item.value}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Group>
          </Checkbox.Group>
        )}
      />

      <Controller
        control={control}
        name="category"
        render={({ field }) => (
          <MultiSelect
            {...field}
            data={CATEGORY_SELECT_DATA}
            label="Категория"
            mb="sm"
            placeholder="Выберите значение"
            size="md"
          />
        )}
      />

      <Controller
        control={control}
        name="fullName"
        render={({ field }) => (
          <Input.Wrapper label="Поиск" mb="sm">
            <Input {...field} placeholder="Введите имя" size="md" />
          </Input.Wrapper>
        )}
      />

      <Controller
        control={control}
        name="dateRange.from"
        render={({ field }) => (
          <DateInput
            {...field}
            label="Дата от"
            maxDate={dateTo}
            mb="sm"
            placeholder="Выберите дату"
            size="md"
          />
        )}
      />

      <Controller
        control={control}
        name="dateRange.to"
        render={({ field }) => (
          <DateInput
            {...field}
            label="Дата по"
            mb="md"
            minDate={dateFrom}
            placeholder="Выберите дату"
            size="md"
          />
        )}
      />

      <Button fullWidth type="submit">Применить</Button>
    </Box>
  );
};

export default ProductFilter;
