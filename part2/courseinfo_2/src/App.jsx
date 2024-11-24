const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
};

const Part = ({ part, exercises }) => {
  return (
    <p>
        {part} {exercises}
    </p>
  )
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(
        part => <Part key={part.id} part={part.name} exercises={part.exercises} />
      )}
    </div>
  )
};

const Total = ({ parts }) => {
  return (
    <p className="sum">
      Number of exercises {parts.reduce((total, part) => total + part.exercises, 0)}
    </p>
  )
};

const Course = ({ course }) =>{
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  };


  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;