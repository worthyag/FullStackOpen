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

  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  }
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  }
  const part3 = {
    name: "State of a component",
    exercises: 14
  }


  return (
    <div>
      <Header course={course} />
      <Content 
        name1={part1.name} ex1={part1.exercises}
        name2={part2.name} ex2={part2.exercises}
        name3={part3.name} ex3={part3.exercises}
      />
      <Total 
        total={part1.exercises + part2.exercises + part3.exercises}
      />
      
    </div>
  );
};

export default App;