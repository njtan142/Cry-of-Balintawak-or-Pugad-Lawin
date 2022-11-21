import React, { useState } from 'react'
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Ferdinand from './assets/1521.jpg'
import Arrest from './assets/arrest.jpg'
import Cavite from './assets/cavite.jpg'
import Revolution from './assets/revolution.png'

export default function History() {
  const [description, setDescription] = useState();

  const events = [
    {
      date: "1521",
      title: `Ferdinand Magellan’s First Colonization in the Philippines`,
      picture: Ferdinand,
      description: `The Spanish colonial period of the Philippines began when explorer Ferdinand Magellan came to the islands in 1521 and claimed it as a colony for the Spanish Empire. The period lasted until the Philippine Revolution in 1898.
      The year 1521 was a significant juncture in Europe, which was shaken by Martin Luther’s challenge to both the Emperor (concurrently, Spanish King Charles V) and the Roman Catholic Church, headed by Pope Leo X. An attempt by Magellan to intervene in a local conflict resulted in his death in combat at the hands of Lapulapu’s warriors, but it signaled the beginning of Spanish influence in what would be known as the Philippine Islands. This fatal trip would continue and end in the first circumnavigation of the world captained by Sebastian Elcano and the survivors of Magellan’s original crew, who landed back in Spain in 1522.`
    },
    {
      date: "August 1896",
      title: `Spanish arrested Rizal/Revolt in the Philippines`,
      picture: Arrest,
      description: `When the Spaniards discovered its existence. Bonifacio immediately issued a call for armed rebellion. The Spanish then arrested Rizal, who had advocated reform but never condoned the revolution. On August 19, 1896, Katipunan was discovered by a Spanish friar, which resulted in the start of the Philippine Revolution. The revolution initially flared up in Central Luzon. The awakening of nationalism and awareness of the Filipinos as a separate political entity, led by Dr. Jose P. Rizal and fellow members of the Propaganda Movement of intellectuals and activists in Spain and the Katipunan secret society in the Philippines. This movement was inspired by the Constitution of Cadiz and the liberal ferment that shook Spain in the nineteenth century. Philippine youths from the principalia, who were studying in Spain led this movement.`
    },
    {
      date: "January 20, 1872:",
      title: `Cavite Mutiny/a Small Revolt`,
      picture: Cavite,
      description: `Brief uprising of 200 Filipino troops and workers at the Cavite arsenal, which became the excuse for Spanish repression of the embryonic Philippine nationalist movement. Ironically, the harsh reaction of the Spanish authorities served ultimately to promote the nationalist cause. The mutiny was quickly crushed, but the Spanish regime under the reactionary governor Rafael de Izquierdo magnified the incident and used it as an excuse to clamp down on those Filipinos who had been calling for governmental reform. A number of Filipino intellectuals were seized and accused of complicity with the mutineers. After a brief trial, three priests—José Burgos, Jacinto Zamora, and Mariano Gómez—were publicly executed. The three subsequently became martyrs to the cause of Philippine independence.`
    },
    {
      date: "December 30, 1896",
      title: `The Death of Rizal which triggered the Philippine Revolution`,
      picture: Revolution,
      description: `The execution of Dr. Jose P. Rizal on December 30, 1896, triggered the Philippine Revolution, which was led by local nationalists such as Andres Bonifacio as well as patriots from the elite and middle class, such as the Luna brothers, Gregorio del Pilar, and Martin Tinio. Philippine independence from
      Spain was declared in Kawit, Cavite by General (and later President) Emilio Aguinaldo. The Filipinos sought an alliance with the United States of America, not being aware of the latter’s plan to establish itself among the Western colonial powers.`
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
                    <Date onClick={() => { setDescription(event) }}>
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
              <Picture src={description.picture} />
              <Description>{description.description}</Description>
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
  div:last-child:active{
    font-weight: bold;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;
