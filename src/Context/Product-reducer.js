import { GET_CATEGORY, GET_ALLPRODUCTS, ADD_TOCARD, DELETE_TOCARD, SEARCH_CLICK,GET_CATEGORY_PRODUCT } from "./Types";

export const ProductReducer = (state, action) => {
  switch (action.type) {
    case GET_CATEGORY: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case GET_ALLPRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case ADD_TOCARD: {
      const { id } = action;
      const { cart, products } = state;
      const element = products.find((elem) => elem.id === id);
      const newArr = [...cart, element];
      return {
        ...state,
        cart: newArr,
      };
    }
    case DELETE_TOCARD: {
      const { id } = action;
      const { cart } = state;
      const newArr = cart.filter((_, i) => i !== id);
      return {
        ...state,
        cart: newArr,
      };
    }
    case SEARCH_CLICK: {
      const { data } = action;
      const { products } = state;
      const searchData = products.filter(
        (elem) => elem.title.toLowerCase().includes(data.toLowerCase()) 
      );
      return {
        ...state,
        search: searchData, 
      };
    }
    case GET_CATEGORY_PRODUCT:{
      return {
        ...state,
        data: action.payload,
      }
    }
    default:
      return state;
  }
};
