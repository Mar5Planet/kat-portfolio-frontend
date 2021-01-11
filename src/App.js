import React, {useState, useEffect} from 'react';
import ExhibitContainer from './containers/ExhibitContainer';
import ArtContainer from './containers/ArtContainer';
import Navg from './components/Navg';
import TopSection from './components/Top';
import Login from './components/Login';
import Content from './containers/ContentContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import AboutDrawer from './components/Drawer';
import 'antd/dist/antd.css'


const contentUrl = 'http://localhost:3000/contents/';
const imagesUrl = 'http://localhost:3000/images';
function App() {
  const [login, setLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [content, setContent] = useState([])
  const [artContent, setArtContent] = useState([])
  const [exhibitContent, setExhibitContent] = useState([])
  const [images, setImages] = useState([]);

  const fetchContent = () => {
    fetch(contentUrl).then(res => res.json()).then(data => {
      setContent(data)
      setArtContent(data.filter(cont => cont.category === "art"))
      setExhibitContent(data.filter(cont => cont.category === "exhibit"))
    })
  }

  const fetchImages = () => {
    fetch(imagesUrl).then(res => res.json()).then(data => {
      setImages(data)
    })  
  }

  const adminFetch = (username, password) => {
    const kat = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accetps': 'application/json'},
      body: JSON.stringify({username, password})
    }
    fetch('http://localhost:3000/admins/login', kat)
    .then(res => res.json())
    .then(data => {
      if (data.valid){
        setLogin(false);
        setLoggedIn(true);
        localStorage.setItem('valid', data.valid)
      }
    })
  }

  const detectKeyPress = () => {
    let map = {'k': false, 'm': false};
    document.addEventListener('keydown', e => {
      if (e.key in map) {
        map[e.key] =  true;
        if (map['k'] && map['m']) {
          setLogin(!login)
        }
    }
    })
  }
  
  useEffect(()=> {
    detectKeyPress()
    localStorage.clear()
    fetchContent()
    fetchImages()
  }, [])

  return (
    <>
    {login? <Login setLogin={setLogin} submitAdmin={adminFetch}/> : ''}
    <Navg/>
        <TopSection />
        <ArtContainer loggedIn={loggedIn} content={artContent} />
        <ExhibitContainer loggedIn={loggedIn} content={exhibitContent} />
        <AboutDrawer />
    </>
  );
}

export default App;
