import React, {createContext, useReducer} from "react";
import CartReducer from './reducers/CartReducer'

const initialState = {
    count: 0
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;