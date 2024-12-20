import Carousel from "./Carousel";
import { gadgets } from "./Data";
export default function Home({ setShowProducts }) {
  return (
    <>
      <section className="flex flex-col md:flex-row gap-9 items-center justify-center w-full py-20 min-h-screen px-8">
        <div className="flex flex-col gap-6 justify-start font-Inter w-full md:w-1/2 text-center md:text-left">
          <h3 className="font-semibold text-2xl md:text-4xl leading-tight tracking-wide text-blue-600">
            Welcome to Smart Hub - Your One-Stop Digital Shop!
          </h3>
          <p className="font-normal text-black text-lg leading-relaxed">
            Discover an extensive range of products at unbeatable prices in our
            digital marketplace. Whether you&apos;re looking for the latest
            mobile phones, laptops, smartwatches, or trending accessories,
            we&apos;ve got you covered. Our platform brings together top brands
            and high-quality products, all in one place, ensuring you can shop
            with confidence.
          </p>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white text-center text-sm font-normal w-fit p-3 rounded-lg transition"
            onClick={() => setShowProducts(true)}
          >
            View Products &rarr;
          </button>
        </div>

        <div className="flex items-center justify-center w-full md:w-1/2">
          <img
            src={gadgets}
            alt="A selection of gadgets including phones, laptops, and accessories"
            className=" w-full max-w-lg "
          />
        </div>
      </section>
      <Carousel />
    </>
  );
}
