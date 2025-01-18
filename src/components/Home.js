import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from '../useFetch';

const Home = () => {
const {data:item, isPending ,error}=useFetch('http://localhost:8000/item')
    
return (  
        <div className="home">
            <h1>Movie list</h1>
            {error && <div className='loading'>{error}</div>}
            { isPending && <div className='loading'> loading....</div> }
            {item && <BlogList item={item}></BlogList>}
        </div>
    );
}
 
export default Home;
