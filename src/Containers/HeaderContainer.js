import React from 'react';
import Header from '../Components/Header/Header';
import { withRouter } from "react-router";
import {getUrlParams} from '../utils/utils'



class HeaderContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : ""
         }

    }

    hendelInputChange = (e) => {
        this.setState({...this.state,value:e.target.value})
      } 

      componentDidMount(){
        const { search } = this.props.location;
        const params = getUrlParams(search)
        if(params?.value){
          this.setState({...this.state,value:params?.value})
        }
      }

    
      render(){
        return  <div>
              <Header hendelInputChange = {this.hendelInputChange}
                 value = {this.state.value}/>
                 </div>
                 }   
}


export default withRouter(HeaderContainer)

