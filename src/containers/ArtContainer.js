import React from 'react';
import Card from '../components/Card'
import Row from 'react-bootstrap/Row' 
import Container from 'react-bootstrap/Container' 

function ArtContainer(props) {

    const renderContent = () => {
        return props.content.map(cont => <Card content={cont}/>)
    }
    return (
        <>
        <h1>Art Container</h1>
        <Container>
            <Row>
        {renderContent()}

            </Row>
        </Container>
        </>

    )
}
export default ArtContainer;