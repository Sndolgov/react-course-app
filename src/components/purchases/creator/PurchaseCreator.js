import './PurchaseCreator.css'
import PurchaseForm from "./PurchaseForm";

function PurchaseCreator(props){

    const createPurchaseHandler = (purchaseData) => {
        props.onCreatePurchase({...purchaseData, id: Math.random().toString()})
    }

    return (
        <div className='new-cost'>
            <PurchaseForm onCreatePurchase={createPurchaseHandler}/>
        </div>
    )
}

export default PurchaseCreator