import { productData } from "./Data";

function Carousel() {
  return (
    <>
      <h1 className="font-semibold text-4xl font-Poppins text-sky-700 text-center">
        Latest Products
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-6 items-center p-8 ">
        {productData.map((product) => (
          <div key={product.id} className="text-center flex flex-col items-center gap-4">
            <img
              src={product.image} // Directly use the imported image
              alt={product.name}
              className="img-style"
            />
            <div className="flex items-center flex-col justify-center">
              <p className="mt-2 text-lg font-medium text-center">
                {product.name}
              </p>
              <p className="mt-2 text-lg font-medium text-center">
                ₹{product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Carousel;
