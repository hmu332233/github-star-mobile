import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';
// import 'bootstrap/dist/css/bootstrap.min.css';
import AppReducer from './reducers';

const store = createStore(AppReducer);
const rootEl = document.getElementById('root');

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