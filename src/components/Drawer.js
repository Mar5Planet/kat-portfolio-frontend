import { Drawer } from 'antd';
import React, {useState} from 'react';
import AboutPic from '../image/0.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
const AboutDrawer = (props) => {
    const [placement, ] = useState('bottom')

  const showDrawer = () => {
    props.setVisible(true);
  };

  const onClose = () => {
    props.setVisible(false);
  };


    return (
      <>
          <div onClick={showDrawer} className="arrow"></div>
        <Drawer
          title="About Me"
          placement={placement}
          closable={false}
          onClose={onClose}
          visible={props.visible}
          key={placement}
        >
            <div className="about-text">
              <a  href="https://www.linkedin.com/in/katarina-miles/" >
            <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="mailto:katarinamiles77@gmail.com" >
            <FontAwesomeIcon icon={faEnvelopeSquare} />
              </a>
            
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

