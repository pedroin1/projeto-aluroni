import { ContainerBuscador } from "./style";
import { CgSearch } from "react-icons/cg";

type Props = {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
};

export default function Buscador({ busca, setBusca }: Props) {
  return (
    <ContainerBuscador>
      <input
        placeholder="digite..."
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
      />

      <CgSearch
        size={20}
        color="#4C4D5E"
        style={{ background: "transparent" }}
      />
    </ContainerBuscador>
  );
}
