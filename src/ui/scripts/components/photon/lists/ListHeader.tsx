import * as React from 'react';
import cx = require('classnames');
import { ListHeaderComponent, ListHeaderProps } from './types';

const ListHeader: ListHeaderComponent = (props: ListHeaderProps) => (
    <li {...props} className={cx('list-group-header', props.className)}>
        {props.children}
    </li>
);

export default ListHeader;
