import './PurchaseList.css'
import Card from "../../ui/Card";
import PurchasesFilter from "../filter/PurchasesFilter";
import React, {useState} from "react";
import PurchaseListContent from "./PurchaseListContent";


const PurchaseList = (props) => {

    const [year, setYear] = useState(new Date().getFullYear().toString())

    const yearChangeHandler = (newYearValue) => {
        setYear(newYearValue)
        // console.log(newYearValue)
    };

    const sortedUniqYears = () => {
        // return [...new Set(Array.from(props.expenses, expense => expense.date.getFullYear()))].sort().reverse()
        const arrYears = Array.from(props.expenses, expense => expense.date.getFullYear())
        const uniqueYears = [...new Set(arrYears)];
        uniqueYears.push(3000)
        uniqueYears.sort()
        uniqueYears.reverse()
        return uniqueYears
    }

    const filteredPurchasesByYear = props.expenses.filter(purchase => {
        return purchase.date.getFullYear().toString() === year
    })


    return (
            <Card className='purchases'>
                <PurchasesFilter onChangeYear={yearChangeHandler} years={sortedUniqYears()} selectedYear={year}>
                    <PurchaseListContent purchases={filteredPurchasesByYear}/>
                {/*{*/}
                {/*        props.expenses.map(purchase => {*/}
                {/*            if (purchase.date.getFullYear().toString() === year) {*/}
                {/*                return <PurchaseItem key={purchase.id} date={purchase.date} name={purchase.name} cost={purchase.cost}/>*/}
                {/*            }*/}
                {/*            return null;*/}
                {/*        })}*/}
                </PurchasesFilter>
            </Card>
    )
}

export default PurchaseList