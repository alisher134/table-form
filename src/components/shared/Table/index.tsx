// libraries
import type { FC, ReactNode } from 'react';
import { Table as MantineTable } from '@mantine/core';

type TableProps = {
  headers: ReactNode;
  rows: ReactNode;
};

const Table: FC<TableProps> = ({ headers, rows }) => (
  <MantineTable
    className="table"
    highlightOnHover
    horizontalSpacing="sm"
    verticalSpacing="sm"
    withColumnBorders
    withTableBorder
  >
    <MantineTable.Thead className="table-head">{headers}</MantineTable.Thead>
    <MantineTable.Tbody>{rows}</MantineTable.Tbody>
  </MantineTable>
);

export default Table;
