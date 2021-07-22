import React from 'react';
import styles from "./Profile.module.css"
import { useHistory } from "react-router-dom";


const Profile = (props) =>{
    console.log(props.singleUserData,884);
    const {avatar_url,login,name} = props.singleUserData;
    const history = useHistory()
    const handleBack = ()=>{
        history.goBack()
    }
    return (
        <div>
            <div>
              <img src={avatar_url}/>
              <p>{login}</p>
              <p>{name}</p>
            </div>
            <button onClick={handleBack}>back</button>
        </div>
       
    )
}

export default Profile