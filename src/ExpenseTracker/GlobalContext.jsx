import { createContext, useReducer, useEffect } from "react"
import AppReducer from "./AppReducer";




const initialstate = {
  transactions: [
    { id: 1, text: "Salary", amount: 5000 },
    { id: 2, text: "Groceries", amount: -1500 },
    { id: 3, text: "Book", amount: -300 },
    { id: 4, text: "Bonus", amount: 2000 }
  ],
};


const GlobalContext = createContext(initialstate);

const ContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer, initialstate);


    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state.transactions));
    }, [state.transactions]);

    function deletetransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id

        })
    }
    function addtransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction

        })
    }

    return (
        <GlobalContext.Provider value={{transactions:state.transactions,deletetransaction,addtransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}

export {ContextProvider,GlobalContext};