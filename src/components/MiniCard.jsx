import React from 'react'
import styled from 'styled-components'
import Search from '../img/search.png'

const Container = styled.div`
width: 100px;
padding: 20px;
margin-top: 1rem;
display: flex;
flex-direction: column;
align-items: center;
-webkit-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58); 
box-shadow: 0 0 17px -11px rgba(0,0,0,0.58);
@media only screen and (max-width: 480px){
    width: 50px;
}
`

const Image = styled.img`
width: 20px;`

const Text = styled.span`
font-size: .6rem;
margin-top: 10px;
text-align: center;
@media only screen and (max-width: 480px){
font-size: .6rem;
}
`

const MiniCard = () => {
    return (
        <Container>
            <Image src={Search}/>
            <Text>
                Lorem ipsum dolor sit amet consectetur.
            </Text>
        </Container>
    )
}

export default MiniCard
