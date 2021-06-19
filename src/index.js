import React from 'react';
import {render} from 'react-dom';
import {App} from './App';
import * as serviceWorker from './serviceWorkerRegistration';

render(
    <App />,
  document.getElementById('root')
);

serviceWorker.register();