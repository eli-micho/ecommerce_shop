import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


//Pages
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Gallery from './pages/gallery/Gallery';
import Header from './components/Header/Header';
import Register from './pages/register/Register';

export default function App() {
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
      </Switch>
    </Router>
  )
}
