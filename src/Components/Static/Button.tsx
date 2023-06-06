import React from "react";
import styled from "styled-components";
import { iButton } from "../../Utils/interface";

const Button: React.FC<iButton> = ({onClick, title, icon, color, bg }) => {
  return (
    <div>
      <Container color={`${color}`}
      onClick={onClick}
      >
        <Main bg={`${bg}`}>
          <Icon>{icon}</Icon>
          <Div>{title}</Div>
        </Main>
      </Container>
    </div>
  );
};

export default Button;

const Div = styled.div`
  font-size: 12px;
  font-weight: 700;
  opacity: 0.7;
`;
const Icon = styled.div`
  color: #228be6;
  margin-top: 5px;
  margin-right: 3px;
`;
const Main = styled.div<{bg: string }>`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid silver;
  border-radius: 30px;
  height: 35px;
  background-color: ${({ bg }) => bg};
  transition: all 350;
  :hover {
    cursor: pointer;
    background-color: #f3f3f3;
  }
`;

const Container = styled.div<{ color: string}>`
  margin: 0 5px;
  margin-bottom: 20px;
  color: ${({ color }) => color};
`;
