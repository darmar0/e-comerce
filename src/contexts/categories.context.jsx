import { createContext, useState, useEffect } from "react";
import { getCollectionDocuments } from "../utilites/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const value = { categories };

  //CALLING/USING ASYNC FUNCTIONS INSIDE USEEFECT//
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCollectionDocuments();
      setCategories(categories);
    };
    getCategoriesMap();
  }, []);
  //CALLING/USING ASYNC FUNCTIONS INSIDE USEEFECT//
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
