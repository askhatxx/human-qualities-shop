import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchProducts} from './actions';
import NavLink from './components/Navbar';
import Main from './pages/Main';
import Qualities from './pages/Qualities';
import Quality from './pages/Quality';
import Cart from './pages/Cart';
import Page404 from './pages/Page404';

type AppProps = {
    fetchProductsReady: () => void
}

const App: React.FC<AppProps> = ({fetchProductsReady}) => {
    useEffect(() => {
        fetchProductsReady()
    });
    
    return (
        <BrowserRouter>
            <header className='head'>
                <div className='container'>
                    <NavLink/>
                </div>
            </header>
            <div className='container padding-container'>
                <Switch>
                    <Route path='/' exact component={Main} />
                    <Route path='/qualities' exact component={Qualities} />
                    <Route path='/qualities/:id' exact component={Quality} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/' component={Page404} />
                </Switch>
            </div>
            <footer className='footer'>
                <div className='container'>
                    HQS - Lorem ipsum dolor sit amet...
                </div>
            </footer>
        </BrowserRouter>
    );
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchProductsReady: fetchProducts(dispatch)
    }
}

export default connect(null, mapDispatchToProps)(App);