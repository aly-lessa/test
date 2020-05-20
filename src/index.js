import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Axios from 'axios';
import mainReducer from './store/reducers';
import Connect from './Connect';
import * as serviceWorker from './serviceWorker';
import './index.css';

import { showPage } from './store/actions/action';

const store = createStore(
  mainReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument(Axios)
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Connect />
  </Provider>,
  document.getElementById('root')
);
store.dispatch(showPage(1));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
