import * as React from 'react';
import cx = require('classnames');
import { SidebarPaneComponent, SidebarPaneProps } from './types';

const SidebarPane: SidebarPaneComponent = (props: SidebarPaneProps) => (
    <aside {...props} className={cx('pane pane-sm sidebar', props.className)}>
        {props.children}
    </aside>
);

export default SidebarPane;
