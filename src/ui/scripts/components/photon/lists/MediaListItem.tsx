import * as React from 'react';
import cx = require('classnames');
import { MediaListItemComponent, MediaListItemProps } from './types';
import { ImageProps } from '../base/types';
import ListItem from './ListItem';
import Image from '../base/Image';

const { Children, cloneElement } = React;

interface innerAddChildrenClasses {
    (child: React.ReactChild, index: number): React.ReactChild;
}

function addChildrenClasses(props: MediaListItemProps): innerAddChildrenClasses {
    return child => {
        if (typeof child !== 'object') {
            console.warn(`Unexpected child type (${typeof child}) provided to MediaListItem component`);

            return child;
        }

        const {type: childType, props: childProps} = child;

        if (childType === Image || childType === 'img') {
            return cloneElement<ImageProps, HTMLImageElement>(
                child as React.DOMElement<ImageProps, HTMLImageElement>,
                {
                    className: cx(`media-object pull-${props.imageAlignment}`, childProps.className),
                    styleVariation: childProps.styleVariation || 'circle'
                }
            );
        }

        return cloneElement<React.HTMLProps<HTMLElement>, HTMLElement>(
            child as React.DOMElement<React.HTMLProps<HTMLElement>, HTMLElement>,
            { className: cx('media-body', childProps.className) }
        );
    };
}

const MediaListItem: MediaListItemComponent = (props: MediaListItemProps) => {
    const rest = Object.assign({}, props);
    delete rest.imageAlignment;

    return (
        <ListItem {...rest}>
            {Children.map(props.children, addChildrenClasses(props))}
        </ListItem>
    );
};

MediaListItem.defaultProps = {
    imageAlignment: 'left'
};

export default MediaListItem;
