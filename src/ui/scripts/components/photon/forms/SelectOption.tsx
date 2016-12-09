import * as React from 'react';
import { SelectOptionComponent, SelectOptionProps } from './types';

const SelectOption: SelectOptionComponent = (props: SelectOptionProps) => (
    <option {...props}>
        {props.children}
    </option>
);

export default SelectOption;
