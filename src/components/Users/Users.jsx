import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../UI/Card/Card";

const Users = () => {
  const [users, setUsers] = useState([]);
  
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Card>
      <UsersList>
        {users.map((user) => (
          <UsersItem key={user.id}>
            <h1 style={{color: 'darkgreen'}}>{user.id}</h1>
            <ItemName>Name: {user.name}</ItemName>
            <ItemUserName>UserName: {user.username}</ItemUserName>
            <ItemEmail>Email: {user.email}</ItemEmail>
            <ItemPhone>Phone: {user.phone}</ItemPhone>
          </UsersItem>
        ))}
      </UsersList>
      </Card>
  );
};

export default Users;

const UsersList = styled.ul`
  width: 100% ;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 5px;
  text-align: center;
`;
const UsersItem = styled.li`
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 80%; 
  border: 2px solid ;
`;
const ItemName = styled.p`
  color: #db3131;
  font-size: 20px;
  font-weight: bold;
`;
const ItemUserName = styled.p`
  color: #1c1fcd;
  font-size: 20px;
  border-bottom: 3px solid;
  font-weight: bold;
  padding: 5px;
`;
const ItemEmail = styled.p`
  color: #0c02a0;
  font-size: 20px;
  font-weight: bold;

`;
const ItemPhone = styled.p`
  color: #d60850;
  font-size: 20px; 
  font-weight: bold;

`