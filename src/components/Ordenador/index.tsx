import { useState } from "react";
import {
  AnimatedIconContainer,
  ButtonOrdenador,
  ContainerOptions,
  Option,
} from "./style";
import { MdKeyboardArrowDown as Arrow } from "react-icons/md";
import opcoes from "./opcoes.json";

type Props = {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
};

export default function Ordenador({ ordenador, setOrdenador }: Props) {
  const [aberto, setAberto] = useState(false);

  const handleCloseOrdenador = () => {
    setAberto(false);
  };

  return (
    <ButtonOrdenador
      onClick={() => setAberto(!aberto)}
      onBlur={() => handleCloseOrdenador()}
    >
      <span>{`${ordenador ? ordenador : "Ordenar por:"}`}</span>
      <AnimatedIconContainer ativo={aberto}>
        <Arrow size={22} style={{ backgroundColor: "transparent" }} />
      </AnimatedIconContainer>
      <ContainerOptions ativo={aberto}>
        {opcoes.map((opcao) => (
          <Option onClick={() => setOrdenador(opcao.name)}>{opcao.name}</Option>
        ))}
      </ContainerOptions>
    </ButtonOrdenador>
  );
}
