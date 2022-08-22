import './PurchaseForm.css'
import React, {useState} from "react";

function PurchaseForm(props) {
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
    const [date, setDate] = useState('')

    // const [userInput, setUserInput] = useState({ // instead multiple useStates we can use one with Object
    //     name: '',
    //     cost: '',
    //     date: ''
    // });

    const nameChangeHandler = (event) => {
        setName(event.target.value)
        // setName((previousState) => { // in this case previousState (userInput) has the latest values
        //     return event.target.value
        // })

        // setUserInput({
        //     ...userInput,                // in this case userInput can have old values
        //     name: event.target.value,
        // })

        // setUserInput((previousState) => { // in this case previousState (userInput) has the latest values
        //     return {
        //         ...previousState,
        //         name: event.target.value
        //     }
        // })
    }
    const costChangeHandler = (event) => {
        setCost(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     cost: event.target.value,
        // })
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value,
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault() // prevent default behaviour (cleaning form)

        const formData = {
            name: name,
            cost: cost,
            date: new Date(date )
        }

        props.onCreatePurchase(formData)

        setName('')
        setCost('')
        setDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Name</label>
                    <input type='text' value={name} // attr value we use for cleaning input (in handler we wrote setName(''))
                           onChange={nameChangeHandler}/>
                </div>
                <div className='new-cost__control'>
                    <label>Cost</label>
                    <input type='number' min='0.01' step='0.01' value={cost}
                           onChange={costChangeHandler}/>
                </div>
                <div className='new-cost__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' step='2022-12-31' value={date}
                           onChange={dateChangeHandler}/>
                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>Add purchase</button>
                </div>
            </div>
        </form>
    )
}

export default PurchaseForm