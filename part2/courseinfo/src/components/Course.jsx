const Header = ( { course }) => <h1>{course}</h1>;

const Part = ( { part, exercise }) => <p>{part} {exercise}</p>;

const Content = ({ parts }) => 
    parts.map(part => <Part key={part.id} part={part.name} exercise={part.exercises} />);

const Total = ({ parts }) =>
    <p className="total">
      Total num of exercises {parts.reduce((sum, curr) => sum + curr.exercises, 0)}
    </p>;

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;