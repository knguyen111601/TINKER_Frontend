import {useState, useEffect, useContext} from "react"
import { GlobalCtx } from "../App"
import {BsPlus} from "react-icons/bs"

const Modal = ({thing, things, open, onClose}) =>{
    
    const {gState} = useContext(GlobalCtx)
    const {url} = gState



    const [items, setItems] = useState(null)
    
    const getItem = async () =>{
        const response = await fetch(url + things)
        const data = await response.json()
        setItems(data)
    }
    
    useEffect(()=>{getItem()})

    const [search, setSearch] = useState({search: ""})

    const handleChange = (event) => {
        let newSearch = {...search}
        newSearch[event.target.name] = event.target.value
        setSearch(newSearch)
    }

    const handleSubmit = () =>{

    }

    const img = "single" + "." + thing + "_img"
    const name =  "single" + "." + thing + "_name"
    const price = "single" + "." + thing + "_price"

    const listOfItems = () =>{
            return items.map((single)=>{

                // const filtered = () =>{
                //     for (let i=0; i<eval(name).toLowerCase().split("").length; i++) {
                //         return eval(name).toLowerCase().split("")[i] 
                //     }
                // }

                if (eval(name) != "blank" && search.search == "" || eval(name).split("").find((letter)=>letter == search.search) == search.search){
                return <div className="partsSelect">            
                    <img src={eval(img)}/>
                    <h1>{eval(name)}</h1>
                    <div style={{display:"flex", justifyContent:"center",width: "15%", justifyContent: "space-between"}}>
                    <h1>${eval(price)}</h1>
                    <button><BsPlus/></button>
                    </div>
                </div>
                } 
            })
    }



    const all = () => {
        let word = thing.split("")
        word[0] = word[0].toUpperCase()
        return word.join("")
    }

    if (!open) {
        return null
    } else {
    return <div>
         {items ? 
         <div className="itemListModal">
            <div className="itemList">
            <button onClick={onClose}>Close</button>
            <form>
                <input style={{color: "black"}} type="text" name="search" value={search.search} placeholder="Search" onChange={handleChange}/>
            </form>
            <h1 style={{textAlign: "center"}}>Choose a {all()}</h1>
            {listOfItems()} 
            </div>
         </div>
         : <hi>Loading...</hi>}
    </div>
    }
}

export default Modal