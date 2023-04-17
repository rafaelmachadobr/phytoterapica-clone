import Logo from "../assets/logo.png";

import { FiUser } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-y py-6">
      <div>
        <img src={Logo} alt="Logo" className="w-72 ml-16" />
      </div>

      <div className="flex gap-8">
        <input
          type="text"
          placeholder="O que você procura?"
          className="rounded-2xl border pl-12 py-1 w-56 placeholder:text-slack-900 text-sm"
        />
        <input
          type="text"
          placeholder="-5% na primeira compra"
          className="rounded-2xl border px-8 py-1 w-56 uppercase placeholder:text-slack-900 text-xs"
        />

        <div className="flex items-center">
          <FiUser className="text-2xl mr-16" />
          <AiOutlineShoppingCart className="text-2xl mr-16" />
        </div>
      </div>
    </header>
  );
}
