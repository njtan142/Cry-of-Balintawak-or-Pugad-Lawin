import React, { useState } from 'react'
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TheDay from './assets/the_day.jpg'
import Meeting from './assets/meeting.jpg'
import Cry from './assets/cry.jpg'
import TearingOfCedula from './assets/tearing_of_cedula.jpg'
import TheRevolt from './assets/the_revolt.jpg'

export default function Events() {
  const [description, setDescription] = useState();

  const events = [
    {
      date: "On August 26th 1896",
      title: `The Day`,
      picture: TheDay,
      description: `Cry of Balintawak was the beginning of the Philippine Revolution against the Spanish Empire. It took place in Balintawak; but others would say that it really happened in Pugad Lawin. Nevertheless, there are different versions to consider in knowing the real date and place of the Cry. These include Pio Valenzuela’s Controversial “Cry of Pugad Lawin”, Santiago Alvarez’s “The Cry of Bahay Toro”, Gregoria de Jesus’ version of the “First Cry”, and Guillermo Masangkay’s “The Cry if Balintawak”.
      It occurred on August 26, 1896. The Cry, defined as that turning point when the Filipinos finally refused Spanish colonial dominion over the Philippine Islands. With tears in their eyes, the people as one man, pulled out their cedulas and tore them into pieces. It was the beginning of the formal declaration of the separation from Spanish rule."Long Live the Philippine Republic!", the cry of the people.
      A big meeting was held in Balintawak, at the house of Apolonio Samson, then the cabeza of that barrio of Caloocan. Among those who attended, they were Bonifacio, Emilio Jacinto, Aguedo del Rosario, Tomas Remigio, Briccio Pantas, Teodoro Plata, Pio Valenzuela, Enrique Pacheco, and Francisco Carreon. They were all leaders of the Katipunan and composed the board of directors of the organization. Delegates from Bulacan, Cabanatuan, Cavite and Morong (now Rizal,) were also present`
    },
    {
      date: "The Meeting",
      title: `The Meeting`,
      picture: Meeting,
      description: `At about nine o’clock in the morning of August 26, the meeting was opened with Andres Bonifacio presiding and Emilio Jacinto acting as secretary. The purpose was to discuss when the uprising was to take place. Teodoro Plata [Bonifacio’s brother-in-law], Briccio Pantas, and Pio Valenzuela were all opposed to starting the revolution too early. They reasoned that the people would be in distress if the revolution were started without adequate preparation. Plata was very forceful in his argument, stating that the uprising could not very well be started without the arms and food for the soldiers. Valenzuela used Rizal’s argument about the rich not siding with the Katipunan organization.`
    },
    {
      date: "The Cry",
      title: `The Cry`,
      picture: Cry,
      description: `Andres Bonifacio, sensing that he would lose in the discussion then, left the session hall and talked to the people, who were waiting outside for the result of the meeting of the leaders. He told the people that the leaders were arguing against starting the revolution early, and appealed to them in a fiery speech in which he said: “You remember the fate of our countrymen who were shot in Bagumbayan. Should we return now to the towns, the Spaniards will only shoot us. Our organization has been discovered and we are all marked men. If we don’t start the uprising, the Spaniards will get us anyway. What then, do you say?

      “Revolt!” the people shouted as one
      
      Bonifacio then asked the people to give a pledge that they were to revolt. He told them that the sign of slavery of the Filipinos were (sic) the cedula tax charged each citizen. “If it is true that you are ready to revolt,” Bonifacio saved, “I want to see you destroy your cedulas. It will be the sign that all of us have declared our severance from the Spaniards.”
      `
    },
    {
      date: "Tearing of Cedulas",
      title: `Tearing of Cedulas`,
      picture: TearingOfCedula,
      description: `With tears in their eyes, the people as one man, pulled out their cedulas and tore them to pieces. It was the beginning of the formal declaration of the separation from Spanish rule. With their cedulas destroyed, they could no longer go back to their homes because the Spaniards would persecute them, if not for being katipuneros, for having no cedulas. And people who had no cedulas during those days were severely punished.
      When the people’s pledge was obtained by Bonifacio, he returned to the session hall and informed the leaders of what took place outside. “The people want to revolt, and they have destroyed their cedulas,” Bonifacio said. “So now we have to start the uprising; otherwise the people by hundreds will be shot.” There was no alternative. The board of directors, in the spite of the protests of Plata, Pantas, and =Valenzuela, voted for the revolution. And when this was decided, the people outside shouted: “Long Live the Philippine Republic!”`
    },
    {
      date: "The Revolt",
      title: `The Revolt`,
      picture: TheRevolt,
      description: `At about 5 o’clock in the afternoon, while the gathering at Balintawak was celebrating the decision of the Katipunan leaders to start the uprising, the guards who were up in trees to watch for any possible intruders or the approach of the enemy, gave the warning that the Spaniards were coming.
      Led by Bonifacio, Emilio Jacinto and other leaders of the Katipunan, the men were distributed in strategic positions and were prepared for attack of the civil guards. A group stationed on the bank of a small creek, guarding the places where the Spaniards were to pass in order to reach the meeting place of the katipuneros. Shots were then fired by the civil guards, and that was the beginning of the fire which later became such a huge conflagration.`
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
              <Description>
                {
                  description.description.split("\n").map((paragraph) => {
                    return (
                      <p>
                        {
                          paragraph
                        }
                      </p>
                    )
                  })
                }
              </Description>
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
