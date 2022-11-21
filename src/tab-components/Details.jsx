import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';

export default function Details() {
  const terms = [
    {
      name: "Cedula",
      description: `a certificate of community taxation because cedula is the basic requirement for most government transactions and a valid identification for individuals and corporations residing or located in the same municipality from which it is acquired, it is issued to Filipinos upon payment of a residence tax.`
    },
    {
      name: "La Liga Filipina",
      description: `a secret organization founded by Jose Rizal. This organization sought to involve the people directly in the reform movement as well as to unite the whole archipelago into one society with equality for Filipinos and Spaniards in the Philippines`
    },
    {
      name: "Cuerpo de Compromisarios ",
      description: `a group that has pledged to continue its support for La Solidaridad.`
    },
    {
      name: "KKK ",
      description: `the Kataastaasan, Kagalanggalangang Katipunan ng mga Anak ng Bayan is a Phillipine revolutionary group. The KKK's principles are to organize armed resistance and terrorist assassinations in complete secrecy. It functions as an alternative Filipino government, complete with a president and cabinet.`
    },
    {
      name: "Katipunero",
      description: `a member of the revolutionary group “Katipunan.” `
    },
    {
      name: "La Solidaridad",
      description: `established to express the propaganda movement aimed at assimilation into
      Spain.`
    },
    {
      name: "Guardia Civil",
      description: `A national police force of Spain`
    },
    {
      name: "The Cry",
      description: `means “cry for rebellion” which marks as the beginning of the Philippine Revolution
      led by the supreme leader, Andres Bonifacio.`
    },
    {
      name: "The “Pasya”",
      description: `decision to revolt`
    },
    {
      name: "The “Pagpupunit”",
      description: `the tearing of cedulas`
    },
    {
      name: "The “unang labanan” or “unang putukan”",
      description: `the first encounter with Spanish forces.`
    },
    {
      name: "Kataas-taasang Kapisanan",
      description: `primary and paramount body within katipunan`
    },
    {
      name: "Kataas-taasang Sanggunian",
      description: `the highest governing body, presided over by a supremo or
      president.`
    },
    {
      name: "Sangguniang Bayan",
      description: `governs provinces. `
    },
    {
      name: "Sangguniang Balangay",
      description: `governs towns.`
    },
    {
      name: "Supremo",
      description: ` the supreme president, also known as the "kataas-taasang pangulo"`
    },
    {
      name: "Philippine Revolution",
      description: `a revolution, civil war, and subsequent conflict waged by Filipinos
      against Spanish colonizers.`
    },
    {
      name: "Republika ng Katagalugan",
      description: `refers to the two revolutionary governments that fought Spain in
      the Philippine Revolution.`
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
