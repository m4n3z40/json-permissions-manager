import * as React from 'react';
import cx = require('classnames');
import { WindowComponent, WindowProps } from './types';

const Window: WindowComponent = (props: WindowProps) => (
    <div {...props} className={cx('window', props.className)}>
        {props.children}
    </div>
);

export default Window;
