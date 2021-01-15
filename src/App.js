import React, {useState} from 'react';
import ExhibitContainer from './containers/ExhibitContainer';
import ArtContainer from './containers/ArtContainer';
import Navg from './components/Navg';
import TopSection from './components/Top';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Modal from './containers/Modal';
import AboutDrawer from './components/Drawer';
import 'antd/dist/antd.css'


// const contentUrl = 'http://localhost:3000/contents/';
// const imagesUrl = 'http://localhost:3000/images';
function App() {
  // const [login, setLogin] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);
  const [currentContent, setCurrentContent] = useState('');


  const artContent = [
    {id: 2,
      desc: '2020 quarantine provided a rare glimpse of a ghostly empty NYC. In the absence of people watching, I found myself drawn to the architecture and natural landscape of the city. Within the synergy of nature and our fabricated urban environment, I came to the understanding that the two are not strict binaries of each other. This illustrated poster reimagines iconic NYC landmarks as an integrated part of nature. The poster was drawn in Adobe Illustrator and designed to evoke a map-like look.  ',
      title: 'NYC Nature Poster',
      img: 'https://i.ibb.co/gSCmPZm/NYCPoster.png',
    },
    {id: 1,
      desc: 'A predecessor of the NYC Nature Poster, these postcard-size prints illustrate iconic New York City structures as part of nature. Designed in Adobe Illustrator, their graphic appearance emphasizes the resemblance between urban structures and natural forms. ',
      title: 'NYC Nature Postcards',
      img: 'https://i.ibb.co/S6br4Jn/NYCcardlayout.png',
    },

      {id: 3,
        desc: 'AIRAVATA is a Washington, DC based music producer. Using imagery important to the artist, this self titled poster captures the intrigue of anonymity and balanced nature of AIRAVATA’s sound. The design was composed in Adobe Illustrator and Photoshop, then screen printed by hand in 7 layers.  ',
        title: 'Airavata poster design',
        img: 'https://i.ibb.co/f2ZKBrG/Airavata1.png',
        },
  ];

  const exhibitContent = [
    {id: 4,
      desc: 'Working with the Anthropologie visual display team meant creating art installations from scratch to accentuate the store’s seasonal collections. This deconstructed wind chime idea involved fabricating multiple metal pieces that would suspend from the ceiling into the store’s inventory vignettes. Copper metal pieces were individually aged to create a harmonious assembly that would catch the light as the viewer moved around it. The surface patina created a color story for the surrounding clothing collection.',
      title: 'Anthropologie In Store Display',
      img: 'https://i.ibb.co/CWykTFx/Anthro1.jpg',
      },
    {id: 5,
      desc: 'The UNC Workroom FashionMash 2018-2019 Project “Fashion Good,” is a yearlong exploration of how fashion can bring positive change to the world. The project teamed up with brand partner Gucci to learn about initiatives in the industry. The first part of the project was the creation of a 2500 sq. ft. installation that focuses on sustainability. My team’s Planet Gucci concept used leftover fabrics to create an opening to the installation that visualized the worldwide impact of the textile industry. The abstract planet design was planned on a large grid. Frames were constructed, then the pattern was sewn and upholstered to have an abstracted, soft, furniture-like effect.',
      title: 'Planet Gucci',
      img: 'https://i.ibb.co/8svLZdP/Planet1.jpg',
    },

  ];
  // const fetchContent = () => {
  //   fetch(contentUrl).then(res => res.json()).then(data => {
  //     setContent(data)
  //     setArtContent(data.filter(cont => cont.category === "art"))
  //     setExhibitContent(data.filter(cont => cont.category === "exhibit"))
  //   })
  // }

  // const fetchImages = () => {
  //   fetch(imagesUrl).then(res => res.json()).then(data => {
  //     setImages(data)
  //   })  
  // }

  // const adminFetch = (username, password) => {
  //   const kat = {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json', 'Accetps': 'application/json'},
  //     body: JSON.stringify({username, password})
  //   }
  //   fetch('http://localhost:3000/admins/login', kat)
  //   .then(res => res.json())
  //   .then(data => {
  //     if (data.valid){
  //       setLogin(false);
  //       setLoggedIn(true);
  //       localStorage.setItem('valid', data.valid)
  //     }
  //   })
  // }

  // const detectKeyPress = () => {
  //   let map = {'k': false, 'm': false};
  //   document.addEventListener('keydown', e => {
  //     if (e.key in map) {
  //       map[e.key] =  true;
  //       if (map['k'] && map['m']) {
  //         setLogin(!login)
  //       }
  //   }
  //   })
  // }
  

  return (
    <>
    {currentContent? <Modal setContent={setCurrentContent} content={currentContent} /> : null}
    {/* {login? <Login setLogin={setLogin} submitAdmin={adminFetch}/> : ''} */}
    <Navg/>
        <TopSection />
        <ArtContainer setCurrentContent={setCurrentContent} content={artContent} />
        <ExhibitContainer setCurrentContent={setCurrentContent} content={exhibitContent} />
        <AboutDrawer />
    </>
  );
}

export default App;
