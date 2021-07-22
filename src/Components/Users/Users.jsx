import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Users.module.css";

const Users = (props) => {

  return (
    <div className={classes.wrp}>
      <div className={classes.wrapper}>
        {props.data.map((el) => (
          <div className={classes.userWrap}  key={el.id}>
            <NavLink to={`/user/${el.id}` }>
            <img src={el.avatar_url} />
            </NavLink>
            <div>{el.login}</div>
          </div>
        ))}
      </div>
      <div className={classes.pagination}>
        {props.Pagination(props.pageSaze,props.total_count)
        .map((el)=>{
          return el.map((num)=>{
            return <button onClick={()=>props.currentPageChangeClick(num)}>{num}</button>
          })
          
         })}
      </div>
    </div>
  );
};

export default Users;
