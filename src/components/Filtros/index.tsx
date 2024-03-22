import { ButtonStyled, FiltrosContainer } from "./style";
import filtros from "./filtros.json";

type Props = {
  filtro: string | null;
  setFiltro: React.Dispatch<React.SetStateAction<string | null>>;
};

type OpcaoFiltro = (typeof filtros)[0];

export default function Filtros({ filtro, setFiltro }: Props) {
  const handleSelecionarFiltro = (opcao: OpcaoFiltro) => {
    if (opcao.label === filtro) return setFiltro(null);
    return setFiltro(opcao.label);
  };

  return (
    <FiltrosContainer>
      {filtros.map((opcao) => (
        <ButtonStyled
          key={opcao.id}
          onClick={() => handleSelecionarFiltro(opcao)}
          ativo={filtro === opcao.label && true}
          //onBlur={() => setFiltro(null)}
        >
          {opcao.label}
        </ButtonStyled>
      ))}
    </FiltrosContainer>
  );
}
