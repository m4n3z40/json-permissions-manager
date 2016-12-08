import * as React from 'react';
import { TableHeaderCellComponent, TableHeaderCellProps } from './types';

const TableHeaderCell: TableHeaderCellComponent = (props: TableHeaderCellProps) => (
    <th {...props}>
        {props.children}
    </th>
);

export default TableHeaderCell;
