import List from "./List.jsx"

function App() {
  const fruits = [{id: 1,name: "apple", calories: 95}, 
    {id: 2,name: "orange", calories: 10}, 
    {id: 3,name: "banana", calories: 50}, 
    {id: 4,name: "pineapple", calories: 554}];

  const vegetables = [{id: 6,name: "potatoes", calories: 95}, 
      {id: 7,name: "grg", calories: 10}, 
      {id: 8,name: "banrggrana", calories: 50}, 
      {id: 9,name: "pinggrgreapple", calories: 554},
      {id: 10,name: "pinggergergrgreapple", calories: 54},
      {id: 11,name: "gerg", calories: 55414}];
  
  const empty = [];
  return (
    // short circuiting condition + &&
    <> 
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
      {empty.length > 0 && <List items={empty} category="Empty"/>}
    </>
  )
}

export default App
