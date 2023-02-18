import React, { useState } from 'react'

export default function Test(props) {

    return (
        <div>
            {props.personal.map(setdata =>
                <div>
                    <h1>{setdata.name}</h1>
                    <h2>{setdata.age}</h2>
                </div>
            )}
        </div>
    )


}