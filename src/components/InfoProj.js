import React, {Component} from 'react';
import {Media} from 'react-bootstrap';

export default class Footer extends Component{
    state = {}
 
    
    render(){
        return(
            <div>
                <Media> 
                    <Media.Body>
                        <Media.Heading>CareFinder: A Networked Application Project</Media.Heading>
                        <p>
                        This project, CareFinder, is focused on displaying
                            hospitals data provided by www.data.gov. This project
                            is part of the CSI 424 Networked Application class in the 
                            University of Wisconsin Parkside.
                        </p>
                    </Media.Body>
                </Media>
            </div>
        )
    }
}