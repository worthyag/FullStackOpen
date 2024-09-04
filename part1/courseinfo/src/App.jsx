const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
};

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercise}</p>
    </>
  )
};

const Content = (props) => {
  return (
    <>
      <Part part={props.p1} exercise={props.e1} />
      <Part part={props.p2} exercise={props.e2} />
      <Part part={props.p3} exercise={props.e3} />
    </>
  )
};

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
    </>
  )
};


const App = () => {
  const course = "Half Stack application development";
  const info = [
    {part: "Fundamentals of React", exercises: 10},
    {part: "Using props to pass data", exercises: 7},
    {part: "State of a component", exercises: 14},
  ];

  return (
    <div>
      <Header course={course} />
      <Content p1={info[0].part} e1={info[0].exercises} 
                p2={info[1].part} e2={info[1].exercises} 
                p3={info[2].part} e3={info[2].exercises} />
      <Total e1={info[0].exercises} e2={info[1].exercises} e3={info[2].exercises} />
    </div>
  );
};

export default App;