import React, { useState } from "react";

export default function Produto({
  nome,
  preco,
  descricao,
  imagem,
  imagemHover,
}) {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div className="relative">
      <img
        src={hovered ? imagemHover : imagem}
        alt="produto"
        className="w-80 transition-all duration-500"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      />
      <button className="relative w-3/4 bottom-16 left-10 p-2 border-none rounded-full bg-gray-50 bg-opacity-40 opacity-0 hover:bg-[#98b020] hover:text-white hover:opacity-100 transition-all duration-500">
        Adicionar ao Carrinho
      </button>
      <br />
      <h2 className="opacity-60 font-semibold text-base">{nome}</h2>
      <br />
      <p className="text-[#bad144] font-bold">{preco}</p>
      <p className="mb-16 opacity-60">{descricao}</p>
    </div>
  );
}
