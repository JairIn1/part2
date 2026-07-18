import { useState } from 'react'
import { Filter } from './Filter.jsx'
import { PersonForm } from './PersonForm.jsx'
import { Persons } from './Persons.jsx'

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

  const personsToShow = personSearch
    ? persons.filter(person =>
        person.name.toLowerCase().includes(personSearch.toLowerCase())
      )
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter personSearch={personSearch} handleSearch={handleSearch}/>
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber}
      handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App