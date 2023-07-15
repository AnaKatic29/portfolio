import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme, lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Source Code Pro',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
    color:${props => props.theme.body};
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
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



                {/* <Main>
                    <Title>
                        <Design width={40} height={40} /> Designer
                    </Title>
                    <Description>
                        I love to create design which speaks, Keep it clean, minimal and simple.
                    </Description>
                    <Description>
                        <strong>I like to Design</strong>
                        <ul>
                            <li>
                                Web Design
                            </li>
                            <li>
                                Mobile Apps
                            </li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <ul>
                            <li>
                                Figma
                            </li>

                        </ul>
                    </Description>

                </Main> */}




                {/* <Main>
                    <Title>
                        <Develope width={40} height={40} /> Frontend Developer
                    </Title>
                    <Description>
                        I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
                    </Description>
                    <Description>
                        <strong>Skills</strong>
                        <p>
                            Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.
                        </p>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>
                            VScode, Github, Codepen etc.
                        </p>
                    </Description>
                </Main> */}

                {/* <BigTitle text="SKILLS" top="80%" right="30%" /> */}

            </Box>

        </ThemeProvider>

    )
}

export default MySkillsPage
