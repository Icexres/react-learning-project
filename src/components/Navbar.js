const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>List It</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "black", 
                    backgroundColor: "#1fb824",
                    borderRadius: '8px'
                  }}>Add Item</a>
            </div>
        </nav>
    );
}
 
export default Navbar;