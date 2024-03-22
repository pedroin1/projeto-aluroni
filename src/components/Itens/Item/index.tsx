import {
  DescricaoContainer,
  ImageContainer,
  ItemContainer,
  TagsContainer,
  TipoContainer,
  TituloContainer,
} from "./style";

import itens from "../itens.json";

type Props = (typeof itens)[0];

export default function Item(data: Props) {
  const { title, description, category, size, serving, price, photo } = data;

  return (
    <ItemContainer>
      <ImageContainer>
        <img src={photo} alt={title} />
      </ImageContainer>
      <DescricaoContainer>
        <TituloContainer>
          <h2>{title}</h2>
          <p>{description}</p>
        </TituloContainer>
      </DescricaoContainer>
      <TagsContainer>
        <TipoContainer>
          <div className={category.label.toLowerCase()}>{category.label}</div>
          <div className="porcao">{`${size}g`}</div>
          <div className="qtdpessoas">{`Serve ${serving} pessoas`}</div>
          <div className="valor">{`R$${price.toFixed(2)}`}</div>
        </TipoContainer>
      </TagsContainer>
    </ItemContainer>
  );
}
