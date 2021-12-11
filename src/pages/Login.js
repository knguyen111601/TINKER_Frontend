import {useState, useContext} from "react"
import {useNavigate} from "react-router-dom"
import { GlobalCtx } from "../App"

const Login = (props) =>{
    const {gState, setGState, user_id} = useContext(GlobalCtx)
    const {url} = gState
    const navigate = useNavigate()
    const [form, setForm] = useState({
        username: "",
        password: ""
    })    

    const handleChange = (event) =>{
        const newForm = {...form}
        newForm[event.target.name] = event.target.value
        setForm(newForm)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const {username, password} = form
        fetch(url + "auth" + "/login", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
        .then ((response)=> response.json())
        .then((data)=>{
            console.log(data)
            window.localStorage.setItem("user_id", JSON.stringify(data))
            setGState({...gState, user_id: data.id, username: data.username, pfp: data.pfp})
            setForm({
                username: "",
                password: ""
            })
            navigate("/")
        })
    }

    const loginForm = <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={form.username} placeholder="Username" onChange={handleChange}/>
        <input type="password" name="password" value={form.password} placeholder="Password" onChange={handleChange}/>
    <input type="submit" value="Login"/>
    </form>


    return <div>
        {loginForm}
    </div>
}

export default Login