import { useState, useEffect } from 'react'
import axios from 'axios'
import { Filter } from './Filter.jsx'
import { PersonForm } from './PersonForm.jsx'
import { Persons } from './Persons.jsx'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personSearch, setPersonSearch] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
      axios
        .post('http://localhost:3001/persons', personObject)
        .then(response => {
          console.log(response)
    })
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
      <Persons personsToShow={personsToShow} setPersons={setPersons} />
    </div>
  )
}

export default App