import Diagram from "./Diagram";


const ExpenseDiagram = (props) => {
    const diagramDataSets = [
        {label: "Jan", value: 0},
        {label: "Feb", value: 0},
        {label: "Mar", value: 0},
        {label: "Apr", value: 0},
        {label: "May", value: 0},
        {label: "Jun", value: 0},
        {label: "Jul", value: 0},
        {label: "Aug", value: 0},
        {label: "Sep", value: 0},
        {label: "Oct", value: 0},
        {label: "Nov", value: 0},
        {label: "Dec", value: 0}
    ]

    console.log("props ex" + props.expenses)

    for (const expense of props.expenses){
        console.log("expense: " + expense)

        const month = expense.date.getMonth()
        diagramDataSets[month].value += expense.cost
    }

    console.log(diagramDataSets)

    return <Diagram diagramDataSets={diagramDataSets}/>
}

export default ExpenseDiagram