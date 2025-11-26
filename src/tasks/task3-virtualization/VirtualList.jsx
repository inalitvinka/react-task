import { List } from 'react-window';
import { RowComponent } from './RowComponent';
import { feedbacks } from '@utils';

export const VirtualList = () => {
  return (
    <List
      rowComponent={RowComponent}
      rowCount={feedbacks.length}
      rowHeight={100}
      rowProps={{ feedbacks }}
    />
  );
};
