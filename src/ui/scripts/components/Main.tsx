import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { MapDispatchToPropsFunction, MapStateToProps, connect } from 'react-redux';
import { RootState } from '../modules';
import {
    IncrementState,
    IncrementActionCreators,
    increment,
    decrement,
    reset
} from '../modules/increment';
import {
    Window,
    WindowContent,
    HeaderToolbar,
    FooterToolbar,
    ToolbarActions,
    PaneGroup,
    Pane,
    SidebarPane,
    ButtonGroup,
    Button,
    Icon,
    Nav,
    NavItem,
    NavTitle,
    List,
    ListHeader,
    ListItem,
    MediaListItem,
    Image,
    Tab,
    TabItem
} from './photon';

type MainMapStateToProps = MapStateToProps<IncrementState, any>;
type MainMapDispatchToProps =  MapDispatchToPropsFunction<IncrementActionCreators, any>;
type MainProps = IncrementState & IncrementActionCreators;
type MainComponent = React.StatelessComponent<MainProps>;

const mapStateToProps: MainMapStateToProps = (
    state: RootState
): IncrementState => ({
    value: state.increment.value
});

const mapDispatchToProps: MainMapDispatchToProps = (
    dispatch: Dispatch<RootState>
): IncrementActionCreators => (bindActionCreators(
    { increment, decrement, reset },
    dispatch
));

export const Main: MainComponent = (props: MainProps) => {
    return (
        <Window>
            <HeaderToolbar title="Incrementor">
                <ToolbarActions>
                    <ButtonGroup>
                        <Button onClick={props.increment}>
                            <Icon name="plus-circled" />
                        </Button>
                        <Button onClick={props.decrement}>
                            <Icon name="minus-circled" />
                        </Button>
                        <Button onClick={props.reset}>
                            <Icon name="cancel-circled" />
                        </Button>
                    </ButtonGroup>
                </ToolbarActions>
            </HeaderToolbar>
            <WindowContent>
                <PaneGroup>
                    <SidebarPane>
                        <Nav>
                            <NavTitle>Navigation</NavTitle>
                            <NavItem>
                                <Icon name="home" />
                                Some Item
                            </NavItem>
                        </Nav>
                        <List>
                            <ListHeader>List</ListHeader>
                            <ListItem>
                                <p>Normal Item</p>
                            </ListItem>
                            <ListItem active>
                                <p>Normal Item (active)</p>
                            </ListItem>
                            <MediaListItem>
                                <Image
                                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=32"
                                    width="32px"
                                    height="32px"
                                />
                                <div>
                                    <strong>Media Item</strong>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </MediaListItem>
                        </List>
                    </SidebarPane>
                    <Pane>
                        <Tab>
                            <TabItem onTabClose={() => {}}>Tab</TabItem>
                            <TabItem onTabClose={() => {}} active>Tab active</TabItem>
                            <TabItem>Tab (Not closable)</TabItem>
                            <TabItem fixed><Icon name="plus" /></TabItem>
                        </Tab>
                        <h1 className="text-center">
                            Value is: {props.value}
                        </h1>
                    </Pane>
                </PaneGroup>
            </WindowContent>
            <FooterToolbar title={`${new Date().getFullYear()} &copy; All Rights Reserved.`} />
        </Window>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
