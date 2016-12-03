import * as React from 'react';
import cx = require('classnames');
import { WindowContentComponent, WindowContentProps } from './types';

const WindowContent: WindowContentComponent = (props: WindowContentProps) => (
    <div {...props} className={cx('window-content', props.className)}>
        {props.children}
    </div>
);

export default WindowContent;
