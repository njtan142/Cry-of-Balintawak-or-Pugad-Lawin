import React from 'react'
import styled from 'styled-components'
import Rizal from './assets/Jose_Rizal_full.jpg.webp'
import ApolonioSamson from './assets/apolonio_samson.jpg'
import AndresBonifacio from './assets/andres_bonifacio.webp'
import EmilioJacinto from './assets/emilio_jacinto.png'
import JuanARamos from './assets/juan_ramos.jpg'
import MelchoraAquino from './assets/melchora_aquino.jpg'
import TeodoroPlata from './assets/teodoro_plata.png'
import ProcopioBonifacio from './assets/procopio_bonifacio.jpg'
import AguedoDelRosario from './assets/aguedo_del_rosario.jpg'
import PioValenzuela from './assets/pio_valenzuela.jpg'
import SantiagoAlvarez from './assets/santiago_alvarez.jpg'
import GuillermoMasangkay from './assets/guillermo_masangkay.webp'
import GregoriaDeJesus from './assets/gregoria_de_jesus.jpg'
import TeodoroAgoncillo from './assets/teodoro_agoncillo.jpg'


export default function Characters() {
    const Characters = [
        {
            profile: ApolonioSamson,
            name: "Apolonio Samson",
            description: "A Filipino revolutionary who work alongside with Andres Bonifacio",
            birth: `1851`,
            death: `1902`,
        },
        {
            profile: AndresBonifacio,
            name: "Andres Bonifacio",
            description: `a Filipino revolutionary leader who founded the katipunan. He is also known
            as "supremo" and declared Philippine independence in 1986, following in the footsteps of his
            hero and mentor Jose Rizal. He is also referred to as the "Father of the Philippine Revolution"
            against Spain.`,
            birth: `November 30, 1863`,
            death: `May 10, 1897`,
        },
        {
            profile: EmilioJacinto,
            name: "Emilio Jacinto",
            description: ` A Filipino General during the Philippine Revolution known as the “utak ng
            Katipunan” or in English, “the Brains of the Katipunan.”
            `,
            birth: `December 15, 1875`,
            death: `April 16, 1899`,
        },
        {
            profile: JuanARamos,
            name: "Juan A. Ramos",
            description: `son of Melchora Aquino, who is associated with the Katipunan. `,
            birth: ``,
            death: ``,
        },
        {
            profile: MelchoraAquino,
            name: "Melchora Aquino",
            description: `also known as Tandang Sora, she was a Filipina revolutionary and was
            known as the mother of the Katipunan and the mother of Philippine Revolution. `,
            birth: `January 6, 1812`,
            death: `February 19, 1919`,
        },
        {
            profile: TeodoroPlata,
            name: "Teodoro Plata ",
            description: `a Filipino patriot and a co-founder of the katipunan.`,
            birth: `1866`,
            death: `February 6, 1897`,
        },
        {
            profile: ProcopioBonifacio,
            name: "Procopio Bonifacio",
            description: `a Filipino independence activist, revolutionary during the Philippine
            Revolution in 1896 and a member of Katipunan. `,
            birth: `1873`,
            death: `May 10, 1897`,
        },
        {
            profile: AguedoDelRosario,
            name: "Aguedo Del Rosario -",
            description: `one of the founders of Katipunan, and known as “Tagaisok” as his
            katipunan name. He is also the secretary of the Sangguniang Bayang Katagalugan in Tondo,
            Manila. `,
            birth: `July 13, 1860`,
            death: `May 2, 1895`,
        },
        {
            profile: PioValenzuela,
            name: "Dr. Pio Valenzuela",
            description: `accounts the cry of Pugad Lawin on August 23, 1896. A Filipino physician
            and revolutionary leader. He joined the katipunan at the age of 23 and became one of the
            officials. `,
            birth: `July 11, 1869`,
            death: `April 6, 1956`,
        },
        {
            profile: SantiagoAlvarez,
            name: "General Santiago Virata Alvarez",
            description: `accounts the cry of Bahay Toro on August 24, 1896. A
            Delegado General of the Provincial Council of the Katipunan in Cavite.`,
            birth: `July 25, 1872`,
            death: `October 30, 1930`,
        },

        {
            profile: GuillermoMasangkay,
            name: "General Guillermo Masangkay",
            description: `accounts the cry of Balintawak on August 26, 1896. He is
            designated to build the KKK in Cavite and played a key role in the Filipino-American War as a
            revolutionary general. `,
            birth: `June 25, 1867`,
            death: `May 30, 1896`,
        },
        {
            profile: GregoriaDeJesus,
            name: "Gregoria De Jesus",
            description: `accounts the first cry on August 25, 1896. The lakambini of Katipunan, and
            the custodian of the documents and seal of the Katipunan`,
            birth: `May 9, 1875`,
            death: `March 15, 1943`,
        },
        {
            profile: TeodoroAgoncillo,
            name: "Teodoro Agoncilllo",
            description: `– is a prominent 20th century Filipino Historian and his considerable
            influence campaigned to change the date and venue of the first cry to: Pugadlawin, August 23,
            1896.`,
            birth: `November 9, 1912`,
            death: `January 14, 1985`,
        },
    ]


    return (
        <Container>
            {
                Characters.map((character) => {
                    return (
                        <Character>
                            <Name>{character.name}</Name>
                            <div>
                                <CharRight>
                                    <Profile src={character.profile} />
                                </CharRight>
                                <CharLeft>
                                    <LifeTime>{character.birth} – {character.death}</LifeTime>
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
    overflow-y: scroll;
    font-size: 12px;
    height: 100%;
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
    width: 100%;
`;

const CharLeft = styled.div`
    display: flex;
    flex-direction: column;
`;
const CharRight = styled.div`
    display: flex;
    align-items: center;
`;

const Character = styled.div`
    width: 350px;
    height: 45vh;
    overflow: hidden;
    padding: 1em;
    padding-top: 0em;
    gap: 15px;

    &>div{
        display: flex;
        justify-content: space-between;
        gap: 1em;
        height: 80%;
    }

    &>div>div{
        width: 50%;
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
