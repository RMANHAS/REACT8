// import React from 'react'

// export default function Cart() {
//   return (
//     <div>Cart</div>
//   )
// }

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/cartSlice";

export default function Cart() {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  function handleRemove(id){
    dispatch(remove(id))
  }

  return (
    <>
      {/* {JSON.stringify(items, null, 4)} */}
      <div className="container ">
    {
      items.map((item)=><div className="card mb-3" style={{ maxWidth: 540 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.image} className="img-fluid rounded-start pt-3 ps-3" alt="..." 
          style={{width:'100px',height:'100px',objectFit:'contain'}}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6>Category : {item.category}</h6>
            <h6>Price : {item.price}</h6>
            <button 
            className="btn btn-danger" 
            onClick={()=>handleRemove(item.id)}>Remove</button>
          </div>
          
        </div>
      </div>
    </div>)
    }
      </div>
    </>
  );
}