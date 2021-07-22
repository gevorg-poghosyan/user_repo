import React from 'react';
import Users from '../Components/Users/Users';
import {connect} from 'react-redux';
import { Pagination } from '../userService/Pagination';
import loader from './../images/loader.gif';
import {getUsersRequest} from "../redux/actionCreator/usersActionCreator";
import { withRouter } from "react-router";
import {getUrlParams} from "../utils/utils";


class UsersContainer extends React.Component{
    constructor(props) {
        super(props);
      }

      getUsersList(){
        const { search } = this.props.location;
        const params = getUrlParams(search)
        if(params.value){
          this.props.getUsers(params.value,params.page)
        }
        
      }
    
      componentDidMount(){
      this.getUsersList()
      }

      componentDidUpdate(prevProps){
      
        if (this.props?.location?.search !== prevProps?.location?.search){  
          this.getUsersList()
         }
      
      }

    render(){
        
        return  <>
             {this.props.isFetching ? <img src={loader}/> :          
              <Users 
                  data = {this.props.data}
                  total_count={this.props.total_count}
                  pageSaze={this.props.pageSaze}
                  Pagination={Pagination}
                  currentPage={this.props.currentPage}
                  currentPageChangeClick={this.currentPageChangeClick}
                /> }

                 </>
}
    }

    let mapStateToProps = (state)=>{
      return {
        data:state.usersPage.data,
        isFetching: state.usersPage.isFetching
            }
    }

    let mapDispatchToProps= (dispatch)=>{
      return{
        getUsers: (value,page) => {
          dispatch(getUsersRequest(value,page))
        }
    }
  }

    export default connect(mapStateToProps,mapDispatchToProps)(withRouter(UsersContainer))