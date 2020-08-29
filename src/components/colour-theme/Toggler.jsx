import React from 'react'
import styled from "styled-components"
import { BiSun, BiMoon } from 'react-icons/bi';

const Toggle = ({ toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      <Emoji><BiMoon /></Emoji>
      <ToggleCheckbox as='input' type="checkbox" />
      <ToggleLabel htmlFor="toggle-switch"></ToggleLabel>
      <Emoji ><BiSun /></Emoji>
    </Button>
  );
};

const Button = styled.button`
  position:absolute;
  top:1%;
  right:1%;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
	display: flex;
	align-items: center;
	justify-content: space-around;
  max-width: 140px;
  z-index: 100;

  &:focus {
    outline: none;
  }
`;

const Emoji = styled.span`
  margin: 0 0.5rem;
  font-size: 1.1rem;
`

const ToggleLabel = styled.div`
  cursor: pointer;
  width: 60px;
  height: 28px;
  background: ${({ theme }) => theme.background};
  display: block;
  border-radius: 40px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 24px;
    height: 24px;
    background: #fff;
    border-radius: 40px;
    transition: 0.3s;
    transform: ${({ theme }) => theme.transform};
  }
`

const ToggleCheckbox = styled.div`
  height: 0;
  width: 0;
  visibility: hidden;
`

export default Toggle;