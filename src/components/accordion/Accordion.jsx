import { useState } from "react";
import data from "./data.js"
import './styles.css'

export default function Accordion(){
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiSelected, setMultiSelected] = useState([]);

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId){
        if(multiSelected.includes(getCurrentId)){
            setMultiSelected(multiSelected.filter(id => id!==getCurrentId));
        }
        else{
            setMultiSelected([...multiSelected, getCurrentId]);
        }
    }

    function handleEnableMultiSelection() {
        setEnableMultiSelection(!enableMultiSelection);
    }

    return <>
        <div className={"wrapper"}>
            <button onClick={handleEnableMultiSelection}>{ enableMultiSelection? "Disable Multi Selection" : "Enable Multi Selection"}</button>
            <div className={"accordion"}>
                {
                    data && data.length>0 ?
                        data.map((dataItem)=>{
                            return <div onClick={enableMultiSelection? ()=>handleMultiSelection(dataItem.id) :()=>handleSingleSelection(dataItem.id)} key={dataItem.id} className={"item"}>
                                <div className={"title"}>
                                    <h3>
                                        {dataItem.question}
                                    </h3>

                                    <span>
                                        +
                                    </span>
                                </div>

                                {
                                    enableMultiSelection ? multiSelected.includes(dataItem.id) &&
                                        <div className={"content"}>
                                            {dataItem.answer}
                                        </div> : selected===dataItem.id &&
                                        <div className={"content"}>
                                            {dataItem.answer}
                                        </div>
                                }
                            </div>
                        })
                        : <div>No Data Found</div>
                }
            </div>
        </div>
    </>
}
