import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';

export default function Controversies() {
  const terms = [
    {
      name: `Pio Valenzuela's Controversial "Cry of Pugad Lawin" (August 23, 1896)`,
      description: `This controversial version of the "Cry of the Pugad Lawin" has been authorized by no other than Dr. Pio Valenzuela, who happened to be the eyewitness himself of the event. In his first version, he told that the prime staging point of the Cry was in Balintawak on Wednesday of August 26, 1896. He held this account when the happenings or events are still vivid in his memory. On the other hand, later in his life and with a fading memory, he wrote his Memoirs of the Revolution without consulting the written documents of the Philippine revolution and claimed that the "Cry" took place at Pugad Lawin on August 23, 1896. `
    },
    {
      name: `Santiago Alvarez's The "Cry of Bahay Toro" (August 24, 1896)`,
      description: `This version of the "Cry" was written by Santiago Alvarez, a well-known Katipunero from Cavite and a son of Mariano Alvarez. Santiago is a relative of Gregoria de Jesus, who happened to be the wife of Andres Bonifacio. Unlike the author of the first version mentioned (Valenzuela), Santiago Alvarez is not an eyewitness of this event. As a result, this version of him is not given of equal value as compared with the other versions for authors of other accounts are actually part of the historic event. `
    },
    {
      name: `Gregoria de Jesus' Version of the First "Cry" (August 25, 1896)`,
      description: `This version was written by no other than the Lakambini of the Katipunan" and wife of Andres Bonifacio, Gregoria de Jesus. She has been a participant of this event and became the keeper of the secret documents of the Katipunan After the Revolution in August 1896, she lived with her parents in Caloocan then fled to Manila when she was told that Spanish authorities wanted to arrest her. Eventually, she joined her husband in the mountains and shared adversities with him in her account, the First "Cry" happened near Caloocan on August 25, 1896.`
    },
    {
      name: `Guillermo Masangkay's The "Cry of Balintawak" (August 26, 1896)`,
      description: `This version is written by the Katipunan General Guillermo Masangkay. He is an eyewitness of the historic event and a childhood friend of Bonifacio. According to him, the first rally of the Philippine Revolution happened on August 26, 1896 at Balintawak. Correspondingly, the date and site presented were accepted by the preliminary years of American government.`
    },
  ]

  return (
    <Container>
      {
        terms.map((term) => {
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{term.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {term.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        })
      }
    </Container>
  )
}

const Container = styled.div`
  padding: 1em 5em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  overflow-y: scroll;
  height: 94%;

  &>div{
    border-radius: 1em;
    padding: 1em;
  }

  &>div::before{
    display: none;
  }
`;
