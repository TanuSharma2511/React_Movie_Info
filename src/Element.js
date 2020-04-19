import React, { useContext } from 'react';
import { Table } from './Table';

import { GlobalContext } from './context';

export const Element = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
     <table className="table table-striped mt-5">
        {transactions.map(transaction => (<Table key={transaction.isbn} transaction={transaction} />))}
        </table>
    </>
  )
}
