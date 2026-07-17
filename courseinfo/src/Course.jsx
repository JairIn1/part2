
const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Content = (props) => (
  <div>
    {props.parts.map((part) => (<Part key={part.id} part={part}/>))}
  </div>
)

const Total = (props) => <p>Number of exercises {props.total}</p>

const Course = (props) => {
  const total = props.course.parts.reduce((sum, part) => sum + part.exercises,0)

  return(
  <div>
    <Header course={props.course.name}/>
    <Content parts={props.course.parts}/>
    <Total total={total}/>
  </div>
  )
}

const Courses = (props) => {
  return(
    <div>
      {props.courses.map((course)=>(<Course key={course.id} course={course}/>))}
    </div>
  )
}

export { Courses }