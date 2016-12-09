import * as React from 'react';
import cx = require('classnames');
import { ToolbarComponent, ToolbarProps } from './types';

const FooterToolbar: ToolbarComponent = (props: ToolbarProps) => {
    const classNames = cx(
        'toolbar toolbar-footer',
        props.className,
        {'toolbar-borderless': props.borderless}
    );
    const rest = Object.assign({}, props);
    delete rest.borderless;

    return (
        <footer {...rest} className={classNames}>
            {props.children}
            {props.title ? <h1 className="title">{props.title}</h1> : null}
        </footer>
    );
};

FooterToolbar.defaultProps = {
    borderless: false
};

export default FooterToolbar;
