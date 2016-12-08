import * as React from 'react';
import cx = require('classnames');
import { TableComponent, TableProps } from './types';

const Table: TableComponent = (props: TableProps) => (
    <table {...props} className={cx({'table-striped': props.striped})}>
        {props.children}
    </table>
);

export default Table;
