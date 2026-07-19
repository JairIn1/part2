import personService from './services/persons'

const Persons = (props) => {
  const handleDelete = (person) => {
    const confirmed = window.confirm(`Delete ${person.name}?`)

    if (!confirmed) {
      return
    }

    personService
      .remove(person.id)
      .then(() => {
        props.setPersons(currentPersons =>
          currentPersons.filter(currentPerson => currentPerson.id !== person.id)
        )
      })
  }

  return (
    <div>
      {props.personsToShow.map(person => (
        <div key={person.id}>
          <p>{person.name} {person.number}</p>
          <button onClick={() => handleDelete(person)}>delete</button>
        </div>
      ))}
    </div>
  )
}

export { Persons }