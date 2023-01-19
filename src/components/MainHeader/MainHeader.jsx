import Navigation from './Navigation';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #741188;
  padding: 0 2rem;
`
const HeaderText = styled.h1`
    color: white;
`

const MainHeader = (props) => {

  return (
    <Header>
      <HeaderText>A Typical Page</HeaderText>
      {props.isAuthenticated && <Navigation showTimerHandler={props.showTimerHandler} showUsersHandler={props.showUsersHandler} onLogout={props.onLogout} />}
    </Header>
  );
};

export default MainHeader;
