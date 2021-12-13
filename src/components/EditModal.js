import {useState, useEffect, useContext} from "react"
import { GlobalCtx } from "../App"
import {BsPlus} from "react-icons/bs"

const EditModal = ({open, setModal, setModalItems, thing, things, setForm, form}) => {

    const {gState} = useContext(GlobalCtx)
    const {url} = gState

    
    const [items, setItems] = useState(null)

    const getItem = async () =>{
        const response = await fetch(url + things, {
            "Accept": "application/json"
        })
        const data = await response.json()
        setItems(data)
    }
    
    useEffect(()=>{
        if (open){
        getItem()
        }
    }, [open])

    const onClose = ()=> {
        setModal(false)
        setModalItems({
            thing: "",
            things: ""
        })
        setItems(null)
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

            if (eval(name) != "blank" ){

            const thingname = `${thing}_id`

            return <div className="partsSelect" key={single.id}>            
                <img src={eval(img)}/>
                <h1>{eval(name)}</h1>
                <div style={{display:"flex", justifyContent:"center",width: "15%", justifyContent: "space-between"}}>
                <h1>${eval(price)}</h1>
                <button onClick={()=>{
                    onClose()
                    setForm({...form, [thingname]: single.id})
                    }}><BsPlus/></button>
                </div>
            </div>
            } 
        })
}
    
    
    if (!open){
        return null
    } else {
        return <div>
        {items ? 
        <div className="itemListModal">
           <div className="itemList">
           <button onClick={onClose}>Close</button>
           <h1 style={{textAlign: "center"}}>Choose a {thing}</h1>
           {listOfItems()} 
           </div>
        </div>
        : 
       //  LOADING ITEMS
        <div className="itemListModal">
           <div className="itemList">
           <button onClick={onClose}>Close</button>
           <h1 style={{textAlign: "center"}}>Choose a {thing}</h1>
           <div className="partsSelect">
               {/* CHANGE THIS TO EMPTY STATE SOON */}
               <h1>Loading...</h1>
           </div>
           </div>
       </div>
       }
   </div>
    }
}

export default EditModal