const Header = ( { course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  )
};

const Part = ( { part, exercise }) => {
  return (
    <>
      <p>{part} {exercise}</p>
    </>
  )
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part => { 
        return <Part key={part.id} part={part.name} exercise={part.exercises} />
      })}
    </>
  )
};

const Total = ({ parts }) => {
  return (
    <>
      <p className="total">
        Total num of exercises {parts.reduce((sum, curr) => sum + curr.exercises, 0)}
      </p>
    </>
  )
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};


const App = () => {

  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React", 
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data", 
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component", 
        exercises: 14,
        id: 3
      },
      {
        name: "Redux", 
        exercises: 11,
        id: 4
      },
    ]
  };

  return (
    <Course key={course.id} course={course} />
  );
};

export default App;