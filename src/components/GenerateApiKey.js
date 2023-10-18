import React, {Component} from 'react'
import axios from 'axios'

export default class GenerateApiKey extends Component{
    constructor(props, context){
        super(props, context)
        this.state = {
            iniRoute: 'http://localhost:3001/api/apikeys/key',
            allData: ''
        }
    }

    componentWillMount(){
        this.getterOfDatas()
    }

    getterOfDatas(){
        var headers = {
            'Content-Type': 'application/json',
            'X-API-KEY': 'Vc2ws1NNDW8qfR7IQ3rpHQOfoE50gVpEtOrYtisu' //admin
        }
        axios.get(this.state.iniRoute, {headers: headers})
        .then(res => {
            this.setState({allData: res.data})
        })
        .catch(err => {console.log(err)})     
    }

    render(){
        console.log(this.state.allData)
        return(
            <div>
                <p> 
                    The following value is your APIKEY. <br/>
                    Keep it save!! Input your apikey to the "Verify APIKEY"
                </p>
                <p>
                    {this.state.allData.data}
                </p>
            </div>
        )
    }
}