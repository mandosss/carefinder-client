import React, {Component} from 'react'
import {ListGroup, ListGroupItem, Grid, Row, Col, Button, 
    Form, FormGroup, FormControl, Table} from 'react-bootstrap'
import {typeRequestArr} from './requests'
import axios from 'axios'

export default class Hospitals extends Component{
    constructor(props, context){
        super(props, context)
        this.state = {
            isActive: false,
            value: '',
            trueValue: null,
            iniRoute: 'http://localhost:3001/api/hospitals',
            allData: null,
            pathing: '',
            valueOne: '',
            valueTwo: '',
            valueThree: '',
        }
    }   

    componentDidMount(){            
        if(this.state.allData !== null){
            //this.setState({isActive: true})
            this.forceUpdate()
        }
    }

    onClickButton(idInn,inValue){
        const tempData = typeRequestArr.filter(elem =>  elem.key === idInn)
        if(tempData[0].count === 1){
            var pathing = (this.state.iniRoute + tempData[0].request + inValue)
            //setTypeOfRequest(pathing)
            this.getterOfDatas(pathing)   
        }
        else if(tempData[0].count === 2){
            var parameters = inValue.split(" ")
            var pathing = (this.state.iniRoute + tempData[0].request +parameters[0]+'/'+parameters[1])
            //setTypeOfRequest(pathing)
            this.getterOfDatas(pathing)
        }
        else{ 
            var parameters = inValue.split(" ")
            var pathing = (this.state.iniRoute + tempData[0].request +parameters[0]+'/'+parameters[1] + '/' + parameters[2])
            //setTypeOfRequest(pathing)
            this.getterOfDatas(pathing)
        }
    }

    onClickShowData(){
        this.setState({isActive: true})
    }

    onClickList(idIn){
        this.setState({idIn})
    }

    //makes the http request
    getterOfDatas(pathinIN){
        var headers = {
            'Content-Type': 'application/json',
            'X-API-KEY': 'Vc2ws1NNDW8qfR7IQ3rpHQOfoE50gVpEtOrYtisu' //admin
        }
        axios.get(pathinIN, {headers: headers})
        .then(res => {
            this.setState({allData: res.data})
            this.setState({isActive: true})
        })
        .catch(err => {console.log(err)})     
    }


    handleChange(e) {
        if(e.target.value !== null){
            this.setState({ value: e.target.value})
        }
        else if(e.target.value ===  null){
            this.setState({value: '/'})
        }
    }

    render(){
        if(!this.state.isActive){
        return(
            <div id='content'>
                <h1>
                    Hospital - Search
                </h1>
                <p > 
                    Select and fill (if any) any of the following options.
                </p>
                <Grid >
                    <Row>
                        <Col>
                            <ListGroup>
                                <ListGroupItem id='all'
                                    onClick={() => this.onClickList('all')}
                                    active={this.state.idIn === 'all'}
                                >
                                    <p align='center'>Find all hospitals</p>
                                </ListGroupItem>
                                <ListGroupItem id='id' 
                                    onClick={() => this.onClickList('id')}
                                    active={this.state.idIn === 'id'}
                                >                                                 
                                    <p align='center'>Find hospitals by ID</p>
                                    <Form id='formId' hidden={this.state.idIn !== 'id'}>
                                        <FormGroup>
                                            <FormControl
                                                type='text'
                                                value={this.state.value}
                                                placeholder="Enter ID"
                                                onChange={(e) => this.handleChange(e)}
                                            />
                                        </FormGroup>
                                    </Form>
                                </ListGroupItem>
                                <ListGroupItem id='city' 
                                    onClick={() => this.onClickList('city')}
                                    active={this.state.idIn === 'city'}
                                >
                                    <p align='center'>Find hospitals by city</p>
                                    <Form id='formCity' hidden={this.state.idIn !== 'city'}>
                                        <FormGroup>
                                            <FormControl
                                                type="text"
                                                value={this.state.value}
                                                placeholder="Enter City"
                                                onChange={(e) => this.handleChange(e)}
                                            />
                                        </FormGroup>
                                    </Form>
                                </ListGroupItem>
                                <ListGroupItem id='state' 
                                    onClick={() => this.onClickList('state')}
                                    active={this.state.idIn === 'state'}
                                >
                                    <p align='center'>Find hospitals by state</p>
                                    <Form id='formState' hidden={this.state.idIn !== 'state'}>
                                        <FormGroup>
                                            <FormControl
                                                type="text"
                                                value={this.state.value}
                                                placeholder="Enter state's abbreviation"
                                                onChange={(e) => this.handleChange(e)}
                                            />
                                        </FormGroup>
                                    </Form>
                                </ListGroupItem>
                                <ListGroupItem id='county'  
                                    onClick={() => this.onClickList('county')}
                                    active={this.state.idIn === 'county'}
                                >
                                    <p align='center'>Find hospitals by county</p>
                                    <Form id='formCounty' hidden={this.state.idIn !== 'county'}>
                                        <FormGroup>
                                            <FormControl
                                                type="text"
                                                value={this.state.value}
                                                placeholder="Enter county"
                                                onChange={(e) => this.handleChange(e)}
                                            />
                                        </FormGroup>
                                    </Form>
                                </ListGroupItem>
                                <ListGroupItem id='stateandcity' 
                                    onClick={() => this.onClickList('stateandcity')}
                                    active={this.state.idIn === 'stateandcity'}
                                >
                                    <p align='center'>Find hospitals by state and city</p>                            
                                    <Form id='formStateCity' hidden={this.state.idIn !== 'stateandcity'}>
                                        <FormGroup>
                                            <FormControl
                                                type="text"
                                                value={this.state.value}
                                                placeholder="Enter state's abbreviation, space, and then city"
                                                onChange={(e) => this.handleChange(e)}
                                            />
                                        </FormGroup>
                                    </Form>
                                </ListGroupItem>
                                <ListGroupItem id='name' 
                                    onClick={() => this.onClickList('name')}
                                    active={this.state.idIn === 'name'}
                                >
                                    <p align='center'>Find hospitals by name</p>
                                    <Form id='formName' hidden={this.state.idIn !== 'name'}>
                                        <FormGroup>
                                            <FormControl
                                                type="text"
                                                value={this.state.value}
                                                placeholder="Enter hospital's name"
                                                onChange={(e) => this.handleChange(e)}
                                            />
                                        </FormGroup>
                                    </Form>
                                </ListGroupItem>
                                <ListGroupItem id='type' 
                                    onClick={() => this.onClickList('type')}
                                    active={this.state.idIn === 'type'}
                                >
                                    <p align='center'>Find hospitals by type</p>
                                    <Form id='formType' hidden={this.state.idIn !== 'type'}>
                                        <FormGroup>
                                            <FormControl
                                                type="text"
                                                value={this.state.value}
                                                placeholder="Enter type of hospital(s)"
                                                onChange={(e) => this.handleChange(e)}
                                            />
                                        </FormGroup>
                                    </Form>
                                </ListGroupItem>
                                <ListGroupItem id='owner' 
                                    onClick={() => this.onClickList('owner')}
                                    active={this.state.idIn === 'owner'}
                                >
                                    <p align='center'>Find hospitals by ownership</p>
                                    <Form id='formOwner' hidden={this.state.idIn !== 'owner'}>
                                        <FormGroup>
                                            <FormControl
                                                type="text"
                                                value={this.state.value}
                                                placeholder= 'Enter the ownership for the hospital(s)'
                                                onChange={(e) => this.handleChange(e)}
                                            />
                                        </FormGroup>
                                    </Form>
                                </ListGroupItem>   
                                <ListGroupItem id='emergency' 
                                    onClick={() => this.onClickList('emergency')}
                                    active={this.state.idIn === 'emergency'}
                                >
                                    <p align='center'>Find hospitals by emergency</p>
                                    <Form id='formEmergency' hidden={this.state.idIn !== 'emergency'}>
                                        <FormGroup>
                                            <FormControl
                                                type="text"
                                                value={this.state.value}
                                                placeholder='Enter "true" or "false" to see emergency status'
                                                onChange={(e) => this.handleChange(e)}
                                            />
                                        </FormGroup>
                                    </Form>
                                </ListGroupItem> 
                                <ListGroupItem id='latlon' 
                                    onClick={() => this.onClickList('latlon')}
                                    active={this.state.idIn === 'latlon'}
                                >
                                    <p align='center'>Find hospitals by distance within latitude and longitude</p>
                                    <Form id='formLocation' hidden={this.state.idIn !== 'latlon'}>
                                        <FormGroup>
                                            <FormControl
                                                type="text"
                                                value={this.state.value}
                                                placeholder='Enter longitude, latitude, and desired radious in miles to see hospitals(e.g. "42.3455 -82.76673434 500")'
                                                onChange={(e) => this.handleChange(e)}
                                            />
                                        </FormGroup>
                                    </Form>
                                </ListGroupItem>                                                                       
                            </ListGroup>
                        </Col>
                    </Row>
                    <Button id='submit-button' onClick={()=> this.onClickButton(this.state.idIn ,this.state.value)} bsSize='large' bsStyle='primary' >
                        Submit                    
                    </Button>
                </Grid>
                </div>
                )}
                if(this.state.isActive){
                    console.log(this.state.allData)
                return (
                <div>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Provider Id</th>
                            <th>Hospital Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
                            <th>County</th>
                            <th>Phone Number</th>
                            <th>Hospital Type</th>
                            <th>Hospital Ownership</th>
                            <th>Emergency Service</th>
                            <th>Location Coodinates <br/> (longitude,latitude)</th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.state.allData['data'].map((elem, i) =>
                            
                                <tr key={i}>
                                <td>{elem.provider_id}</td>
                                <td>{elem.hospital_name}</td>
                                <td>{elem.address}</td>
                                <td>{elem.city}</td>
                                <td>{elem.state}</td>
                                <td>{elem.zip_code}</td>
                                <td>{elem.county_name}</td>
                                <td>{elem.phone_number}</td>
                                <td>{elem.hospital_type}</td>
                                <td>{elem.hospital_ownership}</td>
                                <td>{elem.emergency_services}</td>
                                <td>{elem.location.coordinates[0] + ', ' + elem.location.coordinates[1]}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                </div>
            
            )
                        }
    }
}