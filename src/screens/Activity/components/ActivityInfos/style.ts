import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 20px 16px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Info = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #999999;
`;

export const Value = styled.Text<{ highlight?: boolean }>`
  font-size: 24px;
  font-weight: bold;
  color: ${({ highlight }) => (highlight ? '#6F3DD2' : '#000000')};
`;

export const ValueDistance = styled.Text<{ highlight?: boolean }>`
  font-size: 74px;
  font-weight: bold;
  color: ${({ highlight }) => (highlight ? '#6F3DD2' : '#000000')};
`;

export const Unit = styled.Text`
  font-size: 12px;
  color: #999999;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
  margin-top: 8px;
`;
