import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Home from './components/home';
import Singin from './components/auth/singin';
import Singup from './components/auth/singup';
import ShopList from './components/shopList';
import Grounding from './components/grounding';
import Personal from './components/personal';
import Cart from './components/cart';
import Header from './components/commons/header';
// import Publish from './components/commons/publish';
import Footer from './components/commons/footer';
ReactDOM.render(
    <BrowserRouter>
        <div>
            <Header />
            {/*<Publish />*/}
            <Switch>
                <Route path='/singin' component={Singin} />
                <Route path='/singup' component={Singup} />
                <Route path='/shopList' component={ShopList} />
                <Route path='/grounding' component={Grounding} />
                <Route path='/personal' component={Personal} />
                <Route path='/cart' component={Cart} />
                <Route path='/' component={Home} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>,
    document.querySelector('.content')
);