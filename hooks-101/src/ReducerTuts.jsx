// useReducer hook => same purpose as useState hook, actually it used to replace useState hook


//import {useState} from "react"
import {useReducer} from "react"

const reducer = (state, action) =>{
    switch(action.type){
        case "INCREMENT":
            return {count: state.count + 1, showText: state.showText}
            
        case "toggleShowText":
            return{count: state.count, showText: !state.showText}

        default:
            return state
    }
}

export default function Hook2(){
    // const [count, setCount] = useState(0)
    // const [showText, setShowText] = useState(true)

    const[state, dispatch] = useReducer( reducer, {count: 0 ,showText: true})
    
    return(
        <>
            {/* <h2>Count: {count}</h2>
            <button onClick = {
                ()=>{
                    setCount(e => e + 1)
                    setShowText(!showText)
                }
            }>Click here
            </button>

            {showText && <p>This is a text</p>} */}

            <h2>Count: {state.count}</h2>
            <button onClick = {
                ()=>{
                    dispatch({type: "INCREMENT"})
                    dispatch({type: "toggleShowText"})
                }
            }>Click here
            </button>

            {state.showText && <p>This is a text</p>}
        </>
    )
}

