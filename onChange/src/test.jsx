import React, {useState} from "react";

function MyComponent() {

  let [name, setName] = useState("");
  function handleNameChange(e){
    setName(e.target.value);
  }

  let [quantity, setQuantity] = useState(0);
    function handleQuantityChange(e){
      setQuantity(e.target.value);
  }

  let [Comment, setComment] = useState("");
    function handleCommentChange(e){
      setComment(e.target.value);
  }

  let [Paiement, setPaiement] = useState("");
    function handlePaiementChange(e){
      setPaiement(e.target.value);
  }

  let [Radio, setRadio] = useState("");
    function handleRadioChange(e){
      setRadio(e.target.value);
  }

    return (
      <>
        <div>
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
            <input type="number" value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity: {quantity}</p>
            <textarea type="text" value={Comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"/>
            <p>Comment: {Comment}</p>
            <select value={Paiement}onChange={handlePaiementChange}>
                <option value="">Select an option</option>
                <option value="credit">credit</option>
                <option value="visa">visa</option>
                <option value="btc">btc</option>
            </select>
            <p>Paiement: {Paiement}</p>
            <label>
            <input type="radio" value="Pick Up" checked={Radio === "Pick Up"} onChange={handleRadioChange}/>
                Pick Up
            </label>
            <label>
            <input type="radio" value="Delivery" checked={Radio === "Delivery"} onChange={handleRadioChange}/>cod
                Delivery
            </label>
            <p>method: {Radio}</p>
        </div>
      </>
    );
  }
  
export default MyComponent
  