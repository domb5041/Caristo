import React, { useState, useEffect } from 'react';
import data from './data';

export default function App() {
    const [sourceU, setSourceU] = useState('meter');
    const [targetU, setTargetU] = useState('centimeter');
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState(null);
    const [error, setError] = useState(false);

    const convertFn = () => {
        const conversion = data.find(
            d => d.sourceUnit === sourceU && d.targetUnit === targetU
        );
        if (!conversion) {
            setError(true);
            return;
        } else {
            setError(false);
        }
        const returnValue = inputValue * Number(conversion.factor);

        setOutputValue(returnValue);
    };

    useEffect(() => {
        convertFn();
    }, [inputValue, sourceU, targetU]);

    return (
        <div className='App'>
            <input
                type='text'
                value={sourceU}
                onChange={e => setSourceU(e.target.value)}
                placeholder='source unit'
            />
            <input
                type='number'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder='source value'
            />
            <input
                type='text'
                value={targetU}
                onChange={e => setTargetU(e.target.value)}
                placeholder='output unit'
            />
            {/* <button onClick={convertFn}>convert</button> */}
            {error ? (
                <stong>ERROR</stong>
            ) : (
                <p style={{ padding: 50 }}>
                    {outputValue + ' ' + targetU || 'no output'}
                </p>
            )}
        </div>
    );
}
