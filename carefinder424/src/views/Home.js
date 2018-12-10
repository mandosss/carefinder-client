import React, {Component} from 'react';
import Footer from '../components/Footer';
import InfoProj from '../components/InfoProj';
import {Grid, Row, Col} from 'react-bootstrap';

export default class Home extends Component{
    state = {

    }
    render(){
        return(
            <div>
                <Grid >
                    <Row>
                        <Col>
                            <InfoProj/>
                        </Col>
                    </Row>
                </Grid>
                <Footer/>
            </div>
        );
    }
}