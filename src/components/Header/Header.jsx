import { useState } from "react";
import Actors from "../Actors/Actors";
import Cart from "../Cart/Cart";

const Header = () => {
  const [carts, setCarts] = useState([]);

  const handleSelect = (actor) => {
    // console.log(actor);
    setCarts([...carts, actor]);
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="mt-8 text-6xl text-center">Avengers Cast</h1>
      <div className="flex justify-between gap-4 mt-8">
        <div className="w-2/3 bg">
          <Actors handleSelect={handleSelect}></Actors>
        </div>
        <div className="w-1/3 bg-violet-300">
          {carts.map((cart) => (
            <Cart key={cart.id} cart={cart}></Cart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
