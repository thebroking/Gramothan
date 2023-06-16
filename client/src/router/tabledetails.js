import React from 'react';

const Table = ({ data }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Activity Code</th>
            <th>Activity Name</th>
            <th>Activity Cost</th>
            <th>Activity Output</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.column1}</td>
              <td>{item.column2}</td>
              <td>{item.column3}</td>
              <td>{item.column4}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

export default Table;