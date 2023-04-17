import { FaSlidersH, FaBars } from "react-icons/fa";

export default function Layout() {
  return (
    <div className="p-10">
      <p className="text-sm mb-10">Home - Óleos Essenciais</p>

      <div className="flex items-center justify-between w-full h-12 rounded-lg mt-4">
        <div className="flex items-center gap-4">
          <div className="bg-white rounded-lg border border-gray-300 w-72 h-12 flex items-center justify-between cursor-pointer px-6 transition-all duration-300">
            <p className="text-sm font-medium">FILTRAR</p>
            <FaSlidersH className="text-gray-400 text-xl" />
          </div>

          <div className="bg-white rounded-lg border border-gray-300 w-72 h-12 flex items-center justify-between cursor-pointer px-6 transition-all duration-300">
            <p className="text-sm font-medium">ORDERNAR POR</p>
            <FaBars className="text-gray-400 text-lg" />
          </div>
        </div>
        <p>16 produtos</p>
      </div>
    </div>
  );
}
