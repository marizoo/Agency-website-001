import React from 'react'
import styled from 'styled-components'
import Jogs from '../img/woman-jogging-sm.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
display: flex;
`
const Left = styled.div`
width: 50%;
`

const Image = styled.img`
margin-top: 20px;
width: 50%`

const Right = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 25px;
`

const Title = styled.span`
font-size: 65px;
`


const SubTitle = styled.span`
flex: 24;
font-style: italic;
color: #333;
font-size: 16px;
margin-top: 16px;
`


const Desc = styled.p`
font-size: 16px;
color: #777;
margin-top: 30px;
`


const Button = styled.button`
width: 150px;
border: none;
padding: 15px 20px;
background-color: darkblue;
color: white;
border-radius: 20px;
font-size: 16px;
cursor: pointer;
margin-top: 20px;
`



const Feature = () => {
    return (
        <Container>
            <Left><Image src={Jogs} /></Left>
            <Right>
                <Title>
                    <b>good</b> design<br />
                    <b>good</b> business
                </Title>
                <SubTitle>We know that good design means good business.</SubTitle>
                <Desc> 
                    We help our clients succeed by creating brand identities, digital
                    experiences, and print materials that communicate clearly, achieve
                    marketing goals, and look fantastic.
                </Desc>
                <Desc>
                    We care your business and guarantee you to achieve marketing goals.
                </Desc>
                <Button>Learn More</Button>
            </Right>
            <AnimatedShapes />
        </Container>
    )
}

export default Feature
