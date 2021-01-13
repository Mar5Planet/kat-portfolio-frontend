import { Drawer } from 'antd';
import React, {useState} from 'react';
import AboutPic from '../image/0.jpg';

const AboutDrawer = () => {
    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState('bottom')

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };


    return (
      <>
          <div onClick={showDrawer} className="arrow"></div>
        <Drawer
          title="About Me"
          placement={placement}
          closable={false}
          onClose={onClose}
          visible={visible}
          key={placement}
        >
            <div className="about-text">

            <h3>Hi, you can call me Kat. </h3>
            <p>  I’m an artist, designer, and creative based in New York, NY. </p>

          <p>
            Versed in an extensive range of creative and fabrication processes, I do a bit of everything: digital design, illustration, printmaking, woodworking—If I don’t already know the skill, I’m already excited to learn.   
            I’m dedicated to successfully telling meaningful stories in original ways, with the intention to reimagine the possibilities of visual expression and brand experience. A daydreamer by nature, I thrive in environments where work meets play. 
            </p>
            <br/>
            <p className="about-footer">Media & Journalism and Studio Art graduate from the University of North Carolina at Chapel Hill</p>
            </div>
            <img src={AboutPic} alt="about-me" />
        
        </Drawer>
      </>
    );

}
export default AboutDrawer;

