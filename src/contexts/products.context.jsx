import {createContext, useState, useEffect} from 'react'
import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
    products: []
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const categoriesMap = async () => {
           const categoryMap = await  getCategoriesAndDocuments();
           console.log(categoryMap)
        }

        categoriesMap();
    }, [])

    const value = {products}

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}