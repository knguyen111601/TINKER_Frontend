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

    const {url, user_id} = gState

    const [pcs, setPcs] = useState(null)

    const getPCs= async () =>{
        const response = await fetch(url + "pcs")
        const data = await response.json()
        console.log(data)
        setPcs(data)
    }

    useEffect(()=>{getPCs()}, [gState])

    return <Routes>
        <Route path="/" element={<Home pcs={pcs}/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/:id" element={<Show pcs={pcs}/>}/>
        <Route path="/create" element={<Create />}/>
    </Routes>
}
export default Main