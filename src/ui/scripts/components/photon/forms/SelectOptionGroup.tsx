import * as React from 'react';
import { SelectOptionGroupComponent, SelectOptionGroupProps } from './types';

const SelectOptionGroup: SelectOptionGroupComponent = (props: SelectOptionGroupProps) => (
    <optgroup {...props}>
        {props.children}
    </optgroup>
);

export default SelectOptionGroup;
