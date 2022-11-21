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

export default function References() {
    const [description, setDescription] = useState();

    const events = [
        {
            title: `The GOMBURZA were executed February 17, 1872`,
            src: `https://kahimyang.com/kauswagan/articles/937/today-in-philippine-history-february-17-1872-fathers-mariano-gomez-jose-apolonio-burgos-and-jacinto-zamora-were-executed`
        },
        {
            title: `Cry of Pugad Lawin Facts`,
            src: `https://kidskonnect.com/history/cry-of-pugad-lawin/`
        },
        {
            title: `120 years after Philippine independence from Spain, Hispanic influence remains`,
            src: `https://www.nbcnews.com/news/asian-america/120-years-after-philippine-independence-spain-hispanic-influence-remains-n912916`
        },
        {
            title: `Philippine Revolution | Facts, Leaders, & Significance`,
            src: `https://www.britannica.com/event/Philippine-Revolution`
        },
        {
            title: `'March 15, 1521 Magellan "discovered" the Philippines' ni ka tony`,
            src: `http://katonynabanlawkasaysayan.blogspot.com/2008/07/march-15-1521-magellan-discovered.html`
        },
        {
            title: `August 1896: Revolt in the Philippines`,
            src: `https://www.pbs.org/crucible/tl5.html`
        },
        {
            title: `Cavite Mutiny`,
            src: `https://www.britannica.com/event/Cavite-Mutiny`
        },
        {
            title: `Cry of Balintawak or Pugad Lawin`,
            src: `https://www.pressreader.com/philippines/philippine-daily-inquirer-1109/20100903/283274569062897`
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
                                            {event.title}
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
                            <iframe src={description.src} width={"100%"} height={"100%"} sandbox="allow-same-origin allow-scripts allow-popups allow-forms" ></iframe>
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
`;
const TimelineContainer = styled.div`
  padding: 1em;
  min-width: 30%;
  overflow-y: scroll;
  li{
    width: 10px;
  }
  div:last-child{
    min-width: 300px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;
