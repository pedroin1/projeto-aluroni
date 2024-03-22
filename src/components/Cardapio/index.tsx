import { useState } from "react";
import { FiltrosSection, NavHeader, NavMenu, SectionCardapio } from "./style";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Buscador from "../Buscador";
import Filtros from "../Filtros";
import Ordenador from "../Ordenador";
import Itens from "../Itens";

export default function Cardapio() {
  const [busca, setBusca] = useState<string>("");
  const [filtro, setFiltro] = useState<string | null>("");
  const [ordenador, setOrdenador] = useState<string>("");

  return (
    <main>
      <NavMenu>
        <Logo />
      </NavMenu>
      <NavHeader>
        <span>A casa da massa</span>
      </NavHeader>
      <SectionCardapio>
        <span>Cardapio</span>
        <Buscador busca={busca} setBusca={setBusca} />
        <FiltrosSection>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </FiltrosSection>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </SectionCardapio>
    </main>
  );
}
