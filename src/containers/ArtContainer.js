import React from 'react';
import Card from '../components/Card'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
function ArtContainer(props) {

    const renderContent = () => {
        return props.content.map(cont => <Card setCurrentContent={props.setCurrentContent} key={cont.id} content={cont}/>)
    }
    return (
        <div id="art" className="display-container">
        <h1>Art + Design</h1>
        {/* {props.loggedIn? <button>+</button> : ''} */}
        <Container>
            <Row>
        {renderContent()}
            </Row>
        </Container>
        </div>

    )
}
export default ArtContainer;