import * as React from 'react';
import { Route } from 'react-router';
import { Dispatch, ActionCreatorsMapObject, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RootStore } from '../modules';
import { increment, decrement, reset } from '../modules/increment';

function mapStateToProps(state: RootStore) {
    return {value: state.increment.value};
}

function mapDispatchToProps(dispatch: Dispatch<RootStore>) {
    return bindActionCreators({ increment, decrement, reset }, dispatch);
}

export function Main(props) {
    return (
        <div id="main">
            <header className="toolbar toolbar-header">
                <h1 className="title">Incrementor</h1>
            </header>
            <main>
                <div className="btn-group">
                    <button className="btn btn-large btn-positive" onClick={props.increment}>
                        <span className="icon icon-plus-circled"></span>
                    </button>
                    <button className="btn btn-large btn-negative" onClick={props.decrement}>
                        <span className="icon icon-minus-circled"></span>
                    </button>
                    <button className="btn btn-large btn-default" onClick={props.reset}>
                        <span className="icon icon-cancel-circled"></span>
                    </button>
                </div>

                <h1>Value is: {props.value}</h1>
            </main>
            <footer className="toolbar toolbar-footer">
                <h1 className="title">{new Date().getFullYear()} &copy; All Rights Reserved.</h1>
            </footer>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
