import React from 'react';
import Card from '../components/Card';
import Row from 'react-bootstrap/Row' 
import Container from 'react-bootstrap/Container' 

function ExhibitContainer(props) {

    const renderContent = () => {
        return props.content.map(cont => <Card setCurrentContent={props.setCurrentContent} key={cont.id} content={cont}/>)
    }
    
    return (
        <div id="exhibition" className="display-container">
        <h1>Exhibition</h1>
        <Container>
            <Row>
        {renderContent()}

            </Row>
        </Container>
        </div>
    )
}
export default ExhibitContainer;