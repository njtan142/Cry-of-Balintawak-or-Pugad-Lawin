import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import TextTransition, { presets } from "react-text-transition";
import Characters from './tab-components/Characters';
import Details from './tab-components/Details';
import History from './tab-components/History';
import Revolts from './tab-components/Revolts';
import Event from './tab-components/Event';
import Controversies from './tab-components/Controversies';
import Conclusion from './tab-components/Conclusion';
import References from './tab-components/References';
import Credits from './tab-components/Credits';
import CharactersMusic from './musics/characters.mp3'
import DetailsMusic from './musics/details.mp3'
import HistoryMusic from './musics/history.mp3'
import RevoltsMusic from './musics/revolts.mp3'
import EventMusic from './musics/event.mp3'
import ControversiesMusic from './musics/controversies.mp3'
import ConclusionMusic from './musics/conclusion.mp3'
import ReferencesMusic from './musics/references.mp3'
import CreditsMusic from './musics/credits.mp3'


export default function App() {
  const charactersRef = useRef();
  const detailsRef = useRef();
  const historyRef = useRef();
  const revoltsRef = useRef();
  const eventRef = useRef();
  const controversiesRef = useRef();
  const conclusionRef = useRef();
  const referencesRef = useRef();
  const creditsRef = useRef();

  const [titleName, setTitleName] = useState(" Balintawak");
  const [selectedMenu, setSelectedMenu] = useState(charactersRef);
  const [menuToRender, setmenuToRender] = useState();
  const [charactersAudio, setCharactersAudio] = useState(new Audio(CharactersMusic))
  const [detailsAudio, setdetailsAudio] = useState(new Audio(DetailsMusic))
  const [historyAudio, sethistoryAudio] = useState(new Audio(HistoryMusic))
  const [revoltsAudio, setrevoltsAudio] = useState(new Audio(RevoltsMusic))
  const [eventAudio, seteventAudio] = useState(new Audio(EventMusic))
  const [controversiesAudio, setControversiesAudio] = useState(new Audio(ControversiesMusic))
  const [conclusionAudio, setConclusionAudio] = useState(new Audio(ConclusionMusic  ))
  const [referencesAudio, setReferencesAudio] = useState(new Audio(ReferencesMusic  ))
  const [creditsAudio, setCreditsAudio] = useState(new Audio(CreditsMusic  ))

  charactersAudio.loop = true;
  detailsAudio.loop = true;
  historyAudio.loop = true;
  revoltsAudio.loop = true;
  eventAudio.loop = true;
  controversiesAudio.loop = true;
  conclusionAudio.loop = true;
  referencesAudio.loop = true;
  creditsAudio.loop = true;


  function changeMenu(menuRef) {
    selectedMenu.current.classList.remove("menu_selected");
    setSelectedMenu(menuRef);
  }

  useEffect(() => {
    function menuToRenderLogic() {
      switch (selectedMenu) {
        case charactersRef:
          setmenuToRender(<Characters />);
          detailsAudio.pause();
          detailsAudio.currentTime = 0;
          historyAudio.pause();
          historyAudio.currentTime = 0;
          eventAudio.pause();
          eventAudio.currentTime = 0;
          revoltsAudio.pause();
          revoltsAudio.currentTime = 0;
          controversiesAudio.pause();
          controversiesAudio.currentTime = 0;
          referencesAudio.pause();
          referencesAudio.currentTime = 0;
          conclusionAudio.pause();
          conclusionAudio.currentTime = 0;
          creditsAudio.pause();
          creditsAudio.currentTime = 0;

          charactersAudio.play();
          break;
        case detailsRef:
          setmenuToRender(<Details />);
          charactersAudio.pause();
          charactersAudio.currentTime = 0;
          historyAudio.pause();
          historyAudio.currentTime = 0;
          eventAudio.pause();
          eventAudio.currentTime = 0;
          revoltsAudio.pause();
          revoltsAudio.currentTime = 0;
          controversiesAudio.pause();
          controversiesAudio.currentTime = 0;
          referencesAudio.pause();
          referencesAudio.currentTime = 0;
          conclusionAudio.pause();
          conclusionAudio.currentTime = 0;
          creditsAudio.pause();
          creditsAudio.currentTime = 0;

          detailsAudio.play();
          break;
        case historyRef:
          setmenuToRender(<History />);
          detailsAudio.pause();
          detailsAudio.currentTime = 0;
          charactersAudio.pause();
          charactersAudio.currentTime = 0;
          eventAudio.pause();
          eventAudio.currentTime = 0;
          revoltsAudio.pause();
          revoltsAudio.currentTime = 0;
          controversiesAudio.pause();
          controversiesAudio.currentTime = 0;
          referencesAudio.pause();
          referencesAudio.currentTime = 0;
          conclusionAudio.pause();
          conclusionAudio.currentTime = 0;
          creditsAudio.pause();
          creditsAudio.currentTime = 0;

          historyAudio.play();
          break;
        case revoltsRef:
          setmenuToRender(<Revolts />);
          detailsAudio.pause();
          detailsAudio.currentTime = 0;
          historyAudio.pause();
          historyAudio.currentTime = 0;
          eventAudio.pause();
          eventAudio.currentTime = 0;
          charactersAudio.pause();
          charactersAudio.currentTime = 0;
          controversiesAudio.pause();
          controversiesAudio.currentTime = 0;
          referencesAudio.pause();
          referencesAudio.currentTime = 0;
          conclusionAudio.pause();
          conclusionAudio.currentTime = 0;
          creditsAudio.pause();
          creditsAudio.currentTime = 0;

          revoltsAudio.play();
          break;
        case eventRef:
          setmenuToRender(<Event />);
          detailsAudio.pause();
          detailsAudio.currentTime = 0;
          historyAudio.pause();
          historyAudio.currentTime = 0;
          charactersAudio.pause();
          charactersAudio.currentTime = 0;
          revoltsAudio.pause();
          revoltsAudio.currentTime = 0;
          controversiesAudio.pause();
          controversiesAudio.currentTime = 0;
          referencesAudio.pause();
          referencesAudio.currentTime = 0;
          conclusionAudio.pause();
          conclusionAudio.currentTime = 0;
          creditsAudio.pause();
          creditsAudio.currentTime = 0;

          eventAudio.play();
          break;
        case controversiesRef:
          setmenuToRender(<Controversies />);
          detailsAudio.pause();
          detailsAudio.currentTime = 0;
          historyAudio.pause();
          historyAudio.currentTime = 0;
          eventAudio.pause();
          eventAudio.currentTime = 0;
          revoltsAudio.pause();
          revoltsAudio.currentTime = 0;
          charactersAudio.pause();
          charactersAudio.currentTime = 0;
          referencesAudio.pause();
          referencesAudio.currentTime = 0;
          conclusionAudio.pause();
          conclusionAudio.currentTime = 0;
          creditsAudio.pause();
          creditsAudio.currentTime = 0;

          controversiesAudio.play();
          break;
        case conclusionRef:
          setmenuToRender(<Conclusion />);
          detailsAudio.pause();
          detailsAudio.currentTime = 0;
          historyAudio.pause();
          historyAudio.currentTime = 0;
          eventAudio.pause();
          eventAudio.currentTime = 0;
          revoltsAudio.pause();
          revoltsAudio.currentTime = 0;
          controversiesAudio.pause();
          controversiesAudio.currentTime = 0;
          referencesAudio.pause();
          referencesAudio.currentTime = 0;
          charactersAudio.pause();
          charactersAudio.currentTime = 0;
          creditsAudio.pause();
          creditsAudio.currentTime = 0;

          conclusionAudio.play();
          break;
        case referencesRef:
          setmenuToRender(<References />);
          detailsAudio.pause();
          detailsAudio.currentTime = 0;
          historyAudio.pause();
          historyAudio.currentTime = 0;
          eventAudio.pause();
          eventAudio.currentTime = 0;
          revoltsAudio.pause();
          revoltsAudio.currentTime = 0;
          controversiesAudio.pause();
          controversiesAudio.currentTime = 0;
          charactersAudio.pause();
          charactersAudio.currentTime = 0;
          conclusionAudio.pause();
          conclusionAudio.currentTime = 0;
          creditsAudio.pause();
          creditsAudio.currentTime = 0;

          referencesAudio.play();
          break;
        case creditsRef:
          setmenuToRender(<Credits />);
          detailsAudio.pause();
          detailsAudio.currentTime = 0;
          historyAudio.pause();
          historyAudio.currentTime = 0;
          eventAudio.pause();
          eventAudio.currentTime = 0;
          revoltsAudio.pause();
          revoltsAudio.currentTime = 0;
          controversiesAudio.pause();
          controversiesAudio.currentTime = 0;
          referencesAudio.pause();
          referencesAudio.currentTime = 0;
          conclusionAudio.pause();
          conclusionAudio.currentTime = 0;
          charactersAudio.pause();
          charactersAudio.currentTime = 0;

          creditsAudio.play();
          break;
        default:
          return;
      }
    }
    selectedMenu.current.classList.add("menu_selected");
    menuToRenderLogic();
  }, [selectedMenu]);

  function changeText(event) {
    event.preventDefault();

    if (event.target !== event.currentTarget) {
      console.log("changing")
      setTitleName(titleName === "Balintawak" ? "Pugad Lawin" : "Balintawak")
    }
  }

  return (
    <Container>
      <Title>The Cry of
        <Hover
          onClick={changeText}>
          <TextTransition springConfig={presets.molasses}>
            &nbsp;
            {titleName}
          </TextTransition>
        </Hover>
      </Title>
      <Content>
        <Navigations>
          <Navigation onClick={() => { changeMenu(charactersRef) }} ref={charactersRef}>Characters</Navigation>
          <Navigation onClick={() => { changeMenu(detailsRef) }} ref={detailsRef}>Details</Navigation>
          <Navigation onClick={() => { changeMenu(historyRef) }} ref={historyRef}>History</Navigation>
          <Navigation onClick={() => { changeMenu(revoltsRef) }} ref={revoltsRef}>Revolts</Navigation>
          <Navigation onClick={() => { changeMenu(eventRef) }} ref={eventRef}>Event</Navigation>
          <Navigation onClick={() => { changeMenu(controversiesRef) }} ref={controversiesRef}>Controversies</Navigation>
          <Navigation onClick={() => { changeMenu(conclusionRef) }} ref={conclusionRef}>Conclusion</Navigation>
          <Navigation onClick={() => { changeMenu(referencesRef) }} ref={referencesRef}>References</Navigation>
          <Navigation onClick={() => { changeMenu(creditsRef) }} ref={creditsRef}>Credits</Navigation>
        </Navigations>
        <hr />
        <Tab>
          {menuToRender && menuToRender}
        </Tab>
      </Content>
    </Container>
  );
}

const Container = styled.div`

`;
const Title = styled.h1`
  transition: 1s;
  display: flex;
  flex-direction: column;
  font-size: 3em;
  justify-content:center ;
  align-items: center;
  letter-spacing: 0.3em;

`;
const Hover = styled.span`
  cursor: pointer;
  div{
    text-align: center;
  }
`;

const Content = styled.div`
  height: 75vh;
  margin: 1em 2em;
  overflow: hidden;

  hr{
    margin: 0;
  }

  border-radius: 29px;
  background: #f1f1f1;
  box-shadow:  7px 7px 14px #d6d6d6,
              -7px -7px 14px #ffffff;
`;

const Navigations = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Navigation = styled.button`
  padding: 1em;
  font-weight: 600;
  font-size: 1.2em;
  background: none;
  border: none;
  transition: all 1s;
  border-bottom: 3px solid #00000000;
`;

const Tab = styled.div`
  margin: 1em;
  height: 85%;
  border-radius: 29px;
  background: #f1f1f1;
  box-shadow: inset 7px 7px 14px #d6d6d6,
              inset -7px -7px 14px #ffffff;
`;