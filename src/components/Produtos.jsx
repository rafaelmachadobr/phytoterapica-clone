import Produto from "./Produto";

export default function Produtos() {
  return (
    <div className="flex flex-wrap justify-evenly w-full h-auto">
      <Produto
        nome="Óleo Essencial de Olíbano - 5ml"
        preco="R$ 84,00"
        descricao="(ou em até 3x R$ 28,00 sem juros)"
        imagem="https://phytoterapica.vtexassets.com/arquivos/ids/155533/_leo_essencial_de_ol_bano_5ml_-_phytoterapica_1_.jpg?v=637655362480800000"
        imagemHover="https://phytoterapica.vtexassets.com/arquivos/ids/155532/_leo_essencial_de_ol_bano_5ml_-_phytoterapica_2_.jpg?v=637655362467670000"
      />
      <Produto
        nome="Óleo Essencial de Cravo - 10ml"
        preco="R$ 38,00"
        descricao="(ou em até 3 x de R$ 12,66 sem juros)"
        imagem="https://phytoterapica.vtexassets.com/arquivos/ids/155841/oleo-essencial-cravo-10ml-phytoterapica-01.jpg?v=637725648540800000"
        imagemHover="https://phytoterapica.vtexassets.com/arquivos/ids/155842/oleo-essencial-cravo-10ml-phytoterapica-02.jpg?v=637725648582700000"
      />
      <Produto
        nome="Óleo Essencial de Sálvia Esclareia - 5ml"
        preco="R$ 51,20"
        descricao="(ou em até 3 x de R$ 17,06 sem juros)"
        imagem="https://phytoterapica.vtexassets.com/arquivos/ids/155539/_leo_essencial_de_s_lvia_esclareia_5ml_-_phytoterapica_1_.jpg?v=637655799653700000"
        imagemHover="https://phytoterapica.vtexassets.com/arquivos/ids/155538/_leo_essencial_de_s_lvia_esclareia_5ml_-_phytoterapica_2_.jpg?v=637655799646200000"
      />
    </div>
  );
}
