import React from 'react';
import './App.less';
import RoutesBase from 'src/router/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import {routerConfig,BASE_URL} from 'src/router';
function App() {

  return (
    <div className="app">

      <Router basename={BASE_URL}>
          <RoutesBase routes={routerConfig} />
      </Router>
    </div>

  );
}

export default App;
