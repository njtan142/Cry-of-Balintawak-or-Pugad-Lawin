import React from 'react'
import styled from 'styled-components'
import Al from './assets/al.jpg'
import Glegel from './assets/glegel.jpg'
import Glydel from './assets/glydel.jpg'
import Kirk from './assets/kirk.jpg'
import Michelle from './assets/michelle.jpg'
import Tan from './assets/tan.jpg'


export default function Credits() {
    const Characters = [
        {
            profile: Al,
            name: "Al Vincent Fabrique",
            description: "Revolts Content Creator"
        },
        {
            profile: Glegel,
            name: "Glegel Novo",
            description: "Event Content Creator"
        },
        {
            profile: Glydel,
            name: "Glydel A. Solis",
            description: "Character, Details and Conclusion Content Creator"
        },
        {
            profile: Kirk,
            name: "Kirk P. Daño",
            description: "History Content Creator"
        },
        {
            profile: Michelle,
            name: "Michelle Brigoli",
            description: "Controversies Content Creator"
        },
        {
            profile: Tan,
            name: "Niño James A. Tan",
            description: "Website Developer & Designer"
        },
       
    ]


    return (
        <Container>
            {
                Characters.map((character) => {
                    return (
                        <Character>
                            <div>
                                <CharRight>
                                    <Profile src={character.profile} />
                                </CharRight>
                                <CharLeft>
                                     <Name>{character.name}</Name>
                                    <Description>{character.description}</Description>
                                </CharLeft>
                            </div>
                        </Character>
                    )
                })
            }
        </Container>
    )
}
const Description = styled.p`
    font-size: 12px;
    height: 100%;
    font-size: 15px;
`;

const LifeTime = styled.p`
    margin: 0px;
    font-size: 12px;
    font-weight: 500;
`;

const Name = styled.h3`
    border-radius: 10px;
    padding: 10px;
    background: #ffffff;
    text-align: center;
`;

const Profile = styled.img`
    border-radius: 50%;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border: 2px dashed black;
`;

const CharLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;

    p{
        padding-left: 1em;
    }
`;
const CharRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 40%;
`;

const Character = styled.div`
    width: 350px;
    height: 170px;
    overflow: hidden;
    padding: 1em;
    gap: 15px;

    &>div{
        display: flex;
        justify-content: space-between;
        gap: 1em;
        height: 100%;
    }

    border-radius: 29px;
    background: #f1f1f1;
    box-shadow:  7px 7px 14px #d6d6d6,
                -7px -7px 14px #ffffff;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 95%;
    justify-content: center;
    align-items: center;
    gap: 1em;
    padding: 1em;
    overflow-y: scroll;
`;
