import { Link, useNavigate } from "react-router-dom"
import { GlobalCtx } from "../App"
import { useState, useEffect, useContext } from "react"

const Home = ({pcs}) =>{
    
    const navigate = useNavigate()
    const {gState} = useContext(GlobalCtx)
    const {username} = gState



    const [user, setUser] = useState(null)

    const getUser = () =>{
        setUser(username)
    }

    useEffect(()=>{
        getUser()
    })

    const getPcs = () =>{
    return pcs.map((pc)=>{
        if (pc.username == user){
        return <Link to={`/${pc.id}`}>
        <div>
            <h1>{pc.username}</h1>
            <h1>{pc.pc_name}</h1>
            <h1>{pc.cpu_name}</h1>
            <img src={pc.cpu_img}/>
            <img src={pc.gpu_img}/>
        </div>
        </Link>
    }})}

    // Take to create
    const toCreate = () =>{
        navigate("/create")
    }
    
    
    return <div style={{width: "80%", margin: "auto"}}>
        <h1>TINKER</h1>
        <p>Build your PC</p>

        <div className="createNewButton" onClick={()=>{toCreate()}}>
            <h1>+</h1>
            <p>Create New PC</p>
        </div>


        <div>
        {pcs ? getPcs() : null}
        </div>
    </div>
}

export default Home