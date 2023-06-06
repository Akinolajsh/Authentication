import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { iInput } from "../../Utils/interface";

const InputProps: React.FC<iInput> = ({
  name,
  email,
  password,
  confirm,
  name1,
  confirm1,
  email1,
  password1,
  name2,
  email2,
  password2,
  confirm2,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(true);

  const onShow = () => {
    setShow(!show);
  };

  const onShow2 = () => {
    setShow2(!show2);
  };

  return (
    <div>
      <Container>
        <InputHolder>
          <Text>
            {name1}
            <p>*</p>
          </Text>
          <Input placeholder={name2} />
        </InputHolder>

        <InputHolder>
          {
            <InputHolder>
              <Text>
                {email1}
                <p>*</p>
              </Text>
              <Input placeholder={email2} />
            </InputHolder>
          }

          <Text>
            {password1}
            <p>*</p>
          </Text>
          {show ? (
            <InputHold>
              <Input placeholder={password2} type="" />
              <Icon onClick={onShow} />
            </InputHold>
          ) : (
            <InputHold>
              <Input placeholder={password2} type="password" />
              <Icon2 onClick={onShow} />
            </InputHold>
          )}
          <InputHolder>
            <Text>
              {confirm1}
              <p>*</p>
            </Text>
          </InputHolder>
          {show2 ? (
            <InputHold>
              <Input placeholder={confirm2} type="" />
              <Icon onClick={onShow2} />
            </InputHold>
          ) : (
            <InputHold>
              <Input placeholder={confirm2} type="password" />
              <Icon2 onClick={onShow2} />
            </InputHold>
          )}
        </InputHolder>
      </Container>
    </div>
  );
};

export default InputProps;

const InputHolder = styled.div``;

const Text = styled.div`
  display: flex;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;

  p {
    margin-left: 3px;
    margin-top: 0;
    margin-bottom: 0;
    color: red;
  }
`;

const Input = styled.input`
  outline: none;
  border: 1px solid silver;
  border-radius: 8px;
  width: 300px;
  height: 35px;
  padding-left: 10px;
  margin-top: 5px;

  :focus {
    outline: 1px solid #228be6;
    border: 1px solid transparent;
  }

  ::placeholder {
    color: silver;
  }
`;

const Container = styled.div``;

const InputHold = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const Icon = styled(MdOutlineVisibilityOff)`
  position: absolute;
  right: 8px;
  margin-top: 6px;
  opacity: 0.5;
`;

const Icon2 = styled(MdOutlineVisibility)`
  position: absolute;
  right: 8px;
  margin-top: 6px;
  opacity: 0.5;
`;
