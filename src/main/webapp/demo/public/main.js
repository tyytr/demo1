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
import ShopDetails from './components/shopDetails';
import Publish from './components/publish';
import Personal from './components/personal';
import AdminRegister from './components/adminRegister';
import AdminAuthority from './components/adminAuthority';
import AdminGoods from './components/adminGoods'
import AdminNotice from './components/adminNotice';
import AdminAdvice from './components/adminAdvice';
import Cart from './components/cart';
import Header from './components/commons/header';
import Footer from './components/commons/footer';

import reducers from './reducers';

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
                    <Route path="/shopDetails/:id" component={ShopDetails} />
                    <Route path='/publish' component={Publish} />
                    <Route path='/personal' component={Personal} />
                    <Route path='/adminRegister' component={AdminRegister} />
                    <Route path='/adminAuthority' component={AdminAuthority} />
                    <Route path='/adminGoods' component={AdminGoods} />
                    <Route path='/adminNotice' component={AdminNotice} />
                    <Route path='/adminAdvice' component={AdminAdvice} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/' component={Home} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>,

    document.querySelector('.content')
);