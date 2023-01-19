import React from "react";
import styled from "styled-components";

const NavigationList = styled.ul`
 list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`
const NavigationItem = styled.li`
  margin: 0;
  margin-left: 2rem;
`

const NavigationButton = styled.button`
  font: inherit;
  background: #dd0db0;
  border: 1px solid #dd0db0;
  padding: 0.5rem 1.5rem;
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border-radius: 20px;

  &:focus {
  outline: none;
}
&:hover,
&:active {
  color: #f3cafb;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
}
`

const Navigation = (props) => {
  return (
    <nav >
        <NavigationList>
         <NavigationItem>
          <NavigationButton onClick={props.showTimerHandler}>Timer</NavigationButton>
        </NavigationItem>
        <NavigationItem>
          <NavigationButton onClick={props.showUsersHandler}>Users</NavigationButton>
        </NavigationItem>
        <NavigationItem>
          <NavigationButton onClick={props.onLogout}>Logout</NavigationButton>
        </NavigationItem>
        </NavigationList>
    </nav>
  );
};

export default Navigation;
