import * as React from 'react';
import { Route } from 'react-router';
import { Dispatch, ActionCreatorsMapObject, bindActionCreators } from 'redux';
import {
    MapDispatchToPropsFunction,
    MapStateToProps,
    connect
} from 'react-redux';
import { RootState } from '../modules';
import {
    IncrementState,
    IncrementActionCreators,
    increment,
    decrement,
    reset
} from '../modules/increment';

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
        <div className="window">
            <header className="toolbar toolbar-header">
                <h1 className="title">Incrementor</h1>

                <div className="toolbar-actions">
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
                </div>
            </header>
            <main className="window-content">
                <div className="pane-group">
                    <div className="pane-sm sidebar">
                        <nav className="nav-group">
                            <h5 className="nav-group-title">Fake Categories</h5>
                            <a className="nav-group-item">
                                <span className="icon icon-home"></span>
                                Fake Item
                            </a>
                        </nav>
                    </div>
                    <div className="pane padded">
                        <h1>Value is: {props.value}</h1>
                    </div>
                </div>
            </main>
            <footer className="toolbar toolbar-footer">
                <h1 className="title">
                    {new Date().getFullYear()} &copy; All Rights Reserved.
                </h1>
            </footer>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
