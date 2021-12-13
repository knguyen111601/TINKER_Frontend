import { createContext, useState, useEffect } from "react";
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"
export const GlobalCtx = createContext(null)



function App() {

  const [gState, setGState] = useState({url: "https://pcbuilder-project4-backend.herokuapp.com/", user_id: null, username: null, pfp: null})

// Checks if user is logged in

  useEffect(()=>{
    const user_id = JSON.parse(window.localStorage.getItem("user_id"))
    console.log(user_id)
    if (user_id){
      setGState({...gState, user_id: user_id.id, username: user_id.username, pfp: user_id.pfp})
    }
  }, [])

  return (
    <GlobalCtx.Provider value={{gState, setGState}}>
    <div className="App">
      <Header />
      {/* <Nav /> */}
      <Main />
    </div>
    </GlobalCtx.Provider>
  );
}

export default App;
