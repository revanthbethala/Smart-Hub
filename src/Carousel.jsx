import { applebuds,S23,appleWatch,ipad } from "./Data";

function Carousel() {
  return (
    <div className="flex flex-row gap-2 items-center ">
      <img src={applebuds} alt="buds"  className="img-style"/>
      <img src={S23} alt="buds" className="img-style" />
      <img src={appleWatch} alt="buds" className="img-style" />
      <img src={ipad} alt="buds" className="img-style" />

    </div>
  );
}

export default Carousel;
