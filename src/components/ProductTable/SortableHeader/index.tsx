// libraries
import type { FC } from 'react';
import { UnstyledButton } from '@mantine/core';
// types
import type { Sort, SortName } from 'types/filterTypes';

type SortableHeaderProps = {
  title: string;
  name: SortName;
  sort: Sort;
  handleSortType: (sortKey: SortName) => void;
};

const SortableHeader: FC<SortableHeaderProps> = ({
  handleSortType, title, sort, name,
}) => {
  const renderSortIndicator = () => {
    if (sort?.field !== name) {
      return '↑↓';
    }

    return sort?.order === 'asc' ? '↑' : '↓';
  };

  return (
    <UnstyledButton onClick={() => handleSortType(name)} type="button">
      {title}
      {' '}
      <span>{renderSortIndicator()}</span>
    </UnstyledButton>
  );
};

export default SortableHeader;
