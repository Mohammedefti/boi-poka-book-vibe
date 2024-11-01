import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/addToDb';
import Book from '../Book/Book';


const ListedBooks = () => {
    const [readList , setReadList] =useState([]);
    // for sort
    const[sort,setSort] =useState('');
    // 
    const allBooks = useLoaderData();
    // ideally we will directly get the read book list from the database;
    
    useEffect(()=>{
         const storedReadList = getStoredReadList();
         const storedReadListInt = storedReadList.map(id=> parseInt(id));

        //  worst way
        console.log(storedReadList, storedReadListInt, allBooks);

        // 
        const reaBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(reaBookList);
    },[])

    // handleSort
const handleSort  = sortType =>{
    setSort(sortType);
    // sort by no of page
    if (sortType === 'No of pages') {
        const sortReadList = [...readList].sort((a,b)=>a.totalPages -b.totalPages);
        setReadList(sortReadList);
    }

    // sort by rating
    if (sortType==='Ratings') {
        const sortedReadList = [...readList].sort((a,b)=> a.rating - b.rating);
        setReadList(sortedReadList)
    }
    }
    
    

    return (
        <div>
            <h3 className="text-3xl my-8"></h3>
            {/* dropdown */}
            <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">
    {
        sort ? `Sort by:${sort}` : 'Sort by'
    }
    </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a onClick={()=>handleSort('Ratings')}>Ratings</a></li>
    <li><a onClick={()=>handleSort('No of pages')}>No of pages</a></li>
  </ul>
</div>
            <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2 className='text-2xl'>Books I read:{readList.length}</h2>
      {
        readList.map(book => <Book key={book.bookId} book={book}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2 className='text-2xl'>My Wish List</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBooks;