import * as React from 'react';
import { TableHeaderComponent, TableHeaderProps } from './types';

const TableHeader: TableHeaderComponent = (props: TableHeaderProps) => (
    <thead {...props}>
        {props.children}
    </thead>
);

export default TableHeader;
