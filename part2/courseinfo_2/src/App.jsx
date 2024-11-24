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
      <Part 
        part={parts[0].name} exercises={parts[0].exercises}
      />
      <Part 
        part={parts[1].name} exercises={parts[1].exercises}
      />
      <Part 
        part={parts[2].name} exercises={parts[2].exercises}
      />
    </div>
  )
};

const Total = ({ parts }) => {
  return (
    <p>Number of exercises {
      parts[0].exercises + parts[1].exercises + parts[2].exercises}
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
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
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