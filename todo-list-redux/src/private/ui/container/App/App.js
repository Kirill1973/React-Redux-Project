import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../engine/init/store';
import Wrapper from '../Wrapper';
import Style from './App.module.scss';

const App = () => (
  <Provider store={store}>
    <div className={Style.App}>
      <Wrapper />
    </div>
  </Provider>
);

export default App;
