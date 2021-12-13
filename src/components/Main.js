import {Route, Routes} from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { GlobalCtx } from "../App"
import Home from "../pages/Home"
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import Show from "../pages/Show"
import Create from "../pages/Create"

const Main = (props) =>{

    const {gState} = useContext(GlobalCtx)

    const {url} = gState

    const username = window.localStorage.getItem("user_id")

    const [pcs, setPcs] = useState(null)

    const getPCs= async () =>{
        const response = await fetch(url + "pcs")
        const data = await response.json()
        console.log(data)
        setPcs(data)
    }

    useEffect(()=>{getPCs()}, [])

    if (username) {
    return <Routes>
        <Route path="/" element={<Home pcs={pcs}/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/:id" element={<Show pcs={pcs} getPCs={getPCs}/>}/>
        <Route path="/create" element={<Create getPCs={getPCs}/>}/> 
    </Routes>
    } else {
        return  <Routes>
        <Route path="/" element={<Home pcs={pcs}/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
    </Routes>
    }
}
export default Main