import * as React from 'react';
import { FormComponent, FormProps } from './types';

const Form: FormComponent = (props: FormProps) => (
    <form {...props}>
        {props.children}
    </form>
);

export default Form;
