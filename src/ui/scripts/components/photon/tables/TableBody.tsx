import * as React from 'react';
import { TableBodyComponent, TableBodyProps } from './types';

const TableBody: TableBodyComponent = (props: TableBodyProps) => (
    <tbody {...props}>
        {props.children}
    </tbody>
);

export default TableBody;
