import React from 'react'

export default function Home(props) {
    const handleClick = () => {
        alert("Fukkkkkkkk")
        props.setname ("wow")
    }
    return (
        <div>
            {props.beer}
            {props.beer}
            {props.beer}
            <button onClick={handleClick}>Changes</button>
        </div>
    )
}
