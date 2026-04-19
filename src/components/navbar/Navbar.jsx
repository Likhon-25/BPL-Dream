import React from "react";
import dollerImg from "../../assets/Currency.png";

const Navbar = ({coin}) => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <button className="flex justify-between items-center gap-2 font-bold text-xl">
            {coin} Coin
            <img src={dollerImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
