import React, {useState} from 'react'

function Counter() {
    let [num, setCount] = useState(0);
    // let [num, decrement] = useState(0);

    let increment = () => {
        setCount(c => c + 1); // Updater function
    }
    let decrement = () => setCount(c => c + 1);
    let reset = () => setCount(0);
    return(
        <>
            <div>
                <p>{num}</p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={reset}>reset</button>
            </div>
        </>
    )
}

export default Counter