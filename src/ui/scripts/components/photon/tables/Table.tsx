import * as React from 'react';
import cx = require('classnames');
import { TableComponent, TableProps } from './types';

const Table: TableComponent = (props: TableProps) => {
    const rest = Object.assign({}, props);
    delete rest.striped;

    return (
        <table {...rest} className={cx({'table-striped': props.striped})}>
            {props.children}
        </table>
    );
}

export default Table;
