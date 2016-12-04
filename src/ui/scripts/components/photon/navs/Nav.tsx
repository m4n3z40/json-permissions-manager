import * as React from 'react';
import cx = require('classnames');
import { NavComponent, NavProps } from './types';

const Nav: NavComponent = (props: NavProps) => (
    <nav {...props} className={cx('nav-group', props.className)}>
        {props.children}
    </nav>
);

export default Nav;
