import React, {useState} from 'react';

function MyComponent() {
    let [name, setName] = useState("Ayoub");
    let [age, setAge] = useState(18);
    let [isEmployed, isEmploy] = useState(false);

    const updateName = () => {
      setName("SPongi");
    }
    const updateAge = () => {
      setAge(++age);
    }
    const Employed = () => {
      isEmploy(!isEmployed);
    }
    return (
      <>
        <div>
          <p>Name : {name}</p>
          <button onClick={updateName}>Set Name</button>
          <p>Age : {age}</p>
          <button onClick={updateAge}>Increment Age</button>
          <p>is Employed : {isEmployed ? "Yes" : "No"}</p>
          <button onClick={Employed}>Toggle Status</button>
        </div>
      </>
    )
  }
  
  export default MyComponent