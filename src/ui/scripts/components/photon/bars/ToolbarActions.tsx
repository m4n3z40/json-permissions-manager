import * as React from 'react';
import cx = require('classnames');
import { ToolbarActionsComponent, ToolbarActionsProps } from './types';

const ToolbarActions: ToolbarActionsComponent = (props: ToolbarActionsProps) => (
    <div {...props} className={cx('toolbar-actions', props.className)}>
        {props.children}
    </div>
);

export default ToolbarActions;
