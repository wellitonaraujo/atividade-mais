import styled from "styled-components/native";

// Wrapper para ActivityInfos
export const ActivityStartWrapper = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 154px;
  background-color: white;
  padding: 0 26px;
  z-index: 2; /* Para garantir que fique acima do mapa */
  justify-content: center;
`;

// Wrapper para ActivityControls
export const ActivityControlsWrapper = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 154px;
  background-color: white;
  padding: 0 26px;
  justify-content: center;
  z-index: 2; /* Para evitar sobreposição */
`;

// Ícones e botões estilizados podem ser adicionados aqui caso precise!
