import React from 'react'
import styled from 'styled-components'

export default function Conclusion() {
  const conclusion = `The Cry of Rebellion was a momentous occasion for Filipinos because it signifies the defiance of Filipino people against the Spanish government. However, there has been much debate about where and when the cry occurred. Some accounts said it happened in Balintawak, a barrio in East Caloocan and some says it happened in a particular location named "Pugad Lawin." One Katipunan veteran and an eye witness of the actual event, named Dr. Pio Valenzuela said that it happened in Pugad Lawin on August 23, 1896, however, this contradicted previous information he provided, which stated that the Cry occurred in Kangkong Balintawak on August 26, 1896. 

  This controversy has caused Filipinos to be perplexed as to which of these places and dates are correct. The cry was previously known as "The Cry of Balintawak," which happened on August 26, 1896, before it was renamed in 1963 as "The Cry of Pugad Lawin" by late President Diosdado Macapagal and the date of the actual event is changed to August 23, 1896. The change in name and date is due to Pio Valenzuela's testimony in 1917,  that the cry occurred in Melchora Aquino's house on the road known as Daan Malalim in Pasong Tamo, also known as "Pacpac-Lawin," and in his memoir in 1920s, he stated that the cry occurred in the home of Melchora Aquino's son, Juan Ramos, in Pugad Lawin in which Teodoro Agoncillio, a prominent historian echoed Valenzuela's statement in 1956, that the cry happened in Pugad Lawin on August 23, 1896. They contended that the term "Balintawak" only refers to a general area, and not the exact location of the cry. On the contrary, the location Pugad Lawin, as stated by Pio Valenzuela in his memoir, cannot be found anywhere, as evidenced by locals, residents, and veterans at the time, who stated that they had never heard of a place called Pugad Lawin. This is further clarified by the fact that the name Pugad Lawin cannot be found on contemporary maps or records (Richardson, 2021). 
  
  Overall, based on the information gathered, the group concluded and believed that the cry occurred somewhere in Balintawak, because Balintawak, again, denotes a general Locality, which is why, based on the evidence presented and the fact that Pugad Lawin is an unknown location, it is more accurate to name the momentous event "The Cry of Balintawak." With regards to the exact date as to when the cry happened, as stated by an article written by Richardson (2021), "The cry" actually refers to three distinct but related events, which are the decision to revolt and the tearing of cedulas, which occurred between August 23-24, 1896, and the first encounter of the Katipunan against the Spanish forces, which occurred on August 26, 1896. Nevertheless, the controversy surrounding the cry of rebellion will never prevent Filipinos from commemorating the historic event that changed their lives. This event ushered in a new era for Filipinos who had suffered for more than three centuries as a result of Spanish colonization; it was the moment when the pain that Filipinos bore could no longer be suppressed, and the cry for freedom dominated in every Filipino's heart. It was then that Filipinos claimed ownership of their homeland, the Philippines.`


  return (
    <Container>
        {
          conclusion.split("\n").map((paragraph) => {
            return (
              <p>{paragraph}</p>
            )
          })
        }
    </Container>
  )
}


const Container = styled.div`
  overflow-y: scroll;
  height: 100%;
  border-radius: 1em;
  padding: 0em 10em;
  line-height: 2em;
  font-size: 1.2em;
`;