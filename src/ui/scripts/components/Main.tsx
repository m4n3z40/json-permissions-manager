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
    Icon
} from './photon';
import TableExample from './examples/TableExample';
import TabExample from './examples/TabExample';
import ListExample from './examples/ListExample';
import NavExample from './examples/NavExample';

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
                        <NavExample />
                        <ListExample />
                    </SidebarPane>
                    <Pane>
                        <TabExample />
                        <h1 className="text-center">
                            Value is: {props.value}
                        </h1>
                        <hr/>
                        <TableExample />
                    </Pane>
                </PaneGroup>
            </WindowContent>
            <FooterToolbar title={`${new Date().getFullYear()} &copy; All Rights Reserved.`} />
        </Window>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
