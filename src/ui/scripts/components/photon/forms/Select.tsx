import * as React from 'react';
import cx = require('classnames');
import { SelectComponent, SelectProps } from './types';

const Select: SelectComponent = (props: SelectProps) => (
    <select {...props} className={cx('form-control', props.className)}>
        {props.children}
    </select>
);

export default Select;
