import React, {useState, useEffect} from 'react';
import ExhibitContainer from './containers/ExhibitContainer';
import ArtContainer from './containers/ArtContainer';
import Navg from './components/Navg';
import TopSection from './components/Top';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const contentUrl = 'http://localhost:3000/contents/';

function App() {
  const [content, setContent] = useState([])
  const [artContent, setArtContent] = useState([])
  const [exhibitContent, setExhibitContent] = useState([])
  const fetchContent = () => {
    fetch(contentUrl).then(res => res.json()).then(data => {
      setContent(data)
      setArtContent(data.filter(cont => cont.category === "art"))
      setExhibitContent(data.filter(cont => cont.category === "exhibit"))
    })
  }



  useEffect(()=> {
    fetchContent()
  }, [])


  return (
    <>
    <Navg/>
    <TopSection />
    <ArtContainer content={artContent} />
    <ExhibitContainer content={exhibitContent} />
    <About />
    </>
  );
}

export default App;
