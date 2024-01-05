import Part from "./Part";

function Content({ parts }) {
  return (
    <>
      {parts.map((el) => (
        <Part part={el.name} exercise={el.exercises} key={el.name} />
      ))}
    </>
  );
}

export default Content;
