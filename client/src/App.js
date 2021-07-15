import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from './context/Auth/AuthContext';

//Components
import Header from './components/Header/Header';

//Pages
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Cart from './pages/cart/Cart';

export default function App() {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <Header/>
      <div className="appContainer">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/shop">
            <Shop/>
          </Route>
          <Route path="/register">
            { user ? <Redirect to="/"/> : <Register />}
          </Route>
          <Route path="/login">
            { user ? <Redirect to="/"/> : <Login />}
          </Route>
          <Route path="/profile">
            { !user ? <Redirect to="/register"/> : <Profile/>}
          </Route>
          <Route path="/cart">
            { user ? <Cart /> : <Redirect to="/register" />}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
