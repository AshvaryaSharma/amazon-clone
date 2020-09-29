import React, {Component} from "react";
import "./Container.css"
import Product from "./Product/ProductBox";

class Container extends Component {
    render() {
        return (
          <div>
            <div className="banner_image">
              <img
                className="banner_image"
                alt="Banner"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              />
            </div>
            <div className="product__row">
              <Product
                id="1"
                title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
                image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL480_SR480,480_.jpg"
                rating="3"
                price={49.99}
                actionButton=""
              />
              <Product
                id="2"
                title="TCL 32S325 32 Inch 720p Roku Smart LED TV (2019)"
                image="https://images-na.ssl-images-amazon.com/images/I/71YZlXXFktL._AC_SL1500_.jpg"
                rating="4"
                price={129.99}
                actionButton=""
              />
            </div>
            <div className="product__row">
              <Product
                id="3"
                title="VANKYO LEISURE 3 Mini Projector"
                image="https://images-na.ssl-images-amazon.com/images/I/61qarCEnHGL._AC_SL1001_.jpg"
                rating="2"
                price={99.99}
                actionButton=""
              />
              <Product
                id="4"
                title="Apple Lightning to Digital AV Adapter"
                image="https://m.media-amazon.com/images/I/61cAPKtq9HL.jpg"
                rating="3"
                price={39.00}
                actionButton=""
              />
              <Product
                id="5"
                title="Apple TV (32GB, 4th Generation)"
                image="https://images-na.ssl-images-amazon.com/images/I/41LpF5n38kL._AC_SL1024_.jpg"
                rating="5"
                price={149.00}
                actionButton=""
              />
            </div>
            <div className="product__row">
              <Product
                id="6"
                title="Harry Potter: Complete Collection"
                image="https://images-na.ssl-images-amazon.com/images/I/91reTAYWeNL._SL1500_.jpg"
                rating="5"
                price={46.99}
                actionButton=""
              />
              <Product
                id="7"
                title="Apple TV Siri Remote"
                image="https://images-na.ssl-images-amazon.com/images/I/41PlN%2BkavJL._AC_SL1024_.jpg"
                rating="4"
                price={52.00}
                actionButton=""
              />
              <Product
                id="8"
                title="The Office: The Complete Series"
                image="https://images-na.ssl-images-amazon.com/images/I/81R7QZV5P1L._SL1500_.jpg"
                rating="5"
                price={19.00}
                actionButton=""
              />
              <Product
                id="9"
                title="Frozen 2"
                image="https://images-na.ssl-images-amazon.com/images/I/71Ow2kFkROL._SL1374_.jpg"
                rating="5"
                price={14.99}
                actionButton=""
              />
            </div>
            <div className="product__row">
              <Product
                id="11"
                title="Sony DVD player"
                image="https://images-na.ssl-images-amazon.com/images/I/61lK%2BSy0zbL._AC_SL1500_.jpg"
                rating="2"
                price={32.99}
                actionButton=""
              />
            </div>
          </div>
        );
    }
}


export default Container;