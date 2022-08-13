import "./CostItem.css"
import PurchaseDate from "./PurchaseDate";

function CostItem(props) {

    return (
        <div className='cost-item'>
            <PurchaseDate date={props.date} />
            <div className='cost-item__description'>
                <h2>{props.name}</h2>
                <div className='cost-item__price'>${props.cost}</div>
            </div>
        </div>);
}

export default CostItem