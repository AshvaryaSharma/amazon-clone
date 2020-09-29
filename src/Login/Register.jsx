import React, { useState, useEffect } from "react";
import { SettingsSystemDaydreamOutlined } from "@material-ui/icons";
import {auth} from "../firebase";
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import "./Login.css"
import { useStateValue } from "../Store/StateProvider";
import firebase from "firebase";

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name,setName] = useState('');
    const [{user}, dispatch] = useStateValue();
    const history = useHistory();
    useEffect(() => {
      if (user != null) {
        history.push("/");
      }
    }, []);
    const signIn = e => {

      history.push("/login")
    }
    
     const register = (e) => {
      e.preventDefault();
      
      console.log("User to be registered: " + name);
       auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push("/");     
            
        })
        .catch((error)=> alert(error.message))

        // auth.currentUser.updateProfile({displayName: name})
        //   .then((auth) => {
        //     console.log("User created and updated", auth.currentUser)
        //   })
        //   .catch((error) => alert(error.message))
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
          <h1>Register</h1>
          <form className="login__form">
            {/* <h2>Name</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            /> */}
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

            <button onClick={register}>Register</button>
            {/* <input type="button" value="Sign in" />
            <input type="button" value="Register" onClick={register} /> */}
          </form>
        </div>
        <p className="register__heading">Already a member?</p>
        <button className="register" onClick={signIn}>
          Click here to sign it
        </button>
      </div>
    );

}

export default Register;