import Student from "./Students.jsx"

function App() {

  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Ayoub" age={52} isStudent={false}/>
      <Student name="Mehdi" age={28} isStudent={false}/>
      <Student name="Omar" age={21} isStudent={true}/>
      <Student name='Lary'/>
    </>
  )
}

export default App
