import * as React from 'react';
import cx = require('classnames');
import { ListComponent, ListProps } from './types';

const List: ListComponent = (props: ListProps) => (
    <ul {...props} className={cx('list-group', props.className)}>
        {props.children}
    </ul>
);

export default List;
