import * as React from 'react';
import cx = require('classnames');
import { ImageComponent, ImageProps } from './types';

const Image: ImageComponent = (props: ImageProps) => {
    const classNames = cx(`img img-${props.styleVariation}`, props.className);

    return <img {...props} className={classNames} />;
};

export default Image;
