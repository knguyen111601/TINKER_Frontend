import {useState, useContext} from "react"
import {useNavigate, Link} from "react-router-dom"

const Signup = (props) =>{
    
    const navigate = useNavigate()
    const url = "https://pcbuilder-project4-backend.herokuapp.com/"
    
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
        fetch(url + "auth" + "/signup", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
        .then ((response)=> response.json())
        .then((data)=>{
            console.log(data)
            setForm({
                username: "",
                password: ""
            })
            navigate("/login")
        })
    }
    
    const signupForm = <form onSubmit={handleSubmit} class="signupForm">
        <img className="logo" src="https://i.imgur.com/f6oTw7n.png"/>
        <h2 className="companyName" style={{color:"black"}}>T I N K E R</h2>
        <input type="text" name="username" value={form.username} placeholder="Username" onChange={handleChange}/>
        <input type="password" name="password" value={form.password} placeholder="Password" onChange={handleChange}/>
    <input className="submit" type="submit" value="Signup"/>
    </form>
    
    
    
    return <div className="login">
        {signupForm}
        <Link to="/login">
            <button className="already">Already have an account? Login</button>
        </Link>
    </div>
}

export default Signup