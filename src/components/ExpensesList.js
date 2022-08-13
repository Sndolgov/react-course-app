import CostItem from "./CostItem";
import './ExpensesList.css'


function ExpensesList(props){
    return (
        <div className='expenses'>
            {props.expenses.map(value => {
                return <CostItem date={value.date} name={value.name} cost={value.cost} />
            })}
        </div>
    )
}

export default ExpensesList