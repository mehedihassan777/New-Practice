import React from 'react'

// function Greed()
// {
//     return <h1>Hello Lemon</h1>
// }
const Greed = props =>{
    console.log(props)
    return <h1>Hello {props.name}</h1>
}
export default Greed