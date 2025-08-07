import { useContext } from "react"
import { GlobalContext } from "./GlobalContext"



const Balance = () =>{
    const {transactions} = useContext(GlobalContext);

    console.log(transactions)

    const amounts = transactions.map(transactions => transactions.amount);

    const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

    return (
        <>
            <h3>Your Balance</h3>
            <h1> {total} </h1>
        </>
    )
}

export default Balance;