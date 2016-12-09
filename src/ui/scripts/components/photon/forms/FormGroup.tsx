import * as React from 'react';
import cx = require('classnames');
import { FormGroupComponent, FormGroupProps } from './types';

const FormGroup: FormGroupComponent = (props: FormGroupProps) => (
    <div {...props} className={cx('form-group', props.className)}>
        {props.children}
    </div>
);

export default FormGroup;
