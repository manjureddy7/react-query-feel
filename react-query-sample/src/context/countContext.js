// Follow this excellent tutorial on how to setup excellent contexts

// https://kentcdodds.com/blog/application-state-management-with-react

import React, { createContext, useContext } from 'react';

const CountContext = createContext();

const useCount = () => {
    const context = useContext(CountContext);
    if (!context) {
        throw new Error(`useCount must be used within a CountProvider`)
    }
    const [count, setCount] = context;
    const decrement = () => setCount(count => count -1);
    return {count, setCount, decrement}
}

const CountProvider = (props) => {
    const [count, setCount] = React.useState(0)
    const value = React.useMemo(() => [count, setCount], [count])
    return <CountContext.Provider value={value} {...props} />
}

export { CountProvider, useCount }