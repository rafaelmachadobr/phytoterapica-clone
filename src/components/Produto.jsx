export default function Produto({ nome, preco, descricao, imagem }) {
  return (
    <div className="flex flex-col items-center justify-center w-1/4 h-96 border border-gray-300">
      <img src={imagem} alt={nome} className="w-64 h-64" />
      <button className="w-64 h-12 bg-[#F2F2F2] text-[#4F4F4F] text-sm font-bold">
        Adcionar ao Carrinho
      </button>
      <h3 className="w-64 h-12 text-sm font-bold">{nome}</h3>
      <p className="w-64 h-12 text-sm font-bold">{preco}</p>
      <p className="w-64 h-12 text-sm font-bold">{descricao}</p>
    </div>
  );
}
