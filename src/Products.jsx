import { useState } from "react";
import { productData } from "./Data";

function Products() {
  const [quantities, setQuantities] = useState({});

  // Filter state variables
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000); // assuming no product will exceed 1 million INR
  const [minRating, setMinRating] = useState(0);

  const filteredProducts = productData.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;

    const matchesRating = product.rating >= minRating;

    return matchesSearch && matchesPrice && matchesRating;
  });

  const updateQuantity = (productId, operation) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[productId] || 0;
      const newQuantity =
        operation === "increase"
          ? currentQuantity + 1
          : Math.max(0, currentQuantity - 1);

      return {
        ...prevQuantities,
        [productId]: newQuantity,
      };
    });
  };

  return (
    <div className="p-8" id="products">
      <h4 className="font-semibold font-Poppins text-center text-3xl">
        Our Products
      </h4>
      <div className="flex flex-col md:flex-row justify-between ">
        <form
          className="flex gap-3 p-5 md:items-center md:flex-row flex-col"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex gap-3">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className="border-2 border-black px-2 py-2 rounded-lg"
              placeholder="Search for a product"
            />
            <input
              type="submit"
              value="Search"
              className="rounded-lg font-medium bg-blue-500 text-white px-3 py-2 hover:bg-blue-700"
            />
          </div>
        </form>

        <div className="flex gap-5 p-5 md:flex-row flex-col text-sm">
          <div className="flex flex-col gap-1">
            <label htmlFor="priceFilter" className="font-medium font-Inter">
              Filter by Price
            </label>
            <select
              id="priceFilter"
              onChange={(e) => {
                const [min, max] = e.target.value.split("-").map(Number);
                setMinPrice(min);
                setMaxPrice(max);
              }}
              className="border-2 border-black p-1 rounded-lg"
            >
              <option value="0-1000000">All Prices</option>
              <option value="20000-30000">₹20,000 - ₹30,000</option>
              <option value="30000-40000">₹30,000 - ₹40,000</option>
              <option value="40000-50000">₹40,000 - ₹50,000</option>
              <option value="50000-60000">₹50,000 - ₹60,000</option>
              <option value="60000-70000">₹60,000 - ₹70,000</option>
              <option value="70000-1000000">₹70,000+</option>
            </select>
          </div>

          {/* Rating Filter */}
          <div className="flex flex-col text-sm gap-1">
            <label htmlFor="ratingFilter" className="font-medium font-Inter">
              Filter by Rating
            </label>
            <select
              id="ratingFilter"
              onChange={(e) => setMinRating(Number(e.target.value))}
              value={minRating}
              className="border-2 border-black p-1 rounded-lg"
            >
              <option value="0">All Ratings</option>
              <option value="1">1 Star & Above</option>
              <option value="2">2 Stars & Above</option>
              <option value="3">3 Stars & Above</option>
              <option value="4">4 Stars & Above</option>
              <option value="5">5 Stars</option>
            </select>
          </div>
        </div>

      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col rounded-xl shadow-lg p-6 gap-5 bg-slate-200"
            >
              <h3 className="font-semibold text-black text-xl">
                {product.name}
              </h3>
              <p className="font-Inter text-base">{product.description}</p>
              <div className="flex gap-2 font-semibold items-center">
                Rating:
                {Array.from({ length: Math.round(product.rating) }, (_, i) => (
                  <span key={i} className="text-amber-600 text-lg">
                    ★
                  </span>
                ))}
                {Math.round(product.rating)}/5
              </div>
              <p className="tracking-wide font-semibold">
                Price: ₹ {product.price}
              </p>
              <div className="font-bold font-Inter flex gap-6 items-center">
                Quantity:
                <div className="flex items-center gap-6">
                  <button
                    className="rounded-lg border-2 px-3 py-1 border-slate-600"
                    onClick={() => updateQuantity(product.id, "decrease")}
                  >
                    -
                  </button>
                  <p className="text-lg">{quantities[product.id] || 0}</p>
                  <button
                    onClick={() => updateQuantity(product.id, "increase")}
                    className="rounded-lg border-2 px-3 py-1 border-slate-600"
                  >
                    +
                  </button>
                </div>
              </div>
              <button className="w-fit text-start rounded-lg font-medium bg-blue-500 text-white px-3 py-2 hover:bg-blue-700">
                Buy Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-red-500">No products found!</p>
        )}
      </div>
    </div>
  );
}

export default Products;
