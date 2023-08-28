import { GET_CATEGORY, GET_ALLPRODUCTS,ADD_TOCARD,DELETE_TOCARD,SEARCH_CLICK,GET_CATEGORY_PRODUCT } from "./Types";
import { useReducer } from "react";
import { ProductReducer } from "./Product-reducer";
import {MyContext} from "./My-Context";

export const ProductState = ({children})=>{
    const initialState = {
        categories: [],
        products: [],
        cart:[],
        data:[],
        loading: false,
        error:null
    }
    const [state, dispatch] = useReducer(ProductReducer,initialState);
    const getCategoryState=(data)=>dispatch({type:GET_CATEGORY,payload:data})
    const getAllProductsState=(data)=>dispatch({type:GET_ALLPRODUCTS,payload:data})   
    const addToCard=(id)=>dispatch({type:ADD_TOCARD,id})
    const deleteToCart=(id)=>dispatch({type:DELETE_TOCARD,id})
    const searchClick=(data)=>dispatch({type:SEARCH_CLICK,data})
    const getCategoryProduct=(data)=>dispatch({ type:GET_CATEGORY_PRODUCT,payload:data });


    return (
            <MyContext.Provider value={{
                categories: state.categories,
                products: state.products,
                cart:state.cart,
                data:state.data,
                getCategoryState,
                getAllProductsState,
                addToCard,
                deleteToCart,
                searchClick,
                getCategoryProduct

            }}>
                {children}
            </MyContext.Provider>
        )
}