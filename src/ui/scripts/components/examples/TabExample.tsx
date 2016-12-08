import * as React from 'react';
import { TabProps, Tab, TabItem, Icon } from '../photon';

interface TabExampleComponent extends React.StatelessComponent<TabProps> {
    (props: TabProps): React.ReactElement<HTMLDivElement>;
}

const TabExample: TabExampleComponent = () => (
    <Tab>
        <TabItem onTabClose={() => {}}>Tab</TabItem>
        <TabItem onTabClose={() => {}} active>Tab active</TabItem>
        <TabItem>Tab (Not closable)</TabItem>
        <TabItem fixed><Icon name="plus" /></TabItem>
    </Tab>
);

export default TabExample;
