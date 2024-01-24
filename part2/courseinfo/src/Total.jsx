function Total({ parts }) {
  const total = parts.reduce((acc, obj) => {
    return acc + obj.exercises;
  }, 0);

  return <h4>Total of exercises {total}</h4>;
}

export default Total;
