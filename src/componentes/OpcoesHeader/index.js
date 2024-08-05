import styled from 'styled-components';

const TEXTO_OPCOES = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

const Opcoes = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  cursor: pointer;
  padding: 0 5px;
  min-width: 120px;
`;

function OpcoesHeader() {
  return (
    <Opcoes>
      {TEXTO_OPCOES.map((textoOpcao, indice) => (
        <Opcao key={indice}>
          <p>{textoOpcao}</p>
        </Opcao>
      ))}
    </Opcoes>
  )
}

export default OpcoesHeader;
