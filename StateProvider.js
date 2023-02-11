import { createContext, useContext, useReducer } from "react";
// Prepares the data layer
export const StateContext = createContext();
// provide data layer to every component
export const StateProvider = ({ reducer, initialState, childern }) => {
  <StateProvider.Provider value={useReducer[(reducer, initialState)]}>
    {childern}
  </StateProvider.Provider>;
};
// Pull info from Data layer
export const useStateValue = () => useContext(StateContext);
