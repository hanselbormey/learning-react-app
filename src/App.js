import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { SnackbarProvider } from 'notistack';

import GatewayList from './componentes/gateway/GatewayList';
import GatewayEdit from './componentes/gateway/GatewayEdit';
import GatewayAdd from './componentes/gateway/GatewayAdd';
import Parent from './componentes/Boxes.js/Parent';
import Rating from './componentes/rating/Rating';
import Routes from './componentes/routes/Routes';
import { Context } from './context';

function App() {

  const toggle = (e) => setContext({ ...context, value: e });

  const [context, setContext] = useState({ value: 'La Liga', toggle });

  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
      <Context.Provider value={context}>
        <div>
          <Router>
            <header>
              <nav>
                <ul>
                  <li>
                    <Link to="/gateway-list">Gateways</Link>
                  </li>
                  <li>
                    <Link to="/parent">Optimizing performance - [memo, useCalback]</Link>
                  </li>
                  <li>
                    <Link to="/context">Context</Link>
                  </li>
                  <li>
                    <Link to="/routes">React router</Link>
                  </li>
                </ul>
              </nav>
            </header>
            <main>
              <Switch>
                <Route path="/gateway-list" component={GatewayList} />
                <Route path="/gateway-add" component={GatewayAdd} />
                <Route path="/gateway-edit/:id" component={GatewayEdit} />
                <Route path="/parent" component={Parent} />
                <Route path="/context" component={Rating} />
                <Route path="/routes" component={Routes} />
              </Switch>
            </main>
          </Router>
        </div>
      </Context.Provider>

    </SnackbarProvider>
  );
}

export default App;
