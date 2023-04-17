import Logo from "../assets/logo.png";

import { FiUser } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlinePercentage } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-y py-6">
      <div>
        <img src={Logo} alt="Logo" className="w-72 ml-16" />
      </div>

      <div className="flex gap-8">
        <div className="relative flex items-center">
          <FaMicrophone className="absolute left-0 m-3 text-gray-400 text-xl " />
          <BiSearch className="absolute left-8 m-3 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="O que você procura?"
            className="w-64 px-4 py-2 rounded-full border border-gray-300 pl-20 placeholder-gray-500 focus:outline-none"
          />
        </div>

        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="-5% na primeira compra"
            className="w-64 px-6 py-2 rounded-full border border-gray-300 placeholder-gray-500 focus:outline-none"
          />
          <AiOutlinePercentage className="absolute right-0 mr-4 text-gray-400 text-xl" />
        </div>

        <div className="flex items-center">
          <FiUser className="text-3xl mr-8 hover:" />
          <AiOutlineShoppingCart className="text-3xl mr-16" />
        </div>
      </div>
    </header>
  );
}
