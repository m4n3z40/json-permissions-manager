import * as React from 'react';
import { TableCellComponent, TableCellProps } from './types';

const TableCell: TableCellComponent = (props: TableCellProps) => (
    <td {...props}>
        {props.children}
    </td>
);

export default TableCell;
