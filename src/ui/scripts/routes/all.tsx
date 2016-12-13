import * as React from 'react';
import { Route, IndexRoute, RouteProps } from 'react-router';
import MainLayout from '../components/layout/Main';
import MainPage from '../components/pages/Main';

export type AllRoutes = React.ComponentElement<RouteProps, React.Component<RouteProps, any>>;

export default (
    <Route path="/" component={MainLayout}>
        <IndexRoute component={MainPage} />
    </Route>
) as AllRoutes;
