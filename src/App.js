import PurchaseList from "./components/purchases/PurchaseList"
import PurchaseCreator from "./components/creator/PurchaseCreator";

function App() {
    const expenses = [
        {
            date: new Date(2022, 8, 15),
            name: 'Ref',
            cost: 999.99
        },
        {
            date: new Date(2022, 7, 1),
            name: 'Vacuum cleaner',
            cost: 199.99
        },
        {
            date: new Date(2022, 7, 7),
            name: 'Cellphone',
            cost: 599.99
        }
    ]

    return (
        <div>
            <PurchaseCreator />
            <PurchaseList expenses={expenses}/>
        </div>
    );
}

export default App;
