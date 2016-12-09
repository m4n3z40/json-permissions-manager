import * as React from 'react';
import { LabelComponent, LabelProps } from './types';

const Label: LabelComponent = (props: LabelProps) => (
    <label {...props}>
        {props.children}
    </label>
);

export default Label;
