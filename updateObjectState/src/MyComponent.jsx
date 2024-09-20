import React, {useState} from 'react';

function MyComponent() {
    let [car, setCar] = useState({year: 2024,
                                make: "Ford",
                                model: "Mustang"});

    function changeYear(e) {
        setCar(c => ({...c, year: e.target.value}));
    }
    function changeMake(e) {
        setCar(c => ({...c, make:e.target.value}));
    }
    function changeModel(e) {
        setCar(c => ({...c, model:e.target.value}));
    }
    return (
      <>
        <div>
            <p>Your favorite Car is : {car.year} {car.make}, {car.model}</p>
            <input type="number" value={car.year} onChange={changeYear}/>
            <input type="text" value={car.make} onChange={changeMake}/>
            <input type="text" value={car.model} onChange={changeModel}/>
        </div>
      </>
    );
  }
  
  export default MyComponent
  