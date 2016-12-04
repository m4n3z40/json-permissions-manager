import * as React from 'react';
import cx = require('classnames');
import { ButtonComponent, ButtonProps } from './types';
import { IconProps } from '../base/types';
import Icon from '../base/Icon';

interface innerAddClassToPrefixIcons {
    (child: React.ReactChild, index: number): React.ReactChild;
}

function addClassToPrefixIcons(totalChildren: number): innerAddClassToPrefixIcons {
    return (child, index) => {
        if (typeof child === 'object' && child.type === Icon) {
            return React.cloneElement<IconProps, HTMLSpanElement>(
                child as React.DOMElement<IconProps, HTMLSpanElement>,
                {precedesText: totalChildren > 0 && index === 0}
            );
        }

        return child;
    };
}

const Button: ButtonComponent = (props: ButtonProps) => {
    const className = cx(
        'btn',
        `btn-${props.sizeVariation}`,
        `btn-${props.styleVariation}`,
        { 'btn-form': props.withinForm }
    );
    const totalChildren = React.Children.count(props.children);

    return (
        <button {...props} className={className}>
            {React.Children.map(props.children, addClassToPrefixIcons(totalChildren))}
        </button>
    );
};

Button.defaultProps = {
    sizeVariation: 'normal',
    styleVariation: 'default',
    withinForm: false
};

export default Button;
