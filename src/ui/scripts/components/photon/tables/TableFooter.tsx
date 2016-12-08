import * as React from 'react';
import { TableFooterComponent, TableFooterProps } from './types';

const TableFooter: TableFooterComponent = (props: TableFooterProps) => (
    <tfoot {...props}>
        {props.children}
    </tfoot>
);

export default TableFooter;
