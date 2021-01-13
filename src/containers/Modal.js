import React, { useState } from 'react';
import { Modal} from 'antd';
import ImageCarousel from '../components/ImageCarousel';
const KatModal = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const images = [
      {
        id: 4,
        img: 'https://i.ibb.co/gSCmPZm/NYCPoster.png',
        contentId: 2
      },
      {
      id: 1,
      img: 'https://i.ibb.co/VVmdKBT/Screen-Shot-2021-01-10-at-11-01-35-PM.png',
      contentId: 2
    },
    {
      id: 3,
      img: 'https://i.ibb.co/f2ZKBrG/Airavata1.png',
      contentId: 3
    },
    {
      id: 2,
      img: 'https://i.ibb.co/qx3RDML/Screen-Shot-2021-01-10-at-9-50-03-PM.png',
      contentId: 3
    },
    {
      id: 18,
      img: 'https://i.ibb.co/S6br4Jn/NYCcardlayout.png',
      contentId: 1
    },
    {
      id: 5,
      img: 'https://i.ibb.co/vd0PD3x/empire2.png',
      contentId: 1
    },
    {
      id: 6,
      img: 'https://i.ibb.co/1sHbKgT/subway3.png',
      contentId: 1
    },
    {
      id: 7,
      img: 'https://i.ibb.co/WcVbrRN/vessel1.png',
      contentId: 1
    },
    {
      id: 12,
      img: 'https://i.ibb.co/CWykTFx/Anthro1.jpg',
      contentId: 4
    },
    {
      id: 8,
      img: 'https://i.ibb.co/6NfDtFJ/Anthro2.jpg',
      contentId: 4
    },
    {
      id: 9,
      img: 'https://i.ibb.co/BTjppC9/Anthro3.jpg',
      contentId: 4
    },
    {
      id: 10,
      img: 'https://i.ibb.co/hYdTz9Z/Anthro4.jpg',
      contentId: 4
    },
    {
      id: 11,
      img: 'https://i.ibb.co/RbsL3T6/Anthro5.jpg',
      contentId: 4
    },
    {
      id: 13,
      img: 'https://i.ibb.co/ZX4pDYc/Planet1.jpg',
      contentId: 5
    },
    {
      id: 14,
      img: 'https://i.ibb.co/B3KTwJ8/Planet2.jpg',
      contentId: 5
    },
    {
      id: 15,
      img: 'https://i.ibb.co/449MrJK/Planet3.jpg',
      contentId: 5
    },
    {
      id: 16,
      img: 'https://i.ibb.co/ftM388V/Planet4.jpg',
      contentId: 5
    },
    {
      id: 17,
      img: 'https://i.ibb.co/DKT33Q3/Planet5.jpg',
      contentId: 5
    },
   
    
    ];

    async function close() {
        await setIsModalVisible(false) 
        props.setContent('')
    }
    return (
      <>
        <Modal title={props.content.title} visible={isModalVisible} footer={null} onCancel={close}
        width={1000}>
          <ImageCarousel images={images.filter(img => img.contentId === props.content.id)}/>
        <p style={{margin: '5% 2%'}}>{props.content.desc}</p>

        </Modal>
      </>
    );
}

export default KatModal;