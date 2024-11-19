import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
`;
export const ActivityActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;


export const ActivityStartWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const ActivityControlsWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 16px;
  margin: 26px;
  margin-bottom: 80px;
  background-color: white;
  align-items: center;
  justify-content: center;
  border-width: 1px;
 
`;