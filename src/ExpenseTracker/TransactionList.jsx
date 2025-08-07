import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((t) => (
          <Transaction key={t.id} transaction={t} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
