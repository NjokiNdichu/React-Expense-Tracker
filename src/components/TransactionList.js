import React, { useContext }from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transactions from './Transactions'

function TransactionList() {
  const { transactions } = useContext(GlobalContext)
 
  return (
    <div>
        <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
         <Transactions key = {transaction.id} transaction = {transaction }/>
         ))}
       
      </ul>

    </div>
  )
}

export default TransactionList
