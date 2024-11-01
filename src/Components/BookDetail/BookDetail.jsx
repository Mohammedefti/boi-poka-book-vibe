import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../Utility/addToDb";

const BookDetail = () => {

    const {bookId} =useParams();

    const data= useLoaderData();
    const id = parseInt(bookId);
    // console.log(typeof bookId,typeof id, typeof data[0].bookId);
    const book = data.find(book=> book.bookId === id);
    // console.log(book);

    // handleMarkAsRead
    const handleMarkAsRead =(id) =>{
        /**
         * 1. understand what to store or save: =>bookId
         * 2. Where to store : database
         * 3. array, list , collection: 
         * 4.check: if the book is already in the readlist
         * 5. if not add
         * 6. else don not add the book         * 
        */
       addToStoredReadList(id);
    }
    const handleWishList=(id) =>{
        addToStoredWishList(id);
    }

    const{bookId:currentBookId, image } = book;
    return (
        <div className="my-12">
            <h2>Book Details:{bookId}</h2>
            <div>
            <img className="w-[200px] p-4" src={image} alt="" />
<br />
<button onClick={()=> handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent">Mark as Read</button>
<button onClick={()=> handleWishList(bookId)} className="btn btn-accent">Add to Wish List</button>
            </div>
        </div>
    );
};

export default BookDetail;