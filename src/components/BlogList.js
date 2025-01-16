const BlogList = ({item }) => {

    return (  
        <div className="blog-list">
            {item.map((item) => (
                <div className="item-preview" key={item.id}>
                    <h2>{item.id}.{item.title}</h2>
                    <p>written by {item.Author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;
