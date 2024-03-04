//usage of useEffect hook

import { useState, useEffect } from "react"
import axios from "axios"

export default function Hook3(){
    const [data, setData] = useState("")
    //const [count, setCount] = useState()


    useEffect(()=>{
        //console.log("Hello world")
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) =>{
            //console.log(response.data)
            setData(response.data[0].email)
            console.log("API WAS CALLED")
        })
    }, [])

    return(
        <>
            {/* <h1>{count}</h1>
            <button onClick={setCount(e => e +1)}>Click here</button> */}
            <p>Hello World {data}</p>
        </>
    )
}