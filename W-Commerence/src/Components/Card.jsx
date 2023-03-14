import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useContextCustom } from '../Context/StateContext';

const Card = ({ product }) => {
    const { title,image, price } = product
     // add to cart2
    const {state:{cart},dispatch} = useContextCustom();
    console.log(cart);
    return (
        <div className="flex flex-col card w-64 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img
            className="w-[300px] h-[300px] object-cover p-5"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-gray-500 mt-auto text-lg font-semibold">
            {title.substring(0, 20)}
          </h2>
          <p className='text-gray-500 text-xl'>${price}</p>
          <div className=" flex  align-middle">

          
           {/* add to cart3----onClick={() => dispatch({type:"ADD-TO_CART",payload:product})} */}
            <button onClick={() => dispatch({type:"ADD-TO_CART",payload:product})} className="btn btn-sm mr-2">Add to cart</button>
           
              <button className="btn btn-sm">Details</button>
            
          </div>
        </div>
      </div>

    )
}

export default Card