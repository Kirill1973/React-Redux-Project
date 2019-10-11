import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from '../../../engine/init/store';
import Wrapper from '../Wrapper';
import Style from './App.module.scss';


const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className={Style.App}>
        <Wrapper />
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
