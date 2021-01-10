import { Drawer } from 'antd';
import React, {useState} from 'react';

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
          title="Basic Drawer"
          placement={placement}
          closable={false}
          onClose={onClose}
          visible={visible}
          key={placement}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </>
    );

}
export default AboutDrawer;

