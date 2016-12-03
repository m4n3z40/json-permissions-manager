import * as React from 'react';
import { Route } from 'react-router';
import { Dispatch, ActionCreatorsMapObject, bindActionCreators } from 'redux';
import { MapDispatchToPropsFunction, MapStateToProps, connect } from 'react-redux';
import { RootState } from '../modules';
import { IncrementState, IncrementActionCreators, increment, decrement, reset } from '../modules/increment';
import Window from './photon/base/Window';
import WindowContent from './photon/base/WindowContent';
import HeaderToolbar from './photon/bars/HeaderToolbar';
import FooterToolbar from './photon/bars/FooterToolbar';
import ToolbarActions from './photon/bars/ToolbarActions';
import PaneGroup from './photon/grid/PaneGroup';
import Pane from './photon/grid/Pane';

type MainMapStateToProps = MapStateToProps<IncrementState, any>;
type MainMapDispatchToProps =  MapDispatchToPropsFunction<IncrementActionCreators, any>;
type MainProps = IncrementState & IncrementActionCreators;

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

export const Main: React.StatelessComponent<MainProps> = (props: MainProps) => {
    return (
        <Window>
            <HeaderToolbar title="Incrementor">
                <ToolbarActions>
                    <div className="btn-group">
                        <button className="btn btn-default" onClick={props.increment}>
                            <span className="icon icon-plus-circled"></span>
                        </button>
                        <button className="btn btn-default" onClick={props.decrement}>
                            <span className="icon icon-minus-circled"></span>
                        </button>
                        <button className="btn btn-default" onClick={props.reset}>
                            <span className="icon icon-cancel-circled"></span>
                        </button>
                    </div>
                </ToolbarActions>
            </HeaderToolbar>
            <WindowContent>
                <PaneGroup>
                    <Pane width="sm" className="sidebar">
                        <nav className="nav-group">
                            <h5 className="nav-group-title">Fake Categories</h5>
                            <a className="nav-group-item">
                                <span className="icon icon-home"></span>
                                Fake Item
                            </a>
                        </nav>
                    </Pane>
                    <Pane className="padded">
                        <h1 className="text-center">
                            Value is: {props.value}
                        </h1>
                    </Pane>
                </PaneGroup>
            </WindowContent>
            <FooterToolbar title={(
                `${new Date().getFullYear()} &copy; All Rights Reserved.`
            )}>
            </FooterToolbar>
        </Window>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
