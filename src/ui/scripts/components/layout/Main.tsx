import * as React from 'react';
import {
    Window,
    WindowContent,
    HeaderToolbar,
    FooterToolbar,
    PaneGroup,
    SidebarPane,
    Pane,
    Nav,
    NavTitle,
    NavItem,
    Button,
    Icon
} from '../photon';

export type MainProps = React.ReactChild & ReactRouter.RouteComponentProps<any, any>;

export interface MainComponent extends React.StatelessComponent<MainProps> {
    (props: MainProps): React.ReactElement<HTMLElement>;
}

const Main: MainComponent = (props: MainProps) => (
    <Window>
        <HeaderToolbar title="JSON Permissions Manager" />
        <WindowContent>
            <PaneGroup>
                <SidebarPane>
                    <Nav>
                        <NavTitle className="clearfix">
                            Permission Files

                            <Button sizeVariation="mini" className="pull-right" title="Open existing permission file">
                                <Icon name="folder" />
                            </Button>
                            <Button sizeVariation="mini" className="pull-right" title="Add new permission file">
                                <Icon name="plus" />
                            </Button>
                        </NavTitle>
                        <NavItem>No files loaded</NavItem>
                    </Nav>
                </SidebarPane>
                <Pane className="padded-horizontally">
                    {props.children}
                </Pane>
            </PaneGroup>
        </WindowContent>
        <FooterToolbar title={`${new Date().getFullYear()} &copy; All Rights Reserved.`} />
    </Window>
);

export default Main;
