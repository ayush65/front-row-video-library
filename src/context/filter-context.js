import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import {filterReducer} from '../reducer/filter-reducer'


const FilterContext = createContext(null);
const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    product: [],
    category: [],
    default: [],
  });
  useEffect(() => {
    (async () => {
      let response = await axios.get("/api/videos");
      dispatch({
        type: "UPDATE_PRODUCTS",
        payload: { videos : response.data.videos },
      });
    })();
  }, []);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };