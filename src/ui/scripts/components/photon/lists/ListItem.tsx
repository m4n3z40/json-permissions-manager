import * as React from 'react';
import cx = require('classnames');
import { ListItemComponent, ListItemProps } from './types';

const ListItem: ListItemComponent = (props: ListItemProps) => {
    const classNames = cx('list-group-item', props.className, {
        active: props.active
    });

    return (
        <li {...props} className={classNames}>
            {props.children}
        </li>
    );
};

export default ListItem;
