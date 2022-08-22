import PurchaseItem from "./PurchaseItem";
import './PurchaseListContent.css'


const PurchaseListContent = (props) => {
    if (props.purchases.length === 0) {
        return <h2 className='cost-list__fallback'>No expenses this year</h2>
    }

    return <ul className='cost-list'>
        {
            props.purchases.map(purchase => {
                return <PurchaseItem key={purchase.id} date={purchase.date} name={purchase.name} cost={purchase.cost}/>
            })
        }
    </ul>
}

export default PurchaseListContent