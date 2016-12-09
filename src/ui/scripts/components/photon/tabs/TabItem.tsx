import * as React from 'react';
import cx = require('classnames');
import { TabItemComponent, TabItemProps } from './types';
import Icon from '../base/Icon';

const TabItem: TabItemComponent = (props: TabItemProps) => {
    const classNames = cx('tab-item', props.className, {
        active: props.active,
        'tab-item-fixed': props.fixed
    });
    const rest = Object.assign({}, props);
    delete rest.onTabClose;
    delete rest.fixed;
    delete rest.active;

    return (
        <div {...rest} className={classNames}>
            {
                props.onTabClose ?
                    <Icon
                        name="cancel"
                        className="icon-close-tab"
                        onClick={props.onTabClose}
                    /> :
                    null
            }
            {props.children}
        </div>
    );
};

export default TabItem;
