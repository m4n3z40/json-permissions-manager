import * as React from 'react';
import { TableRowComponent, TableRowProps } from './types';

const TableRow: TableRowComponent = (props: TableRowProps) => (
    <tr {...props}>
        {props.children}
    </tr>
);

export default TableRow;
