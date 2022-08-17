import "./PurchaseItem.css"
import PurchaseDate from "./PurchaseDate";
import Card from "../ui/Card";
import React, {useState} from "react"; //import only function useState note hole React


function PurchaseItem(props) {

    const [name, setName]= useState(props.name); //returns ald value and set function

    const changeNameHandler = () => {
        setName("New name")
    }

    return (
        <Card className='cost-item'>
            <PurchaseDate date={props.date} />
            <div className='cost-item__description'>
                <h2>{name}</h2>
                <div className='cost-item__price'>${props.cost}</div>
            </div>
            <button onClick={changeNameHandler}>Change name</button>
        </Card>);
}

export default PurchaseItem