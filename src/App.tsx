import React from 'react';
import Home from './screens/Home/Home';
import {Provider} from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
