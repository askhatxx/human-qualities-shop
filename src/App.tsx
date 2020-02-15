import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchProducts} from './actions';
import NavLink from './components/Navbar';
import Main from './pages/Main';
import Qualities from './pages/Qualities';
import Cart from './pages/Cart';

type AppProps = {
    fetchProductsReady: () => void
}

const App: React.FC<AppProps> = ({fetchProductsReady}) => {
    useEffect(() => {
        fetchProductsReady()
    });
    
    return (
        <BrowserRouter>
            <div className='container grey'>
                <NavLink/>
            </div>
            <div className='container'>
                <Switch>
                    <Route path='/' exact component={Main} />
                    <Route path='/qualities' exact component={Qualities} />
                    <Route path='/qualities/:id' component={Qualities} />
                    <Route path='/cart' component={Cart} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchProductsReady: fetchProducts(dispatch)
    }
}

export default connect(null, mapDispatchToProps)(App);