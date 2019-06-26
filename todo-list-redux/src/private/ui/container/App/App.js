import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../engine/init/store';
import Style from './App.module.scss';

import Wrapper from '../Wrapper';

const App = () => (
  <Provider store={store}>
    <div className={Style.App}>
      <Wrapper />
    </div>
  </Provider>
);

export default App;
