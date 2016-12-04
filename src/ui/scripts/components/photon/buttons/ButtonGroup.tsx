import * as React from 'react';
import cx = require('classnames');
import { ButtonGroupComponent, ButtonGroupProps } from './types';

const ButtonGroup: ButtonGroupComponent = (props: ButtonGroupProps) => (
    <div {...props} className={cx('btn-group', props.className)}>
        {props.children}
    </div>
);

export default ButtonGroup;
