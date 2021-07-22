import React  from 'react';
import Profile from '../Components/Profile/Profile';
import {connect} from 'react-redux';
import { withRouter } from "react-router";
import {getSinglUsersRequest} from "../redux/actionCreator/usersActionCreator"



class ProfileContainer extends React.Component{
    constructor(props){
        super(props)
    }

componentDidMount(){
    const id = this.props.match.params.id;
    if(id){
        this.props.getSinglUsers(id)
    }
}

    render(){
     
        console.log(this.props.singleUserData,666666666);
    
        return <div>
            <Profile {...this.props}/>
        </div>
    }
}

let mapStateToProps = (state)=>{
    return {
        singleUserData:state.usersPage.singleUserData,
    }
  }

  let mapDispatchToProps= (dispatch)=>{
    return{
        getSinglUsers: (id) => {
          dispatch(getSinglUsersRequest(id))
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ProfileContainer))