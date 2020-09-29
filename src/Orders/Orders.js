import React, { useState, useEffect } from 'react'
import './Orders.css'
import {db} from "../firebase"
import Order from "./Order"
import { formatMs } from "@material-ui/core";
import { useStateValue } from "../Store/StateProvider";


function Orders() {
    const[{basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        console.log("Checking for USER >>>>", user);
       if(user) {
            db.collection("users")
              .doc(user?.uid)
              .collection("orders")
              .orderBy("created", "desc")
              .onSnapshot((snapshot) =>
                setOrders(
                  snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                  }))
                )
              );
       } else {
           setOrders([])
       }

       console.log("ORDERS >>>>>" + orders)
    },[user])
    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders__order" >
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}


export default Orders
