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

const Content = (props) => {
  return (
    <div>
      <Part 
        part={props.name1} exercises={props.ex1}
      />
      <Part 
        part={props.name2} exercises={props.ex2}
      />
      <Part 
        part={props.name3} exercises={props.ex3}
      />
    </div>
  )
};

const Total = ({ total }) => {
  return (
    <p>Number of exercises {total}</p>
  )
};


const App = () => {
  const course = "Half Stack application development";

  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ];


  return (
    <div>
      <Header course={course} />
      <Content 
        name1={parts[0].name} ex1={parts[0].exercises}
        name2={parts[1].name} ex2={parts[1].exercises}
        name3={parts[2].name} ex3={parts[2].exercises}
      />
      <Total 
        total={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      />
      
    </div>
  );
};

export default App;