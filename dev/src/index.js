import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';
import configureStore from './store/configureStore';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { loadStarred } from './actions';

const store = configureStore();
const rootEl = document.getElementById('root');

store.dispatch(loadStarred());

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Provider store = {store}>
        <Component />
      </Provider>
    </AppContainer>,
    rootEl
  );


render(App);

if (module.hot) module.hot.accept('./containers/App', () => render(App));