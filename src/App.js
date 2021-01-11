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
    {id: 1,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum leo urna, eu consectetur neque tempus in. Praesent lorem nisi, hendrerit vel risus vitae, mattis euismod purus. Aenean venenatis scelerisque tortor id dapibus. Morbi magna quam, mollis et tempus ut, fringilla at felis. Maecenas imperdiet dapibus tincidunt. Donec aliquet et nunc interdum dignissim. Aenean lobortis egestas lectus ut feugiat. Sed accumsan eu lacus vel gravida. Vivamus quis auctor enim. Aenean accumsan lorem non ligula sagittis laoreet. Nam laoreet fringilla dapibus. Nulla condimentum maximus nibh id vestibulum. Etiam iaculis neque at enim pulvinar, et maximus risus dapibus. In libero libero, molestie vel lorem sed, semper ultrices augue. Proin ac dapibus sem. Aenean eget odio nec ex vehicula tempor vel eu felis.',
    title: 'NYC Nature Poster',
    img: 'https://i.ibb.co/S6br4Jn/NYCcardlayout.png',
    },
    {id: 2,
      desc: 'Maecenas leo diam, luctus et risus sed, malesuada consequat dui. Phasellus iaculis mauris vitae purus hendrerit, eu ullamcorper quam maximus. Morbi ut lorem eu arcu consequat pulvinar. Nulla vestibulum vitae orci at semper. Cras tincidunt hendrerit mollis. Sed eu rutrum eros, non viverra libero. Fusce et imperdiet nulla, posuere congue mi. Suspendisse vitae massa eros. Nam aliquet finibus lacus sit amet egestas. Vivamus ut libero placerat leo tincidunt luctus at sed elit. Integer ullamcorper pharetra velit et pretium. Vivamus sagittis leo vitae turpis sodales tincidunt. Morbi euismod leo ac dui posuere, convallis volutpat nunc eleifend. Etiam at laoreet nunc. Mauris in augue tellus. Maecenas ex turpis, lacinia ut erat eget, hendrerit tincidunt quam.',
      title: 'NYC Nature Postcards',
      img: 'https://i.ibb.co/gSCmPZm/NYCPoster.png',
      },
      {id: 3,
        desc: 'Proin diam lacus, scelerisque a leo dictum, ultrices scelerisque purus. Vivamus et convallis neque. Vivamus tincidunt ultrices laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse placerat nunc orci, in venenatis orci ultrices ac. Sed eu viverra est. Nam dictum est lacus, tincidunt blandit nulla mollis hendrerit. Vestibulum fringilla eu turpis in tristique. Vestibulum dui turpis, egestas ut risus eu, gravida pellentesque tellus. Morbi sit amet lacus maximus nulla tristique mattis euismod eu dui. Suspendisse potenti.',
        title: 'Airavata poster design',
        img: 'https://i.ibb.co/f2ZKBrG/Airavata1.png',
        },
  ];

  const exhibitContent = [
    {id: 4,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum leo urna, eu consectetur neque tempus in. Praesent lorem nisi, hendrerit vel risus vitae, mattis euismod purus. Aenean venenatis scelerisque tortor id dapibus. Morbi magna quam, mollis et tempus ut, fringilla at felis. Maecenas imperdiet dapibus tincidunt. Donec aliquet et nunc interdum dignissim. Aenean lobortis egestas lectus ut feugiat. Sed accumsan eu lacus vel gravida. Vivamus quis auctor enim. Aenean accumsan lorem non ligula sagittis laoreet. Nam laoreet fringilla dapibus. Nulla condimentum maximus nibh id vestibulum. Etiam iaculis neque at enim pulvinar, et maximus risus dapibus. In libero libero, molestie vel lorem sed, semper ultrices augue. Proin ac dapibus sem. Aenean eget odio nec ex vehicula tempor vel eu felis.',
      title: 'Anthropologie In Store Display',
      img: 'https://i.ibb.co/CWykTFx/Anthro1.jpg',
      },
    {id: 5,
      desc: 'Maecenas leo diam, luctus et risus sed, malesuada consequat dui. Phasellus iaculis mauris vitae purus hendrerit, eu ullamcorper quam maximus. Morbi ut lorem eu arcu consequat pulvinar. Nulla vestibulum vitae orci at semper. Cras tincidunt hendrerit mollis. Sed eu rutrum eros, non viverra libero. Fusce et imperdiet nulla, posuere congue mi. Suspendisse vitae massa eros. Nam aliquet finibus lacus sit amet egestas. Vivamus ut libero placerat leo tincidunt luctus at sed elit. Integer ullamcorper pharetra velit et pretium. Vivamus sagittis leo vitae turpis sodales tincidunt. Morbi euismod leo ac dui posuere, convallis volutpat nunc eleifend. Etiam at laoreet nunc. Mauris in augue tellus. Maecenas ex turpis, lacinia ut erat eget, hendrerit tincidunt quam.',
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
