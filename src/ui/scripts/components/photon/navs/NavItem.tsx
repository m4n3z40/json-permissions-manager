import * as React from 'react';
import cx = require('classnames');
import { NavItemComponent, NavItemProps } from './types';

const NavItem: NavItemComponent = (props: NavItemProps) => {
    const classNames = cx('nav-group-item', props.className, {
        active: props.active
    });

    return (
        <a {...props} className={classNames}>
            {props.children}
        </a>
    );
};

NavItem.defaultProps = {
    href: '#'
};

export default NavItem;
