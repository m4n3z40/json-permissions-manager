import * as React from 'react';
import cx = require('classnames');
import { InputComponent, InputProps } from './types';

const Input: InputComponent = (props: InputProps) => (
    <input {...props} className={cx('form-control', props.className)} />
);

export default Input;
