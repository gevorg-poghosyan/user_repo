import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <div className={classes.header}>
        <div className = {classes.item}>
                <NavLink to = '/user' className = {classes.userLink}>Users</NavLink>
            </div>
            <div className = {classes.item}>
                <NavLink to = '/repo' className = {classes.repoLink}>Repos</NavLink>
            </div>
        <input
          className={classes.change}
          placeholder={"user name"}
          onChange={props.hendelInputChange}
          value={props.value}
        />
        <NavLink to={`user?value=${props.value}&page=1`}>
           <button
            className={classes.click}
           >
              search
           </button>
        </NavLink>
    
      </div>
    </header>
  );
};

export default Header;
