import * as React from 'react';
import cx = require('classnames');
import { FormActionsComponent, FormActionsProps } from './types';

const FormActions: FormActionsComponent = (props: FormActionsProps) => (
    <div {...props} className={cx('form-actions', props.className)}>
        {props.children}
    </div>
);

export default FormActions;
