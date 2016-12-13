import * as React from 'react';
import cx = require('classnames');
import { ButtonComponent, ButtonProps } from './types';
import { IconProps } from '../base/types';
import Icon from '../base/Icon';

const { Children, cloneElement } = React;

interface InnerAddClassToPrefixIcons {
    (child: React.ReactChild, index: number): React.ReactChild;
}

function addClassToPrefixIcons(totalChildren: number): InnerAddClassToPrefixIcons {
    return (child, index) => {
        if (typeof child === 'object' && child.type === Icon) {
            return cloneElement<IconProps, HTMLSpanElement>(
                child as React.DOMElement<IconProps, HTMLSpanElement>,
                {precedesText: totalChildren > 1 && index === 0}
            );
        }

        return child;
    };
}

const Button: ButtonComponent = (props: ButtonProps) => {
    const className = cx(
        'btn',
        `btn-${props.styleVariation}`,
        props.sizeVariation !== 'normal' && `btn-${props.sizeVariation}`,
        { 'btn-form': props.withinForm, active: props.active },
        props.className
    );
    const totalChildren = Children.count(props.children);
    const rest = Object.assign({}, props);
    delete rest.sizeVariation;
    delete rest.styleVariation;
    delete rest.withinForm;

    return (
        <button {...rest} className={className}>
            {Children.map(props.children, addClassToPrefixIcons(totalChildren))}
        </button>
    );
};

Button.defaultProps = {
    sizeVariation: 'normal',
    styleVariation: 'default',
    withinForm: false
};

export default Button;
