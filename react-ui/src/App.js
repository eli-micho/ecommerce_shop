import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


//Pages
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Gallery from './pages/gallery/Gallery';
import Header from './components/Header/Header';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { AuthContext } from './context/Auth/AuthContext';

export default function App() {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/shop">
          <Shop/>
        </Route>
        <Route path="/gallery">
          <Gallery/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  )
}
