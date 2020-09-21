import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import Counter from './Counter';
import { CountProvider } from './context/countContext';
import CountDisplay from './CountDisplay';

const Movies = () => {

  const [name, setName] = React.useState('Manoj');
  const [bool, setBool] = React.useState(true)
    return (
         <section>
        <button onClick={() => setName('Manoj Reddy')}>Modify Name</button>
        <button onClick={() => setBool(prevBool => !prevBool)}>Modify Bool</button>
        <Child1 name={name} bool={bool}/>
        <Child2 />
        {props.child3}
    <CountProvider>
        <Counter />
        <CountDisplay />
      </CountProvider>

      </section>
    )
}

export default Movies;
