import { Link, useNavigate } from "react-router-dom"
import { GlobalCtx } from "../App"
import { useState, useEffect, useContext } from "react"
import {BsFillTrashFill, BsDot} from "react-icons/bs"


const PCCardPublic = ({imgArr, cost, pc}) =>{
    const navigate = useNavigate()
    const {gState} = useContext(GlobalCtx)
    const {username, url} = gState

    const [currentImg, setCurrentImg] = useState(0)
    
    return <div className="pcCard">
    <h1>{pc.pc_name}</h1>
    <div className="pcCardImgs">
        <img className="pcCardCase" src={imgArr[currentImg]}/>

        <div className="imgButtonDiv">
        <button className="imgButton" onClick={()=>{setCurrentImg(0)}}><BsDot/></button>
        <button className="imgButton" onClick={()=>{setCurrentImg(1)}}><BsDot/></button>
        <button className="imgButton" onClick={()=>{setCurrentImg(2)}}><BsDot/></button>
        <button className="imgButton" onClick={()=>{setCurrentImg(3)}}><BsDot/></button>
        </div>

    </div>

<div className="costPrice">
    <h1>${cost}</h1>
    <button className="view" onClick={()=>navigate(`/${pc.id}`)}>View</button>
</div>
</div>
}

export default PCCardPublic