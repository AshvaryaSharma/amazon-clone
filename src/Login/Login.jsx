import React, { useState, useEffect } from "react";
import { SettingsSystemDaydreamOutlined } from "@material-ui/icons";
import {auth} from "../firebase";
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import "./Login.css"
import { useStateValue } from "../Store/StateProvider";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [{user}, dispatch] = useStateValue();
    const history = useHistory();
    useEffect(() => {
      if (user != null) {
        history.push("/");
      }
    }, []);
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then((auth) => {
                console.log("Logged in successfully");
                history.push("/");
            })
            .catch(error => alert(error.message))
    }
    
    const register = (e) => {
      //e.preventDefault();
        
      history.push("/register");
      // auth
      //   .createUserWithEmailAndPassword(email,password)
      //   .then((auth)=>{
      //       console.log(auth);
            
      //       if(auth) {
      //           history.push('/');
      //       }
      //   })
      //   .catch((error)=> alert(error.message))
    };
    return (
      <div className="loginPage">
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG7.png"
            alt="amazon"
          />
        </Link>

        <div className="login__container">
          <h1>Sign-In</h1>
          <form className="login__form">
            <h2>E-mail</h2>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h2>Password</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={signIn}>Sign in</button>
            {/* <input type="button" value="Sign in" />
            <input type="button" value="Register" onClick={register} /> */}
          </form>
        </div>
        <p className="register__heading">New to Amazon?</p>
        <button className="register" onClick={register}>
          Create a new Account
        </button>
      </div>
    );

}

export default Login;