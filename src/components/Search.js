// import React, {Component} from 'react';
// import {pathingForEXTRA} from './requests'
// import axios from 'axios'

// export default class Search extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             iniRoute: 'http://localhost:3001/api/hospitals',
//             allData: null,
//             pathing: ''
//         }
//     }

//     componentDidMount(){
//         console.log(pathingForEXTRA)
//         axios.get(pathingForEXTRA)
//         .then(res => {
//             console.log(res.status)
//             this.setState({allData: res.data});
//         })
//         .catch(err => {console.log(err)})     
//     }

//     render(){
//         return(
//             <div>
//                 <p> 
//                     Something about search results.
//                 </p>
//             </div>
//         )
//     }
// }