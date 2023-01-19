import React, {  useEffect, useState  } from 'react';
import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';
import Timer from './components/Timer/Timer';
import Users from './components/Users/Users';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isShowUser, setShowUsers] = useState(false)
  const [showTimer,setShowTimer] = useState(false)

  const showUsersHandler = () => {
    setShowUsers(true)
    setShowTimer(false)  
  }


  const showTimerHandler = () =>{
      setShowTimer(true)
      setShowUsers(false)
  }

  useEffect(()=>{
    const result = localStorage.getItem("isLoggedIn")
    setIsLoggedIn(!!result)
  },[])


  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const first = isLoggedIn && isShowUser
  const second = showTimer && isLoggedIn
  const third = !showTimer && !isShowUser && isLoggedIn


  return (
    <React.Fragment>
       <MainHeader showTimerHandler={showTimerHandler} showUsersHandler={showUsersHandler}  isAuthenticated={isLoggedIn} onLogout={logoutHandler}/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {third && <Users/>}
        {first && <Users/>}
        {second && <Timer/>}
      </main>
    </React.Fragment>
  );
}

export default App;
