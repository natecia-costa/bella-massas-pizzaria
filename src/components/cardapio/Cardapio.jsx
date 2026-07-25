import { useState } from "react";
import Pizza from "./Pizza";
import './cardapio.css'
import Bebidas from "./bebidas/Bebidas";
import pizzaria from "../../assets/pizzaria.jpg"

export default function Cardapio() {
  const pizzas = [
    {
      id: 1,
      nome: "Calabresa",
      descricao: "Molho, mussarela e calabresa",
      preco: "R$ 45,90",
    },
    {
      id: 2,
      nome: "Frango com catupiry",
      descricao: "Molho, frango desfiado e catupiry",
      preco: "R$ 49,90",
    },
    {
      id: 3,
      nome: "Portuguesa",
      descricao: "Molho, mussarela, presunto, ovo e cebola",
      preco: "R$ 54,90",
    },
    {
      id: 4,
      nome: "Marguerita",
      descricao: "Molho, mussarela, tomate e manjericão",
      preco: "R$ 46,90",
    },
  ];
  const [mostrar, setMostrar] = useState(false);
  return (
    <main>
      <section>
        <h3>Na Bella Massa, cada pizza é preparada com ingredientes selecionados, massa artesanal e muito carinho para transformar qualquer momento em uma experiência deliciosa.</h3>
        <img src={pizzaria} alt="Pizzaria" />
      </section>
      <button onClick={() => setMostrar(true)}>Mostrar Cardápio</button>
            {mostrar && pizzas.map((item) => (
                <Pizza key={item.id} nome={item.nome} descricao={item.descricao} preco={item.preco} />
            ))}
        <Bebidas />
    </main>
  );
}
