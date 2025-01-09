import {useState} from 'react';

const Home = () => {
const [item,setItem]= useState([
    {title:"The Shining", Stats:"watched", Author:"Stephan King", id: 1},
    {title:"Shawshank Redemption", Stats:"watched", Author:"Stephan King", id: 2},
    {title:"The Green Mile", Stats:"watched", Author:"Stephan king", id: 3}
]);

    return (  
        <div className="home">
            <h1>Movie list</h1>
            {item.map((item) => (
                <div className="item-preview" key={item.id}>
                    <h2>{item.id}.{item.title}</h2>
                    <p>written by {item.Author}</p>
                </div>
                
            ))}
        </div>
    );
}
 
export default Home;
