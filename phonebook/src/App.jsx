import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', 
      id: 1,
      number: 123
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personSearch, setPersonSearch] = useState('')

  const personsToShow = personSearch
    ? persons.filter(person =>
        person.name.toLowerCase().includes(personSearch.toLowerCase())
      )
    : persons

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) =>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setPersonSearch(event.target.value)
  }

  const addName = (event) =>{
    event.preventDefault()
    
    if (persons.some(person => person.name === newName)){
      alert(newName + ' is already on phonebook')
    }  
    else {
      const personObject ={
        name: newName,
        id: persons.length + 1,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={personSearch} onChange={handleSearch} />
      </div>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {personsToShow.map(person => (
          <p key={person.id}>{person.name} {person.number}</p>
        ))}
      </div>
    </div>
  )
}

export default App