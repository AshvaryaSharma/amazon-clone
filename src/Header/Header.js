import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import {SearchOutlined , ShoppingCartOutlined} from '@material-ui/icons';
import { useStateValue } from "../Store/StateProvider";
import { auth } from "../firebase";


function Header() {

    const [{ basket,user }, dispatch] = useStateValue();

    const handleAuthentication = () =>{
        
        if(user) {
            auth.signOut();
        }
    }
    return (
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            alt="amazon"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
        <input type="text" className="header__searchInput"></input>
        {/*Logo*/}
        <SearchOutlined className="header__searchIcon" />
        <div className="header__nav">
          <Link to={user ? "/" : "/login"}>
            <div
              onClick={handleAuthentication}
              className="header__option"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              <span className="header__optionLineOne">
                {user ? user.email : "Hello Guest"}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </div>
        <div className="header__cart">
          <Link to="/checkout">
            <ShoppingCartOutlined />{" "}
            <span>
              Cart{" "}
              {basket.length === 0 ? (
                <span>{basket.length}</span>
              ) : (
                <span style={{ color: "#febd69" }}>{basket.length}</span>
              )}
            </span>
          </Link>
        </div>
      </div>
    );
}


export default Header;