import React from "react";
import styled from "styled-components";
import InputProps from "../Components/Inputs/InputProps";

import { FcGoogle } from "react-icons/fc";
import { AiOutlineTwitter } from "react-icons/ai";
import Button from "../Components/Static/Button";

const View = () => {
  return (
    <div>
      <Container>
        <Main>
        
           <Title>
            Register
          </Title>
         
      
          <ButtonHolder>
            <Button icon={<FcGoogle />} title="Google" />
            <Button icon={<AiOutlineTwitter />} title="Twitter" />
          </ButtonHolder>

          <Display>
            <Line />
            <Text>Or continue with email</Text>
            <Line />
          </Display>

          <InputProps
            name
            name1="Name"
            name2="Enter Your Name"
            email
            email1="Email"
            email2="Please Enter your Email"
            password
            password1="Password"
            password2="Please Enter Password"

            confirm
            confirm1="Please confirm your Password"
            confirm2="Please confirm your Password"
          />
          <ButtonHolder>
            <Text2>
              Don't have an account? Register
            </Text2>
            <Space/>
           <Button 
              title="Sign Up" 
              color="#white"
              bg="#228be6"
              />
          </ButtonHolder>
        </Main>
      </Container>
    </div>
  );
};

export default View;

const Space = styled.div`
flex: 1;
`
const Title = styled.div`
font-weight: bold;
font-size: 24px;
margin: 20px 0;
`
const Line = styled.div`
border-bottom: 1px solid silver;
width:28%
`;
const Text2 = styled.div`
font-size: 12px;
margin-bottom: 15px;
`;
const Text = styled.div`
font-size: 12px;
margin: 0 5px;
`;
const Display = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const Main = styled.div``;
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
