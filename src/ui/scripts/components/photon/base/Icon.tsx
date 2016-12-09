import * as React from 'react';
import cx = require('classnames');
import { IconComponent, IconProps } from './types';

const Icon: IconComponent = (props: IconProps) => {
    const classNames = cx(`icon icon-${props.name}`, props.className, {
        'icon-text': props.precedesText
    });
    const rest = Object.assign({}, props);
    delete rest.name;
    delete rest.precedesText;

    return <span {...rest} className={classNames} />;
};

Icon.propTypes = {
    name: React.PropTypes.string.isRequired
};

export default Icon;
