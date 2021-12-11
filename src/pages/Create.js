import {useState, useContext} from "react"
import {GlobalCtx} from "../App"
import Modal from "../components/Modal"

const Create = (props) =>{

    const {url, user_id} = useContext(GlobalCtx)

    const [form, setForm] = useState({
            pc_name: null,
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
            user_id: user_id
    })

    const [modal, setModal] = useState(false)



    const cases = <>
    <div className="pcSection">
        <button onClick={()=> setModal(true)}><h4>+ Choose a Case</h4></button>
    </div>
    </>
    










    return <div>
        <div style={{display:"flex", alignItems:"center"}}>
            <h1>Case</h1>
            <div className="horizontal"></div>
        </div>
        {form.case_id ? cases : 
            <div>
                <button onClick={()=>{setModal(true)}}>+ ADD A CASE</button>
                <Modal open={modal} onClose={()=> setModal(false)} thing="case" things="cases" form={form}/>
            </div>}
    </div>
}

export default Create