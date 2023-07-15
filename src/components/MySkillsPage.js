import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`


const CardWrapper = styled.div`
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 32px;
  transition: background-color 0.3s ease;
  color: #ffffff;
  width: 240px;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 16px;

  &:hover {
    background-color: #521095;
    color: #ffffff;
  }
`;

const CardHeader = styled.div`
  margin-bottom: 32px;
`;

const CardList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const CardItem = styled.li`
  margin-bottom: 8px;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #ffffff;
  }
`;

const CardContainer = styled.div`
  margin-bottom: 1px;
`;


const MySkillsPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>

                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />

                <CardContainer>
                    <CardWrapper>
                        <CardHeader>
                            <h3>Frontend Development</h3>
                        </CardHeader>
                        <CardList>
                            <CardItem>HTML, CSS</CardItem>
                            <CardItem>REACT</CardItem>
                            <CardItem>JAVASCRIPT</CardItem>
                            <CardItem>TYPESCRIPT</CardItem>

                        </CardList>
                    </CardWrapper>
                </CardContainer>

                <CardContainer>
                    <CardWrapper>
                        <CardHeader>
                            <h3>Web Design</h3>
                        </CardHeader>
                        <CardList>
                            <CardItem>Figma</CardItem>
                            <CardItem>Adobe Illustrator</CardItem>
                            <CardItem>Adobe Photoshop</CardItem>
                            <CardItem>Adobe XD</CardItem>
                        </CardList>
                    </CardWrapper>
                </CardContainer>

                <CardContainer>
                    <CardWrapper>
                        <CardHeader>
                            <h3>Backend Development</h3>
                        </CardHeader>
                        <CardList>
                            <CardItem>PHP</CardItem>
                            <CardItem>Java</CardItem>
                            <CardItem>MySQL</CardItem>
                            <CardItem>PostgreSQL</CardItem>
                        </CardList>
                    </CardWrapper>
                </CardContainer>



            
            </Box>

        </ThemeProvider>

    )
}

export default MySkillsPage
