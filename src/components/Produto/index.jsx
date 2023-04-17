import "./styles.css";

export default function Produto(props) {
  return (
    <div className="produto">
      <h1>{props.nome}</h1>
      <p>R$ {props.preco}</p>
    </div>
  );
}
