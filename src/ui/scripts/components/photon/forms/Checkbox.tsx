import * as React from 'react';
import cx = require('classnames');
import { CheckboxComponent, CheckableProps } from './types';
import Label from './Label';

const Checkbox: CheckboxComponent = (props: CheckableProps) => {
    const rest = Object.assign({}, props);
    delete rest.children;
    delete rest.inline;

    return (
        <div className={cx('checkbox', {'checkbox-inline': props.inline}, props.className)}>
            <Label>
                <input {...rest} type="checkbox" />
                {props.children}
            </Label>
        </div>
    );
};

export default Checkbox;
