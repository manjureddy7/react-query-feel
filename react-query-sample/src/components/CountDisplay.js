import React from 'react';
import { useCount } from '../context/countContext';

function CountDisplay() {
    const {count} = useCount()
    return <div>The current counter count is {count}</div>
}

export default CountDisplay;