import React from 'react'
import { useContextCustom } from '../Context/StateContext';
import { Link, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai"

// search4
const Navbar = () => {
  const { search, setSearch } = useContextCustom();
  // add to cart4
  const { state: { cart } } = useContextCustom();

  return (
    <div className="navbar bg-base-100">
      <Link to={'/'}><
        div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      </Link>

      <div className="flex-none gap-4">
        <div className="form-control">
          {/* search5---value={search} onChange={e => setSearch(e.target.value)} */}
          <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search" className="input input-bordered" />
        </div>
        {/* add to cart4.....{cart.length} */}
        <Link to={'/addtocart'}>
          <div className=" relative">
            <button className="">
              <AiOutlineShoppingCart className=" text-3xl text-gray-500 z-1" />
            </button>
            <span className="badge h-6 w-6  absolute bottom-5 left-5 ">{cart.length}</span>
          </div>
        </Link>


        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>

          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar