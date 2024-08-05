import styled from 'styled-components';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const ICONES = [perfil, sacola];

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

function IconesHeader() {
  return (
    <Icones>
      {ICONES.map((icone, indice) => (
        <Icone key={indice}>
          <img src={icone} alt={icone.toString()} />
        </Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;
