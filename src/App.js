import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Container from "./Container/Container";
import './Container/Container.css';
import Checkout from "./Checkout/Checkout";
import Footer from "./Footer/Footer"
import Login from "./Login/Login";
import Register from "./Login/Register";
import Payment from "./Payment/Payment"
import { auth } from './firebase';
import { useStateValue } from './Store/StateProvider';
import { DialerSipOutlined } from '@material-ui/icons';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders/Orders"

const promise = loadStripe(
  "pk_test_51HPvTsD5rnCFQJGPeVBMZyZar7ROrLg99Lb4jmUzIAL4Y3LPJ5nOqkc5A2a9XY7IHjaeFtW6WagV9yTR37GQ2YWF00yUyYvftL"
);

function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("User is: " + authUser);
      if(authUser) {
        //user just loggeg in or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    })  
  }, [])
  return (
    <Router>
      <div className="App">
        {/*Header */}

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route exact path="/">
            <Header />
            <div className="container">
              <Container />
            </div>
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <div className="container">
              <Checkout />
            </div>
            <Footer />
          </Route>
          <Route path="/orders">
            <Header />
            <div className="container">
              <Orders />
            </div>
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <div className="container">
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </div>
            <Footer />
          </Route>
        </Switch>

        {/*Main */}
      </div>
    </Router>
  );
}

export default App;
