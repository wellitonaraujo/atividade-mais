import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

// Estilo do overlay (fundo escuro e semitransparente)
export const Overlay = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

// Estilo do container do modal (metade inferior da tela)
export const ModalContainer = styled.View`
  height: ${height / 2}px;
  background-color: white;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: center;
`;

// Estilo do título do modal
export const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

// Estilo do botão de salvar
export const SaveButton = styled.TouchableOpacity`
  background-color: #5235C3;
  padding: 12px;
  height: 48px;
  border-radius: 48px;
  margin-top: 20px;
  align-items: center;
`;

// Estilo do botão de cancelar
export const CancelButton = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 12px;
  align-items: center;
  border-width: 1px;
  height: 48px;
  border-radius: 48px;
`;

// Estilo do texto dos botões
export const ButtonTextancel = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #5235C3;
`;

// Estilo do texto dos botões
export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
`;
