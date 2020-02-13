import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavLink from './components/Navbar';
import Main from './pages/Main';
import Qualities from './pages/Qualities';
import Cart from './pages/Cart';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className='container grey'>
                <NavLink/>
            </div>
            <div className='container'>
                <Switch>
                    <Route path='/' exact component={Main} />
                    <Route path='/qualities/:id' exact component={Qualities} />
                    <Route path='/cart' component={Cart} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
