//usage of useState hook

import {useState} from "react"

export default function Hook1(){
    
    //for increment counter
    const [counter, setCounter] = useState(0)

    const count = ()=>{
        setCounter(e => e + 1)
    }

    // for input value
    const [input, setInput] = useState("Sanjib")

    const changeInput = (event)=>{
        let newVal = event.target.value

        setInput(newVal)
    }


    return(
        <>
            <p>{counter}</p>
            <button onClick = {count} type="button">Increment</button>

            <hr></hr>
            <input type="text" placeholder="write something here" onChange = {changeInput} />
            <p>{input}</p>
        </>
    )
}