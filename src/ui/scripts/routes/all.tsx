import * as React from 'react';
import { Route, RouteProps } from 'react-router';
import Main from '../components/Main';

export default (
    <Route path="/" component={Main} />
) as React.ComponentElement<RouteProps, React.Component<RouteProps, any>>;
