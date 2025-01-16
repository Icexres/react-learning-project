import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
const [item,setItem]= useState(null);



useEffect(()=> {
    fetch('http://localhost:8000/item')
        .then(res => {
            return res.json()
        })
        .then(data =>{
            console.log(data);
            setItem(data);
        })
},[]);
    
return (  
        <div className="home">
            <h1>Movie list</h1>
            {item && <BlogList item={item}></BlogList>}
        </div>
    );
}
 
export default Home;
