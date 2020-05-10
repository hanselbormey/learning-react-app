import React, { useState, useCallback } from 'react';
import A from './A';
import B from './B';

function Parent(props) {
    const [name, setName] = useState('');
    const [price, setprice] = useState('');
    const [child1, setChild1] = useState('');
    const [child2, setChild2] = useState('');

    const handleOnChangeChild1 = useCallback((e) => {
        setChild1(e)
      }, [setChild1]);

      const handleOnChangeChild2 = useCallback((e) => {
        setChild2(e)
      }, [setChild2]);

    return (
        <div style={{ border: '1px solid' }}>
            <div>PARENT</div>
            <div>child1-{child1}</div>
            <div>child2-{child2}</div>
            <A name={child1} onChild1Change={handleOnChangeChild1}/>
            <B name={child2} onChild2Change={handleOnChangeChild2}/>
        </div>
    );

}

export default Parent;