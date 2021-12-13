import {useState, useEffect, useContext} from "react"
import { GlobalCtx } from "../App"
import {BsPlus, BsXLg} from "react-icons/bs"
const Modal = ({thing, things, open, setModalItems, setModal, form, setForm}) =>{
    
    const {gState} = useContext(GlobalCtx)
    const {url} = gState



    const [items, setItems] = useState(null)
    
    const getItem = async () =>{
        const response = await fetch(url + things,{
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

                if (eval(name) != "blank"){

                const thingname = `${thing}_id`

                return <div className="partsSelect" key={single.id}>            
                    <img src={eval(img)}/>
                    <div>
                    <h1 style={{color:"white", fontSize:"1.3em", width:"80%", margin:"auto"}}>{eval(name)}</h1>
                    {single.case_type ? <p style={{color:"white", width:"80%", margin:"auto"}}>Size: {single.case_type}</p> : null}
                    {single.motherboard_size ? <p style={{color:"white", width:"80%", margin:"auto"}}>Size: {single.motherboard_size}</p> : null}
                    {single.motherboard_ram_slots ? <p style={{color:"white", width:"80%", margin:"auto"}}>Ram Slots: {single.motherboard_ram_slots}</p> : null}
                    {single.cooler_type ? <p style={{color:"white", width:"80%", margin:"auto"}}>Type: {single.cooler_type}</p> : null}
                    {single.cooler_size ? <p style={{color:"white", width:"80%", margin:"auto"}}>Size: {single.cooler_size}</p> : null}
                    {single.ram_speed ? <p style={{color:"white", width:"80%", margin:"auto"}}>Speed: {single.ram_speed}</p> : null}
                    {single.psu_type ? <p style={{color:"white", width:"80%", margin:"auto"}}>Type: {single.psu_type}</p> : null}
                    {single.psu_watts ? <p style={{color:"white", width:"80%", margin:"auto"}}>Type: {single.psu_watts}</p> : null}
                    {single.storage_type ? <p style={{color:"white", width:"80%", margin:"auto"}}>Type: {single.storage_type}</p> : null}
                    {single.secondstorage_type ? <p style={{color:"white", width:"80%", margin:"auto"}}>Type: {single.secondstorage_type}</p> : null}
                    {single.thirdstorage_type ? <p style={{color:"white", width:"80%", margin:"auto"}}>Type: {single.thirdstorage_type}</p> : null}
                    {single.storage_size ? <p style={{color:"white", width:"80%", margin:"auto"}}>Size: {single.storage_size}</p> : null}
                    {single.secondstorage_size ? <p style={{color:"white", width:"80%", margin:"auto"}}>Size: {single.secondstorage_size}</p> : null}
                    {single.thirdstorage_size ? <p style={{color:"white", width:"80%", margin:"auto"}}>Size: {single.thirdstorage_size}</p> : null}
                    
                    </div>

                    <div style={{display:"flex", justifyContent:"center",width: "15%", justifyContent: "space-between"}}>
                    <h1 style={{color:"lime"}}>${eval(price)}</h1>
                    <button onClick={()=>{
                        onClose()
                        setForm({...form, [thingname]: single.id})
                        }}><BsPlus/></button>
                        
                    </div>

                </div>
                } 
            })
    }

    // const all = () => {
    //     let word = thing.split("")
    //     word[0] = word[0].toUpperCase()
    //     return word.join("")
    // }

    const onClose = ()=> {
        setModal(false)
        setModalItems({
            thing: "",
            things: ""
        })
        setItems(null)
    }


    if (!open) {
        return null
    } else {
    return <div>
         {items ? 
         <div className="itemListModal">
            <div className="itemList">
            <button style={{backgroundColor:"transparent", border: "none", color: "white", fontSize:"1.5em"}} onClick={onClose}><BsXLg/></button>
            <h1 style={{textAlign: "center", color:"white", marginBottom:"40px"}}>Components</h1>
            {listOfItems()} 
            </div>
         </div>
         : 
        //  LOADING ITEMS
         <div className="itemListModal">
            <div className="itemList">
            <button style={{backgroundColor:"transparent", border: "none", color: "white", fontSize:"1.5em"}} onClick={onClose}><BsXLg/></button>
            <h1 style={{textAlign: "center"}}>Choose a {thing}</h1>
            <div>
                {/* CHANGE THIS TO EMPTY STATE SOON */}
                <h1 style={{textAlign:"center", color:"white"}}>Loading...</h1>
            </div>
            </div>
        </div>
        }
    </div>
    }
}

export default Modal