import * as React from 'react';
import cx = require('classnames');
import { TextAreaComponent, TextAreaProps } from './types';

const TextArea: TextAreaComponent = (props: TextAreaProps) => (
    <textarea {...props} className={cx('form-control', props.className)}>
        {props.children}
    </textarea>
);

export default TextArea;
