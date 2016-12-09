import * as React from 'react';
import { Tab, TabItem, Icon } from '../photon';

const TabExample = () => (
    <Tab>
        <TabItem onTabClose={() => {}}>Tab</TabItem>
        <TabItem onTabClose={() => {}} active>Tab active</TabItem>
        <TabItem>Tab (Not closable)</TabItem>
        <TabItem fixed><Icon name="plus" /></TabItem>
    </Tab>
);

export default TabExample;
