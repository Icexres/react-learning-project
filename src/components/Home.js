import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
const [item,setItem]= useState([
    {title:"The Shining", Stats:"watched", Author:"Stephan King", id: 1},
    {title:"Shawshank Redemption", Stats:"watched", Author:"Stephan King", id: 2},
    {title:"The Green Mile", Stats:"watched", Author:"Stephan king", id: 3}
]);

    return (  
        <div className="home">
            <h1>Movie list</h1>
            <BlogList item={item}></BlogList>
        </div>
    );
}
