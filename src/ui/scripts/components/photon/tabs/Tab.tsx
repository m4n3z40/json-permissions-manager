import * as React from 'react';
import cx = require('classnames');
import { TabComponent, TabProps } from './types';

const Tab: TabComponent = (props: TabProps) => (
    <div {...props} className={cx('tab-group', props.className)}>
        {props.children}
    </div>
);

export default Tab;
