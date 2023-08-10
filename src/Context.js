import React, {useContext, useState} from 'react';
import useFetch from "./useFetch";

export const API_URL = `https: //www.omdbapi.com/?&apikey=${process.env.REACT_APP_MOVIE_KEY}`;
  const AppContext=React.createContext();

  const AppProvider = ({ children }) => {
    const [query, setQuery] = useState("Conjuring");
    const { isLoading, isError, movie } = useFetch(`&s=${query}`);
  
    return (
      <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError }}>
        {children}
      </AppContext.Provider>
    );
  };
  
  const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
  export { AppContext, AppProvider, useGlobalContext };