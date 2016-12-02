import { createElement } from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import routes from './routes/all';
import modules, { RootState } from './modules';

const store: Store<RootState> = createStore(modules);
const router = createElement(Router, {history: hashHistory}, routes);
const rootComponent = createElement(Provider, {store}, router);

render(rootComponent, document.getElementById('root'));
