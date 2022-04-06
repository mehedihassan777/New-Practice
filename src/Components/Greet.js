import React from 'react'

// function Greed()
// {
//     return <h1>Hello Lemon</h1>
// }
const Greed = props =>{
    console.log(props)
    return(
        <div>
            <h1>Hello {props.name} {props.heroName}</h1>
            {props.children}
        </div>
        
    ) 
}
export default Greed