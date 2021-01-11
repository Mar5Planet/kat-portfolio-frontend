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
          title="About Me"
          placement={placement}
          closable={false}
          onClose={onClose}
          visible={visible}
          key={placement}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla ipsum nunc, euismod eleifend mauris consectetur eget. Integer faucibus malesuada elit nec sodales. In in condimentum nunc. Mauris ac accumsan quam. Mauris quis erat ante. Nam dapibus mauris vitae nulla facilisis, a auctor orci egestas. Quisque neque mi, facilisis id dignissim a, tincidunt sed mauris. Quisque eu eros sit amet augue pretium gravida vitae in purus. Pellentesque rhoncus, risus et vehicula dapibus, lacus purus venenatis massa, non ultrices mauris ligula eget urna. Ut ultricies, orci ac mattis placerat, lacus arcu pulvinar enim, id bibendum purus lorem ut nulla. In elit orci, tempor eget tellus vel, vehicula auctor urna. Proin posuere ullamcorper bibendum. Donec vel malesuada ex, in bibendum est.</p>
        
        </Drawer>
      </>
    );

}
export default AboutDrawer;

