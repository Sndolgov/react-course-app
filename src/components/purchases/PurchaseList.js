import './PurchaseList.css'
import PurchaseItem from "./PurchaseItem";
import Card from "../ui/Card";


const PurchaseList = (props) => {
    return (
        <Card className='purchases'>
            {props.expenses.map((value, index) => {
                return <PurchaseItem key={index} date={value.date} name={value.name} cost={value.cost} />
            })}
        </Card>
    )
}

export default PurchaseList