
const Filter = (props) =>{
  return(
    <div>
      filter shown with <input value={props.personSearch} onChange={props.handleSearch} />
    </div>
  )
}

export { Filter }