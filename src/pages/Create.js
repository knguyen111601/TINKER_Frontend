import {useState, useContext, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import {GlobalCtx} from "../App"
import Modal from "../components/Modal"

const Create = (props) =>{
    const navigate = useNavigate()
    const {gState} = useContext(GlobalCtx)
    const {url, user_id} = gState
    const user = JSON.parse(window.localStorage.getItem("user_id"))

    const [form, setForm] = useState({
            pc_name: 1,
            case_id: null,
            motherboard_id: null,
            cooler_id: null,
            cpu_id: null,
            ram_id: null,
            gpu_id: null,
            psu_id: null,
            storage_id:null,
            secondstorage_id:null,
            thirdstorage_id:null,
            misc_id: null,
            secondmisc_id: null,
            thirdmisc_id: null,
            public: true,
            user_id: user["id"]
    })

    // useEffect(()=>{
    //     setForm({...form, user_id: user_id})
    // }, [])

    const [modal, setModal] = useState(false)
    const [modalItems, setModalItems] = useState({
        thing: "",
        things: ""
    })


    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* CASE GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}

    const [caseItem, setCaseItem] = useState(null)
    useEffect(()=>{cases()}, [form.case_id])

    const cases = async () => {
        const response = await fetch (url + "cases" + `/${form.case_id}`)
        const data = await response.json()
        setCaseItem(data)
    }
    
    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* MOTHERBOARD GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}
    const [motherboardItem, setMotherboardItem] = useState(null)
    useEffect(()=>{motherboards()}, [form.motherboard_id])

    const motherboards = async () => {
        const response = await fetch (url + "motherboards" + `/${form.motherboard_id}`)
        const data = await response.json()
        setMotherboardItem(data)
    }

    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* CPU GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}

    const [cpuItem, setCpuItem] = useState(null)
    useEffect(()=>{cpus()}, [form.cpu_id])

    const cpus = async () => {
        const response = await fetch (url + "cpus" + `/${form.cpu_id}`)
        const data = await response.json()
        setCpuItem(data)
    }

    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* COOLER GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}

    const [coolerItem, setCoolerItem] = useState(null)
    useEffect(()=>{coolers()}, [form.cooler_id])

    const coolers = async () => {
        const response = await fetch (url + "coolers" + `/${form.cooler_id}`)
        const data = await response.json()
        setCoolerItem(data)
    }

    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* RAM GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}
    const [ramItem, setRamItem] = useState(null)
    useEffect(()=>{ram()}, [form.ram_id])

    const ram = async () => {
        const response = await fetch (url + "ram" + `/${form.ram_id}`)
        const data = await response.json()
        setRamItem(data)
    }

    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* GPU GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}

    const [gpuItem, setGpuItem] = useState(null)
    useEffect(()=>{gpus()}, [form.gpu_id])

    const gpus = async() =>{
        const response = await fetch (url + "gpus" + `/${form.gpu_id}`)
        const data = await response.json()
        setGpuItem(data)
    }

    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* PSU GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}

    const [psuItem, setPsuItem] = useState(null)
    useEffect(()=>{psus()}, [form.psu_id])

    const psus =  async () => {
        const response = await fetch(url + "psus" + `/${form.psu_id}`)
        const data = await response.json()
        setPsuItem(data)
    }


    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* FIRST STORAGE GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}

    const [storageItem, setStorageItem] = useState(null)
    useEffect(()=>{storages()}, [form.storage_id])

    const storages = async () =>{
            const response = await fetch(url + "storages" + `/${form.storage_id}`)
            const data = await response.json()
            setStorageItem(data)
    }

    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* SECOND STORAGE GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}

    const [secondStorageItem, setSecondStorageItem] = useState(null)
    useEffect(()=>{secondStorages()}, [form.secondstorage_id])

    const secondStorages = async () =>{
            const response = await fetch(url + "secondstorages" + `/${form.secondstorage_id}`)
            const data = await response.json()
            setSecondStorageItem(data)
    }

    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* THIRD STORAGE GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}

    const [thirdStorageItem, setThirdStorageItem] = useState(null)
    useEffect(()=>{thirdStorages()}, [form.thirdstorage_id])

    const thirdStorages = async () =>{
            const response = await fetch(url + "thirdstorages" + `/${form.thirdstorage_id}`)
            const data = await response.json()
            setThirdStorageItem(data)
    }

    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* FIRST MISC GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}
    const [miscItem, setMiscItem] = useState(null)
    useEffect(()=>{miscs()}, [form.misc_id])

    const miscs = async () =>{
            const response = await fetch(url + "miscs" + `/${form.misc_id}`)
            const data = await response.json()
            setMiscItem(data)
    }

    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* SECOND MISC GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}
    const [secondMiscItem, setSecondMiscItem] = useState(null)
    useEffect(()=>{secondMiscs()}, [form.secondmisc_id])

    const secondMiscs = async () =>{
            const response = await fetch(url + "secondmiscs" + `/${form.secondmisc_id}`)
            const data = await response.json()
            setSecondMiscItem(data)
    }

    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* THIRD MISC GRAB */}
    // {/* ///////////////////////////////////////////////////////////////////// */}
    const [thirdMiscItem, setThirdMiscItem] = useState(null)
    useEffect(()=>{thirdMiscs()}, [form.thirdmisc_id])

    const thirdMiscs = async () =>{
            const response = await fetch(url + "thirdmiscs" + `/${form.thirdmisc_id}`)
            const data = await response.json()
            setThirdMiscItem(data)
    }

    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* POST REQUEST */}
    // {/* ///////////////////////////////////////////////////////////////////// */}

    const create = (event) =>{
        event.preventDefault()
        fetch(url + "pcs", {
            method: "post",
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
                pc_name: "",
                case_id: null,
                motherboard_id: null,
                cooler_id: null,
                cpu_id: null,
                ram_id: null,
                gpu_id: null,
                psu_id: null,
                storage_id:null,
                secondstorage_id:null,
                thirdstorage_id:null,
                misc_id: null,
                secondmisc_id: null,
                thirdmisc_id: null,
                public: null,
                user_id: user["id"]
            })
        })
    }





    // {/* ///////////////////////////////////////////////////////////////////// */}
    // {/* CASE */}
    // {/* ///////////////////////////////////////////////////////////////////// */}

    return <div>
        <div style={{display:"flex", alignItems:"center"}}>
            <h1>Case</h1>
            <div className="horizontal"></div>
        </div>
        {caseItem ? 
        
        <div className="pcSection">
            <img src={caseItem.case_img}/>
            <h1>{caseItem.case_name}</h1>
            <button onClick={()=>{
                setModal(true)
                setModalItems({thing:"case", things:"cases"})}
            }>Change Case</button>
        </div>
        
        : 
            <div>
                <button onClick={()=>{setModal(true)
                setModalItems({...modalItems, thing:"case", things:"cases"})}}>+ ADD A CASE</button>
                <Modal 
                modal={modal} 
                setModal={setModal} 
                open={modal} 
                thing={modalItems.thing} 
                things={modalItems.things} 
                setModalItems={setModalItems} 
                form={form}
                setForm={setForm}
                thingid={form.case_id}/>
            </div>}
    {/* ///////////////////////////////////////////////////////////////////// */}
    {/* MOTHER BOARD */}
    {/* ///////////////////////////////////////////////////////////////////// */}
            <div style={{display:"flex", alignItems:"center"}}>
            <h1>Motherboard</h1>
            <div className="horizontal"></div>
        </div>
        {motherboardItem ? 
        
        <div className="pcSection">
            <img src={motherboardItem.motherboard_img}/>
            <h1>{motherboardItem.motherboard_name}</h1>
            <button onClick={()=>{
                setModal(true)
                setModalItems({thing:"motherboard", things:"motherboards"})}
            }>Change Motherboard</button>
        </div>
        
        : 
            <div>
                <button onClick={()=>{setModal(true)
                     setModalItems({...modalItems, thing:"motherboard", things:"motherboards"})}}>+ ADD A MOTHERBOARD</button>
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
    <div style={{display:"flex", alignItems:"center"}}>
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
            <div>
                <button onClick={()=>{setModal(true)
                     setModalItems({...modalItems, thing:"cpu", things:"cpus"})}}>+ ADD A CPU</button>
                <Modal 
                modal={modal} 
                setModal={setModal} 
                open={modal} 
                thing={modalItems.thing} 
                things={modalItems.things} 
                setModalItems={setModalItems} 
                form={form}
                setForm={setForm}
                thingid={"cpu_id"}/>
            </div>}

    {/* ///////////////////////////////////////////////////////////////////// */}
    {/* Cooler */}
    {/* ///////////////////////////////////////////////////////////////////// */}
    <div style={{display:"flex", alignItems:"center"}}>
            <h1>Cooler</h1>
            <div className="horizontal"></div>
        </div>
        {coolerItem ? 
        
        <div className="pcSection">
            <img src={coolerItem.cooler_img}/>
            <h1>{coolerItem.cooler_name}</h1>
            <button onClick={()=>{
                setModal(true)
                setModalItems({thing:"cooler", things:"coolers"})}
            }>Change Cooler</button>
        </div>
        
        : 
            <div>
                <button onClick={()=>{setModal(true)
                     setModalItems({...modalItems, thing:"cooler", things:"coolers"})}}>+ ADD A CPU Cooler</button>
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
    <div style={{display:"flex", alignItems:"center"}}>
            <h1>RAM</h1>
            <div className="horizontal"></div>
        </div>
        {ramItem ? 
        
        <div className="pcSection">
            <img src={ramItem.ram_img}/>
            <h1>{ramItem.ram_name}</h1>
            <button onClick={()=>{
                setModal(true)
                setModalItems({thing:"ram", things:"ram"})}
            }>Change RAM</button>
        </div>
        
        : 
            <div>
                <button onClick={()=>{setModal(true)
                     setModalItems({...modalItems, thing:"ram", things:"ram"})}}>+ ADD RAM</button>
                <Modal 
                modal={modal} 
                setModal={setModal} 
                open={modal} 
                thing={modalItems.thing} 
                things={modalItems.things} 
                setModalItems={setModalItems} 
                form={form}
                setForm={setForm}
                thingid={"ram_id"}/>
            </div>}

    {/* ///////////////////////////////////////////////////////////////////// */}
    {/* GPU */}
    {/* ///////////////////////////////////////////////////////////////////// */}
    <div style={{display:"flex", alignItems:"center"}}>
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
            <div>
                <button onClick={()=>{setModal(true)
                     setModalItems({...modalItems, thing:"gpu", things:"gpus"})}}>+ ADD A GPU</button>
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
    <div style={{display:"flex", alignItems:"center"}}>
            <h1>PSU</h1>
            <div className="horizontal"></div>
        </div>
        {psuItem ? 
        <div className="pcSection">
            <img src={psuItem.psu_img}/>
            <h1>{psuItem.psu_name}</h1>
            <button onClick={()=>{
                setModal(true)
                setModalItems({thing:"psu", things:"psus"})}
                }>Change PSU</button>
        </div>
        
        : 
            <div>
                <button onClick={()=>{setModal(true)
                     setModalItems({...modalItems, thing:"psu", things:"psus"})}}>+ ADD A PSU</button>
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
    
    
    <div style={{display:"flex", alignItems:"center"}}>
            <h1>Storage</h1>
            <div className="horizontal"></div>
        </div>
        {storageItem ? 
        <div className="pcSection">
            <img src={storageItem.storage_img}/>
            <h1>{storageItem.storage_name}</h1>

            <button onClick={()=>{setModal(true)
                     setModalItems({thing:"storage", things:"storages"})}}>Change Storage</button>
        </div>
         : 
            <div>
                <button onClick={()=>{setModal(true)
                     setModalItems({thing:"storage", things:"storages"})}}>+ ADD FIRST STORAGE</button>
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
            <h1>{secondStorageItem.secondstorage_name}</h1>

            <button onClick={()=>{setModal(true)
                     setModalItems({thing:"secondstorage", things:"secondstorages"})}}>Change 2nd Storage</button>
        </div>
         : 
            <div>
                <button onClick={()=>{setModal(true)
                     setModalItems({thing:"secondstorage", things:"secondstorages"})}}>+ ADD SECOND STORAGE</button>
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
            <h1>{thirdStorageItem.thirdstorage_name}</h1>

            <button onClick={()=>{setModal(true)
                     setModalItems({thing:"thirdstorage", things:"thirdstorages"})}}>Change 3rd Storage</button>
        </div>
         : 
            <div>
                <button onClick={()=>{setModal(true)
                     setModalItems({thing:"thirdstorage", things:"thirdstorages"})}}>+ ADD THIRD STORAGE</button>
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
    <div style={{display:"flex", alignItems:"center"}}>
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
            <div>
                <button onClick={()=>{setModal(true)
                     setModalItems({...modalItems, thing:"misc", things:"miscs"})}}>+ ADD FIRST MISC</button>   
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
            <div>
                <button onClick={()=>{setModal(true)
                     setModalItems({...modalItems, thing:"secondmisc", things:"secondmiscs"})}}>+ ADD SECOND MISC</button>   
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
            <div>
                <button onClick={()=>{setModal(true)
                     setModalItems({...modalItems, thing:"thirdmisc", things:"thirdmiscs"})}}>+ ADD THIRD MISC</button>   
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

            <button onClick={create}>Create</button>
    </div>

}

export default Create