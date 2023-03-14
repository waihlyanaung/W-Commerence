import React, { useState } from "react";
import { useContextCustom } from "../Context/StateContext";


// addtocart3---{item}
//  mainTotal7.....increaseTotal
const CardItem = ({ item, increaseTotal, decreasePrice }) => {
  const { title, image, price } = item
  // remove from cart2
  const {
    state: { cart }, dispatch
  } = useContextCustom();

  // qty...1
  const [qty, setQty] = useState(1);
  const oneItemPrice = price * qty;
  // increase qty...2
  const increaseQty = () => {
    setQty((prev) => prev + 1);
    //increase mainTotal8
    increaseTotal(price)
  };
  //  decrease qty5 
  const decreaseQty = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
      decreasePrice(price)
    }
  };
  // decrease mainTotal9
  const delBtn = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
    decreasePrice(oneItemPrice);
  };
  return (

    // addtocart4
    <div className='flex justify-between w-full mb-5'>
      <div className='flex gap-5'>
        <img className='w-40 h-40 object-cover' src={image} alt="" />
        <div>

          <p>{title.substring(0, 25)}....</p>
          {/* qty...3  */}
          <p>{oneItemPrice.toFixed(2)}</p>
          {/* remove from cart3 */}
          {/*  decrease mainTotal10...onClick={delBtn } */}
          <p onClick={delBtn } className='cursor-pointer text-red-500'>remove</p>
        </div>
      </div>

      <div>
        {/* incrase qty...4 */}
        <p onClick={increaseQty} className='cursor-pointer' >+</p>
        <p className='text-center'>{qty}</p>
        {/*   decrease qty6 */}
        <p onClick={decreaseQty} className='cursor-pointer'>-</p>
      </div>


    </div>);
}

export default CardItem