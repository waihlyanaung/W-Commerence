import React, { useEffect, useState } from "react";
import { useContextCustom } from '../Context/StateContext'
import CardItem from './CardItem'
// import { Navigate, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddToCart = () => {
  // addtocart1
  // clear cart2...dispatch
  const { state: { cart }, dispatch } = useContextCustom()
  // mainTotal1
  const [mainTotal, setMainTotal] = useState(0)

  // mainTotal2
  useEffect(() => {
    setMainTotal(total)
  }, []);

  // mainTotal3
  const total = () => cart.reduce((pv, cv) => (pv + cv.price), 0)



  // increase mainTotal4
  const increaseTotal = (price) => {
    setMainTotal(mainTotal + price)
  }

  const navigate = useNavigate()

  const decreasePrice = (price) => {
    setMainTotal(mainTotal - price)
  }

  return (
    <>
      {

        cart.length > 0 ?
          (
            // addtocart2 go to carditem
            <div className='w-[1024px] mx-auto flex items-start flex-col mt-10'>
              {cart?.map(item => {
                // increase mainTotal5...increaseTotal={ increaseTotal}
                return (
                  <CardItem key={item.id} item={item} increaseTotal={increaseTotal} decreasePrice={decreasePrice} />
                )
              })}

              <hr className="border-1 border-black w-full" />
              <div className='flex justify-between w-full'>
                <h2>Total</h2>
                {/* mainTotal6 */}
                <p>${mainTotal.toFixed(2)}</p>
              </div>
              {/* clear cart3.......onClick={()=>dispatch({type:"CART_EMPTY"})} */}
              <button onClick={() => dispatch({ type: "CART_EMPTY" })} className='bg-red-500 text-white px-5 py-1 mx-auto mt-10 rounded-lg'>Clear Cart</button>

            </div>) :
          (<div>
            <div className="flex justify-center">
              <div className="bg-gray-300 p-10 mt-20 animate__animated animate__bounceInDown animate__delay-1">
                <h1 className=" text-center text-4xl font-semibold tracking-wider my-5 text-white">
                  Your Cart is Empty
                </h1>
                <button
                  onClick={() => navigate("/")}
                  className=" text-center text-primary bg-info px-5 py-2  shadow-lg capitalize rounded transition transform hover:scale-90"
                >
                  go shopping
                </button>

              </div>
            </div>
          </div>
          )

      } </>)


  // <>
  //   {cart.length > 0 ? (
  //     <div className="mt-10">
  //       <h2 className=" text-center text-3xl font-bold mb-5 text-gray-500 tracking-wider">
  //         Your Bag
  //       </h2>
  //       <div className="  w-[60%] mx-auto">
  //         {cart.map((item) => {
  //           return
  //           <CardItem key={item.id} item={item} increaseTotal={increaseTotal} decreasePrice={decreasePrice} />
  //         })}
  //       </div>
  //       <hr className="mt-5 w-[60%] mx-auto items-center flex text-center" />
  //       <div className=" flex justify-between mx-auto w-[60%] items-center mt-5">
  //         <h2 className=" text-center text-3xl font-bold mb-5 text-gray-500 tracking-wider">
  //           Total
  //         </h2>
  //         <p className=" text-center text-xl font-bold mb-5 text-gray-500 tracking-wider">
  //           ${mainTotal.toFixed(2)}
  //         </p>
  //       </div>
  //       <div className=" flex justify-center">
  //         <button onClick={() => dispatch({ type: "CART_EMPTY" })} className="px-8 py-2 border-2 border-red-500 text-red-500 rounded-lg">Clear Cart</button>
  //       </div>
  //     </div>

  //   ) : (

  //     <div>
  //       <div className="flex justify-center">
  //         <div className="bg-gray-300 p-10 mt-20 animate__animated animate__bounceInDown animate__delay-1">
  //           <h1 className=" text-center text-4xl font-semibold tracking-wider my-5 text-white">
  //             Your Cart is Empty
  //           </h1>
  //           <button
  //             onClick={() => navigate("/")}
  //             className=" text-center text-primary bg-info px-5 py-2  shadow-lg capitalize rounded transition transform hover:scale-90"
  //           >
  //             go shopping
  //           </button>

  //         </div>
  //       </div>
  //     </div>
  //   )}
  // </>


}

export default AddToCart

// 1..addtocart file create

// 2..route
{/* <Route path='/addtocart' element={<Addtocart/>}/> */ }

// 3   <Link to={'/addtocart'}>
{/* <div className=" relative">
<button className="">
  <AiOutlineShoppingCart className=" text-3xl text-gray-500 z-1" />
</button>
<span className="badge h-6 w-6  absolute bottom-5 left-5 ">{cart.length}</span>
</div>
</Link> */}

//4  file create carditem

// 5// addtocart1
// const {state:{cart}}=useContextCustom()

// addtocart2 go to carditem
{/* <div>
{cart?.map(item=>{
    return(
        <CardItem key={item.id} item={item}/>
    )
})} */}
// </div>

