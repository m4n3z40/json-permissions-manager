import * as React from 'react';
import { NavProps, Nav, NavTitle, NavItem, Icon } from '../photon';

interface NavExampleComponent extends React.StatelessComponent<NavProps> {
    (props: NavProps): React.ReactElement<HTMLElement>;
}

const NavExample: NavExampleComponent = () => (
    <Nav>
        <NavTitle>Navigation</NavTitle>
        <NavItem>
            <Icon name="home" />
            Some Item
        </NavItem>
    </Nav>
);

export default NavExample;
