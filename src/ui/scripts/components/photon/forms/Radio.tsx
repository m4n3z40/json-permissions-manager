import * as React from 'react';
import cx = require('classnames');
import { RadioComponent, CheckableProps } from './types';
import Label from './Label';

const Radio: RadioComponent = (props: CheckableProps) => {
    const rest = Object.assign({}, props);
    delete rest.children;
    delete rest.inline;

    return (
        <div className={cx('radio', {'radio-inline': props.inline}, props.className)}>
            <Label>
                <input {...rest} type="radio" />
                {props.children}
            </Label>
        </div>
    );
};

export default Radio;
