import { useState, useEffect } from "react";
import Item from "./Item";
import itensList from "./itens.json";
import { ItensContainer } from "./style";

type Props = {
  busca: string;
  filtro: string | null;
  ordenador: string;
};

export default function Itens({ busca, filtro, ordenador }: Props) {
  const [lista, setLista] = useState(itensList);

  const filterByTitle = (title: string) => {
    const regex = new RegExp(busca, "i");
    return regex.test(title);
  };

  const filterByCategory = (category: string) => {
    if (filtro !== null) return filtro === category;
    return true;
  };

  const filterByOrdernador = (itensListOrdered: typeof itensList) => {
    switch (ordenador) {
      case "Qtd. pessoas":
        return itensListOrdered.sort(
          (itemA, itemB) => itemA.serving - itemB.serving
        );
      case "Preço":
        return itensListOrdered.sort(
          (itemA, itemB) => itemA.price - itemB.price
        );
      case "Porção":
        return itensListOrdered.sort((itemA, itemB) => itemA.size - itemB.size);
      default:
        return itensListOrdered;
    }
  };

  useEffect(() => {
    const listaFiltrada = itensList.filter(
      (item) =>
        filterByTitle(item.title) && filterByCategory(item.category.label)
    );
    setLista(filterByOrdernador(listaFiltrada));
  }, [busca, filtro, ordenador]);

  return (
    <ItensContainer>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ItensContainer>
  );
}
