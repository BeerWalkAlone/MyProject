import React from 'react'

export default function contrat(props) {
    const ChangeNum = () => {
        props.setnum (20)
        alert("completed change number")
    }
  return (
    <div>
        {props.number}
        {props.number}
        {props.number}
        <button onClick={ChangeNum}>ChangeNum</button>
    </div>
  )
}
