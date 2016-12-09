import * as React from 'react';
import { Nav, NavTitle, NavItem, Icon } from '../photon';

const NavExample = () => (
    <Nav>
        <NavTitle>Navigation</NavTitle>
        <NavItem>
            <Icon name="home" />
            Some Item
        </NavItem>
    </Nav>
);

export default NavExample;
