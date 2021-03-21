import React, {useState} from 'react';

function Counter() {

    const [count, setCount] = useState(0)
    // const[username, setUsername] = useState()
    // const[password, setPassword] = useState()

    function sum() {
        setCount(count+1)
    }
    function subtract() {
        setCount(count-1)
    }

    function hello(){
    setCount('hello')
    }
    

    return (
        <div>
        <h1>Counter</h1> 
        {count}
        {/* {username, password} */}

        <button onClick={sum}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <button onClick={hello}>Hello</button>

        {/* <button onClick={ () => setCount(count+1)}>Submit</button> */}

        {/* <button onClick={ () => setCount(count+1)}>Change State Variable</button>
        <button onClick={setCount(username+1)}>Change State Variable</button>
        <button onClick={setCount(password+1)}>Change State Variable</button>
         */}
    </div>
    )
}

export default Counter;