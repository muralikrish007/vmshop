import React from 'react';
// import data from './data';
import {BrowserRouter,Route,Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import SigninScreen  from './Screens/SigninScreen';
import RegisterScreen from './Screens/RegisterScreen';
import { useSelector } from 'react-redux';

function App() {
  const userSignin = useSelector(state=>state.userSignin);
  const {userInfo} = userSignin;
  const openMenu =() =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
      <Link to="/">vmshop</Link>
    
      </div>
      <div className="header-links">
        <a href="cart">Cart</a>
        {
          userInfo ? <Link to="/profile">{userInfo.name}</Link>:
          <Link to="/signin" />
        }
        
        <a href="signin">Sign In</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul className="categories">
            <li>
              <Link to="/category/vegetable">vegetable</Link>
            </li>

            <li>
              <Link to="/category/liquid">liquid</Link>
            </li>
          </ul>
    </aside>
    <main className="main">
      <div className="content">
      <Route path="/signin" component={SigninScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/cart/:id?" component={CartScreen} />
      <Route path="/" exact={true} component={HomeScreen} />
        
          </div>
          
        </main> 
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
