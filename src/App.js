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
import DataTable from './componentes/muiDatatable/dataTable';
import CustomDataTable from './componentes/customDataTable';
// import CustomDataTable from './componentes/customDataTable/example1/TableExample1';
// import locale_en from 'react-intl/locale-data/en';
import CustomIcons from './componentes/customIcons';
import Parent from './componentes/boxes/Parent';
import Rating from './componentes/rating/Rating';
import Routes from './componentes/routes/Routes';
import AddProduct from './componentes/products/addProduct';
import ReactCarousel from './componentes/carousel'
import { Context } from './context';
import ButtonAppBar from './componentes/header/AppBar';
import Store from './Store';

function App() {

  const toggle = (e) => setContext({ ...context, value: e });

  const [context, setContext] = useState({ value: 'La Liga', toggle });

  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
      <Store>
        <Context.Provider value={context}>
          <ButtonAppBar />
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
                    <li>
                      <Link to="/data-table">MuiDataTable</Link>
                    </li>
                    <li>
                      <Link to="/custom-data-table">My dataTable</Link>
                    </li>
                    <li>
                      <Link to="/custom-icons">My custom icons</Link>
                    </li>
                    <li>
                      <Link to="/react-carousel">React Carousel</Link>
                    </li>
                    <li>
                      <Link to="/add-product">Add product (useReducer + useContext)</Link>
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
                  <Route path="/data-table" component={DataTable} />
                  <Route path="/custom-data-table" component={CustomDataTable} />
                  <Route path="/custom-icons" component={CustomIcons} />
                  <Route path="/react-carousel" component={ReactCarousel} />
                  <Route path="/add-product" component={AddProduct} />
                </Switch>
              </main>
            </Router>
          </div>
        </Context.Provider>
      </Store>
    </SnackbarProvider>
  );
}

export default App;
