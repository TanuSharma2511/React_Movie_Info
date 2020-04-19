import React ,{useContext, useState} from 'react';
import { GlobalContext } from './context';

export const Form = () => {

    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState();
  
    const { addTransaction } = useContext(GlobalContext);
  
    const onSubmit = e => {
      e.preventDefault();
    
      const newTransaction = {
        text,
        author,
        isbn: +isbn
      }
  
      addTransaction(newTransaction);
      setText("");
      setAuthor("");
      setIsbn({isbn:""});
    }

  return (
   <React.Fragment>
    
   <div className="container mt-2 col-md-12 offset-md-6">
  
   <h1 className="display-4 text-center">
          <i className="fa fa-book text-primary"></i> 
          My<span className="text-primary">Book</span>List</h1>
          <form onSubmit={onSubmit}>
          <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" className="form-control" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input type="text" id="author" className="form-control "  value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="isbn">ISBN#</label>
              <input type="number" id="isbn" className="form-control" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
            </div>
            <input type="submit" value="Add Book" className="btn btn-primary btn-block"></input>
          </form>
        
          <table className="table table-striped mt-5">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN#</th>
                <th></th>
              </tr>
            </thead>
           
            </table>
            
   </div>

   </React.Fragment>
  )
}
