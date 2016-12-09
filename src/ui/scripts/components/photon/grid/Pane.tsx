import * as React from 'react';
import cx = require('classnames');
import { PaneComponent, PaneProps } from './types';

const Pane: PaneComponent = (props: PaneProps) => {
    const classNames = cx('pane', `pane-${props.hSize}`, props.className);
    const rest = Object.assign({}, props);
    delete rest.hSize;

    return (
        <div {...rest} className={classNames}>
            {props.children}
        </div>
    );
};

Pane.defaultProps = {
    hSize: 'full'
};

export default Pane;
