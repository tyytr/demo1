import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Home from './components/home';
import Singin from './components/auth/singin';
import Singup from './components/auth/singup';
import Singout from './components/auth/singout'
import ShopList from './components/shopList';
import Publish from './components/publish';
import Personal from './components/personal';
import Admin from './components/admin';
import Cart from './components/cart';
import Header from './components/commons/header';
// import Publish from './components/commons/publish';
import Footer from './components/commons/footer';

import reducers from './reducers';
// const createStoreWithMiddleware = compose(
//     applyMiddleware(reduxThunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
// )(createStore);
// const store = createStoreWithMiddleware(reducers);
ReactDOM.render(

        <BrowserRouter>
            <div>
                <Header />
                {/*<Publish />*/}
                <Switch>
                    <Route path='/singin' component={Singin} />
                    <Route path='/singup' component={Singup} />
                    <Route path='/singout' component={Singout} />
                    <Route path='/shopList' component={ShopList} />
                    <Route path='/publish' component={Publish} />
                    <Route path='/personal' component={Personal} />
                    <Route path='/admin' component={Admin} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/' component={Home} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>,

    document.querySelector('.content')
);