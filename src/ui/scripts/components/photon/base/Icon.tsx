import * as React from 'react';
import cx = require('classnames');
import { IconComponent, IconProps } from './types';

const Icon: IconComponent = (props: IconProps) => {
    const classNames = cx(`icon icon-${props.name}`, {
        'icon-text': props.precedesText
    });

    return <span {...props} className={classNames} />;
};

Icon.propTypes = {
    name: React.PropTypes.string.isRequired
};

export default Icon;
