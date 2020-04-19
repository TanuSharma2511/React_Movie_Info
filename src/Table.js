import React, {useContext} from 'react';
import { GlobalContext } from './context';

export const Table = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);


  return (
    <>
    <tr>
        <td>{transaction.text}</td>
        <td>{transaction.author}</td>
        <td>{transaction.isbn}</td>
        <td><button onClick={() => deleteTransaction(transaction.isbn)} className="btn btn-danger btn-block delete">x</button></td>
        </tr>
    </>
  )
}
