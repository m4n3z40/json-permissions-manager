import * as React from 'react';
import cx = require('classnames');
import { PaneGroupComponent, PaneGroupProps } from './types';

const PaneGroup: PaneGroupComponent = (props: PaneGroupProps) => (
    <div {...props} className={cx('pane-group', props.className)}>
        {props.children}
    </div>
);

export default PaneGroup;
