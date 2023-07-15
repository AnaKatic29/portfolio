import React from 'react'
import styled from 'styled-components'
import { DarkTheme, lightTheme } from '../components/Themes'




const Logo = styled.h3`
display: inline-block;
color: ${props => props.color === 'dark' ? lightTheme.text : lightTheme.body};
font-family: 'Source Code Pro', cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
`

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
      &lt;!ANA KATIC&gt;
    </Logo>
  )
}

export default LogoComponent
