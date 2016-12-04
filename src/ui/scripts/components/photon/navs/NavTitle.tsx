import * as React from 'react';
import cx = require('classnames');
import { NavTitleComponent, NavTitleProps } from './types';

const NavTitle: NavTitleComponent = (props: NavTitleProps) => (
    <h5 {...props} className={cx('nav-group-title', props.className)}>
        {props.children}
    </h5>
);

export default NavTitle;
