import { toast } from "react-toastify";

const getStoredReadList =() =>{
    // readList
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList =JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}

const addToStoredReadList =(id) =>{
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        // already exists do not add it
        console.log(id,'already exists')
    }else{
        storedList.push(id);
        // local storage e set korar jonno string e convert 
        const storedListStr =JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        // ideally trigger toast from the component
        toast('this book is added to your read list');
    }
}

const getStoredWishList =()=>{
    // read-list
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    } else {
        return [];        
    } 
}

const addToStoredWishList= (id) =>{
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        console.log(id,'already exists', )
    } else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
        
    }
}

export {addToStoredReadList,addToStoredWishList,getStoredReadList };