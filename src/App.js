import PurchaseList from "./components/purchases/list/PurchaseList"
import PurchaseCreator from "./components/purchases/creator/PurchaseCreator";
import React, {useState} from "react";

const INITIAL_EXPENSES = [
    {
        id: '1',
        date: new Date(2020, 8, 15),
        name: 'Ref',
        cost: 999.99
    },
    {
        id: '2',
        date: new Date(2022, 7, 1),
        name: 'Vacuum cleaner',
        cost: 199.99
    },
    {
        id: '3',
        date: new Date(2021, 7, 7),
        name: 'Cellphone',
        cost: 599.99
    }
]

function App() {

    const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

    const addPurchaseHandler = (purchaseData) => {
        setExpenses(prevExpenses => {
            return [...prevExpenses, purchaseData]
        })
        // console.log(expenses)
    }

    return (
        <div>
            <PurchaseCreator onCreatePurchase={addPurchaseHandler}/>
            <PurchaseList expenses={expenses}/>
        </div>
    );
}

export default App;
