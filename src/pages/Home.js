import { Link, useNavigate } from "react-router-dom"
import { GlobalCtx } from "../App"
import { useState, useEffect, useContext } from "react"
import {BsFillTrashFill, BsDot} from "react-icons/bs"
import PCCard from "../components/PCCard"
import PCCardPublic from "../components/PCPublic"
const Home = ({pcs}) =>{
    
    const navigate = useNavigate()
    const {gState} = useContext(GlobalCtx)
    const {username, url} = gState



    const [user, setUser] = useState(null)

    const getUser = () =>{
        setUser(username)
    }

    useEffect(()=>{
        getUser()
    })

    const [currentImg, setCurrentImg] = useState(0)

    const getPcs = () =>{
    return pcs.map((pc)=>{
        const pcs = pc
        if (pc.username == user){
        const cost = pc.cpu_price + pc.case_price + pc.motherboard_price + pc.ram_price + pc.gpu_price + pc.cooler_price + pc.psu_price + pc.storage_price + pc.secondstorage_price + pc.thirdstorage_price + pc.misc_price + pc.secondmisc_price + pc.thirdmisc_price

        const imgArr = [pc.case_img, pc.cpu_img, pc.gpu_img, pc.ram_img]

        return <div>
            <PCCard imgArr={imgArr} cost={cost} pc={pcs}/>
        </div>
    }})}

    const getPublicPcs = () =>{
        return pcs.map((pc)=>{
            const pcs = pc
            if (pc.username !== user && pc.public == true){
            const cost = pc.cpu_price + pc.case_price + pc.motherboard_price + pc.ram_price + pc.gpu_price + pc.cooler_price + pc.psu_price + pc.storage_price + pc.secondstorage_price + pc.thirdstorage_price + pc.misc_price + pc.secondmisc_price + pc.thirdmisc_price

            const imgArr = [pc.case_img, pc.cpu_img, pc.gpu_img, pc.ram_img]
            return <div>
                <PCCardPublic imgArr={imgArr} cost={cost} pc={pcs}/>
            </div>
        }})
    }

    // Take to create
    const toCreate = () =>{
        if (username){
        navigate("/create")
        window.scrollTo(0,0)
        } else {
            navigate("/signup")
            window.scrollTo(0,0)
        }
    }
    
    
    return <div>
        <div className="hero">
            <h1>TINKER</h1>
            <p>Build Your Imagination</p>
            <img src="https://i.imgur.com/TqfSG39.jpg"/>
        </div>  


<div className="mainSection">
    <h1 style={{fontSize:"1.5em"}}>Your Personal Builds</h1>
    <div style={{width: "100%", height: "2px", backgroundColor:"gray", marginBottom: "30px"}}></div>
    <div style={{display:"flex", marginBottom: "50px"}}>
        <div className="pcCard createNewButton" onClick={()=>{toCreate()}}>
            <h1>+</h1>
            <p>Create New PC</p>
        </div>

        <div style={{display: "flex", width:"100%", overflowX:"scroll", height: "430px"}}>
        {pcs ? getPcs() : null}
        </div>
    </div>
</div>

<div className="mainSection">
    <h1 style={{fontSize:"1.5em"}}>Community Builds</h1>
    <div style={{width: "100%", height: "2px", backgroundColor:"gray", marginBottom: "30px"}}></div>
    <div style={{display:"flex", marginBottom: "50px"}}>


        <div style={{display: "flex", width:"100%", overflowX:"scroll", height: "600px"}}>
        {pcs ? getPublicPcs() : null}
        </div>
    </div>
</div>
    </div>
}

export default Home