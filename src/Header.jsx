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
      <nav className="flex justify-around items-center py-5 px-4 capitalize cursor-pointer bg-blue-600">
        <h1 className="font-bold uppercase text-2xl  tracking-wider text-gray-200" onClick={() => handlePageChange("home")}>
          Smart Hub
        </h1>
        <ul className="flex flex-row gap-5 justify-center items-center font-medium text-lg text-white">
          <li onClick={() => handlePageChange("home")}>
            home
          </li>
          <li onClick={() => handlePageChange("products")}>products</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
