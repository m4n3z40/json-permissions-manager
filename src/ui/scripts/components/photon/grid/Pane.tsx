import * as React from 'react';
import cx = require('classnames');
import { PaneComponent, PaneProps } from './types';

const Pane: PaneComponent = (props: PaneProps) => {
    const classNames = cx('pane', `pane-${props.hSize}`, props.className);

    return (
        <div {...props} className={classNames}>
            {props.children}
        </div>
    );
};

Pane.defaultProps = {
    hSize: 'full'
};

export default Pane;
