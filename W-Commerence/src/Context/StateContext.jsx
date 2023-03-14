import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "./reducer";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  // search1
  const [search, setSearch] = useState("");

  const initialState = {
    products: [],
    cart: [],
  };
const [state, dispatch] = useReducer(reducer, initialState);

const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setProductList(data);
    console.log(data);};

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payload: productList })
    // search2
    const filterProducts = productList.filter((pd) =>
    pd.title.toLowerCase().includes(search.toLocaleLowerCase())
  );
  dispatch({ type: "GET_PRODUCTS", payload: filterProducts });
}, [productList, search]);

// search3-----, setSearch, search and go to navbar.jsx
  const data = { state, dispatch , setSearch, search};

  return (
    <StateContext.Provider value={data} >{children}</StateContext.Provider>)
}
export const useContextCustom = () => useContext(StateContext)
