import {useState, useContext, useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom"
import {GlobalCtx} from "../App"
import Modal from "../components/Modal"
import Form from 'react-bootstrap/Form'
import {BsPlus} from "react-icons/bs"
const Show = ({pcs, getPCs}) =>{
    const navigate = useNavigate()
    const {gState} = useContext(GlobalCtx)
    const {url} = gState
    const params = useParams()
    const id = params.id
    const user = JSON.parse(window.localStorage.getItem("user_id"))

    const [form, setForm] = useState({
        pc_name: 1,
        case_id: 20,
        motherboard_id: 17,
        cooler_id: 21,
        cpu_id: 22,
        ram_id: 18,
        gpu_id: 24,
        psu_id: 11,
        storage_id:1,
        secondstorage_id:1,
        thirdstorage_id:1,
        misc_id: 12,
        secondmisc_id: 12,
        thirdmisc_id: 12,
        public: true,
        username: user["username"],
        id: id
})

    const getPC = async () =>{
        const response = await fetch (url + "pcs/" + id)
        const data = await response.json()
        setForm(data[0])
    }

    useEffect(()=>{getPC()}, [])

    const [modal, setModal] = useState(false)
    const [modalItems, setModalItems] = useState({
        thing: "",
        things: ""
    })

        // PC Name
        const [name,setName] = useState({pc_name: form.pc_name})

        const handleChange = (event) =>{
            const newName = {...name}
            newName[event.target.name] = event.target.value
            setName(newName)
            setForm({...form, pc_name: newName.pc_name})
        }

    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* CASE GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}

    const [caseItem, setCaseItem] = useState(null)
    useEffect(()=>{
        if(form.case_id != 20){cases()}
    }, [form.case_id])

    const cases = async () => {
        const response = await fetch (url + "cases" + `/${form.case_id}`)
        const data = await response.json()
        setCaseItem(data)
    }
    
    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* MOTHERBOARD GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}
    const [motherboardItem, setMotherboardItem] = useState(null)
    useEffect(()=>{
        if(form.motherboard_id != 17){
            motherboards()
        }
        }, [form.motherboard_id])

    const motherboards = async () => {
        const response = await fetch (url + "motherboards" + `/${form.motherboard_id}`)
        const data = await response.json()
        setMotherboardItem(data)
    }


    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* CPU GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}

    const [cpuItem, setCpuItem] = useState(null)
    useEffect(()=>{
    if(form.cpu_id !=22){cpus()}
    }, [form.cpu_id])

    const cpus = async () => {
        const response = await fetch (url + "cpus" + `/${form.cpu_id}`)
        const data = await response.json()
        setCpuItem(data)
    }


    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* COOLER GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}

    const [coolerItem, setCoolerItem] = useState(null)
    useEffect(()=>{if(form.cooler_id !=21){coolers()}}, [form.cooler_id])

    const coolers = async () => {
        const response = await fetch (url + "coolers" + `/${form.cooler_id}`)
        const data = await response.json()
        setCoolerItem(data)
    }

    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* RAM GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}
    const [ramItem, setRamItem] = useState(null)
    useEffect(()=>{if(form.ram_id !=18){ram()}}, [form.ram_id])

    const ram = async () => {
        const response = await fetch (url + "ram" + `/${form.ram_id}`)
        const data = await response.json()
        setRamItem(data)
    }


    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* GPU GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}

    const [gpuItem, setGpuItem] = useState(null)
    useEffect(()=>{if(form.gpu_id !=24){gpus()}}, [form.gpu_id])

    const gpus = async() =>{
        const response = await fetch (url + "gpus" + `/${form.gpu_id}`)
        const data = await response.json()
        setGpuItem(data)
    }

    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* PSU GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}

    const [psuItem, setPsuItem] = useState(null)
    useEffect(()=>{if(form.psu_id !=11){psus()}}, [form.psu_id])

    const psus =  async () => {
        const response = await fetch(url + "psus" + `/${form.psu_id}`)
        const data = await response.json()
        setPsuItem(data)
    }

    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* FIRST STORAGE GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}

    const [storageItem, setStorageItem] = useState(null)
    useEffect(()=>{if(form.storage_id !=1){storages()}}, [form.storage_id])

    const storages = async () =>{
            const response = await fetch(url + "storages" + `/${form.storage_id}`)
            const data = await response.json()
            setStorageItem(data)
    }


    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* SECOND STORAGE GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}

    const [secondStorageItem, setSecondStorageItem] = useState(null)
    useEffect(()=>{if(form.secondstorage_id !=1){secondStorages()}}, [form.secondstorage_id])

    const secondStorages = async () =>{
            const response = await fetch(url + "secondstorages" + `/${form.secondstorage_id}`)
            const data = await response.json()
            setSecondStorageItem(data)
    }


    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* THIRD STORAGE GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}

    const [thirdStorageItem, setThirdStorageItem] = useState(null)
    useEffect(()=>{if(form.thirdstorage_id!=1){thirdStorages()}}, [form.thirdstorage_id])

    const thirdStorages = async () =>{
            const response = await fetch(url + "thirdstorages" + `/${form.thirdstorage_id}`)
            const data = await response.json()
            setThirdStorageItem(data)
    }


    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* FIRST MISC GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}
    const [miscItem, setMiscItem] = useState(null)
    useEffect(()=>{if(form.misc_id !=12){miscs()}}, [form.misc_id])

    const miscs = async () =>{
            const response = await fetch(url + "miscs" + `/${form.misc_id}`)
            const data = await response.json()
            setMiscItem(data)
    }


    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* SECOND MISC GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}
    const [secondMiscItem, setSecondMiscItem] = useState(null)
    useEffect(()=>{if(form.secondmisc_id !=12){secondMiscs()}}, [form.secondmisc_id])

    const secondMiscs = async () =>{
            const response = await fetch(url + "secondmiscs" + `/${form.secondmisc_id}`)
            const data = await response.json()
            setSecondMiscItem(data)
    }


    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* THIRD MISC GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}
    const [thirdMiscItem, setThirdMiscItem] = useState(null)
    useEffect(()=>{if(form.thirdmisc_id !=12){thirdMiscs()}}, [form.thirdmisc_id])

    const thirdMiscs = async () =>{
            const response = await fetch(url + "thirdmiscs" + `/${form.thirdmisc_id}`)
            const data = await response.json()
            setThirdMiscItem(data)
    }


    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* PUT REQUEST */}
    // {/* ///////////////////////////////////////////////////////////////////// */}
    const update = (event) =>{
        event.preventDefault()
        console.log(form)
        fetch(url + "pcs/" + id, {
            method: "put",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
        .then((response)=>{
            console.log(response)
            response.json()
        })
        .then((data)=>{
            console.log(data)
            setForm({
                pc_name: 1,
                case_id: 20,
                motherboard_id: 17,
                cooler_id: 21,
                cpu_id: 22,
                ram_id: 18,
                gpu_id: 24,
                psu_id: 11,
                storage_id:1,
                secondstorage_id:1,
                thirdstorage_id:1,
                misc_id: 12,
                secondmisc_id: 12,
                thirdmisc_id: 12,
                public: true,
                username: user["username"],
                id: id
            })
            getPCs()
            navigate("/")
        })
    }

    const changePublic = () =>{
        if(form.public){
        setForm({...form, public: false})
        } else {
            setForm({...form, public: true})
        }
    }

    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* CASE */}
    // {/* ///////////////////////////////////////////////////////////////////// */}

    return <div>

        <form className="nameForm">
            <input type="text" placeholder="Enter Name" name="pc_name" value={name.pc_name} onChange={handleChange}/>
        </form>
        <div className="switch">
        <Form.Check 
            type="switch"
            id="custom-switch"
            label="Public"
            onClick={changePublic}
        />
    </div>

        <div className="createSection">
            <h1>Case</h1>
            <div className="horizontal"></div>
        </div>
        {caseItem ? 
        
        <div className="pcSection">
            <img src={caseItem.case_img}/>
            <div>
            <h1>{caseItem.case_name}</h1>
            <p>Case Size: {caseItem.case_type}</p>
            </div>
            <button onClick={()=>{
                setModal(true)
                setModalItems({thing:"case", things:"cases"})}
            }>Change Case</button>
        </div>
        
        : 
            <div className="addButtonSection">
                <button className="addButton" onClick={()=>{setModal(true)
                setModalItems({...modalItems, thing:"case", things:"cases"})}}><BsPlus/></button>
                <Modal 
                setModal={setModal} 
                open={modal} 
                thing={modalItems.thing} 
                things={modalItems.things} 
                setModalItems={setModalItems} 
                form={form}
                setForm={setForm}
                />
            </div>}
    {/* ///////////////////////////////////////////////////////////////////// */}
    {/* MOTHER BOARD */}
    {/* ///////////////////////////////////////////////////////////////////// */}
            <div className="createSection">
            <h1>Motherboard</h1>
            <div className="horizontal"></div>
        </div>
        {motherboardItem ? 
        
        <div className="pcSection">
            <img src={motherboardItem.motherboard_img}/>
            <div>
            <h1>{motherboardItem.motherboard_name}</h1>
            <p>Motherboard Size: {motherboardItem.motherboard_size}</p>
            <p>Number of Ram Slots: {motherboardItem.motherboard_ram_slots}</p>
            </div>
            <button onClick={()=>{
                setModal(true)
                setModalItems({thing:"motherboard", things:"motherboards"})}
            }>Change Motherboard</button>
        </div>
        
        : 
            <div className="addButtonSection">
                <button className="addButton" onClick={()=>{setModal(true)
                     setModalItems({...modalItems, thing:"motherboard", things:"motherboards"})}}><BsPlus/></button>
                <Modal 
                modal={modal} 
                setModal={setModal} 
                open={modal} 
                thing={modalItems.thing} 
                things={modalItems.things} 
                setModalItems={setModalItems} 
                form={form}
                setForm={setForm}
                thingid={"motherboard_id"}/>
            </div>}

    {/* ///////////////////////////////////////////////////////////////////// */}
    {/* CPU */}
    {/* ///////////////////////////////////////////////////////////////////// */}
    <div className="createSection">
            <h1>CPU</h1>
            <div className="horizontal"></div>
        </div>
        {cpuItem ? 
        
        <div className="pcSection">
            <img src={cpuItem.cpu_img}/>
                <h1>{cpuItem.cpu_name}</h1>
            <button onClick={()=>{
                setModal(true)
                setModalItems({thing:"cpu", things:"cpus"})}
            }>Change CPU</button>
        </div>
        
        : 
            <div className="addButtonSection">
                <button className="addButton" onClick={()=>{setModal(true)
                     setModalItems({...modalItems, thing:"cpu", things:"cpus"})}}><BsPlus/></button>
                <Modal 
                modal={modal} 
                setModal={setModal} 
                open={modal} 
                thing={modalItems.thing} 
                things={modalItems.things} 
                setModalItems={setModalItems} 
                form={form}
                setForm={setForm}
                />
            </div>}

    {/* ///////////////////////////////////////////////////////////////////// */}
    {/* Cooler */}
    {/* ///////////////////////////////////////////////////////////////////// */}
    <div className="createSection">
            <h1>Cooler</h1>
            <div className="horizontal"></div>
        </div>
        {coolerItem ? 
        
        <div className="pcSection">
            <img src={coolerItem.cooler_img}/>
            <div style={{width: "40%"}}>
            <h1 style={{fontSize:"2em"}}>{coolerItem.cooler_name}</h1>
            <p>Cooler Type: {coolerItem.cooler_type}</p>
            <p>Cooler Size: {coolerItem.cooler_size}</p>
            </div>
            <button onClick={()=>{
                setModal(true)
                setModalItems({thing:"cooler", things:"coolers"})}
            }>Change Cooler</button>
        </div>
        
        : 
            <div className="addButtonSection">
                <button className="addButton" onClick={()=>{setModal(true)
                     setModalItems({...modalItems, thing:"cooler", things:"coolers"})}}><BsPlus/></button>
                <Modal 
                modal={modal} 
                setModal={setModal} 
                open={modal} 
                thing={modalItems.thing} 
                things={modalItems.things} 
                setModalItems={setModalItems} 
                form={form}
                setForm={setForm}
                thingid={"cooler_id"}/>
            </div>}

    {/* ///////////////////////////////////////////////////////////////////// */}
    {/* RAM */}
    {/* ///////////////////////////////////////////////////////////////////// */}
    <div className="createSection">
            <h1>RAM</h1>
            <div className="horizontal"></div>
        </div>
        {ramItem ? 
        
        <div className="pcSection">
            <img src={ramItem.ram_img}/>
            <div style={{width: "40%"}}>
            <h1 style={{fontSize:"1.8em"}}>{ramItem.ram_name}</h1>
            <p>Memory Size: {ramItem.ram_size}</p>
            <p>Speed: {ramItem.ram_speed}</p>
            <p>Number of Sticks: {ramItem.ram_number_of}</p>
            </div>

            <button onClick={()=>{
                setModal(true)
                setModalItems({thing:"ram", things:"ram"})}
            }>Change RAM</button>
        </div>
        
        : 
            <div className="addButtonSection">
                <button className="addButton" onClick={()=>{setModal(true)
                     setModalItems({...modalItems, thing:"ram", things:"ram"})}}><BsPlus/></button>
                <Modal 
                modal={modal} 
                setModal={setModal} 
                open={modal} 
                thing={modalItems.thing} 
                things={modalItems.things} 
                setModalItems={setModalItems} 
                form={form}
                setForm={setForm}
                />
            </div>}

    {/* ///////////////////////////////////////////////////////////////////// */}
    {/* GPU */}
    {/* ///////////////////////////////////////////////////////////////////// */}
    <div className="createSection">
            <h1>GPU</h1>
            <div className="horizontal"></div>
        </div>
        {gpuItem ?

        <div className="pcSection">
            <img src={gpuItem.gpu_img}/>
            <h1>{gpuItem.gpu_name}</h1>
            <button onClick={()=>{
                setModal(true)
                setModalItems({thing:"gpu", things:"gpus"})}
            }>Change GPU</button>
        </div>
         
         : 
            <div className="addButtonSection">
                <button className="addButton" onClick={()=>{setModal(true)
                     setModalItems({...modalItems, thing:"gpu", things:"gpus"})}}><BsPlus/></button>
                <Modal 
                modal={modal} 
                setModal={setModal} 
                open={modal} 
                thing={modalItems.thing} 
                things={modalItems.things} 
                setModalItems={setModalItems} 
                form={form}
                setForm={setForm}
                thingid={"gpu_id"}/>
            </div>}

    {/* ///////////////////////////////////////////////////////////////////// */}
    {/* PSU */}
    {/* ///////////////////////////////////////////////////////////////////// */}
    <div className="createSection">
            <h1>PSU</h1>
            <div className="horizontal"></div>
        </div>
        {psuItem ? 
        <div className="pcSection">
            <img src={psuItem.psu_img}/>
            <div>
            <h1>{psuItem.psu_name}</h1>
            <p>Type: {psuItem.psu_type}</p>
            <p>Wattage: {psuItem.psu_watts}</p>
            <img style={{border: "none", width: "100px", height: "100px", marginLeft: "-20px", marginTop: "-20px"}} src={psuItem.psu_rating}/>
            </div>
            <button onClick={()=>{
                setModal(true)
                setModalItems({thing:"psu", things:"psus"})}
                }>Change PSU</button>
        </div>
        
        : 
            <div className="addButtonSection">
                <button className="addButton" onClick={()=>{setModal(true)
                     setModalItems({...modalItems, thing:"psu", things:"psus"})}}><BsPlus/></button>
                <Modal 
                modal={modal} 
                setModal={setModal} 
                open={modal} 
                thing={modalItems.thing} 
                things={modalItems.things} 
                setModalItems={setModalItems} 
                form={form}
                setForm={setForm}
                thingid={"psu_id"}/>
            </div>}

    {/* ///////////////////////////////////////////////////////////////////// */}
    {/* First Storage */}
    {/* ///////////////////////////////////////////////////////////////////// */}
    
    
    <div className="createSection">
            <h1>Storage</h1>
            <div className="horizontal"></div>
        </div>
        {storageItem ? 
        <div className="pcSection">
            <img src={storageItem.storage_img}/>
            <div>
            <h1>{storageItem.storage_name}</h1>
            <p>Type: {storageItem.storage_type}</p>
            <p>Size: {storageItem.storage_size}</p>
            </div>
            <button onClick={()=>{setModal(true)
                     setModalItems({thing:"storage", things:"storages"})}}>Change Storage</button>
        </div>
         : 
            <div className="addButtonSection">
                <button className="addButton" onClick={()=>{setModal(true)
                     setModalItems({thing:"storage", things:"storages"})}}><BsPlus/></button>
                <Modal 
                modal={modal} 
                setModal={setModal} 
                modalItems={modalItems}
                open={modal} 
                thing={modalItems.thing} 
                things={modalItems.things} 
                setModalItems={setModalItems} 
                form={form}
                setForm={setForm}
                />
            </div>}

            {secondStorageItem ? 
        <div className="pcSection">
            <img src={secondStorageItem.secondstorage_img}/>
            <div>
            <h1>{secondStorageItem.secondstorage_name}</h1>
            <p>Type: {secondStorageItem.secondstorage_type}</p>
            <p>Size: {secondStorageItem.secondstorage_size}</p>
            </div>

            <button onClick={()=>{setModal(true)
                     setModalItems({thing:"secondstorage", things:"secondstorages"})}}>Change 2nd Storage</button>
        </div>
         : 
            <div className="addButtonSection">
                <button className="addButton" onClick={()=>{setModal(true)
                     setModalItems({thing:"secondstorage", things:"secondstorages"})}}><BsPlus/></button>
                <Modal 
                modal={modal} 
                setModal={setModal} 
                modalItems={modalItems}
                open={modal} 
                thing={modalItems.thing} 
                things={modalItems.things} 
                setModalItems={setModalItems} 
                form={form}
                setForm={setForm}
                />
            </div>}

            {thirdStorageItem ? 
        <div className="pcSection">
            <img src={thirdStorageItem.thirdstorage_img}/>
            <div>
            <h1>{thirdStorageItem.thirdstorage_name}</h1>
            <p>Type: {thirdStorageItem.thirdstorage_type}</p>
            <p>Size: {thirdStorageItem.thirdstorage_size}</p>
            </div>

            <button onClick={()=>{setModal(true)
                     setModalItems({thing:"thirdstorage", things:"thirdstorages"})}}>Change 3rd Storage</button>
        </div>
         : 
            <div className="addButtonSection">
                <button className="addButton" onClick={()=>{setModal(true)
                     setModalItems({thing:"thirdstorage", things:"thirdstorages"})}}><BsPlus/></button>
                <Modal 
                modal={modal} 
                setModal={setModal} 
                modalItems={modalItems}
                open={modal} 
                thing={modalItems.thing} 
                things={modalItems.things} 
                setModalItems={setModalItems} 
                form={form}
                setForm={setForm}
                />
            </div>}



    {/* ///////////////////////////////////////////////////////////////////// */}
    {/* Misc */}
    {/* ///////////////////////////////////////////////////////////////////// */}
    <div className="createSection">
            <h1>Misc.</h1>
            <div className="horizontal"></div>
        </div>
        {miscItem ? 
        <div className="pcSection">
            <img src={miscItem.misc_img}/>
            <h1>{miscItem.misc_name}</h1>
            <button onClick={()=>{setModal(true)
                     setModalItems({thing:"misc", things:"miscs"})}}>Change First Misc</button>
        </div>
        : 
            <div className="addButtonSection">
                <button className="addButton" onClick={()=>{setModal(true)
                     setModalItems({...modalItems, thing:"misc", things:"miscs"})}}><BsPlus/></button>   
                <Modal 
                modal={modal} 
                setModal={setModal} 
                open={modal} 
                thing={modalItems.thing} 
                things={modalItems.things} 
                setModalItems={setModalItems} 
                form={form}
                setForm={setForm}
                />
            </div>}

            {secondMiscItem ? 
        <div className="pcSection">
            <img src={secondMiscItem.secondmisc_img}/>
            <h1>{secondMiscItem.secondmisc_name}</h1>

            <button onClick={()=>{setModal(true)
                     setModalItems({thing:"secondmisc", things:"secondmiscs"})}}>Change Second Misc</button>
        </div>
        : 
            <div className="addButtonSection">
                <button className="addButton" onClick={()=>{setModal(true)
                     setModalItems({...modalItems, thing:"secondmisc", things:"secondmiscs"})}}><BsPlus/></button>   
                <Modal 
                modal={modal} 
                setModal={setModal} 
                open={modal} 
                thing={modalItems.thing} 
                things={modalItems.things} 
                setModalItems={setModalItems} 
                form={form}
                setForm={setForm}
                />
            </div>}

            {thirdMiscItem ? 
        <div className="pcSection">
            <img src={thirdMiscItem.thirdmisc_img}/>
            <h1>{thirdMiscItem.thirdmisc_name}</h1>

            <button onClick={()=>{setModal(true)
                     setModalItems({thing:"thirdmisc", things:"thirdmiscs"})}}>Change Third Misc</button>
        </div>
        : 
            <div className="addButtonSection">
                <button className="addButton" onClick={()=>{setModal(true)
                     setModalItems({...modalItems, thing:"thirdmisc", things:"thirdmiscs"})}}><BsPlus/></button>   
                <Modal 
                modal={modal} 
                setModal={setModal} 
                open={modal} 
                thing={modalItems.thing} 
                things={modalItems.things} 
                setModalItems={setModalItems} 
                form={form}
                setForm={setForm}
                />
            </div>}
            <div className="horizontal"></div>
            <div className="createButton">
            <button onClick={update}>Update</button>
            </div>
    </div>


}

export default Show