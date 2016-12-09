import * as React from 'react';
import cx = require('classnames');
import { ToolbarComponent, ToolbarProps } from './types';

const HeaderToolbar: ToolbarComponent = (props: ToolbarProps) => {
    const classNames = cx(
        'toolbar toolbar-header',
        props.className,
        {'toolbar-borderless': props.borderless}
    );
    const rest = Object.assign({}, props);
    delete rest.borderless;

    return (
        <header {...rest} className={classNames}>
            {props.title ? <h1 className="title">{props.title}</h1> : null}
            {props.children}
        </header>
    );
};

HeaderToolbar.defaultProps = {
    borderless: false
};

export default HeaderToolbar;
