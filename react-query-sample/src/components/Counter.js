import React from 'react';
import { useCount } from '../context/countContext';


const Counter = () => {
    const {count, setCount, decrement} = useCount()
    const increment = () => setCount(c => c + 1)
    return (
        <div>
            <button onClick={increment}>{count}</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;