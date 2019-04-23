import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import App from './components/App';
import reducers from './reducers'

const store = createStore(
  reducers,
  localStorage["redux-store"] ? JSON.parse(localStorage["redux-store"]) : {}
);

store.subscribe(() => {
  localStorage["redux-store"] = JSON.stringify(store.getState());
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root'));