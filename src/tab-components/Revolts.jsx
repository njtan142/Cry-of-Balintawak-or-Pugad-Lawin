import React, { useState } from 'react'
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Cavite from './assets/cavite.jpg'
import Gomburza from './assets/gomburza.jpg'
import Propaganda from './assets/propaganda.jpg'
import Filipina from './assets/filipina.jpg'
import Kkk from './assets/kkk.jpg'

export default function Revolts() {
  const [description, setDescription] = useState();

  const events = [
    {
      date: "January 20, 1872:",
      title: `Cavite Mutiny/a Small Revolt`,
      picture: Cavite,
      description: `Brief uprising of 200 Filipino troops and workers at the Cavite arsenal, which became the excuse for Spanish repression of the embryonic Philippine nationalist movement. Ironically, the harsh reaction of the Spanish authorities served ultimately to promote the nationalist cause. The mutiny was quickly crushed, but the Spanish regime under the reactionary governor Rafael de Izquierdo magnified the incident and used it as an excuse to clamp down on those Filipinos who had been calling for governmental reform. A number of Filipino intellectuals were seized and accused of complicity with the mutineers. After a brief trial, three priests—José Burgos, Jacinto Zamora, and Mariano Gómez—were publicly executed. The three subsequently became martyrs to the cause of Philippine independence.`
    },
    {
      date: "February 17, 1872",
      title: `Martyrdom of GOMBURZA`,
      picture: Gomburza,
      description: `On February 17, 1872, the three martyred Priests: GOMBURZA, better known for their real names: Fr. Mariano Gomez, Fr. Jose Apolonio Burgos, and Fr. Jacinto Zamora, were executed by the Spaniards with their alleged connection in the 1872 Cavite mutiny. The three priests aroused the wrath of the Spanish rulers for spearheading the battle against abusive Spanish friars and campaigning for priestly equality. They fought over unresolved issues concerning secularization in the Philippines, resulting in a struggle between religious regulars and church seculars. 
      
      The Cavite Mutiny of workers in the naval shipyard's arsenal over pay cuts due to increased taxation escalated into a dangerous rebellion, which Spanish authorities used to silence secularization supporters. Spanish authorities bought a witness to testify against the three priests charged with sedition and treason, resulting in their deaths by garrote. The Filipinos were filled with rage and bitterness following GOMBURZA’s death. They confronted Spanish officials and demanded improvements. The martyrdom of the three priests appears to have inspired the formation of the Propaganda Movement, which sought reforms and informed Spain about the excesses of its colonial rulers. Dr Jose Rizal’s second novel, El filibusterismo was dedicated to the three deceased priests.`
    },
    {
      date: "1880-1890",
      title: `Propaganda Movement`,
      picture: Propaganda,
      description: `On the year 1880-1890, the Propaganda Movement was the first Filipino nationalist movement. It consists of disseminating actions through books, leaflets and newspaper articles by a group of Filipinos who called for political reforms. As an elite movement, the Propaganda Movement failed to connect with the larger Filipino community while focusing on the Spanish government and populace. The campaign ultimately gained little support and made little progress in Spain because the Spanish government showed little interest in the circumstances in the Philippines, especially given the intense political polarization there. 
      
      Many of the propagandists were deported because they were viewed as rebels in their native Philippines. Despite its ultimate failure, the movement helped shape the nationalist revolution of 1896 and the subsequent war for independence by creating a political consciousness.
      `
    },
    {
      date: "July 3, 1892",
      title: `Establishing La Liga Filipina by Dr. Jose Rizal`,
      picture: Filipina,
      description: `On July 3, 1892, Dr. Jose Rizal founded La Liga Filipina with the aim of uniting the Spaniards and Filipinos into one society with equality for both races. This group involve the Filipinos in reforming the Spanish government in the Philippines at that time. Unfortunately, Dr. Jose Rizal was captured by the Spanish authorities and was deported to Dapitan. The remaining members of the La Liga Filipina had different principles, and also due to the loss of the leader, the group disbanded. The group was then split into two groups forming the conservatives Cuerpo de Compromisarios and the radicals Katipunan, a secret organization lead by Andres Bonifacio.`
    },
    {
      date: "July 7, 1892",
      title: `Founding and Discovery of KKK`,
      picture: Kkk,
      description: `On July 7, 1892, the Katipunan, officially known as KATAAS-TAASAN, KAGALANG-GALANGANG KATIPUNAN ng mga anak ng bayan (KKK), was founded by Andres Bonifacio, Deodato Arellano, Valentin Diaz, Ladislao Diwa, José Dizon, and Teodoro Plata. The Katipunan was a secret organization with the purpose of gaining independence and overthrowing Spanish rule through revolution, armed resistance and terrorist assassinations in secrecy. The Katipunan served as an awakening call for the oppressed Filipinos to fight for their freedom. 
      
      The Katipunan remained secret until it was discovered in 1896, when one member told his family relative and that family relative confessed to a priest. Upon hearing the confession, the priest together with Spanish soldiers went to the location and arrested hundreds of Katipuneros. After the discovery of the Katipunan, a national uprising was being planned by Bonifacio and other katipuneros. As a result, the revolutionaries participated in a widespread tearing of cedulas symbolizing their struggle against Spain, in an event known as the “Cry of Rebellion” in Pugad Lawin or Balintawak. `
    },
  ]
  return (
    <Container>
      <TimelineContainer>
        <Timeline>
          {
            events.map((event) => {
              return (
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Date onClick={() => {setDescription(event)}}>
                      {event.date}
                    </Date>
                  </TimelineContent>
                </TimelineItem>
              )
            })
          }

        </Timeline>
      </TimelineContainer>
      <TimelineDescriptionContainer>
        {
          description && 
          (
            <>
              <Title>{description.title}</Title>
              <Picture src={description.picture}/>
              <Description>{
                  description.description.split("\n").map((paragraph) => {
                    return (
                      <p>
                        {
                          paragraph
                        }
                      </p>
                    )
                  })
                }</Description>
            </>
          )
        }
      </TimelineDescriptionContainer>
    </Container>
  )
}

const Description = styled.p`
  width: 60%;
  margin: 1em auto;
`;

const Picture = styled.img`
  width: 60%;
  display: block;
  margin: auto;
`;

const Title = styled.h2`
  width: 90%;
  word-wrap: break-word;
  margin: 1em auto;
  text-align: center;
`;

const Date = styled.span`
  cursor: pointer;
`;

const TimelineDescriptionContainer = styled.div`
  width: 70%;
  background-color: white;
  height: 100%;
  overflow-y: scroll;
`;
const TimelineContainer = styled.div`
  padding: 1em;
  li{
    width: 10px;
  }
  div:last-child{
    min-width: 100px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;
