import React from 'react'

export default function Child1({name, bool}) {
    console.log("Im child 1")
    return (
        <div>
            <h1>Im Child 1</h1>
            <p>Name is{name} - {bool}</p>
        </div>
    )
}
