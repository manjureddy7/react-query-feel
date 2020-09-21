import React from 'react'

const Child2 = () =>  {
    console.log("Im child 2")
    return (
        <div>
            <h1>Im Child 2</h1>
        </div>
    )
}


export default React.memo(Child2)