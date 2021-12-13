import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalCtx } from '../App'
import {Link} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container"
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {FaBars} from "react-icons/fa"
import {BsFillPersonFill} from "react-icons/bs"
import {RiCpuLine} from "react-icons/ri"
import {BsWrench} from "react-icons/bs"

const Header = (props) =>{

  const {gState, setGState} = useContext(GlobalCtx)
  const {url, user_id} = gState

  const navigate = useNavigate()



  const logout = async () => {

    window.localStorage.removeItem("user_id")
    navigate("/")
    setGState({...gState, url: "https://pcbuilder-project4-backend.herokuapp.com/", user_id: null, username: null, pfp: null})
    await fetch(url + "auth" + "/logout", {
      method: "post"
    })
    window.location.reload()
  }

  const toCreate = () =>{
    if (user_id){
    navigate("/create")
    window.location.reload()
    window.scrollTo(0,0)
    } else {
        navigate("/signup")
        window.location.reload()
        window.scrollTo(0,0)
    }
}

// #1e2234

    return <>
<Navbar style={{backgroundColor: "#1e2234"}} expand={false}>
  <Container fluid>
    <Navbar.Brand href="/" style={{display: "flex", alignItems: "center"}}><img className="logo" src="https://i.imgur.com/f6oTw7n.png"/><h1 className="companyName">T I N K E R</h1></Navbar.Brand>
    <div className="headerButtonDiv">
    <button onClick={()=>{toCreate()}} className="headerButton"><BsWrench/></button>
    <button className="headerButton"><RiCpuLine/></button>
    <button className="headerButton"><BsFillPersonFill/></button>
    
    <Navbar.Toggle aria-controls="offcanvasNavbar" className="offcanvasNavbar" style={{border: "none"}}><FaBars className="sandwich"/></Navbar.Toggle>
    </div>
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Options</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link onClick={()=>{toCreate()}}>System Builder</Nav.Link>
          {user_id ? <Nav.Link onClick={logout}>Logout</Nav.Link> : <Nav.Link onClick={()=>{toCreate()}}>Signup</Nav.Link>}
          {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    </>
}

export default Header