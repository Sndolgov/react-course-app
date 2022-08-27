import './PurchaseCreator.css'
import PurchaseForm from "./PurchaseForm";
import React, {useState} from "react";

function PurchaseCreator(props) {

    const createPurchaseHandler = (purchaseData) => {
        props.onCreatePurchase({...purchaseData, id: Math.random().toString()})
    }

    const [formVisible, setFormVisible] = useState(false)

    const formVisibleHandler = () => {
        setFormVisible(prevState => !prevState)
    }

    return (
        (<div className='new-cost'>
            {formVisible
                ? <PurchaseForm onCreatePurchase={createPurchaseHandler} onButtonClick={formVisibleHandler}/>
                : (<div >
                    <button onClick={formVisibleHandler}>Add new purchase</button>
                </div>)
            }
        </div>)
    )
}

export default PurchaseCreator