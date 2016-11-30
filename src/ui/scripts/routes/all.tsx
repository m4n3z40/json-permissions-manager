import * as React from 'react';
import { Route } from 'react-router';
import Main from '../components/Main';

export default (
    <Route path="/" component={Main} />
) as React.ReactElement<Route>;
