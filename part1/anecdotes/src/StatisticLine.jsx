function StatisticLine({ text, value }) {
  return (
    <tr>
      <th align="left">{text}</th>
      <td>{value}</td>
    </tr>
  );
}

export default StatisticLine;
