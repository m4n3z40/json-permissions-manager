import * as React from 'react';
import cx = require('classnames');
import { ImageComponent, ImageProps } from './types';

const Image: ImageComponent = (props: ImageProps) => {
    const classNames = cx(`img img-${props.styleVariation}`, props.className);
    const rest = Object.assign({}, props);
    delete rest.styleVariation;

    return <img {...rest} className={classNames} />;
};

export default Image;
