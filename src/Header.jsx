/* eslint-disable react/prop-types */
function Header({ setShowProducts }) {
  const handlePageChange = (page) => {
    if (page === "home") {
      setShowProducts(false);
    } else if (page === "products") {
      setShowProducts(true);
    }
  };

  return (
    <header>
      <nav className="flex justify-around items-center py-5 px-4 capitalize cursor-pointer bg-blue-300">
        <h1 className="font-bold uppercase text-2xl font-Parkinsans tracking-wider">
          Smart Hub
        </h1>
        <ul className="flex flex-row gap-5 justify-center items-center font-medium text-xl font-Inter">
          <li onClick={() => handlePageChange("home")}>
            <a href="#home">home</a>
          </li>
          <li onClick={() => handlePageChange("products")}>products</li>
 
        </ul>
      </nav>
    </header>
  );
}

export default Header;
