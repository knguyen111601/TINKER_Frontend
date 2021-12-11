import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

const Show = ({pcs}) =>{

    const params = useParams()
    const id = params.id

    const [PC, setPC] = useState(null)

    const getPC = () =>{
        if (pcs){
        setPC(pcs[id-1])
        }
    }

    useEffect(()=>{getPC()})

    const content = () => {
    if (PC){
        return <div>

            <div style={{display: "flex", flexDirection:"column", alignItems:"center", width:"30%"}}>
                <img style={{width: "80%"}} src={PC.case_img}/>
                <h1>{PC.pc_name}</h1>
            </div>



            <div style={{display: "flex", flexDirection:"column"}}>
            {/* CASE */}
            <div style={{display:"flex", alignItems:"center"}}>
                <h1>Case</h1>
                <div className="horizontal"></div>
            </div>
            <div className="pcSection">
                <img src={`${PC.case_img}`}/>
                <h1>{PC.case_name}</h1>
                <h1>{PC.case_type}</h1>
                <div>
                    <h1>${PC.case_price}</h1>
                </div>
            </div>

            {/* MOTHERBOARD */}
            <div style={{display:"flex", alignItems:"center"}}>
                <h1>Case</h1>
                <div className="horizontal"></div>
            </div>
            <div className="pcSection">
                <img src={`${PC.motherboard_img}`}/>
                <h1>{PC.motherboard_name}</h1>
                <h1>{PC.motherboard_type}</h1>
                <h1>{PC.motherboard_size}</h1>
                <h1>{PC.motherboard_ram_slots} slots</h1>
                <div>
                    <h1>${PC.case_price}</h1>
                </div>
            </div>


            {/* CPU */}
            <div style={{display:"flex", alignItems:"center"}}>
                <h1>CPU</h1>
                <div className="horizontal"></div>
            </div>
            <div className="pcSection">
                <img src={`${PC.cpu_img}`}/>
                <h1>{PC.cpu_name}</h1>
                <div>
                    <h1>${PC.cpu_price}</h1>
                </div>
            </div>

            {/* RAM */}
            <div style={{display:"flex", alignItems:"center"}}>
                <h1>RAM</h1>
                <div className="horizontal"></div>
            </div>
            <div className="pcSection">
                <img src={`${PC.ram_img}`}/>
                <h1>{PC.ram_name}</h1>
                <h1>{PC.ram_number_of}</h1>
                <h1>{PC.ram_size}</h1>
                <h1>{PC.ram_speed}</h1>
                <div>
                    <h1>${PC.ram_price}</h1>
                </div>
            </div>

            {/* RAM */}
            <div style={{display:"flex", alignItems:"center"}}>
                <h1>RAM</h1>
                <div className="horizontal"></div>
            </div>
            <div className="pcSection">
                <img src={`${PC.ram_img}`}/>
                <h1>{PC.ram_name}</h1>
                <h1>{PC.ram_number_of}</h1>
                <h1>{PC.ram_size}</h1>
                <h1>{PC.ram_speed}</h1>
                <div>
                    <h1>${PC.ram_price}</h1>
                </div>
            </div>


            </div>
        </div>
    }  
}



    return <div>
        {content()}
    </div>

}

export default Show